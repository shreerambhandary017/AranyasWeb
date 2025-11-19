import { Canvas } from '@react-three/fiber';
import { Float, Sparkles, RoundedBox } from '@react-three/drei';

const LeafCluster = ({ position = [0, 0, 0], scale = 1 }) => (
  <group position={position} scale={scale}>
    {[...Array(5)].map((_, idx) => (
      <mesh
        key={idx}
        rotation={[
          Math.random() * 0.4,
          Math.random() * Math.PI,
          Math.random() * 0.4
        ]}
        position={[Math.random() * 0.6, Math.random() * 0.6, Math.random() * 0.4]}
      >
        <coneGeometry args={[0.12, 0.35, 8]} />
        <meshStandardMaterial color="#5f7c60" roughness={0.3} metalness={0.2} />
      </mesh>
    ))}
  </group>
);

const BagSilhouette = () => (
  <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.5}>
    <RoundedBox args={[1, 1.4, 0.4]} radius={0.25} smoothness={4} position={[0, -0.2, 0]}>
      <meshStandardMaterial color="#1e2d24" roughness={0.4} metalness={0.1} />
    </RoundedBox>
    <mesh position={[0, 0.6, 0.2]}>
      <torusGeometry args={[0.25, 0.02, 12, 40]} />
      <meshStandardMaterial color="#8a6a3e" metalness={0.8} roughness={0.2} />
    </mesh>
  </Float>
);

const ForestScene = () => (
  <Canvas
    camera={{ position: [0, 0.2, 3], fov: 45 }}
    style={{ width: '100%', height: '100%' }}
  >
    <color attach="background" args={['#0a1310']} />
    <ambientLight intensity={0.5} />
    <directionalLight intensity={1.2} position={[2, 3, 3]} color="#d6b263" />
    <pointLight intensity={0.6} position={[-2, 1, -2]} color="#2b5c45" />
    <BagSilhouette />
    <group position={[0, -0.8, 0]}>
      {[...Array(6)].map((_, idx) => (
        <LeafCluster
          key={idx}
          position={[
            Math.sin(idx) * 1.1,
            Math.random() * 0.15,
            -idx * 0.25
          ]}
          scale={0.7 + Math.random() * 0.4}
        />
      ))}
    </group>
    <Sparkles count={30} speed={0.25} opacity={0.35} color="#d6b263" size={1.5} />
  </Canvas>
);

export default ForestScene;

