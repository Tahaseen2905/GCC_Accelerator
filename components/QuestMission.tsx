
import React from 'react';
import { motion } from 'framer-motion';
import { INDUSTRIES } from '../constants';
import { DigitalMaturity } from '../types';
import { Target, CheckCircle2 } from 'lucide-react';
import { InteractiveFloat } from './InteractiveFloat';

import Float1 from '@/src/assets/pages/solutions/ai-solutions/Hero Section/float1.png';

interface QuestMissionProps {
  industry: string;
  companyName: string;
  goals: string[];
  maturity: DigitalMaturity;
  onUpdate: (data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const PRIMARY_GOALS = [
  'Cost Efficiency',
  'Talent Scaling',
  'Digital Innovation',
  'R&D Hub',
  'Operational Excellence',
  'Business Continuity',
  'Global IP Creation',
];

export const QuestMission: React.FC<QuestMissionProps> = ({ industry, companyName, goals, maturity, onUpdate, onNext, onPrev }) => {
  const toggleGoal = (goal: string) => {
    const newGoals = goals.includes(goal)
      ? goals.filter(g => g !== goal)
      : [...goals, goal];
    onUpdate({ goals: newGoals });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col h-full w-full overflow-hidden"
    >
      <div className="flex-1 flex flex-col justify-between gap-6 p-2 max-w-lg mx-auto w-full">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-teal-50 to-white border border-teal-100 rounded-2xl p-4 flex items-start gap-4 shrink-0 shadow-[4px_4px_10px_rgba(13,148,136,0.05)] max-w-lg mx-auto w-full"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-[4px_4px_8px_rgba(13,148,136,0.3),-2px_-2px_4px_rgba(255,255,255,0.5)_inset]">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-teal-900">Define Your Mission</h3>
            <p className="text-teal-700 text-sm mt-1 leading-relaxed">Set the foundational scope for your Global Capability Center.</p>
          </div>
          <div className="ml-auto w-20 h-20 hidden md:block">
            <InteractiveFloat src={Float1} alt="Mission Float" />
          </div>
        </motion.div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

          <div className="space-y-3">
            <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider">Company Name</label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => onUpdate({ companyName: e.target.value })}
              placeholder="Enter your organization name..."
              className="w-full bg-white border border-gray-100 rounded-xl px-4 py-3 text-sm text-gray-700 font-medium focus:border-teal-500 outline-none transition-all shadow-sm placeholder-gray-400"
            />
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider">Industry Sector</label>
            <div className="relative">
              <select
                value={industry}
                onChange={(e) => onUpdate({ industry: e.target.value })}
                className="w-full bg-white border border-gray-100 rounded-xl px-4 py-3 text-sm text-gray-700 font-medium focus:border-teal-500 outline-none transition-all appearance-none cursor-pointer shadow-sm"
              >
                <option value="">Select your sector...</option>
                {INDUSTRIES.map(i => (
                  <option key={i.industry} value={i.industry}>{i.industry}</option>
                ))}
                <option value="Retail">Retail & E-commerce</option>
                <option value="Energy">Energy & Utilities</option>
                <option value="Manufacturing">Manufacturing</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">
                ▼
              </div>
            </div>
          </div>

          <div className="space-y-3 md:col-span-2">
            <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider">Digital Maturity</label>
            <div className="grid grid-cols-3 gap-3">
              {(['Ad-hoc', 'Defined', 'Optimized'] as DigitalMaturity[]).map(m => (
                <button
                  key={m}
                  onClick={() => onUpdate({ maturity: m })}
                  className={`py-3 px-2 rounded-xl border font-bold text-xs transition-all ${maturity === m ? 'border-teal-500 bg-teal-50 text-teal-700' : 'border-gray-100 text-gray-400 hover:border-gray-200'}`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-3 shrink-0">
          <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider">Primary Goals (Multi-select)</label>
          <div className="flex flex-wrap gap-3">
            {PRIMARY_GOALS.map(goal => {
              const isActive = goals.includes(goal);
              return (
                <motion.button
                  key={goal}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => toggleGoal(goal)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full border font-semibold text-xs transition-all ${isActive
                    ? 'bg-teal-600 border-teal-600 text-white shadow-md'
                    : 'bg-white border-gray-100 text-gray-500 hover:border-teal-200 hover:text-teal-600'
                    }`}
                >
                  {isActive && <CheckCircle2 className="w-3.5 h-3.5" />}
                  <span>{goal}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
      {/* Navigation Footer */}
      <div className="p-2 border-t border-gray-50 flex items-center justify-between shrink-0">
        <button
          onClick={onPrev}
          className="flex items-center space-x-2 font-bold px-4 py-2 text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-0"
          disabled={true} // First step always disabled prev
        >
          <span className="text-xs">Previous</span>
        </button>
        <button
          onClick={onNext}
          className="flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-xl font-bold shadow-lg shadow-teal-200 hover:shadow-teal-300 transition-all active:scale-95"
        >
          <span className="text-xs">Next Step</span>
        </button>
      </div>
    </motion.div>
  );
};
