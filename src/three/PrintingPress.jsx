import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Industrial printing press module - fully procedural
const PrintingPress = ({ autoRotate = false, ...props }) => {
  const roller1Ref = useRef();
  const roller2Ref = useRef();
  const conveyorRef = useRef();
  const inkRef = useRef();
  
  useFrame((state, delta) => {
    if (autoRotate) {
      if (roller1Ref.current) roller1Ref.current.rotation.z += delta * 2;
      if (roller2Ref.current) roller2Ref.current.rotation.z -= delta * 2;
      if (conveyorRef.current) {
        conveyorRef.current.offset.x += delta * 0.5;
        if (conveyorRef.current.offset.x > 1) conveyorRef.current.offset.x = 0;
      }
      if (inkRef.current) {
        inkRef.current.rotation.y += delta * 0.5;
      }
    }
  });

  // Industrial metallic materials
  const steelMaterial = new THREE.MeshStandardMaterial({
    color: '#8a8a8a',
    roughness: 0.3,
    metalness: 0.9,
  });

  const rubberMaterial = new THREE.MeshStandardMaterial({
    color: '#2a2a2a',
    roughness: 0.8,
    metalness: 0.1,
  });

  const plasticMaterial = new THREE.MeshStandardMaterial({
    color: '#e0e0e0',
    roughness: 0.6,
    metalness: 0.2,
  });

  const inkMaterial = new THREE.MeshStandardMaterial({
    color: '#1a1a2e',
    roughness: 0.4,
    metalness: 0.3,
  });

  return (
    <group {...props}>
      {/* Main frame - more detailed */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.2, 0.8, 0.4]} />
        <primitive object={steelMaterial} attach="material" />
      </mesh>
      
      {/* Frame details - corner reinforcements */}
      {[
        [-0.55, 0.35, 0.18], [0.55, 0.35, 0.18],
        [-0.55, -0.35, 0.18], [0.55, -0.35, 0.18],
      ].map((pos, idx) => (
        <mesh key={idx} position={pos}>
          <boxGeometry args={[0.08, 0.08, 0.05]} />
          <primitive object={steelMaterial} attach="material" />
        </mesh>
      ))}
      
      {/* Roller 1 (top) - printing roller */}
      <group ref={roller1Ref} position={[-0.3, 0.2, 0]}>
        <mesh>
          <cylinderGeometry args={[0.15, 0.15, 0.5, 32]} />
          <primitive object={rubberMaterial} attach="material" />
        </mesh>
        {/* Roller end caps */}
        <mesh position={[0, 0, 0.25]}>
          <cylinderGeometry args={[0.15, 0.15, 0.02, 32]} />
          <primitive object={steelMaterial} attach="material" />
        </mesh>
        <mesh position={[0, 0, -0.25]}>
          <cylinderGeometry args={[0.15, 0.15, 0.02, 32]} />
          <primitive object={steelMaterial} attach="material" />
        </mesh>
        {/* Roller shaft */}
        <mesh>
          <cylinderGeometry args={[0.03, 0.03, 0.55, 16]} />
          <primitive object={steelMaterial} attach="material" />
        </mesh>
      </group>
      
      {/* Roller 2 (bottom) - impression roller */}
      <group ref={roller2Ref} position={[0.3, -0.2, 0]}>
        <mesh>
          <cylinderGeometry args={[0.15, 0.15, 0.5, 32]} />
          <primitive object={rubberMaterial} attach="material" />
        </mesh>
        {/* Roller end caps */}
        <mesh position={[0, 0, 0.25]}>
          <cylinderGeometry args={[0.15, 0.15, 0.02, 32]} />
          <primitive object={steelMaterial} attach="material" />
        </mesh>
        <mesh position={[0, 0, -0.25]}>
          <cylinderGeometry args={[0.15, 0.15, 0.02, 32]} />
          <primitive object={steelMaterial} attach="material" />
        </mesh>
        {/* Roller shaft */}
        <mesh>
          <cylinderGeometry args={[0.03, 0.03, 0.55, 16]} />
          <primitive object={steelMaterial} attach="material" />
        </mesh>
      </group>
      
      {/* Ink tray - more detailed */}
      <group ref={inkRef} position={[-0.5, -0.4, 0]}>
        <mesh>
          <boxGeometry args={[0.3, 0.1, 0.4]} />
          <primitive object={inkMaterial} attach="material" />
        </mesh>
        {/* Ink level indicator */}
        <mesh position={[0, 0.06, 0]}>
          <boxGeometry args={[0.28, 0.08, 0.38]} />
          <meshStandardMaterial 
            color="#0a0a1e" 
            roughness={0.3}
            metalness={0.5}
            transparent
            opacity={0.7}
          />
        </mesh>
        {/* Tray rim */}
        <mesh position={[0, 0.05, 0]}>
          <boxGeometry args={[0.32, 0.02, 0.42]} />
          <primitive object={steelMaterial} attach="material" />
        </mesh>
      </group>
      
      {/* Ink roller (dip roller) */}
      <mesh position={[-0.5, -0.25, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.35, 24]} />
        <meshStandardMaterial 
          color="#1a1a3e" 
          roughness={0.5}
          metalness={0.4}
        />
      </mesh>
      
      {/* Conveyor strip - with texture */}
      <mesh ref={conveyorRef} position={[0, -0.35, 0]}>
        <boxGeometry args={[1.5, 0.05, 0.3]} />
        <primitive object={plasticMaterial} attach="material" />
      </mesh>
      
      {/* Conveyor texture pattern */}
      <mesh position={[0, -0.33, 0]}>
        <boxGeometry args={[1.5, 0.01, 0.3]} />
        <meshStandardMaterial 
          color="#c0c0c0" 
          roughness={0.7}
          transparent
          opacity={0.3}
        />
      </mesh>
      
      {/* Support brackets - more detailed */}
      {[-0.4, 0.4].map((x, idx) => (
        <group key={idx} position={[x, 0, 0]}>
          <mesh>
            <boxGeometry args={[0.1, 0.6, 0.1]} />
            <primitive object={steelMaterial} attach="material" />
          </mesh>
          {/* Bracket reinforcements */}
          <mesh position={[0, 0.25, 0.06]}>
            <boxGeometry args={[0.1, 0.1, 0.02]} />
            <primitive object={steelMaterial} attach="material" />
          </mesh>
          <mesh position={[0, -0.25, 0.06]}>
            <boxGeometry args={[0.1, 0.1, 0.02]} />
            <primitive object={steelMaterial} attach="material" />
          </mesh>
        </group>
      ))}
      
      {/* Control panel (simplified) */}
      <mesh position={[0.6, 0.1, 0]}>
        <boxGeometry args={[0.15, 0.2, 0.05]} />
        <meshStandardMaterial 
          color="#2a2a2a" 
          roughness={0.2}
          metalness={0.3}
        />
      </mesh>
      {/* LED indicators */}
      {[0, 0.05, 0.1].map((y, idx) => (
        <mesh key={idx} position={[0.6, y, 0.03]}>
          <sphereGeometry args={[0.01, 8, 8]} />
          <meshStandardMaterial 
            color={idx === 0 ? '#00ff00' : '#ffff00'} 
            emissive={idx === 0 ? '#00ff00' : '#ffff00'}
            emissiveIntensity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
};

export default PrintingPress;
