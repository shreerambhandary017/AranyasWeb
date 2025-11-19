import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import BiodegradableBag from './BiodegradableBag';
import * as THREE from 'three';

/**
 * Premium 3D bag showcase scene
 * Use this in your hero or product sections
 */
const BagShowcase = ({ 
  autoRotate = true,
  enableControls = true,
  showEnvironment = true,
  ...props 
}) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 2.5], fov: 50 }}
      style={{ width: '100%', height: '100%', background: 'transparent' }}
      gl={{ 
        alpha: true,
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.2
      }}
      {...props}
    >
      {/* Lighting setup */}
      <ambientLight intensity={0.6} />
      <directionalLight 
        intensity={1.2} 
        position={[3, 3, 3]} 
        color="#ffffff"
        castShadow
      />
      <directionalLight 
        intensity={0.4} 
        position={[-3, 2, -2]} 
        color="#d6b263"
      />
      <pointLight intensity={0.5} position={[0, -2, 2]} color="#7fb37b" />
      
      {/* Optional HDRI environment for realistic reflections */}
      {showEnvironment && (
        <Environment preset="sunset" background={false} />
      )}
      
      {/* The biodegradable bag */}
      <BiodegradableBag 
        autoRotate={autoRotate}
        rotationSpeed={0.3}
      />
      
      {/* Interactive orbit controls */}
      {enableControls && (
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          enableRotate={true}
          minDistance={1.5}
          maxDistance={4}
          autoRotate={autoRotate}
          autoRotateSpeed={0.5}
        />
      )}
    </Canvas>
  );
};

export default BagShowcase;

