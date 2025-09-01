# 🎨 Sample Prompts & Examples

This file contains the exact prompts and parameters used to generate the sample images in this repository.

## ⭐ Terminal Banner with ASCII-to-Photorealistic Transition

**File:** `terminal-banner.png`  
**Tool:** `generate_image`  
**Prompt:**
```
A terminal window interface with black background and bright yellow text that says "NANO BANANA" at the top. Below it, centered, is an ASCII art banana made of text characters. The fascinating part: halfway down the image, the ASCII banana gradually transforms and transitions into a photorealistic, actual yellow banana - as if it's coming to life and materializing from the digital text into reality. The transformation should be seamless and magical, showing the evolution from simple text art to a beautiful, real banana. Terminal-style monospace font, retro computing aesthetic, dramatic lighting on the realistic banana portion.
```
**Parameters:**
- Width: 1024px
- Height: 768px
- Style: Retro computing meets modern AI magic
- **Special Feature**: ASCII art morphing into photorealistic imagery

---

## 🌅 Landscape Generation

**File:** `landscape-sunset.png`  
**Tool:** `generate_image`  
**Prompt:**
```
A breathtaking mountain landscape at golden hour, with misty valleys, snow-capped peaks, and dramatic clouds painted in warm orange and pink hues. Photorealistic, high detail, professional landscape photography style.
```
**Parameters:**
- Width: 1024px
- Height: 768px
- Style: Photorealistic landscape photography

---

## 🏢 Architectural Visualization  

**File:** `architectural-render.png`  
**Tool:** `generate_image`  
**Prompt:**
```
Modern glass office building with sleek architecture, reflective surfaces, surrounded by urban landscape. Architectural visualization style, clean lines, professional rendering, daylight with dramatic shadows.
```
**Parameters:**
- Width: 1200px  
- Height: 900px
- Style: Professional architectural rendering

---

## 🎯 Logo Design with Text

**File:** `tech-logo.png`  
**Tool:** `render_text_image`  
**Text:** `NANO BANANA`  
**Style:** 
```
Modern tech company logo with sleek typography, gradient effects, and futuristic design elements
```
**Parameters:**
- Width: 800px
- Height: 400px  
- Background: #0F172A (dark blue)
- Text Color: #F59E0B (golden yellow)

---

## 🍎 Simple Product Demo

**File:** `test-apple.png`  
**Tool:** `generate_image`
**Prompt:**
```
A simple red apple on a white background, photorealistic
```
**Parameters:**
- Width: 512px
- Height: 512px
- Style: Clean product photography

---

## 🎪 Event Banner

**Tool:** `render_text_image`  
**Text:** 
```
AI INNOVATION SUMMIT 2024
Join the Future of Technology
```
**Style:**
```
Professional conference banner with modern gradient background, clean typography, and tech-inspired design elements
```
**Parameters:**
- Width: 1920px (Full HD width)
- Height: 1080px (Full HD height)  
- Background: Linear gradient from #1E3A8A to #3B82F6
- Text Color: #FFFFFF (white)

---

## 🚀 Concept Art

**Tool:** `generate_image`
**Prompt:**
```
Futuristic cyberpunk cityscape at night with neon lights, flying cars, and towering skyscrapers. Digital art style, vibrant colors, atmospheric lighting, concept art quality.
```
**Parameters:**
- Width: 1600px
- Height: 900px
- Style: Digital concept art

---

## 📱 Product Photography

**Tool:** `generate_image`
**Prompt:**
```
Clean product photography of a sleek smartphone on a white background, professional lighting, minimalist composition, commercial photography style, high resolution.
```
**Parameters:**
- Width: 800px
- Height: 1000px  
- Style: Commercial product photography

---

## 🔧 How to Generate These Samples

1. **Set up your API key:**
   ```bash
   export GOOGLE_AI_API_KEY="your-key-here"
   ```

2. **Install nano-banana-mcp:**
   ```bash
   npm install -g nanobananamcp
   ```

3. **Run the sample generator:**
   ```bash
   node generate-samples.js
   ```

4. **Or generate individually using MCP protocol:**
   ```javascript
   // Example for terminal banner generation
   {
     "jsonrpc": "2.0",
     "id": 1,
     "method": "tools/call", 
     "params": {
       "name": "generate_image",
       "arguments": {
         "prompt": "A terminal window interface with black background...",
         "width": 1024,
         "height": 768,
         "outputPath": "./samples/terminal-banner.png"
       }
     }
   }
   ```

## 💡 Pro Tips for Better Results

- **Be specific** - Include details about lighting, composition, style
- **Mention quality** - Add terms like "high resolution", "professional", "detailed"
- **Specify aspect ratios** - Choose dimensions that match your intended use
- **Use style keywords** - "photorealistic", "concept art", "minimalist", etc.
- **Include mood descriptors** - "dramatic", "serene", "vibrant", "atmospheric"
- **Creative transitions** - Describe transformations like "ASCII art becoming photorealistic"

## 🎨 Creative Inspiration

The **terminal banner** sample demonstrates how you can create conceptual images that tell a story:
- **ASCII art → Photorealistic** - Perfect metaphor for AI bringing text to life
- **Retro meets modern** - Combines nostalgic terminal aesthetics with cutting-edge AI
- **Gradual transformation** - Shows the "magic" of AI image generation

Try similar creative concepts:
- *"Pencil sketch gradually becoming a photograph"*
- *"Wireframe design transforming into a real product"*
- *"Abstract painting morphing into a realistic landscape"*

---

*Generate your own samples and contribute them back to the repository!*