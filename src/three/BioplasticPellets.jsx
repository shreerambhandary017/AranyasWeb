import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Bioplastic pellets in a tray - fully procedural
const BioplasticPellets = ({ pelletType = 'corn', ...props }) => {
  const groupRef = useRef();
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      // Subtle rotation for visual interest
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  // Pellet colors based on type
  const pelletColors = {
    corn: '#f5e6d3',
    potato: '#e8d5b7',
    sugarcane: '#d4c4a8',
  };

  const pelletMaterial = new THREE.MeshStandardMaterial({
    color: pelletColors[pelletType] || pelletColors.corn,
    roughness: 0.4,
    metalness: 0.1,
    transparent: true,
    opacity: 0.85, // Semi-translucent
  });

  const trayMaterial = new THREE.MeshStandardMaterial({
    color: '#6a6a6a',
    roughness: 0.3,
    metalness: 0.8,
  });

  // Generate random pellet positions - memoized for performance
  const pellets = useMemo(() => 
    Array.from({ length: 60 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 0.6,
        Math.random() * 0.15 + 0.08,
        (Math.random() - 0.5) * 0.6,
      ],
      scale: 0.8 + Math.random() * 0.4,
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      ],
      color: pelletColors[pelletType] || pelletColors.corn,
    })), [pelletType]
  );

  return (
    <group ref={groupRef} {...props}>
      {/* Steel tray - more detailed */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.05, 32]} />
        <primitive object={trayMaterial} attach="material" />
      </mesh>
      
      {/* Tray inner surface */}
      <mesh position={[0, 0.025, 0]}>
        <cylinderGeometry args={[0.38, 0.38, 0.01, 32]} />
        <meshStandardMaterial 
          color="#7a7a7a" 
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>
      
      {/* Tray rim - more detailed */}
      <mesh position={[0, 0.025, 0]}>
        <torusGeometry args={[0.4, 0.02, 16, 32]} />
        <primitive object={trayMaterial} attach="material" />
      </mesh>
      
      {/* Rim top edge */}
      <mesh position={[0, 0.035, 0]}>
        <torusGeometry args={[0.4, 0.008, 16, 32]} />
        <meshStandardMaterial 
          color="#8a8a8a" 
          roughness={0.2}
          metalness={0.95}
        />
      </mesh>
      
      {/* Tray bottom */}
      <mesh position={[0, -0.025, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.01, 32]} />
        <meshStandardMaterial 
          color="#5a5a5a" 
          roughness={0.4}
          metalness={0.7}
        />
      </mesh>
      
      {/* Pellets - randomized scattering with slight color variation */}
      {pellets.map((pellet, idx) => {
        const pelletMat = new THREE.MeshStandardMaterial({
          color: pellet.color,
          roughness: 0.4 + Math.random() * 0.2,
          metalness: 0.1,
          transparent: true,
          opacity: 0.8 + Math.random() * 0.15,
        });
        
        return (
          <mesh
            key={idx}
            position={pellet.position}
            rotation={pellet.rotation}
            scale={pellet.scale}
          >
            <sphereGeometry args={[0.03, 16, 16]} />
            <primitive object={pelletMat} attach="material" />
          </mesh>
        );
      })}
      
      {/* Some pellets with slight flattening (more realistic) */}
      {pellets.slice(0, 10).map((pellet, idx) => {
        const pelletMat = new THREE.MeshStandardMaterial({
          color: pellet.color,
          roughness: 0.5,
          metalness: 0.1,
          transparent: true,
          opacity: 0.85,
        });
        
        return (
          <mesh
            key={`flat-${idx}`}
            position={[
              pellet.position[0] + 0.05,
              pellet.position[1] - 0.02,
              pellet.position[2] + 0.05,
            ]}
            rotation={pellet.rotation}
            scale={[pellet.scale * 1.2, pellet.scale * 0.7, pellet.scale * 1.2]}
          >
            <sphereGeometry args={[0.03, 16, 16]} />
            <primitive object={pelletMat} attach="material" />
          </mesh>
        );
      })}
    </group>
  );
};

export default BioplasticPellets;
