'use client';

import { useEffect } from 'react';
import { useStore } from '@/lib/store';
import { mockGrasps, mockObjects, mockTasks, mockLeaderboard } from '@/lib/mock-data';
import { Hand, Grip, Box, Target, Trophy, Gauge, Gamepad2, ChevronRight } from 'lucide-react';
import HandModel from '@/components/HandModel';
import GraspTaxonomy from '@/components/GraspTaxonomy';
import ObjectDatabase from '@/components/ObjectDatabase';
import TaskScoring from '@/components/TaskScoring';
import BenchmarkLeaderboard from '@/components/BenchmarkLeaderboard';
import ForceVisualization from '@/components/ForceVisualization';
import TeleoperationPanel from '@/components/TeleoperationPanel';

const tabs = [
  { id: 'hand', label: 'Hand Model', icon: Hand },
  { id: 'grasps', label: 'Grasp Taxonomy', icon: Grip },
  { id: 'objects', label: 'Object Database', icon: Box },
  { id: 'tasks', label: 'Task Scoring', icon: Target },
  { id: 'teleop', label: 'Teleoperation', icon: Gamepad2 },
  { id: 'force', label: 'Force Viz', icon: Gauge },
  { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
];

export default function HomePage() {
  const { activeTab, setActiveTab, setGrasps, setObjects, setTasks, setLeaderboard } = useStore();

  useEffect(() => {
    setGrasps(mockGrasps); setObjects(mockObjects); setTasks(mockTasks); setLeaderboard(mockLeaderboard);
  }, [setGrasps, setObjects, setTasks, setLeaderboard]);

  const render = () => {
    switch (activeTab) {
      case 'hand': return <HandModel />;
      case 'grasps': return <GraspTaxonomy />;
      case 'objects': return <ObjectDatabase />;
      case 'tasks': return <TaskScoring />;
      case 'teleop': return <TeleoperationPanel />;
      case 'force': return <ForceVisualization />;
      case 'leaderboard': return <BenchmarkLeaderboard />;
      default: return <HandModel />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="w-56 bg-gray-900/50 border-r border-gray-800 flex flex-col">
        <div className="p-4 border-b border-gray-800">
          <h1 className="text-xl font-bold bg-gradient-to-r from-dex-400 to-dex-600 bg-clip-text text-transparent">DexterAI</h1>
          <p className="text-xs text-gray-500">Dexterity Evaluation</p>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {tabs.map((t) => { const Icon = t.icon; return (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs ${activeTab === t.id ? 'bg-dex-500/20 text-dex-400 border border-dex-500/30' : 'text-gray-400 hover:bg-gray-800/50'}`}>
              <Icon size={14} /><span className="flex-1 text-left">{t.label}</span>{activeTab === t.id && <ChevronRight size={12} />}
            </button>); })}
        </nav>
      </aside>
      <main className="flex-1 overflow-auto p-6">{render()}</main>
    </div>
  );
}
