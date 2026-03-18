'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useState } from 'react';

function RobotHand({ fingerAngles }: { fingerAngles: number[] }) {
  return (
    <group>
      {/* Palm */}
      <mesh position={[0, 0, 0]}><boxGeometry args={[0.8, 0.15, 0.6]} /><meshStandardMaterial color="#10b981" metalness={0.7} roughness={0.3} /></mesh>
      {/* Fingers */}
      {[-0.3, -0.15, 0, 0.15, 0.3].map((x, i) => (
        <group key={i} position={[x, 0.08, -0.3]} rotation={[-(fingerAngles[i] || 0) * Math.PI / 180, 0, 0]}>
          <mesh position={[0, 0, -0.12]}><capsuleGeometry args={[0.04, 0.15, 8, 16]} /><meshStandardMaterial color="#34d399" metalness={0.6} /></mesh>
          <group position={[0, 0, -0.27]} rotation={[-(fingerAngles[i] || 0) * 0.7 * Math.PI / 180, 0, 0]}>
            <mesh position={[0, 0, -0.08]}><capsuleGeometry args={[0.035, 0.1, 8, 16]} /><meshStandardMaterial color="#34d399" metalness={0.6} /></mesh>
          </group>
        </group>
      ))}
      {/* Thumb */}
      <group position={[-0.45, 0.05, -0.1]} rotation={[0, 0, 0.5]}>
        <mesh position={[0, 0, -0.1]}><capsuleGeometry args={[0.05, 0.12, 8, 16]} /><meshStandardMaterial color="#34d399" metalness={0.6} /></mesh>
      </group>
    </group>
  );
}

export default function HandModel() {
  const [fingers, setFingers] = useState([30, 30, 30, 30, 30]);
  const labels = ['Thumb', 'Index', 'Middle', 'Ring', 'Pinky'];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">3D Hand Model</h2>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden" style={{ height: 450 }}>
          <Canvas camera={{ position: [1, 0.5, 1], fov: 50 }}>
            <ambientLight intensity={0.4} /><directionalLight position={[3, 3, 3]} intensity={1} />
            <RobotHand fingerAngles={fingers} />
            <OrbitControls />
          </Canvas>
        </div>
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
          <h3 className="font-semibold text-sm mb-4">Joint Control</h3>
          <div className="space-y-4">
            {labels.map((label, i) => (
              <div key={label}>
                <div className="flex justify-between text-xs mb-1"><span className="text-gray-400">{label}</span><span className="text-dex-400 font-mono">{fingers[i]}&deg;</span></div>
                <input type="range" min={0} max={90} value={fingers[i]}
                  onChange={(e) => { const n = [...fingers]; n[i] = parseInt(e.target.value); setFingers(n); }}
                  className="w-full accent-dex-500" />
              </div>
            ))}
          </div>
          <div className="mt-4 space-y-2">
            {[{ name: 'Open', vals: [0,0,0,0,0] }, { name: 'Fist', vals: [90,90,90,90,90] }, { name: 'Pinch', vals: [45,45,0,0,0] }].map((p) => (
              <button key={p.name} onClick={() => setFingers(p.vals)}
                className="w-full px-3 py-2 bg-gray-800/50 rounded-lg text-xs text-gray-400 hover:text-white">{p.name}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
