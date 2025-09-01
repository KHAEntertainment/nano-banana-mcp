# 🍌 Nano Banana MCP

> **Unleash the power of Google Gemini 2.5 Flash image generation in your AI workflows!**

Transform text into stunning visuals, edit images with natural language, and compose multiple images seamlessly using Google's cutting-edge "Nano Banana" model - all through the Model Context Protocol (MCP).

## ✨ What is Nano Banana?

Nano Banana is Google's codename for **Gemini 2.5 Flash with image generation capabilities**. This revolutionary model can:

- 🎨 **Generate images from text** with incredible detail and accuracy
- ✏️ **Edit existing images** using natural language instructions
- 🔄 **Compose multiple images** into cohesive masterpieces
- 🎯 **Render high-fidelity text** directly in images
- 🔧 **Iteratively refine** images through multiple improvement cycles

## 🚀 Features

### Core Capabilities
- **Text-to-Image Generation** - Create stunning visuals from descriptive prompts
- **Image Editing** - Modify existing images with conversational commands
- **Multi-Image Composition** - Blend up to 3 images with intelligent composition
- **Iterative Refinement** - Progressively improve images through multiple passes
- **Text Rendering** - Generate images with crisp, readable text elements

### Power User Features
- **Pixel-Perfect Sizing** - Specify exact dimensions (width × height)
- **Custom Output Paths** - Save images wherever you need them
- **MCP Protocol** - Seamless integration with Claude Desktop and other MCP clients
- **Error Handling** - Robust error reporting and recovery
- **TypeScript Support** - Full type safety and IntelliSense

## 📸 Sample Gallery

Here's what nano-banana-mcp can create for you:

