import { GraspType, TestObject, DexTask, BenchmarkEntry } from './store';

export const mockGrasps: GraspType[] = [
  { id: 'g1', name: 'Cylindrical Grasp', category: 'power', fingers: 5, forceRange: [5, 40], successRate: 92, description: 'Full hand wrap around cylindrical objects' },
  { id: 'g2', name: 'Tip Pinch', category: 'precision', fingers: 2, forceRange: [0.5, 5], successRate: 78, description: 'Thumb and index fingertip opposition' },
  { id: 'g3', name: 'Lateral Pinch', category: 'lateral', fingers: 2, forceRange: [2, 15], successRate: 88, description: 'Thumb against lateral side of index finger' },
  { id: 'g4', name: 'Hook Grasp', category: 'hook', fingers: 4, forceRange: [10, 50], successRate: 95, description: 'Flexed fingers for carrying handles' },
  { id: 'g5', name: 'Tripod Pinch', category: 'precision', fingers: 3, forceRange: [1, 8], successRate: 82, description: 'Thumb, index, and middle finger opposition' },
  { id: 'g6', name: 'Spherical Grasp', category: 'power', fingers: 5, forceRange: [3, 30], successRate: 85, description: 'Full hand conform around spherical objects' },
];

export const mockObjects: TestObject[] = [
  { id: 'o1', name: 'Steel Bolt', shape: 'cylinder', size: 15, weight: 12, material: 'steel', friction: 0.4, difficulty: 2 },
  { id: 'o2', name: 'Glass Marble', shape: 'sphere', size: 20, weight: 8, material: 'glass', friction: 0.3, difficulty: 4 },
  { id: 'o3', name: 'Rubber Duck', shape: 'irregular', size: 80, weight: 45, material: 'rubber', friction: 0.8, difficulty: 1 },
  { id: 'o4', name: 'Playing Card', shape: 'flat', size: 90, weight: 2, material: 'paper', friction: 0.2, difficulty: 5 },
  { id: 'o5', name: 'Egg', shape: 'ellipsoid', size: 55, weight: 60, material: 'shell', friction: 0.5, difficulty: 4 },
  { id: 'o6', name: 'Screwdriver', shape: 'cylinder', size: 200, weight: 120, material: 'metal/rubber', friction: 0.6, difficulty: 2 },
];

export const mockTasks: DexTask[] = [
  { id: 't1', name: 'Pick Up Bolt', graspType: 'g2', objectId: 'o1', difficulty: 2, score: 85, maxScore: 100, timeLimit: 10 },
  { id: 't2', name: 'Transfer Marble', graspType: 'g5', objectId: 'o2', difficulty: 4, score: 62, maxScore: 100, timeLimit: 15 },
  { id: 't3', name: 'Grasp Egg Safely', graspType: 'g6', objectId: 'o5', difficulty: 4, score: 71, maxScore: 100, timeLimit: 12 },
  { id: 't4', name: 'Slide Card Off Table', graspType: 'g3', objectId: 'o4', difficulty: 5, score: 45, maxScore: 100, timeLimit: 20 },
];

export const mockLeaderboard: BenchmarkEntry[] = [
  { id: 'b1', team: 'DexterAI Lab', score: 892, tasks: 20, avgTime: 8.2, rank: 1 },
  { id: 'b2', team: 'RoboHand Corp', score: 856, tasks: 20, avgTime: 9.1, rank: 2 },
  { id: 'b3', team: 'GraspNet', score: 823, tasks: 20, avgTime: 10.3, rank: 3 },
  { id: 'b4', team: 'FingerBot Inc', score: 791, tasks: 20, avgTime: 11.0, rank: 4 },
  { id: 'b5', team: 'NimbleAI', score: 764, tasks: 20, avgTime: 12.2, rank: 5 },
];
