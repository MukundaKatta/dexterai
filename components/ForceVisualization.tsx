'use client';
import { useStore } from '@/lib/store';
export default function ForceVisualization() {
  const { forceHistory } = useStore();
  const fingers = ['thumb', 'index', 'middle', 'ring', 'pinky'] as const;
  const colors = ['#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#a855f7'];
  const latest = forceHistory[forceHistory.length - 1];
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Force Visualization</h2>
      <div className="grid grid-cols-5 gap-4">
        {fingers.map((f, i) => (
          <div key={f} className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center">
            <p className="text-xs text-gray-400 capitalize mb-1">{f}</p>
            <p className="text-2xl font-bold" style={{ color: colors[i] }}>{latest[f].toFixed(1)}N</p>
            <div className="mt-2 h-20 flex items-end gap-px">
              {forceHistory.slice(-20).map((d, j) => (
                <div key={j} className="flex-1 rounded-t" style={{ height: `${(d[f] / 6) * 100}%`, backgroundColor: colors[i] + '60' }} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
        <h3 className="font-semibold text-sm mb-3">Combined Force Timeline</h3>
        <div className="h-48 relative">
          {fingers.map((f, fi) => (
            <svg key={f} className="absolute inset-0 w-full h-full" viewBox={`0 0 ${forceHistory.length} 6`} preserveAspectRatio="none">
              <polyline fill="none" stroke={colors[fi]} strokeWidth="0.1" opacity="0.7"
                points={forceHistory.map((d, i) => `${i},${6 - d[f]}`).join(' ')} />
            </svg>
          ))}
        </div>
        <div className="flex gap-4 mt-2">{fingers.map((f, i) => (
          <div key={f} className="flex items-center gap-1 text-xs"><div className="w-2 h-2 rounded" style={{ backgroundColor: colors[i] }} /><span className="capitalize text-gray-400">{f}</span></div>
        ))}</div>
      </div>
    </div>
  );
}
