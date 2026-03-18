'use client';
import { Gamepad2, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react';
export default function TeleoperationPanel() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Teleoperation</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <h3 className="font-semibold text-sm mb-4">Hand Controls</h3>
          <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto">
            <div /><button className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 flex items-center justify-center"><ArrowUp size={20} /></button><div />
            <button className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 flex items-center justify-center"><ArrowLeft size={20} /></button>
            <button className="p-4 bg-dex-500 rounded-lg hover:bg-dex-600 flex items-center justify-center"><Gamepad2 size={20} /></button>
            <button className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 flex items-center justify-center"><ArrowRight size={20} /></button>
            <div /><button className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 flex items-center justify-center"><ArrowDown size={20} /></button><div />
          </div>
          <div className="flex gap-3 mt-4 justify-center">
            <button className="px-4 py-2 bg-gray-800 rounded-lg text-sm flex items-center gap-2"><RotateCcw size={14} />Rotate</button>
            <button className="px-4 py-2 bg-dex-500 rounded-lg text-sm">Grasp</button>
            <button className="px-4 py-2 bg-gray-800 rounded-lg text-sm">Release</button>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
            <h3 className="font-semibold text-sm mb-3">Connection Status</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-gray-400">Status</span><span className="text-green-400">Connected</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Latency</span><span>12ms</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Frame Rate</span><span>60 fps</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Control Mode</span><span>Position</span></div>
            </div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
            <h3 className="font-semibold text-sm mb-3">Current Position</h3>
            <div className="grid grid-cols-3 gap-2 text-center">
              {[{ label: 'X', val: '0.152' }, { label: 'Y', val: '0.089' }, { label: 'Z', val: '0.234' }].map((a) => (
                <div key={a.label} className="bg-gray-800/30 rounded p-2">
                  <p className="text-xs text-gray-500">{a.label}</p><p className="text-sm font-mono text-dex-400">{a.val}m</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