### 🌅 Landscape Photography
**Prompt**: *"A breathtaking mountain landscape at golden hour, with misty valleys, snow-capped peaks, and dramatic clouds painted in warm orange and pink hues. Photorealistic, high detail, professional landscape photography style."*
- **Size**: 1024×768px
- **Style**: Photorealistic landscape photography
- [View prompt details →](samples/sample-prompts.md#-landscape-generation)

### 🏢 Architectural Visualization
**Prompt**: *"Modern glass office building with sleek architecture, reflective surfaces, surrounded by urban landscape. Architectural visualization style, clean lines, professional rendering, daylight with dramatic shadows."*
- **Size**: 1200×900px
- **Style**: Professional architectural rendering
- [View prompt details →](samples/sample-prompts.md#-architectural-visualization)

### 🎯 Logo Design & Branding
**Text**: `NANO BANANA`
**Style**: *"Modern tech company logo with sleek typography, gradient effects, and futuristic design elements"*
- **Size**: 800×400px
- **Colors**: Dark blue background (#0F172A) with golden yellow text (#F59E0B)
- [View prompt details →](samples/sample-prompts.md#-logo-design-with-text)

### 🎪 Event Banners
**Text**: 
```
AI INNOVATION SUMMIT 2024
Join the Future of Technology
```
**Style**: *"Professional conference banner with modern gradient background, clean typography, and tech-inspired design elements"*
- **Size**: 1920×1080px (Full HD)
- **Perfect for presentations and events**
- [View prompt details →](samples/sample-prompts.md#-event-banner)

### 🚀 Digital Art & Concept Design
**Prompt**: *"Futuristic cyberpunk cityscape at night with neon lights, flying cars, and towering skyscrapers. Digital art style, vibrant colors, atmospheric lighting, concept art quality."*
- **Size**: 1600×900px
- **Style**: Digital concept art
- [View prompt details →](samples/sample-prompts.md#-concept-art)

### 📱 Product Photography
**Prompt**: *"Clean product photography of a sleek smartphone on a white background, professional lighting, minimalist composition, commercial photography style, high resolution."*
- **Size**: 800×1000px
- **Style**: Commercial product photography
- [View prompt details →](samples/sample-prompts.md#-product-photography)

### 🎨 Generate Your Own Samples
Ready to create your own masterpieces? Use our sample generator:

```bash
# Set your API key
export GOOGLE_AI_API_KEY="your-key-here"

# Install nano-banana-mcp
npm install -g nanobananamcp

# Generate all samples
node generate-samples.js
```

🔗 **[View all sample prompts & parameters →](samples/sample-prompts.md)**

## 🛠 Installation

### Quick Start (Recommended)
```bash
# Run directly without installation
npx nanobananamcp
```

### Global Installation  
```bash
# Install globally for permanent access
npm install -g nanobananamcp
```

### Development Setup
```bash
# Clone and build from source
git clone https://github.com/KHAEntertainment/nano-banana-mcp.git
cd nano-banana-mcp
npm install
npm run build
```

## ⚙️ Setup

### 1. Get Your Google AI API Key
1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Create a new API key
3. Copy your key securely

### 2. Configure Environment
```bash
export GOOGLE_AI_API_KEY="your-api-key-here"
```

Or create a `.env` file:
```env
GOOGLE_AI_API_KEY=your-api-key-here
```

### 3. MCP Client Configuration

#### Claude Desktop
Add to your Claude Desktop MCP settings:

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

#### Other MCP Clients
The server uses stdio transport and follows MCP protocol standards, making it compatible with any MCP client.

## 🎯 Usage Guide

### 🎨 Generate Images
Create stunning visuals from text descriptions:

```javascript
// Basic generation
{
  "name": "generate_image",
  "arguments": {
    "prompt": "A serene mountain landscape at sunrise with misty valleys",
    "width": 1024,
    "height": 768,
    "outputPath": "./images/mountain-sunrise.png"
  }
}
```

**Perfect for:**
- Concept art and illustrations
- Marketing visuals  
- Social media content
- Presentation graphics
- Creative brainstorming

### ✏️ Edit Existing Images
Transform images with natural language:

```javascript
// Image editing
{
  "name": "edit_image", 
  "arguments": {
    "prompt": "Add a rainbow over the mountains and make the sky more dramatic",
    "imagePath": "./images/mountain-sunrise.png",
    "outputPath": "./images/mountain-rainbow.png"
  }
}
```

**Great for:**
- Photo enhancement
- Style modifications
- Object addition/removal
- Color adjustments
- Creative edits

### 🔄 Compose Multiple Images
Blend images intelligently:

```javascript
// Multi-image composition
{
  "name": "compose_images",
  "arguments": {
    "prompt": "Combine these images into a cohesive travel brochure layout",
    "imagePaths": ["./img1.jpg", "./img2.jpg", "./img3.jpg"],
    "width": 1200,
    "height": 800
  }
}
```

**Ideal for:**
- Collages and mood boards
- Marketing materials
- Portfolio layouts
- Comparison visuals
- Story boards

### 🎯 Render Text in Images
Create images with high-quality text:

```javascript
// Text rendering
{
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
```

**Perfect for:**
- Event banners
- Social media graphics  
- Logo design
- Signage
- Presentations

### 🔧 Iterative Refinement
Progressively improve images:

```javascript
// Multi-pass refinement
{
  "name": "refine_image",
  "arguments": {
    "prompt": "Enhance lighting, increase detail, and improve overall composition",
    "imagePath": "./draft.png",
    "iterations": 3,
    "outputPath": "./final.png"
  }
}
```

**Excellent for:**
- Polishing artwork
- Professional photography
- Design iterations
- Quality enhancement
- Creative exploration

## 🔧 Advanced Configuration

### Custom Sizing
All tools support precise dimension control:
```javascript
{
  "width": 1024,    // Exact pixel width
  "height": 768,    // Exact pixel height
}
```

### Output Management
Control where your images are saved:
```javascript
{
  "outputPath": "/path/to/your/image.png"  // Custom save location
}
```

### Error Handling
The server provides detailed error messages for:
- Invalid API keys
- Missing files
- Network issues
- API limitations

## 🛡️ Best Practices

### Prompting Tips
- **Be descriptive** - More detail = better results
- **Specify style** - Include artistic style preferences
- **Mention lighting** - Describe desired lighting conditions
- **Include composition** - Specify framing and perspective

### Performance Optimization
- **Batch operations** - Group related image tasks
- **Reasonable sizes** - Balance quality with generation time
- **Error handling** - Always check for API errors
- **Rate limiting** - Respect Google's API limits

### Security
- **Protect API keys** - Never commit keys to repositories
- **Use environment variables** - Keep credentials secure
- **Monitor usage** - Track API consumption
- **Validate inputs** - Sanitize file paths and prompts

## 🔗 Integration Examples

### With Claude Desktop
```markdown
Can you generate a logo for my coffee shop called "Morning Brew" 
with a cozy, rustic aesthetic?
```

### With Custom Scripts
```javascript
import { spawn } from 'child_process';

const server = spawn('nanobananamcp', [], { stdio: 'pipe' });
// Send MCP protocol messages...
```

### With Automation Workflows
Perfect for automated content generation, social media posting, and design workflows.

## 🐛 Troubleshooting

### Common Issues

**Server won't start**
- Check your `GOOGLE_AI_API_KEY` environment variable
- Verify Node.js version (>= 18 required)

**Image generation fails**
- Validate your API key has image generation permissions
- Check prompt content for policy violations
- Verify file paths exist and are writable

**MCP connection issues**
- Ensure stdio transport is configured correctly
- Check Claude Desktop MCP settings format
- Verify server binary is in PATH

### Getting Help
- 📖 Check the [Google AI documentation](https://ai.google.dev/gemini-api/docs/image-generation)
- 🐛 Report bugs on [GitHub Issues](https://github.com/KHAEntertainment/nano-banana-mcp/issues)
- 💬 Join discussions in the repository

## 🤝 Contributing

We welcome contributions! Whether it's:
- 🐛 Bug fixes
- ✨ New features  
- 📖 Documentation improvements
- 🎨 Example images
- 🧪 Test cases

See our contributing guidelines for more details.

## 📋 Changelog

### v1.0.0
- 🎉 Initial release
- ✅ Five core image generation tools
- ✅ MCP protocol support
- ✅ TypeScript implementation
- ✅ NPX compatibility
- ✅ Comprehensive error handling

## 📜 License

MIT License - feel free to use in personal and commercial projects!

## 🙏 Acknowledgments

- **Google AI** for the incredible Gemini 2.5 Flash model
- **Anthropic** for the Model Context Protocol
- **The MCP Community** for building the ecosystem

---

<div align="center">

**Ready to transform your creative workflow with AI?**

[Get Started](#-installation) • [View Sample Gallery](#-sample-gallery) • [Join Community](https://github.com/KHAEntertainment/nano-banana-mcp)

*Built with ❤️ for the AI creative community*

</div>