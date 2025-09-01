# 🍌 Nano Banana MCP

> **Transform text into stunning images using Google's Gemini 2.5 Flash in Claude Desktop!**

Simply tell Claude what you want to create and watch your ideas come to life through Google's cutting-edge "Nano Banana" image generation model.

## ✨ What is Nano Banana?

Nano Banana is Google's codename for **Gemini 2.5 Flash with image generation capabilities**. With this MCP server, you can:

- 🎨 **Create images from text** - "Generate a sunset over mountains"
- ✏️ **Edit existing images** - "Add a rainbow to this landscape photo"
- 🔄 **Combine multiple images** - "Create a collage from these three photos"
- 🎯 **Make images with text** - "Design a logo that says 'Coffee Shop'"
- 🔧 **Improve images** - "Make this photo more professional looking"

## 📸 What You Can Create

### 🌅 Beautiful Landscapes
> *"Create a breathtaking mountain landscape at golden hour with misty valleys"*

### 🏢 Architectural Designs  
> *"Show me a modern glass office building with sleek architecture"*

### 🎯 Professional Logos
> *"Design a tech company logo that says 'NANO BANANA' in yellow on dark blue"*

### 🎪 Event Graphics
> *"Make a conference banner for 'AI Innovation Summit 2024'"*

### 🚀 Digital Art
> *"Create a futuristic cyberpunk cityscape with neon lights"*

### 📱 Product Images
> *"Show a sleek smartphone on a clean white background"*

## 🚀 Quick Start

### 1. Get Your Google AI API Key
1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Create a new API key (it's free!)
3. Copy your key

### 2. Add to Claude Desktop
Open your Claude Desktop settings and add:

```json
{
  "mcpServers": {
    "nanobananamcp": {
      "command": "npx",
      "args": ["nanobananamcp"],
      "env": {
        "GOOGLE_AI_API_KEY": "paste-your-api-key-here"
      }
    }
  }
}
```

### 3. Start Creating!
Just talk to Claude naturally:

> **You:** "Generate a cozy coffee shop interior with warm lighting"

> **You:** "Create a logo for my bakery called 'Sweet Dreams' in elegant script"

> **You:** "Make a social media post image about sustainability"

That's it! No code, no complex setup - just natural conversation.

## 💬 How to Use

### 🎨 Creating New Images
Simply describe what you want:
- *"Generate a peaceful forest scene in watercolor style"*
- *"Create a minimalist poster for a music festival"*
- *"Make a professional headshot photo"*
- *"Design a vintage-style travel poster for Paris"*

**Pro tip:** Be specific about style, colors, and mood for better results!

### ✏️ Editing Existing Images
Upload an image and ask Claude to modify it:
- *"Add more dramatic clouds to this landscape"*
- *"Make the colors more vibrant in this photo"* 
- *"Remove the background and make it white"*
- *"Turn this into a black and white artistic photo"*

### 🔄 Combining Images
Give Claude multiple images to work with:
- *"Create a before/after comparison with these two photos"*
- *"Make a travel brochure layout using these vacation pictures"*
- *"Combine these product shots into a catalog page"*

### 🎯 Adding Text to Images
Ask Claude to create images with text:
- *"Make a birthday banner that says 'Happy 30th Sarah!'"*
- *"Create a motivational quote poster with 'Dream Big'"*
- *"Design a restaurant menu header for 'Mario's Pizza'"*

### 🔧 Improving Images
Let Claude enhance your images:
- *"Make this image higher quality and more professional"*
- *"Improve the lighting and composition"*
- *"Refine this logo design and make it more polished"*

## 🎯 Perfect For

- **Content Creators** - Social media graphics, thumbnails, branding
- **Small Businesses** - Logos, marketing materials, product photos
- **Students & Teachers** - Presentations, educational visuals, projects
- **Developers** - App mockups, website graphics, UI elements
- **Artists & Designers** - Concept art, inspiration, rapid prototyping

## 🛡️ Tips for Best Results

### 📝 Writing Better Prompts
- **Be specific**: "Modern minimalist kitchen" vs "kitchen"
- **Include style**: "photorealistic", "watercolor", "digital art"
- **Mention lighting**: "soft natural light", "dramatic shadows"
- **Add mood**: "cozy", "professional", "vibrant", "serene"

### 📐 Size & Quality
- Ask for specific sizes: *"Make this 1920x1080 for a presentation"*
- Request high quality: *"Create a high-resolution version"*
- Specify use case: *"Optimize for Instagram post"*

### 🎨 Style Examples
- **Photography**: "photorealistic", "studio photography", "candid style"
- **Art**: "oil painting", "watercolor", "digital illustration", "sketch"
- **Design**: "minimalist", "corporate", "vintage", "modern"

## 🔗 More Resources

- 📖 **[Technical Documentation](TECHNICAL.md)** - For developers and advanced users
- 🎨 **[Sample Gallery](samples/)** - See example prompts and results
- 🐛 **[Report Issues](https://github.com/KHAEntertainment/nano-banana-mcp/issues)** - Found a bug?
- 💬 **[Discussions](https://github.com/KHAEntertainment/nano-banana-mcp/discussions)** - Share your creations!

## 🤝 Contributing

We'd love your help making nano-banana-mcp even better! Whether you:
- 🎨 Share amazing images you've created
- 🐛 Report bugs or issues
- 💡 Suggest new features
- 📖 Improve documentation

Every contribution matters!

## 📜 License

MIT License - use it freely in personal and commercial projects!

## 🙏 Credits

- **Google AI** for the incredible Gemini 2.5 Flash model
- **Anthropic** for Claude and the Model Context Protocol
- **The community** for making AI tools more accessible

---

<div align="center">

**Ready to bring your imagination to life?**

[Get Started](#-quick-start) • [View Examples](samples/) • [Get Help](https://github.com/KHAEntertainment/nano-banana-mcp/discussions)

*Turn words into wonders with nano-banana-mcp* 🌟

</div>