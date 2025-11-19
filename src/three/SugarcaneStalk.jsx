import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Realistic sugarcane stalk component - fully procedural
const SugarcaneStalk = ({ position = [0, 0, 0], scale = 1, ...props }) => {
  const groupRef = useRef();
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      // Subtle sway animation
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  // Botanical PBR material with sub-surface scattering effect
  const stalkMaterial = new THREE.MeshStandardMaterial({
    color: '#7fb37b', // Green base
    roughness: 0.6,
    metalness: 0.1,
    emissive: '#4a7c4e',
    emissiveIntensity: 0.2, // Sub-surface scattering simulation
  });

  const nodeMaterial = new THREE.MeshStandardMaterial({
    color: '#6a9c6a',
    roughness: 0.5,
    metalness: 0.05,
  });

  const leafMaterial = new THREE.MeshStandardMaterial({
    color: '#5f8c5f',
    roughness: 0.7,
    side: THREE.DoubleSide,
  });

  return (
    <group ref={groupRef} position={position} scale={scale} {...props}>
      {/* Main stalk - tapered cylinder */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.08, 0.1, 1, 16]} />
        <primitive object={stalkMaterial} attach="material" />
      </mesh>
      
      {/* Node segments (joints) - more detailed */}
      {[0, 0.25, 0.5, 0.75, 1].map((y, idx) => (
        <group key={idx}>
          <mesh position={[0, y, 0]}>
            <torusGeometry args={[0.09, 0.012, 16, 32]} />
            <primitive object={nodeMaterial} attach="material" />
          </mesh>
          {/* Node ring detail */}
          <mesh position={[0, y, 0]}>
            <torusGeometry args={[0.09, 0.005, 16, 32]} />
            <meshStandardMaterial 
              color="#5a8a5a" 
              roughness={0.4}
              metalness={0.2}
            />
          </mesh>
        </group>
      ))}
      
      {/* Leaf attachment points - more realistic */}
      {[
        { y: 0.2, angle: Math.PI / 4, length: 0.35 },
        { y: 0.45, angle: -Math.PI / 5, length: 0.4 },
        { y: 0.7, angle: Math.PI / 6, length: 0.3 },
        { y: 0.9, angle: -Math.PI / 4, length: 0.25 },
      ].map((leaf, idx) => (
        <group 
          key={`leaf-${idx}`} 
          position={[0.1, leaf.y, 0]} 
          rotation={[0, 0, leaf.angle]}
        >
          {/* Leaf blade */}
          <mesh>
            <coneGeometry args={[0.05, leaf.length, 8]} />
            <primitive object={leafMaterial} attach="material" />
          </mesh>
          {/* Leaf vein */}
          <mesh position={[0, leaf.length * 0.3, 0]}>
            <boxGeometry args={[0.02, leaf.length * 0.6, 0.01]} />
            <meshStandardMaterial 
              color="#4a7a4a" 
              roughness={0.6}
            />
          </mesh>
        </group>
      ))}
      
      {/* Purple tint variation on some nodes */}
      {[0.25, 0.75].map((y, idx) => (
        <mesh key={`tint-${idx}`} position={[0, y, 0.09]}>
          <torusGeometry args={[0.09, 0.008, 16, 32]} />
          <meshStandardMaterial 
            color="#8b6fa8" 
            roughness={0.6}
            transparent
            opacity={0.3}
          />
        </mesh>
      ))}
    </group>
  );
};

export default SugarcaneStalk;
