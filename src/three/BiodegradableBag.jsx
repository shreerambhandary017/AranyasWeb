import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

// Premium biodegradable bag component - fully procedural
const BiodegradableBag = ({ autoRotate = true, rotationSpeed = 0.5, ...props }) => {
  const meshRef = useRef();
  const bagGroupRef = useRef();
  
  useFrame((state, delta) => {
    if (autoRotate && bagGroupRef.current) {
      bagGroupRef.current.rotation.y += delta * rotationSpeed;
    }
  });

  // Premium PBR material for biodegradable bag (cornstarch/potato starch)
  const bagMaterial = new THREE.MeshStandardMaterial({
    color: '#c9a882', // Light brown eco-bag color
    roughness: 0.85, // Matte finish
    metalness: 0.05,
    transparent: true,
    opacity: 0.95, // Slight translucency
    side: THREE.DoubleSide,
  });

  // Handle material (slightly darker)
  const handleMaterial = new THREE.MeshStandardMaterial({
    color: '#a88a60',
    roughness: 0.8,
    metalness: 0.1,
  });

  // Printed branding area material
  const printMaterial = new THREE.MeshStandardMaterial({
    color: '#d6b263', // Gold accent
    roughness: 0.7,
    metalness: 0.2,
    transparent: true,
    opacity: 0.5,
  });

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
      <group ref={bagGroupRef} {...props}>
        {/* Main bag body - rounded with soft edges */}
        <RoundedBox
          ref={meshRef}
          args={[0.6, 0.8, 0.15]}
          radius={0.02}
          smoothness={8}
          position={[0, 0, 0]}
        >
          <primitive object={bagMaterial} attach="material" />
        </RoundedBox>
        
        {/* Front panel with subtle texture */}
        <RoundedBox
          args={[0.58, 0.78, 0.01]}
          radius={0.02}
          smoothness={8}
          position={[0, 0, 0.08]}
        >
          <meshStandardMaterial 
            color="#d4b890" 
            roughness={0.9}
            transparent
            opacity={0.6}
          />
        </RoundedBox>
        
        {/* Subtle crinkles/folds for realism */}
        {[
          { pos: [0.1, 0.2, 0.08], rot: [0, 0, 0.1] },
          { pos: [-0.12, -0.15, 0.08], rot: [0, 0, -0.08] },
          { pos: [0.08, -0.25, 0.08], rot: [0, 0, 0.05] },
        ].map((fold, idx) => (
          <mesh key={idx} position={fold.pos} rotation={fold.rot}>
            <planeGeometry args={[0.12, 0.18]} />
            <meshStandardMaterial 
              color="#b89a70" 
              roughness={0.9} 
              transparent 
              opacity={0.25}
              side={THREE.DoubleSide}
            />
          </mesh>
        ))}
        
        {/* Handle 1 - left */}
        <group position={[-0.25, 0.35, 0]}>
          <mesh>
            <torusGeometry args={[0.12, 0.015, 16, 32]} />
            <primitive object={handleMaterial} attach="material" />
          </mesh>
          {/* Handle attachment points */}
          <mesh position={[0, -0.12, 0]}>
            <boxGeometry args={[0.02, 0.05, 0.02]} />
            <primitive object={handleMaterial} attach="material" />
          </mesh>
        </group>
        
        {/* Handle 2 - right */}
        <group position={[0.25, 0.35, 0]}>
          <mesh>
            <torusGeometry args={[0.12, 0.015, 16, 32]} />
            <primitive object={handleMaterial} attach="material" />
          </mesh>
          {/* Handle attachment points */}
          <mesh position={[0, -0.12, 0]}>
            <boxGeometry args={[0.02, 0.05, 0.02]} />
            <primitive object={handleMaterial} attach="material" />
          </mesh>
        </group>
        
        {/* Optional printed branding area (subtle) */}
        <RoundedBox
          args={[0.3, 0.15, 0.005]}
          radius={0.01}
          smoothness={4}
          position={[0, -0.1, 0.08]}
        >
          <primitive object={printMaterial} attach="material" />
        </RoundedBox>
        
        {/* Bottom seam detail */}
        <mesh position={[0, -0.4, 0]}>
          <boxGeometry args={[0.6, 0.02, 0.15]} />
          <meshStandardMaterial 
            color="#9a7a50" 
            roughness={0.9}
          />
        </mesh>
      </group>
    </Float>
  );
};

export default BiodegradableBag;
