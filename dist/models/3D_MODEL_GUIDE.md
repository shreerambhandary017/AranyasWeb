# 3D Model Commissioning Guide for Aranyas Website

This guide will help you commission or create the 3D models needed for the Aranyas website.

## 📋 Required Models

1. **biodegradable-bag.glb** - Premium shopping bag (FLAGSHIP)
2. **sugarcane-stalk.glb** - Botanical element
3. **printing-press.glb** - Industrial printing module
4. **bioplastic-pellets.glb** - Raw materials in tray
5. **extrusion-machine.glb** - Factory equipment
6. **injection-machine.glb** - Factory equipment

## 🎯 Model Specifications

### Technical Requirements

- **Format:** GLTF/GLB (GLB preferred for single file)
- **Polycount:** Medium (5k-15k triangles per model)
- **Textures:** PBR 4K (base color, metalness, roughness, normal, alpha)
- **UV Mapping:** Clean, no overlaps
- **Scale:** Realistic proportions, normalized
- **Materials:** Camera-neutral, no baked shadows
- **Background:** Transparent (alpha channel)
- **Lighting:** Neutral HDRI (optional)

### Model 1: Biodegradable Bag (FLAGSHIP)

**Priority:** HIGHEST

**Specifications:**
- Object: Shopping bag made from corn/potato/sugarcane biopolymer
- Style: Premium, matte-finish, light brown eco-bag
- Dimensions: ~30 cm × 40 cm (realistic scale)
- Details:
  - Soft biodegradable texture
  - Subtle fiber patterns
  - Realistic crinkles (not too extreme)
  - Slight translucency
  - Optional printed branding area
  - Realistic handles
- Materials: Matte finish, light brown (#c9a882), slight translucency

**Use Case:** Hero section 3D rotation, product showcase

**Reference Colors:**
- Base: #c9a882 (light brown)
- Handles: #a88a60 (darker brown)
- Branding area: #d6b263 (gold accent)

### Model 2: Sugarcane Stalk

**Specifications:**
- Object: Detailed sugarcane stalk
- Style: Botanical accuracy
- Details:
  - Clean node segments
  - Slight gloss on skin
  - Fiber details
  - Sub-surface scattering effect
  - Mild color variation: green + purple tint
  - Optional cross-section cut
- Materials: Green base (#7fb37b), glossy, sub-surface scattering

**Use Case:** Background animation, parallax 3D scene

### Model 3: Printing Press Module

**Specifications:**
- Object: High-detail offset printing press module
- Style: Industrial clean metallic
- Details:
  - Smooth cylinders
  - Rollers
  - Ink trays
  - Conveyor strip
  - No branding
  - Clean mechanical edges
  - Realistic steel, rubber, plastic materials
- Materials: Metallic steel (#8a8a8a), high metalness

**Use Case:** "How We Print Your Branding" showcase animation

### Model 4: Bioplastic Pellets

**Specifications:**
- Object: Shallow dish filled with biodegradable pellets
- Style: Scientific, high clarity
- Pellet Types:
  - PLA/corn-based
  - Potato starch pellets
  - Sugarcane-based pellets
- Details:
  - Semi-translucent texture
  - Smooth round pellets
  - Slight color variance
  - Randomized scattering (40+ pellets)
  - Real-world scale
- Materials: Semi-translucent, cream color (#f5e6d3)

**Use Case:** Raw materials section animation

### Model 5: Factory Environment (Modular)

**Specifications:**
- Object: Small industrial hall interior
- Style: Clean, modern manufacturing
- Details:
  - Injection molding / extrusion machines
  - Packaging line
  - Soft neon-green highlight lights
  - Clean metal surfaces
  - Floor: polished cement
  - Keep geometry simple (for performance)
- Materials: Clean whites/greys, polished cement floor

**Use Case:** Parallax background in hero section or manufacturing page

## 🛠️ Where to Get Models Created

### Option 1: Hire a 3D Artist (Recommended)

**Platforms:**
- **Fiverr:** Search "3D modeling GLB PBR textures"
- **Upwork:** Post project for 3D modeler
- **ArtStation:** Browse portfolios, contact artists
- **Sketchfab:** Find artists, commission work
- **CGTrader:** Commission custom models

**Budget Estimate:**
- Biodegradable Bag: $200-500 (most important)
- Other models: $100-300 each
- Total: $800-2000 for all models

**What to Provide:**
1. This specification document
2. Reference images/photos
3. Color palette (provided above)
4. Use case (web/React Three Fiber)
5. Deadline

### Option 2: Use AI Tools

**Tools:**
- **Meshy.ai** - AI 3D model generation
- **Rodin** - Text-to-3D
- **Luma AI** - Photogrammetry from photos
- **CSM AI** - 3D model generation

**Process:**
1. Upload reference images
2. Generate 3D model
3. Export as GLB
4. Optimize textures
5. Test in React Three Fiber

### Option 3: Create Yourself

**Software:**
- **Blender** (Free, recommended)
  - Tutorial: "Blender to GLB export for web"
  - Export with PBR materials
- **Maya/3ds Max** (Paid, professional)
- **Cinema 4D** (Paid)

**Workflow:**
1. Model geometry
2. UV unwrap
3. Create PBR materials
4. Export as GLB
5. Optimize file size

## 📦 File Placement

Once you have the GLB files:

1. Place them in: `/public/models/`
2. File names must match exactly:
   - `biodegradable-bag.glb`
   - `sugarcane-stalk.glb`
   - `printing-press.glb`
   - `bioplastic-pellets.glb`
   - `extrusion-machine.glb`
   - `injection-machine.glb`

3. The React components will automatically detect and use them
4. If a model is missing, the placeholder will be shown

## ✅ Quality Checklist

Before finalizing models, ensure:

- [ ] GLB format (not GLTF with external files)
- [ ] File size < 5MB per model (optimize if larger)
- [ ] PBR textures included (4K recommended)
- [ ] Transparent background (alpha channel)
- [ ] Realistic scale and proportions
- [ ] Clean UV mapping (no overlaps)
- [ ] No baked shadows or lighting
- [ ] Tested in React Three Fiber
- [ ] Works on mobile devices (performance)

## 🚀 Testing

After placing models:

1. Run `npm run dev`
2. Check browser console for errors
3. Verify models load correctly
4. Test on mobile devices
5. Check performance (FPS should be > 30)

## 📞 Support

If you need help:
- Check `src/three/README.md` for component documentation
- Review React Three Fiber docs: https://docs.pmnd.rs/react-three-fiber
- Check Drei helpers: https://github.com/pmndrs/drei

## 🎨 Reference Images

For the 3D artist, provide:
- Photos of actual biodegradable bags
- Sugarcane field images
- Printing press photos
- Pellet close-ups
- Factory interior shots

These will help create accurate, realistic models.

