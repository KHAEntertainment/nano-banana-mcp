# 🍌 Generated Sample Images

## ✅ Successfully Generated Samples

This directory contains **actual images** generated using nano-banana-mcp with the following results:

### 📊 Generated Files

| Sample | File Size | Dimensions | Description |
|--------|-----------|------------|-------------|
| **landscape-sunset.png** | 1.4MB | 1024×768px | Breathtaking mountain landscape at golden hour |
| **tech-logo.png** | 340KB | 800×400px | "NANO BANANA" tech company logo |
| **architectural-render.png** | 1.7MB | 1200×900px | Modern glass office building visualization |
| **test-apple.png** | 796KB | 512×512px | Simple red apple demonstration |

### 🎨 Sample Quality

All images were generated using Google Gemini 2.5 Flash ("Nano Banana") with the exact prompts documented in [sample-prompts.md](sample-prompts.md). The results demonstrate:

- **Photorealistic quality** for landscape and product imagery
- **Professional text rendering** for logo design
- **Architectural precision** for building visualizations
- **Consistent high resolution** output

### 📁 File Access

**Note**: Due to GitHub's file size limitations (1MB for API uploads), these images are stored locally during development. To access the full-resolution samples:

1. **Clone the repository**
2. **Run the sample generator** with your API key:
   ```bash
   export GOOGLE_AI_API_KEY="your-key-here"
   node generate-samples.js
   ```
3. **View generated images** in the `samples/` directory

### 🔍 Image Details

#### 🌅 Landscape Sunset (1024×768px)
- **Prompt**: "A breathtaking mountain landscape at golden hour, with misty valleys, snow-capped peaks, and dramatic clouds painted in warm orange and pink hues. Photorealistic, high detail, professional landscape photography style."
- **Quality**: Photorealistic landscape photography
- **Use case**: Marketing visuals, presentation backgrounds

#### 🎯 Tech Logo (800×400px) 
- **Text**: "NANO BANANA"
- **Style**: Modern tech company logo with sleek typography, gradient effects, and futuristic design elements
- **Colors**: Dark blue background (#0F172A) with golden yellow text (#F59E0B)
- **Use case**: Branding, logos, headers

#### 🏢 Architectural Render (1200×900px)
- **Prompt**: "Modern glass office building with sleek architecture, reflective surfaces, surrounded by urban landscape. Architectural visualization style, clean lines, professional rendering, daylight with dramatic shadows."
- **Quality**: Professional architectural rendering
- **Use case**: Architecture visualization, real estate

#### 🍎 Test Apple (512×512px)
- **Prompt**: "A simple red apple on a white background, photorealistic"
- **Quality**: Clean product photography style
- **Use case**: Simple demonstration, product imagery

## 🚀 Generate Your Own

Ready to create similar images? Use the exact prompts from [sample-prompts.md](sample-prompts.md) or run:

```bash
# Generate all samples
node generate-samples.js

# Or generate individual samples
node generate-repo-samples.js
```

---

*All samples generated with nano-banana-mcp v1.0.0 and Google Gemini 2.5 Flash*