'use client';
import { useStore } from '@/lib/store';
export default function TaskScoring() {
  const { tasks, grasps, objects } = useStore();
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Task Difficulty Scoring</h2>
      <div className="space-y-3">
        {tasks.map((t) => {
          const grasp = grasps.find((g) => g.id === t.graspType);
          const obj = objects.find((o) => o.id === t.objectId);
          return (
            <div key={t.id} className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">{t.name}</h3>
                <span className="text-2xl font-bold text-dex-400">{t.score}<span className="text-sm text-gray-500">/{t.maxScore}</span></span>
              </div>
              <div className="flex gap-4 text-xs text-gray-500 mb-3">
                <span>Grasp: <span className="text-gray-300">{grasp?.name}</span></span>
                <span>Object: <span className="text-gray-300">{obj?.name}</span></span>
                <span>Difficulty: <span className="text-gray-300">{t.difficulty}/5</span></span>
                <span>Time: <span className="text-gray-300">{t.timeLimit}s</span></span>
              </div>
              <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-dex-500 rounded-full" style={{ width: `${(t.score / t.maxScore) * 100}%` }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
