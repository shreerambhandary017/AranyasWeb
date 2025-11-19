# 3D Models for Aranyas Website

This directory contains React Three Fiber components for 3D models used throughout the Aranyas website.

## 📦 Models

### 1. BiodegradableBag.jsx
**Status:** Placeholder (ready for GLB)
- Premium biodegradable shopping bag
- Auto-rotation support
- Realistic PBR materials
- **GLB Path:** `/public/models/biodegradable-bag.glb`

### 2. SugarcaneStalk.jsx
**Status:** Placeholder (ready for GLB)
- Botanical sugarcane stalk
- Sub-surface scattering effect
- Sway animation
- **GLB Path:** `/public/models/sugarcane-stalk.glb`

### 3. PrintingPress.jsx
**Status:** Placeholder (ready for GLB)
- Industrial printing press module
- Animated rollers
- Metallic materials
- **GLB Path:** `/public/models/printing-press.glb`

### 4. BioplasticPellets.jsx
**Status:** Placeholder (ready for GLB)
- Raw material pellets in tray
- Multiple pellet types (corn, potato, sugarcane)
- Randomized scattering
- **GLB Path:** `/public/models/bioplastic-pellets.glb`

### 5. FactoryEnvironment.jsx
**Status:** Placeholder (ready for GLB)
- Modular factory interior
- Extrusion & injection machines
- Clean industrial aesthetic
- **GLB Paths:** 
  - `/public/models/extrusion-machine.glb`
  - `/public/models/injection-machine.glb`

## 🚀 Usage

### Basic Usage (Placeholder)
```jsx
import BagShowcase from './three/BagShowcase';

<BagShowcase autoRotate={true} enableControls={true} />
```

### With Real GLB Models

1. **Place your GLB files in `/public/models/`**
2. **Uncomment the useGLTF lines in each component**
3. **Replace placeholder geometry with:**
```jsx
const { scene } = useGLTF('/models/biodegradable-bag.glb');
// Then use: <primitive object={scene.clone()} />
```

### ModelLoader Utility
```jsx
import { LoadedModel } from './three/ModelLoader';

<LoadedModel 
  modelPath="/models/biodegradable-bag.glb"
  position={[0, 0, 0]}
  scale={1}
  autoRotate={true}
/>
```

## 📋 Model Requirements

When creating your GLB models, ensure:

- ✅ **Format:** GLTF/GLB (preferred)
- ✅ **Polycount:** Medium (game-ready, ~5k-15k triangles)
- ✅ **Textures:** PBR 4K (base color, metalness, roughness, normal, alpha)
- ✅ **UV Mapping:** Clean, no overlaps
- ✅ **Scale:** Realistic proportions (normalized)
- ✅ **Materials:** Camera-neutral, no baked shadows
- ✅ **Background:** Transparent (alpha channel)
- ✅ **Lighting:** Neutral HDRI (optional)

## 🎨 Material Guidelines

- **Biodegradable Bag:** Matte finish, light brown (#c9a882), slight translucency
- **Sugarcane:** Green base (#7fb37b), glossy, sub-surface scattering
- **Printing Press:** Metallic steel (#8a8a8a), high metalness
- **Pellets:** Semi-translucent, cream color (#f5e6d3)
- **Factory:** Clean whites/greys, polished cement floor

## 🔧 Integration Examples

### Hero Section
```jsx
import BagShowcase from './three/BagShowcase';

<section id="hero">
  <BagShowcase 
    autoRotate={true}
    enableControls={false}
    showEnvironment={true}
  />
</section>
```

### Products Section
```jsx
import BioplasticPellets from './three/BioplasticPellets';
import { Canvas } from '@react-three/fiber';

<Canvas>
  <BioplasticPellets pelletType="corn" />
</Canvas>
```

## 📝 Notes

- All components are optimized for web performance
- Placeholders use React Three Fiber primitives
- Real models will automatically replace placeholders when GLB files are added
- All animations are smooth and performant
- Components support responsive scaling

## 🎯 Next Steps

1. Create/commission 3D models matching specifications
2. Export as GLB with PBR textures
3. Place in `/public/models/` directory
4. Uncomment useGLTF lines in components
5. Test and optimize for production

