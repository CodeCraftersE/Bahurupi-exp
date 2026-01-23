
import React, { useState } from 'react';
import { Badge } from '../types';

interface BadgeSystemProps {
  badges: Badge[];
}

const BadgeSystem: React.FC<BadgeSystemProps> = ({ badges }) => {
  const [show, setShow] = useState(false);
  const unlockedCount = badges.filter(b => b.unlocked).length;

  return (
    <div className="relative">
      <button
        onClick={() => setShow(!show)}
        className="flex items-center space-x-2 bg-indigo-50 dark:bg-indigo-900/30 px-4 py-2 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-all border border-indigo-100 dark:border-indigo-800"
      >
        <span className="text-xl">🏆</span>
        <span className="text-xs font-bold text-indigo-700 dark:text-indigo-300">{unlockedCount}/{badges.length}</span>
      </button>

      {show && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setShow(false)}></div>
          <div className="absolute right-0 mt-4 w-80 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 p-6 z-50 animate-in fade-in zoom-in-95 duration-200">
            <h3 className="font-heritage text-lg text-slate-900 dark:text-white mb-6">Your Achievements</h3>
            <div className="space-y-4">
              {badges.map(b => (
                <div key={b.id} className={`flex items-center p-3 rounded-2xl border transition-all ${b.unlocked ? 'bg-indigo-50 dark:bg-indigo-900/30 border-indigo-100 dark:border-indigo-800' : 'bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-800 opacity-60'}`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-sm ${b.unlocked ? 'bg-white dark:bg-slate-800' : 'bg-slate-200 dark:bg-slate-700 grayscale'}`}>
                    {b.icon}
                  </div>
                  <div className="ml-4">
                    <p className={`text-sm font-bold ${b.unlocked ? 'text-indigo-900 dark:text-indigo-300' : 'text-slate-500 dark:text-slate-500'}`}>{b.name}</p>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-1">{b.criteria}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-indigo-600 dark:bg-indigo-500 h-full transition-all duration-1000"
                  style={{ width: `${(unlockedCount / badges.length) * 100}%` }}
                ></div>
              </div>
              <p className="text-center text-[10px] text-slate-400 dark:text-slate-500 font-bold mt-2 uppercase tracking-widest">Global Rank: Novice Explorer</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BadgeSystem;
