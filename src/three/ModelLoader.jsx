import { Suspense, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Utility component to load and display GLB/GLTF models
 * 
 * Usage:
 * <ModelLoader 
 *   modelPath="/models/biodegradable-bag.glb"
 *   position={[0, 0, 0]}
 *   scale={1}
 *   autoRotate={true}
 * />
 */
const ModelLoader = ({ 
  modelPath, 
  position = [0, 0, 0], 
  scale = 1,
  rotation = [0, 0, 0],
  autoRotate = false,
  rotationSpeed = 0.5,
  ...props 
}) => {
  const { scene } = useGLTF(modelPath);
  const clonedScene = scene.clone();
  const groupRef = useRef();
  
  // Apply transformations
  clonedScene.position.set(...position);
  clonedScene.scale.set(scale, scale, scale);
  clonedScene.rotation.set(...rotation);
  
  // Auto-rotate if enabled
  useFrame((state, delta) => {
    if (autoRotate && groupRef.current) {
      groupRef.current.rotation.y += delta * rotationSpeed;
    }
  });
  
  return (
    <group ref={groupRef}>
      <primitive object={clonedScene} {...props} />
    </group>
  );
};

/**
 * Loading fallback component
 */
const ModelLoadingFallback = () => (
  <mesh>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color="#d6b263" wireframe />
  </mesh>
);

/**
 * Wrapper component with Suspense for async loading
 */
export const LoadedModel = ({ modelPath, ...props }) => (
  <Suspense fallback={<ModelLoadingFallback />}>
    <ModelLoader modelPath={modelPath} {...props} />
  </Suspense>
);

/**
 * Preload a model for faster loading
 */
export const preloadModel = (modelPath) => {
  useGLTF.preload(modelPath);
};

export default ModelLoader;

