import fetch from 'node-fetch';
import FormData from 'form-data';
import fs from 'fs-extra';
import path from 'path';
import { GeminiResponse, ImageSize } from './types.js';

export class GeminiImageClient {
  private apiKey: string;
  private baseUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image-preview:generateContent';

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async generateImage(prompt: string, size?: ImageSize, outputPath?: string): Promise<string> {
    const sizePrompt = size ? `Image should be ${size.width}x${size.height} pixels. ` : '';
    const fullPrompt = sizePrompt + prompt;

    const response = await this.callGeminiAPI({
      contents: [{
        parts: [{ text: fullPrompt }]
      }]
    });

    return this.saveImage(response, outputPath);
  }

  async editImage(prompt: string, imagePath: string, size?: ImageSize, outputPath?: string): Promise<string> {
    const imageData = await this.encodeImage(imagePath);
    const sizePrompt = size ? `Output image should be ${size.width}x${size.height} pixels. ` : '';
    const fullPrompt = sizePrompt + prompt;

    const response = await this.callGeminiAPI({
      contents: [{
        parts: [
          { text: fullPrompt },
          {
            inlineData: {
              mimeType: 'image/png',
              data: imageData
            }
          }
        ]
      }]
    });

    return this.saveImage(response, outputPath);
  }

  async composeImages(prompt: string, imagePaths: string[], size?: ImageSize, outputPath?: string): Promise<string> {
    const parts = [];
    const sizePrompt = size ? `Output image should be ${size.width}x${size.height} pixels. ` : '';
    const fullPrompt = sizePrompt + prompt;
    
    parts.push({ text: fullPrompt });

    for (const imagePath of imagePaths.slice(0, 3)) {
      const imageData = await this.encodeImage(imagePath);
      parts.push({
        inlineData: {
          mimeType: 'image/png',
          data: imageData
        }
      });
    }

    const response = await this.callGeminiAPI({
      contents: [{ parts }]
    });

    return this.saveImage(response, outputPath);
  }

  async refineImage(prompt: string, imagePath: string, iterations: number = 1, size?: ImageSize, outputPath?: string): Promise<string> {
    let currentImage = imagePath;
    let result: string;

    for (let i = 0; i < iterations; i++) {
      const refinementPrompt = `Refine and improve this image: ${prompt}`;
      result = await this.editImage(refinementPrompt, currentImage, size, i === iterations - 1 ? outputPath : undefined);
      currentImage = result;
    }

    return result!;
  }

  async renderTextImage(text: string, style?: string, backgroundColor?: string, textColor?: string, size?: ImageSize, outputPath?: string): Promise<string> {
    const sizePrompt = size ? `Image should be ${size.width}x${size.height} pixels. ` : '';
    const stylePrompt = style ? `Style: ${style}. ` : '';
    const colorPrompt = backgroundColor ? `Background color: ${backgroundColor}. ` : '';
    const textColorPrompt = textColor ? `Text color: ${textColor}. ` : '';
    
    const fullPrompt = `${sizePrompt}${stylePrompt}${colorPrompt}${textColorPrompt}Create a high-quality image with the following text rendered clearly and legibly: "${text}"`;

    const response = await this.callGeminiAPI({
      contents: [{
        parts: [{ text: fullPrompt }]
      }]
    });

    return this.saveImage(response, outputPath);
  }

  private async callGeminiAPI(payload: any): Promise<GeminiResponse> {
    const response = await fetch(`${this.baseUrl}?key=${this.apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Gemini API error: ${response.status} ${response.statusText} - ${errorText}`);
    }

    return response.json() as Promise<GeminiResponse>;
  }

  private async encodeImage(imagePath: string): Promise<string> {
    const imageBuffer = await fs.readFile(imagePath);
    return imageBuffer.toString('base64');
  }

  private async saveImage(response: GeminiResponse, outputPath?: string): Promise<string> {
    const candidate = response.candidates?.[0];
    if (!candidate?.content?.parts) {
      throw new Error('No image data in response');
    }

    const imagePart = candidate.content.parts.find(part => part.inlineData);
    if (!imagePart?.inlineData) {
      throw new Error('No image data found in response');
    }

    const imageBuffer = Buffer.from(imagePart.inlineData.data, 'base64');
    
    const finalPath = outputPath || path.join(process.cwd(), `generated-${Date.now()}.png`);
    await fs.ensureDir(path.dirname(finalPath));
    await fs.writeFile(finalPath, imageBuffer);
    
    return finalPath;
  }
}