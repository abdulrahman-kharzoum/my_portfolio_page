import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// 3D Android Phone Component
function AndroidPhone({ position = [0, 0, 0], scale = 1 }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
    }
  });

  return (
    <group ref={meshRef} position={position} scale={scale}>
      {/* Phone Body */}
      <mesh>
        <boxGeometry args={[0.8, 1.6, 0.08]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* Screen */}
      <mesh position={[0, 0, 0.041]}>
        <boxGeometry args={[0.7, 1.4, 0.001]} />
        <meshStandardMaterial 
          color="#4285f4" 
          emissive="#4285f4" 
          emissiveIntensity={0.3}
          metalness={0.1} 
          roughness={0.1} 
        />
      </mesh>
      
      {/* Android Logo */}
      <mesh position={[0, 0, 0.042]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#00ff87" emissive="#00ff87" emissiveIntensity={0.2} />
      </mesh>
    </group>
  );
}

// Realistic Goodyear Blimp Component
function Blimp({ position = [0, 0, 0], scale = 1 }) {
  const blimpRef = useRef();
  
  useFrame((state) => {
    if (blimpRef.current) {
      blimpRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      blimpRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
    }
  });

  return (
    <group ref={blimpRef} position={position} scale={scale}>
      {/* Main Envelope - Elongated ellipsoid like real Goodyear blimp */}
      <mesh scale={[2.5, 1, 1]}>
        <sphereGeometry args={[0.8, 32, 16]} />
        <meshStandardMaterial 
          color="#1e3a8a" 
          metalness={0.1} 
          roughness={0.2}
        />
      </mesh>
      
      {/* Goodyear Logo Area - Yellow stripe */}
      <mesh position={[0, 0.1, 0]} scale={[2.4, 0.3, 0.98]}>
        <sphereGeometry args={[0.8, 32, 16]} />
        <meshStandardMaterial 
          color="#ffd700" 
          metalness={0.1} 
          roughness={0.2}
        />
      </mesh>
      
      {/* Gondola - More realistic cabin */}
      <mesh position={[0, -0.9, 0.3]}>
        <boxGeometry args={[0.8, 0.25, 1.2]} />
        <meshStandardMaterial color="#2d2d2d" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* Landing Gear */}
      <mesh position={[0, -1.1, 0.3]}>
        <boxGeometry args={[0.6, 0.05, 0.1]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      
      {/* Vertical Stabilizer */}
      <mesh position={[0, 0, -2]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.05, 0.8, 0.4]} />
        <meshStandardMaterial color="#1e3a8a" />
      </mesh>
      
      {/* Horizontal Stabilizers */}
      <mesh position={[0, -0.2, -2]} rotation={[0, 0, 0]}>
        <boxGeometry args={[1.2, 0.05, 0.3]} />
        <meshStandardMaterial color="#1e3a8a" />
      </mesh>
      
      {/* Propellers */}
      <mesh position={[0.7, -0.3, -1.8]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.4]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      
      <mesh position={[-0.7, -0.3, -1.8]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.4]} />
        <meshStandardMaterial color="#333" />
      </mesh>
    </group>
  );
}

// Main 3D Scene Component
function ThreeScene({ showPhone = false, showBlimp = false, className = "" }) {
  return (
    <div className={className} style={{ width: '100%', height: '100%' }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        
        {showPhone && <AndroidPhone position={[0, 0, 0]} scale={1.2} />}
        {showBlimp && <Blimp position={[0, 0, 0]} scale={1} />}
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2.5}
          autoRotate={true}
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  );
}

export default ThreeScene;