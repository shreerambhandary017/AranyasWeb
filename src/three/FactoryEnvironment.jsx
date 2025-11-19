import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Modular factory environment for background - fully procedural
const FactoryEnvironment = ({ showMachines = true, ...props }) => {
  const groupRef = useRef();
  const light1Ref = useRef();
  const light2Ref = useRef();
  
  useFrame((state, delta) => {
    if (light1Ref.current) {
      light1Ref.current.intensity = 0.8 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
    if (light2Ref.current) {
      light2Ref.current.intensity = 0.8 + Math.sin(state.clock.elapsedTime * 2.5) * 0.2;
    }
  });
  
  // Factory materials
  const floorMaterial = new THREE.MeshStandardMaterial({
    color: '#6a6a6a',
    roughness: 0.7,
    metalness: 0.1,
  });

  const wallMaterial = new THREE.MeshStandardMaterial({
    color: '#e8e8e8',
    roughness: 0.8,
    metalness: 0.05,
  });

  const machineMaterial = new THREE.MeshStandardMaterial({
    color: '#4a4a4a',
    roughness: 0.4,
    metalness: 0.7,
  });

  const lightMaterial = new THREE.MeshStandardMaterial({
    color: '#90ff90',
    emissive: '#60ff60',
    emissiveIntensity: 0.8,
  });

  return (
    <group ref={groupRef} {...props}>
      {/* Floor - polished cement with grid pattern */}
      <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <primitive object={floorMaterial} attach="material" />
      </mesh>
      
      {/* Floor grid lines */}
      <mesh position={[0, -0.49, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 10, 10, 10]} />
        <meshStandardMaterial 
          color="#5a5a5a" 
          wireframe
          transparent
          opacity={0.2}
        />
      </mesh>
      
      {/* Back wall */}
      <mesh position={[0, 1, -2]}>
        <planeGeometry args={[10, 4]} />
        <primitive object={wallMaterial} attach="material" />
      </mesh>
      
      {/* Wall details - panels */}
      {[-4, -2, 0, 2, 4].map((x, idx) => (
        <mesh key={idx} position={[x, 1, -1.99]}>
          <planeGeometry args={[1.8, 3.8]} />
          <meshStandardMaterial 
            color="#d8d8d8" 
            roughness={0.9}
            metalness={0.05}
          />
        </mesh>
      ))}
      
      {/* Side walls */}
      <mesh position={[-2, 1, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[4, 4]} />
        <primitive object={wallMaterial} attach="material" />
      </mesh>
      <mesh position={[2, 1, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[4, 4]} />
        <primitive object={wallMaterial} attach="material" />
      </mesh>
      
      {/* Ceiling */}
      <mesh position={[0, 2.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 4]} />
        <meshStandardMaterial 
          color="#f0f0f0" 
          roughness={0.9}
          metalness={0.05}
        />
      </mesh>
      
      {/* Ceiling lights */}
      {[-1.5, 0, 1.5].map((x, idx) => (
        <mesh key={idx} position={[x, 2.45, 0]}>
          <boxGeometry args={[0.8, 0.1, 0.8]} />
          <meshStandardMaterial 
            color="#ffffff" 
            emissive="#ffffff"
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
      
      {showMachines && (
        <>
          {/* Extrusion machine - more detailed */}
          <group position={[-1.5, 0, 0]}>
            {/* Main body */}
            <mesh position={[0, 0.3, 0]}>
              <boxGeometry args={[0.8, 0.6, 0.6]} />
              <primitive object={machineMaterial} attach="material" />
            </mesh>
            
            {/* Control panel */}
            <mesh position={[0.35, 0.4, 0.3]}>
              <boxGeometry args={[0.1, 0.2, 0.05]} />
              <meshStandardMaterial 
                color="#2a2a2a" 
                roughness={0.2}
                metalness={0.3}
              />
            </mesh>
            
            {/* Extrusion barrel */}
            <mesh position={[0, 0.6, 0]}>
              <cylinderGeometry args={[0.1, 0.1, 0.4, 16]} />
              <primitive object={machineMaterial} attach="material" />
            </mesh>
            
            {/* Extrusion nozzle */}
            <mesh position={[0, 0.8, 0]}>
              <coneGeometry args={[0.08, 0.15, 16]} />
              <meshStandardMaterial 
                color="#3a3a3a" 
                roughness={0.3}
                metalness={0.8}
              />
            </mesh>
            
            {/* Green LED light */}
            <mesh ref={light1Ref} position={[0, 0.8, 0.3]}>
              <sphereGeometry args={[0.05, 16, 16]} />
              <primitive object={lightMaterial} attach="material" />
            </mesh>
            
            {/* Support legs */}
            {[-0.3, 0.3].map((x, idx) => (
              <mesh key={idx} position={[x, 0, 0]}>
                <cylinderGeometry args={[0.05, 0.05, 0.3, 8]} />
                <primitive object={machineMaterial} attach="material" />
              </mesh>
            ))}
          </group>
          
          {/* Injection machine - more detailed */}
          <group position={[1.5, 0, 0]}>
            {/* Main body */}
            <mesh position={[0, 0.4, 0]}>
              <boxGeometry args={[0.6, 0.8, 0.5]} />
              <primitive object={machineMaterial} attach="material" />
            </mesh>
            
            {/* Control panel */}
            <mesh position={[0.28, 0.5, 0.25]}>
              <boxGeometry args={[0.04, 0.15, 0.04]} />
              <meshStandardMaterial 
                color="#2a2a2a" 
                roughness={0.2}
                metalness={0.3}
              />
            </mesh>
            
            {/* Injection unit */}
            <mesh position={[0, 0.8, 0]}>
              <boxGeometry args={[0.3, 0.2, 0.3]} />
              <primitive object={machineMaterial} attach="material" />
            </mesh>
            
            {/* Injection nozzle */}
            <mesh position={[0, 0.9, 0.15]}>
              <cylinderGeometry args={[0.04, 0.04, 0.1, 12]} />
              <meshStandardMaterial 
                color="#3a3a3a" 
                roughness={0.3}
                metalness={0.8}
              />
            </mesh>
            
            {/* Green LED light */}
            <mesh ref={light2Ref} position={[0, 1, 0.25]}>
              <sphereGeometry args={[0.05, 16, 16]} />
              <primitive object={lightMaterial} attach="material" />
            </mesh>
            
            {/* Support legs */}
            {[-0.25, 0.25].map((x, idx) => (
              <mesh key={idx} position={[x, 0, 0]}>
                <cylinderGeometry args={[0.05, 0.05, 0.4, 8]} />
                <primitive object={machineMaterial} attach="material" />
              </mesh>
            ))}
          </group>
          
          {/* Packaging line conveyor - more detailed */}
          <group position={[0, 0.1, 0.5]}>
            {/* Conveyor base */}
            <mesh>
              <boxGeometry args={[3, 0.1, 0.3]} />
              <primitive object={machineMaterial} attach="material" />
            </mesh>
            
            {/* Conveyor belt */}
            <mesh position={[0, 0.05, 0]}>
              <boxGeometry args={[3, 0.02, 0.3]} />
              <meshStandardMaterial 
                color="#c0c0c0" 
                roughness={0.6}
                metalness={0.2}
              />
            </mesh>
            
            {/* Conveyor rollers */}
            {[-1.2, -0.6, 0, 0.6, 1.2].map((x, idx) => (
              <mesh key={idx} position={[x, 0.05, 0]}>
                <cylinderGeometry args={[0.08, 0.08, 0.3, 16]} />
                <meshStandardMaterial 
                  color="#8a8a8a" 
                  roughness={0.4}
                  metalness={0.7}
                />
              </mesh>
            ))}
            
            {/* Support legs */}
            {[-1.3, 1.3].map((x, idx) => (
              <mesh key={idx} position={[x, -0.05, 0]}>
                <boxGeometry args={[0.1, 0.15, 0.1]} />
                <primitive object={machineMaterial} attach="material" />
              </mesh>
            ))}
          </group>
        </>
      )}
    </group>
  );
};

export default FactoryEnvironment;
