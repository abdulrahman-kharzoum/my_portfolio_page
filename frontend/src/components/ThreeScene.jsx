import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Phone GLB Model Component
function PhoneModel({ position = [0, 0, 0], scale = 1 }) {
  const meshRef = useRef();
  const { scene, error } = useGLTF('/phone.glb');
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
    }
  });

  if (error) {
    console.error('Error loading phone model:', error);
    return <AndroidPhone position={position} scale={scale} />;
  }

  return (
    <group ref={meshRef} position={position} scale={[scale * 0.5, scale * 0.5, scale * 0.5]}>
      <primitive object={scene.clone()} />
      
      {/* Flutter Logo on Screen */}
      <mesh position={[0, 0, 0.1]}>
        <planeGeometry args={[0.4, 0.4]} />
        <meshStandardMaterial 
          color="#02569B" 
          emissive="#02569B" 
          emissiveIntensity={0.3}
          transparent={true}
          opacity={0.9}
        />
      </mesh>
      
      {/* Flutter Logo Symbol */}
      <mesh position={[0, 0, 0.11]}>
        <boxGeometry args={[0.15, 0.15, 0.01]} />
        <meshStandardMaterial 
          color="#40D0FF" 
          emissive="#40D0FF" 
          emissiveIntensity={0.4}
        />
      </mesh>
    </group>
  );
}

// Flutter GLB Model Component
function FlutterModel({ position = [0, 0, 0], scale = 1 }) {
  const meshRef = useRef();
  const { scene, error } = useGLTF('/flutter.glb');
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.6) * 0.1;
    }
  });

  if (error) {
    console.error('Error loading flutter model:', error);
    return (
      <mesh>
        <boxGeometry args={[1, 1, 0.2]} />
        <meshStandardMaterial color="#02569B" />
      </mesh>
    );
  }

  return (
    <group ref={meshRef} position={position} scale={[scale * 3, scale * 3, scale * 3]}>
      <primitive object={scene.clone()} />
    </group>
  );
}

// AI Robot GLB Model Component
function AIRobotModel({ position = [0, 0, 0], scale = 1 }) {
  const meshRef = useRef();
  const { scene, error } = useGLTF('/ai_robot.glb');
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.7) * 0.15;
    }
  });

  if (error) {
    console.error('Error loading AI robot model:', error);
    return (
      <mesh>
        <boxGeometry args={[0.8, 1.2, 0.6]} />
        <meshStandardMaterial color="#00ffcd" />
      </mesh>
    );
  }

  return (
    <group ref={meshRef} position={position} scale={[scale * 0.8, scale * 0.8, scale * 0.8]}>
      <primitive object={scene.clone()} />
    </group>
  );
}

// Goodyear Blimp GLB Model Component
function BlimpModel({ position = [0, 0, 0], scale = 1 }) {
  const meshRef = useRef();
  const { scene, error } = useGLTF('/goodyear_blimp.glb');
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
    }
  });

  if (error) {
    console.error('Error loading blimp model:', error);
    return <Blimp position={position} scale={scale} />;
  }

  return (
    <group ref={meshRef} position={[position[0], position[1] - 0.3, position[2]]} scale={[scale * 0.2, scale * 0.2, scale * 0.2]}>
      <primitive object={scene.clone()} />
    </group>
  );
}

// Fallback 3D Android Phone Component (kept as backup)
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
          color="#02569B" 
          emissive="#02569B" 
          emissiveIntensity={0.3}
          metalness={0.1} 
          roughness={0.1} 
        />
      </mesh>
      
      {/* Flutter Logo */}
      <mesh position={[0, 0, 0.042]}>
        <boxGeometry args={[0.2, 0.2, 0.01]} />
        <meshStandardMaterial color="#40D0FF" emissive="#40D0FF" emissiveIntensity={0.4} />
      </mesh>
    </group>
  );
}

// Realistic Goodyear Blimp Component (kept as backup)
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

// Loading fallback component
function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#4285f4" wireframe />
    </mesh>
  );
}

// Main 3D Scene Component
function ThreeScene({ 
  showPhone = false, 
  showBlimp = false, 
  showFlutter = false,
  showAIRobot = false,
  className = "",
  modelType = null 
}) {
  const renderModel = () => {
    switch (modelType) {
      case 'phone':
        return <PhoneModel position={[0, 0, 0]} scale={1.2} />;
      case 'flutter':
        return <FlutterModel position={[0, 0, 0]} scale={1} />;
      case 'ai_robot':
        return <AIRobotModel position={[0, 0, 0]} scale={1} />;
      case 'blimp':
        return <BlimpModel position={[0, 0, 0]} scale={1} />;
      default:
        // Fallback to original logic
        if (showPhone) return <PhoneModel position={[0, 0, 0]} scale={1.2} />;
        if (showBlimp) return <BlimpModel position={[0, 0, 0]} scale={1} />;
        if (showFlutter) return <FlutterModel position={[0, 0, 0]} scale={1} />;
        if (showAIRobot) return <AIRobotModel position={[0, 0, 0]} scale={1} />;
        return null;
    }
  };

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
        
        <Suspense fallback={<LoadingFallback />}>
          {renderModel()}
        </Suspense>
        
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

// Preload all GLB models
useGLTF.preload('/phone.glb');
useGLTF.preload('/flutter.glb');
useGLTF.preload('/ai_robot.glb');
useGLTF.preload('/goodyear_blimp.glb');

export default ThreeScene;
