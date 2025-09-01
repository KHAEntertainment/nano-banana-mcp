# 🔧 Technical Documentation

This document contains technical details for developers implementing nano-banana-mcp directly or building integrations.

## MCP Protocol Examples

All tools communicate via JSON-RPC over the Model Context Protocol. Here are the raw MCP calls:

### 🎨 Generate Images

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "generate_image",
    "arguments": {
      "prompt": "A serene mountain landscape at sunrise with misty valleys",
      "width": 1024,
      "height": 768,
      "outputPath": "./images/mountain-sunrise.png"
    }
  }
}
```

### ✏️ Edit Existing Images

```json
{
  "jsonrpc": "2.0", 
  "id": 2,
  "method": "tools/call",
  "params": {
    "name": "edit_image",
    "arguments": {
      "prompt": "Add a rainbow over the mountains and make the sky more dramatic",
      "imagePath": "./images/mountain-sunrise.png",
      "outputPath": "./images/mountain-rainbow.png"
    }
  }
}
```

### 🔄 Compose Multiple Images

```json
{
  "jsonrpc": "2.0",
  "id": 3, 
  "method": "tools/call",
  "params": {
    "name": "compose_images",
    "arguments": {
      "prompt": "Combine these images into a cohesive travel brochure layout",
      "imagePaths": ["./img1.jpg", "./img2.jpg", "./img3.jpg"],
      "width": 1200,
      "height": 800
    }
  }
}
```

### 🎯 Render Text in Images

```json
{
  "jsonrpc": "2.0",
  "id": 4,
  "method": "tools/call", 
  "params": {
    "name": "render_text_image",
    "arguments": {
      "text": "Welcome to Our Annual Conference 2024",
      "style": "modern corporate design with gradients",
      "backgroundColor": "#1a365d",
      "textColor": "#ffffff", 
      "width": 1920,
      "height": 1080
    }
  }
}
```

### 🔧 Iterative Refinement

```json
{
  "jsonrpc": "2.0",
  "id": 5,
  "method": "tools/call",
  "params": {
    "name": "refine_image", 
    "arguments": {
      "prompt": "Enhance lighting, increase detail, and improve overall composition",
      "imagePath": "./draft.png",
      "iterations": 3,
      "outputPath": "./final.png"
    }
  }
}
```

## Tool Schemas

### generate_image
- **prompt** (required): Text description of image to generate
- **width** (optional): Image width in pixels
- **height** (optional): Image height in pixels  
- **outputPath** (optional): Custom save location

### edit_image
- **prompt** (required): Text describing desired edits
- **imagePath** (required): Path to image file to edit
- **width** (optional): Output image width in pixels
- **height** (optional): Output image height in pixels
- **outputPath** (optional): Custom save location

### compose_images  
- **prompt** (required): Text describing composition
- **imagePaths** (required): Array of image file paths (max 3)
- **width** (optional): Output image width in pixels
- **height** (optional): Output image height in pixels
- **outputPath** (optional): Custom save location

### refine_image
- **prompt** (required): Text describing improvements
- **imagePath** (required): Path to image file to refine
- **iterations** (optional): Number of refinement passes (default: 1)
- **width** (optional): Output image width in pixels
- **height** (optional): Output image height in pixels
- **outputPath** (optional): Custom save location

### render_text_image
- **text** (required): Text to render in image
- **style** (optional): Visual style description
- **backgroundColor** (optional): Background color (hex/name)
- **textColor** (optional): Text color (hex/name)
- **width** (optional): Image width in pixels
- **height** (optional): Image height in pixels
- **outputPath** (optional): Custom save location

## Error Handling

All tools return structured responses:

### Success Response
```json
{
  "result": {
    "content": [
      {
        "type": "text",
        "text": "Image generated successfully and saved to: ./output.png"
      }
    ]
  },
  "jsonrpc": "2.0",
  "id": 1
}
```

### Error Response
```json
{
  "result": {
    "content": [
      {
        "type": "text", 
        "text": "Error: Invalid API key or insufficient quota"
      }
    ],
    "isError": true
  },
  "jsonrpc": "2.0",
  "id": 1
}
```

## Integration Examples

### Node.js Direct Integration

```javascript
import { spawn } from 'child_process';

const server = spawn('npx', ['nanobananamcp'], { 
  stdio: 'pipe',
  env: { ...process.env, GOOGLE_AI_API_KEY: 'your-key' }
});

// Send MCP message
const message = {
  jsonrpc: '2.0',
  id: 1,
  method: 'tools/call',
  params: {
    name: 'generate_image',
    arguments: {
      prompt: 'A beautiful sunset',
      width: 512,
      height: 512
    }
  }
};

server.stdin.write(JSON.stringify(message) + '\n');

server.stdout.on('data', (data) => {
  const response = JSON.parse(data.toString());
  console.log('Generated:', response.result.content[0].text);
});
```

### Python Integration

```python
import subprocess
import json

# Start MCP server
process = subprocess.Popen(
    ['npx', 'nanobananamcp'],
    stdin=subprocess.PIPE,
    stdout=subprocess.PIPE,
    stderr=subprocess.PIPE,
    text=True,
    env={'GOOGLE_AI_API_KEY': 'your-key'}
)

# Send message
message = {
    "jsonrpc": "2.0", 
    "id": 1,
    "method": "tools/call",
    "params": {
        "name": "generate_image",
        "arguments": {
            "prompt": "A beautiful sunset",
            "width": 512,
            "height": 512
        }
    }
}

process.stdin.write(json.dumps(message) + '\n')
process.stdin.flush()

# Read response
response = json.loads(process.stdout.readline())
print(f"Generated: {response['result']['content'][0]['text']}")
```

## Environment Variables

- **GOOGLE_AI_API_KEY** (required): Your Google AI API key
- **NODE_ENV** (optional): Set to 'development' for debug output

## Rate Limits & Quotas

- Follow Google AI's rate limiting guidelines
- Default timeout: 30 seconds per generation
- Large images may take longer to generate
- Consider implementing exponential backoff for retries

## Security Best Practices

- Never log API keys
- Validate file paths to prevent directory traversal
- Sanitize prompts for content policy compliance
- Use environment variables for credentials
- Implement proper error handling and logging