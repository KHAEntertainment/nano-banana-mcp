#!/usr/bin/env node

/**
 * Sample Generation Script for nano-banana-mcp
 * 
 * This script demonstrates how to generate various types of images
 * using the nano-banana-mcp tools. Run this to create samples for
 * the repository.
 * 
 * Prerequisites:
 * - Set GOOGLE_AI_API_KEY environment variable
 * - Run: npm install -g nanobananamcp
 */

import { spawn } from 'child_process';
import { mkdir } from 'fs/promises';
import path from 'path';

const samples = [
  {
    name: 'landscape-sunset',
    tool: 'generate_image',
    params: {
      prompt: 'A breathtaking mountain landscape at golden hour, with misty valleys, snow-capped peaks, and dramatic clouds painted in warm orange and pink hues. Photorealistic, high detail, professional landscape photography style.',
      width: 1024,
      height: 768,
      outputPath: './samples/landscape-sunset.png'
    },
    description: 'Photorealistic landscape generation'
  },
  {
    name: 'tech-logo',
    tool: 'render_text_image',
    params: {
      text: 'NANO BANANA',
      style: 'Modern tech company logo with sleek typography, gradient effects, and futuristic design elements',
      backgroundColor: '#0F172A',
      textColor: '#F59E0B',
      width: 800,
      height: 400,
      outputPath: './samples/tech-logo.png'
    },
    description: 'Logo design with custom text rendering'
  },
  {
    name: 'architectural-render',
    tool: 'generate_image',
    params: {
      prompt: 'Modern glass office building with sleek architecture, reflective surfaces, surrounded by urban landscape. Architectural visualization style, clean lines, professional rendering, daylight with dramatic shadows.',
      width: 1200,
      height: 900,
      outputPath: './samples/architectural-render.png'
    },
    description: 'Architectural visualization from text'
  },
  {
    name: 'event-banner',
    tool: 'render_text_image',
    params: {
      text: 'AI INNOVATION SUMMIT 2024\\nJoin the Future of Technology',
      style: 'Professional conference banner with modern gradient background, clean typography, and tech-inspired design elements',
      backgroundColor: 'linear-gradient from #1E3A8A to #3B82F6',
      textColor: '#FFFFFF',
      width: 1920,
      height: 1080,
      outputPath: './samples/event-banner.png'
    },
    description: 'Conference banner with multi-line text'
  },
  {
    name: 'concept-art',
    tool: 'generate_image',
    params: {
      prompt: 'Futuristic cyberpunk cityscape at night with neon lights, flying cars, and towering skyscrapers. Digital art style, vibrant colors, atmospheric lighting, concept art quality.',
      width: 1600,
      height: 900,
      outputPath: './samples/concept-art.png'
    },
    description: 'Digital concept art generation'
  },
  {
    name: 'product-mockup',
    tool: 'generate_image',
    params: {
      prompt: 'Clean product photography of a sleek smartphone on a white background, professional lighting, minimalist composition, commercial photography style, high resolution.',
      width: 800,
      height: 1000,
      outputPath: './samples/product-mockup.png'
    },
    description: 'Product photography style image'
  }
];

async function generateSample(sample) {
  return new Promise((resolve, reject) => {
    console.log(`🎨 Generating ${sample.name}...`);
    
    const server = spawn('nanobananamcp', [], {
      stdio: ['pipe', 'pipe', 'pipe']
    });

    let output = '';
    let hasResponse = false;

    server.stdout.on('data', (data) => {
      output += data.toString();
      try {
        const response = JSON.parse(data.toString());
        if (response.result || response.error) {
          hasResponse = true;
          if (response.error) {
            reject(new Error(`API Error: ${response.error}`));
          } else {
            console.log(`✅ Generated ${sample.name}`);
            resolve(response);
          }
        }
      } catch (e) {
        // Continue if not valid JSON
      }
    });

    server.stderr.on('data', (data) => {
      console.error(`Error generating ${sample.name}:`, data.toString());
    });

    server.on('close', (code) => {
      if (!hasResponse) {
        if (code === 0) {
          console.log(`✅ Generated ${sample.name}`);
          resolve({ success: true });
        } else {
          reject(new Error(`Process exited with code ${code}`));
        }
      }
    });

    // Send the MCP message
    const message = {
      jsonrpc: '2.0',
      id: Date.now(),
      method: 'tools/call',
      params: {
        name: sample.tool,
        arguments: sample.params
      }
    };

    server.stdin.write(JSON.stringify(message) + '\\n');
    server.stdin.end();
  });
}

async function main() {
  console.log('🍌 Nano Banana Sample Generator');
  console.log('================================\\n');

  // Check API key
  if (!process.env.GOOGLE_AI_API_KEY) {
    console.error('❌ GOOGLE_AI_API_KEY environment variable is required');
    process.exit(1);
  }

  // Create samples directory
  try {
    await mkdir('./samples', { recursive: true });
    console.log('📁 Created samples directory\\n');
  } catch (error) {
    if (error.code !== 'EEXIST') {
      console.error('❌ Failed to create samples directory:', error);
      process.exit(1);
    }
  }

  // Generate each sample
  for (const sample of samples) {
    try {
      await generateSample(sample);
      console.log(`   ${sample.description}\\n`);
    } catch (error) {
      console.error(`❌ Failed to generate ${sample.name}:`, error.message);
      console.log('   Continuing with next sample...\\n');
    }
  }

  console.log('🎉 Sample generation complete!');
  console.log('\\nGenerated samples:');
  samples.forEach(sample => {
    console.log(`   - ${sample.params.outputPath}`);
  });
  console.log('\\nYou can now view the samples in the ./samples directory');
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}