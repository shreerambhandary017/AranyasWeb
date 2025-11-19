import { Suspense } from 'react';
import { useGLTF } from '@react-three/drei';

/**
 * Generic GLB loader component with fallback
 * Automatically shows placeholder if model not found
 */
export const GLBLoader = ({ 
  modelPath, 
  fallback, 
  ...props 
}) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene.clone()} {...props} />;
};

/**
 * Wrapper with Suspense for async loading
 */
export const LoadGLB = ({ modelPath, fallback, ...props }) => (
  <Suspense fallback={fallback || null}>
    <GLBLoader modelPath={modelPath} {...props} />
  </Suspense>
);

