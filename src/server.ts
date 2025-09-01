import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { 
  CallToolRequestSchema, 
  ListToolsRequestSchema,
  InitializeRequestSchema
} from '@modelcontextprotocol/sdk/types.js';
import { GeminiImageClient } from './gemini-client.js';
import {
  GenerateImageParams,
  EditImageParams,
  ComposeImagesParams,
  RefineImageParams,
  RenderTextImageParams
} from './types.js';

export class NanoBananaMCPServer {
  private server: Server;
  private geminiClient: GeminiImageClient;

  constructor() {
    this.server = new Server(
      {
        name: 'nanobananamcp',
        version: '1.0.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    const apiKey = process.env.GOOGLE_AI_API_KEY;
    if (!apiKey) {
      throw new Error('GOOGLE_AI_API_KEY environment variable is required');
    }

    this.geminiClient = new GeminiImageClient(apiKey);
    this.setupHandlers();
  }

  private setupHandlers(): void {
    this.server.setRequestHandler(InitializeRequestSchema, async () => ({
      protocolVersion: '2024-11-05',
      capabilities: {
        tools: {}
      },
      serverInfo: {
        name: 'nanobananamcp',
        version: '1.0.0'
      }
    }));

    this.server.setRequestHandler(ListToolsRequestSchema, async () => ({
      tools: [
        {
          name: 'generate_image',
          description: 'Generate an image from text prompt using Gemini 2.5',
          inputSchema: {
            type: 'object',
            properties: {
              prompt: {
                type: 'string',
                description: 'Text prompt describing the image to generate'
              },
              width: {
                type: 'number',
                description: 'Image width in pixels (optional)'
              },
              height: {
                type: 'number',
                description: 'Image height in pixels (optional)'
              },
              outputPath: {
                type: 'string',
                description: 'Path where to save the generated image (optional)'
              }
            },
            required: ['prompt']
          }
        },
        {
          name: 'edit_image',
          description: 'Edit an existing image using text prompts',
          inputSchema: {
            type: 'object',
            properties: {
              prompt: {
                type: 'string',
                description: 'Text prompt describing how to edit the image'
              },
              imagePath: {
                type: 'string',
                description: 'Path to the image file to edit'
              },
              width: {
                type: 'number',
                description: 'Output image width in pixels (optional)'
              },
              height: {
                type: 'number',
                description: 'Output image height in pixels (optional)'
              },
              outputPath: {
                type: 'string',
                description: 'Path where to save the edited image (optional)'
              }
            },
            required: ['prompt', 'imagePath']
          }
        },
        {
          name: 'compose_images',
          description: 'Combine multiple images into one using text prompts',
          inputSchema: {
            type: 'object',
            properties: {
              prompt: {
                type: 'string',
                description: 'Text prompt describing how to compose the images'
              },
              imagePaths: {
                type: 'array',
                items: { type: 'string' },
                description: 'Array of paths to image files to compose (max 3)'
              },
              width: {
                type: 'number',
                description: 'Output image width in pixels (optional)'
              },
              height: {
                type: 'number',
                description: 'Output image height in pixels (optional)'
              },
              outputPath: {
                type: 'string',
                description: 'Path where to save the composed image (optional)'
              }
            },
            required: ['prompt', 'imagePaths']
          }
        },
        {
          name: 'refine_image',
          description: 'Iteratively improve an image through multiple refinement steps',
          inputSchema: {
            type: 'object',
            properties: {
              prompt: {
                type: 'string',
                description: 'Text prompt describing the desired improvements'
              },
              imagePath: {
                type: 'string',
                description: 'Path to the image file to refine'
              },
              iterations: {
                type: 'number',
                description: 'Number of refinement iterations (default: 1)'
              },
              width: {
                type: 'number',
                description: 'Output image width in pixels (optional)'
              },
              height: {
                type: 'number',
                description: 'Output image height in pixels (optional)'
              },
              outputPath: {
                type: 'string',
                description: 'Path where to save the refined image (optional)'
              }
            },
            required: ['prompt', 'imagePath']
          }
        },
        {
          name: 'render_text_image',
          description: 'Generate images with high-fidelity text rendering',
          inputSchema: {
            type: 'object',
            properties: {
              text: {
                type: 'string',
                description: 'Text to render in the image'
              },
              style: {
                type: 'string',
                description: 'Style of the text/image (optional)'
              },
              backgroundColor: {
                type: 'string',
                description: 'Background color (optional)'
              },
              textColor: {
                type: 'string',
                description: 'Text color (optional)'
              },
              width: {
                type: 'number',
                description: 'Image width in pixels (optional)'
              },
              height: {
                type: 'number',
                description: 'Image height in pixels (optional)'
              },
              outputPath: {
                type: 'string',
                description: 'Path where to save the image (optional)'
              }
            },
            required: ['text']
          }
        }
      ]
    }));

    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      try {
        switch (name) {
          case 'generate_image':
            return await this.handleGenerateImage(args as unknown as GenerateImageParams);
          case 'edit_image':
            return await this.handleEditImage(args as unknown as EditImageParams);
          case 'compose_images':
            return await this.handleComposeImages(args as unknown as ComposeImagesParams);
          case 'refine_image':
            return await this.handleRefineImage(args as unknown as RefineImageParams);
          case 'render_text_image':
            return await this.handleRenderTextImage(args as unknown as RenderTextImageParams);
          default:
            throw new Error(`Unknown tool: ${name}`);
        }
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error: ${error instanceof Error ? error.message : String(error)}`
            }
          ],
          isError: true
        };
      }
    });
  }

  private async handleGenerateImage(args: GenerateImageParams) {
    const size = args.width && args.height ? { width: args.width, height: args.height } : undefined;
    const outputPath = await this.geminiClient.generateImage(args.prompt, size, args.outputPath);
    
    return {
      content: [
        {
          type: 'text',
          text: `Image generated successfully and saved to: ${outputPath}`
        }
      ]
    };
  }

  private async handleEditImage(args: EditImageParams) {
    const size = args.width && args.height ? { width: args.width, height: args.height } : undefined;
    const outputPath = await this.geminiClient.editImage(args.prompt, args.imagePath, size, args.outputPath);
    
    return {
      content: [
        {
          type: 'text',
          text: `Image edited successfully and saved to: ${outputPath}`
        }
      ]
    };
  }

  private async handleComposeImages(args: ComposeImagesParams) {
    const size = args.width && args.height ? { width: args.width, height: args.height } : undefined;
    const outputPath = await this.geminiClient.composeImages(args.prompt, args.imagePaths, size, args.outputPath);
    
    return {
      content: [
        {
          type: 'text',
          text: `Images composed successfully and saved to: ${outputPath}`
        }
      ]
    };
  }

  private async handleRefineImage(args: RefineImageParams) {
    const size = args.width && args.height ? { width: args.width, height: args.height } : undefined;
    const outputPath = await this.geminiClient.refineImage(
      args.prompt, 
      args.imagePath, 
      args.iterations || 1, 
      size, 
      args.outputPath
    );
    
    return {
      content: [
        {
          type: 'text',
          text: `Image refined successfully and saved to: ${outputPath}`
        }
      ]
    };
  }

  private async handleRenderTextImage(args: RenderTextImageParams) {
    const size = args.width && args.height ? { width: args.width, height: args.height } : undefined;
    const outputPath = await this.geminiClient.renderTextImage(
      args.text,
      args.style,
      args.backgroundColor,
      args.textColor,
      size,
      args.outputPath
    );
    
    return {
      content: [
        {
          type: 'text',
          text: `Text image rendered successfully and saved to: ${outputPath}`
        }
      ]
    };
  }

  async run(): Promise<void> {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
  }
}