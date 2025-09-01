export interface ImageSize {
  width: number;
  height: number;
}

export interface GenerateImageParams {
  prompt: string;
  width?: number;
  height?: number;
  outputPath?: string;
}

export interface EditImageParams {
  prompt: string;
  imagePath: string;
  width?: number;
  height?: number;
  outputPath?: string;
}

export interface ComposeImagesParams {
  prompt: string;
  imagePaths: string[];
  width?: number;
  height?: number;
  outputPath?: string;
}

export interface RefineImageParams {
  prompt: string;
  imagePath: string;
  iterations?: number;
  width?: number;
  height?: number;
  outputPath?: string;
}

export interface RenderTextImageParams {
  text: string;
  style?: string;
  backgroundColor?: string;
  textColor?: string;
  width?: number;
  height?: number;
  outputPath?: string;
}

export interface GeminiResponse {
  candidates: Array<{
    content: {
      parts: Array<{
        inlineData?: {
          mimeType: string;
          data: string;
        };
        text?: string;
      }>;
    };
  }>;
}