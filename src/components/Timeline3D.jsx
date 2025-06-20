import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';

const timelineEvents = [
  {
    year: '2019',
    label: 'Started B.E. in AIML',
    color: '#00aaff',
    position: [0, 0, 0],
  },
  {
    year: '2020',
    label: 'First Freelance Project',
    color: '#a259ff',
    position: [2, 0.5, 0],
  },
  {
    year: '2021',
    label: 'ML Model Deployed',
    color: '#ffb300',
    position: [4, -0.5, 0],
  },
  {
    year: '2022',
    label: 'Blender 3D Modeling',
    color: '#00c896',
    position: [6, 0.5, 0],
  },
  {
    year: '2023',
    label: 'Portfolio Launched',
    color: '#ff4c60',
    position: [8, 0, 0],
  },
];

function TimelineMarker({ position, color, year, label }) {
  const meshRef = useRef();
  const [hovered, setHovered] = React.useState(false);

  // Floating animation
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 2 + position[0]) * 0.08;
    }
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        scale={hovered ? 1.25 : 1}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.18, 32, 32]} />
        <meshPhysicalMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.7 : 0.35}
          roughness={0.25}
          transmission={0.7}
          thickness={0.5}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
        {hovered && (
          <pointLight color={color} intensity={1.2} distance={1.5} />
        )}
      </mesh>
      <Html center position={[0, 0.38, 0]} style={{ pointerEvents: 'none' }}>
        <div style={{
          color: '#fff',
          fontWeight: 700,
          fontSize: '1.1rem',
          textAlign: 'center',
          textShadow: '0 2px 8px #000a',
          marginBottom: 2,
          letterSpacing: '0.04em',
          background: 'rgba(0,0,0,0.38)',
          borderRadius: 8,
          padding: '2px 10px',
          boxShadow: '0 2px 8px #0004',
          backdropFilter: 'blur(2px)',
        }}>{year}</div>
      </Html>
      <Html center position={[0, -0.32, 0]} style={{ pointerEvents: 'none' }}>
        <div style={{
          color: '#fff',
          fontWeight: 400,
          fontSize: '0.98rem',
          textAlign: 'center',
          textShadow: '0 2px 8px #000a',
          background: 'rgba(0,0,0,0.28)',
          borderRadius: 8,
          padding: '2px 10px',
          boxShadow: '0 2px 8px #0002',
          backdropFilter: 'blur(2px)',
        }}>{label}</div>
      </Html>
    </group>
  );
}

function TimelineCurve() {
  // Use CatmullRomCurve3 for a smooth curve
  const curve = new THREE.CatmullRomCurve3(timelineEvents.map(e => new THREE.Vector3(...e.position)));
  const points = curve.getPoints(100);
  return (
    <line>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          count={points.length}
          array={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial attach="material" color="#fff" linewidth={2} />
    </line>
  );
}

export default function Timeline3D() {
  return (
    <section style={{ width: '100%', maxWidth: 1200, margin: '60px auto', height: 420, borderRadius: 24, background: 'rgba(20,20,30,0.18)', boxShadow: '0 8px 48px rgba(0,0,0,0.18)', position: 'relative', overflow: 'hidden' }}>
      <h2 className="section-title" style={{ marginBottom: 24, fontSize: '2.5rem', letterSpacing: '0.04em' }}>My Journey Timeline (3D)</h2>
      <Canvas camera={{ position: [4, 1.2, 7], fov: 55 }} shadows style={{ background: 'transparent' }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={0.7} />
        <Suspense fallback={null}>
          <TimelineCurve />
          {timelineEvents.map((event) => (
            <TimelineMarker key={event.year} {...event} />
          ))}
        </Suspense>
        <OrbitControls enablePan={false} enableZoom={true} maxPolarAngle={Math.PI/2.2} minPolarAngle={Math.PI/2.5} />
      </Canvas>
    </section>
  );
} 