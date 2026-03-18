'use client';
import { useStore } from '@/lib/store';
import { Trophy, Medal } from 'lucide-react';
export default function BenchmarkLeaderboard() {
  const { leaderboard } = useStore();
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Benchmark Leaderboard</h2>
      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
        {leaderboard.map((e, i) => (
          <div key={e.id} className={`flex items-center gap-4 p-4 ${i > 0 ? 'border-t border-gray-800' : ''}`}>
            <div className="w-8 text-center">{i === 0 ? <Trophy className="text-yellow-400 mx-auto" size={20} /> : <span className="text-gray-500 font-bold">#{e.rank}</span>}</div>
            <div className="flex-1"><p className="font-semibold">{e.team}</p><p className="text-xs text-gray-500">{e.tasks} tasks | Avg {e.avgTime}s</p></div>
            <p className="text-2xl font-bold text-dex-400">{e.score}</p>
            <div className="w-32 h-2 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-dex-500 rounded-full" style={{ width: `${(e.score / leaderboard[0].score) * 100}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
