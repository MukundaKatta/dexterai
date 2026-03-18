'use client';
import { useStore } from '@/lib/store';
import { Star } from 'lucide-react';
export default function ObjectDatabase() {
  const { objects } = useStore();
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Object Database</h2>
      <div className="grid grid-cols-3 gap-4">
        {objects.map((o) => (
          <div key={o.id} className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
            <h3 className="font-semibold text-sm mb-2">{o.name}</h3>
            <div className="space-y-1 text-xs text-gray-400">
              <div className="flex justify-between"><span>Shape</span><span className="text-white capitalize">{o.shape}</span></div>
              <div className="flex justify-between"><span>Size</span><span className="text-white">{o.size}mm</span></div>
              <div className="flex justify-between"><span>Weight</span><span className="text-white">{o.weight}g</span></div>
              <div className="flex justify-between"><span>Material</span><span className="text-white">{o.material}</span></div>
              <div className="flex justify-between"><span>Friction</span><span className="text-white">{o.friction}</span></div>
              <div className="flex justify-between items-center"><span>Difficulty</span>
                <div className="flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={10} className={i < o.difficulty ? 'text-dex-400 fill-dex-400' : 'text-gray-700'} />)}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
