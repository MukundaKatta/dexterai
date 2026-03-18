'use client';
import { useStore } from '@/lib/store';
import { Grip, Hand } from 'lucide-react';
const catColors: Record<string, string> = { power: 'text-red-400 bg-red-500/10', precision: 'text-blue-400 bg-blue-500/10', lateral: 'text-yellow-400 bg-yellow-500/10', hook: 'text-purple-400 bg-purple-500/10' };

export default function GraspTaxonomy() {
  const { grasps } = useStore();
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Grasp Taxonomy</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {grasps.map((g) => (
          <div key={g.id} className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-sm">{g.name}</h3>
              <span className={`text-xs px-2 py-0.5 rounded capitalize ${catColors[g.category]}`}>{g.category}</span>
            </div>
            <p className="text-xs text-gray-500 mb-3">{g.description}</p>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="bg-gray-800/30 rounded p-2 text-center"><p className="font-bold text-dex-400">{g.fingers}</p><p className="text-gray-500">Fingers</p></div>
              <div className="bg-gray-800/30 rounded p-2 text-center"><p className="font-bold text-blue-400">{g.forceRange[0]}-{g.forceRange[1]}N</p><p className="text-gray-500">Force</p></div>
              <div className="bg-gray-800/30 rounded p-2 text-center"><p className="font-bold text-green-400">{g.successRate}%</p><p className="text-gray-500">Success</p></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
