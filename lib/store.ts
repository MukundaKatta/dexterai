import { create } from 'zustand';

export interface GraspType { id: string; name: string; category: 'power' | 'precision' | 'lateral' | 'hook'; fingers: number; forceRange: [number, number]; successRate: number; description: string; }
export interface TestObject { id: string; name: string; shape: string; size: number; weight: number; material: string; friction: number; difficulty: number; }
export interface DexTask { id: string; name: string; graspType: string; objectId: string; difficulty: number; score: number; maxScore: number; timeLimit: number; }
export interface BenchmarkEntry { id: string; team: string; score: number; tasks: number; avgTime: number; rank: number; }
export interface ForceData { timestamp: number; thumb: number; index: number; middle: number; ring: number; pinky: number; }

interface DexterAIState {
  activeTab: string; grasps: GraspType[]; objects: TestObject[]; tasks: DexTask[];
  leaderboard: BenchmarkEntry[]; forceHistory: ForceData[];
  setActiveTab: (t: string) => void; setGrasps: (g: GraspType[]) => void;
  setObjects: (o: TestObject[]) => void; setTasks: (t: DexTask[]) => void;
  setLeaderboard: (l: BenchmarkEntry[]) => void;
}

export const useStore = create<DexterAIState>((set) => ({
  activeTab: 'hand', grasps: [], objects: [], tasks: [], leaderboard: [],
  forceHistory: Array.from({ length: 50 }, (_, i) => ({ timestamp: i, thumb: 2 + Math.random() * 3, index: 1.5 + Math.random() * 2.5, middle: 1 + Math.random() * 2, ring: 0.8 + Math.random() * 1.5, pinky: 0.5 + Math.random() * 1 })),
  setActiveTab: (tab) => set({ activeTab: tab }),
  setGrasps: (grasps) => set({ grasps }),
  setObjects: (objects) => set({ objects }),
  setTasks: (tasks) => set({ tasks }),
  setLeaderboard: (leaderboard) => set({ leaderboard }),
}));
