# 🎨 Sample Prompts & Examples

This file contains the exact prompts and parameters used to generate the sample images in this repository.

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

## 🎪 Event Banner

**File:** `event-banner.png`  
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

**File:** `concept-art.png`  
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

**File:** `product-mockup.png`  
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
   // Example for landscape generation
   {
     "jsonrpc": "2.0",
     "id": 1,
     "method": "tools/call", 
     "params": {
       "name": "generate_image",
       "arguments": {
         "prompt": "A breathtaking mountain landscape...",
         "width": 1024,
         "height": 768,
         "outputPath": "./samples/landscape-sunset.png"
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

---

*Generate your own samples and contribute them back to the repository!*