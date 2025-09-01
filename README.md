# Nano Banana MCP

MCP server for Google Gemini 2.5 image generation (Nano Banana).

## Features

- Text-to-image generation
- Image editing with text prompts
- Multi-image composition
- Iterative image refinement
- High-fidelity text rendering in images
- Custom pixel sizing
- Output destination control

## Installation

```bash
# Install globally
npm install -g nanobananamcp

# Or run directly
npx nanobananamcp
```

## Setup

1. Get a Google AI API key from [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Set it as an environment variable:

```bash
export GOOGLE_AI_API_KEY="your-api-key-here"
```

## MCP Client Configuration

For Claude Desktop, add to your MCP settings:

```json
{
  "mcpServers": {
    "nanobananamcp": {
      "command": "nanobananamcp",
      "env": {
        "GOOGLE_AI_API_KEY": "your-api-key-here"
      }
    }
  }
}
```

## Usage

The server provides five main tools via stdio MCP protocol:
- `generate_image`: Basic text-to-image generation
- `edit_image`: Edit existing images with text prompts
- `compose_images`: Combine multiple images
- `refine_image`: Iteratively improve images
- `render_text_image`: Generate images with high-fidelity text

Each tool supports custom sizing and output destinations.