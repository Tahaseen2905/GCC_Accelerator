import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Clock, Zap, Handshake, BarChart3, PieChart } from 'lucide-react';
import { InteractiveFloat } from './InteractiveFloat';
import { InvolvementLevel } from '../types';

import Float1 from '@/src/assets/pages/solutions/ai-solutions/Hero Section/Hero.png';


interface QuestPartnerProps {
  involvement: InvolvementLevel;
  duration: string;
  authority: string;
  cadence: string;
  services: string[];
  outcomes: string[];
  onUpdate: (data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const SERVICES = [
  'Talent Augmentation',
  'Project Management',
  'Process Consulting',
  'Tech Implementation',
  'Change Management',
  'Legal & Compliance'
];

export const QuestPartner: React.FC<QuestPartnerProps> = ({
  involvement,
  duration,
  authority,
  cadence,
  services,
  outcomes,
  onUpdate,
  onNext,
  onPrev
}) => {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    if (step < 2) setStep(s => s + 1);
    else onNext();
  };

  const handlePrev = () => {
    if (step > 0) setStep(s => s - 1);
    else onPrev();
  };

  const toggleArrayItem = (field: string, current: string[], item: string) => {
    const updated = current.includes(item)
      ? current.filter(i => i !== item)
      : [...current, item];
    onUpdate({ [field]: updated });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col h-full w-full overflow-hidden"
    >
      <div className="flex-1 p-1 overflow-hidden flex flex-col relative bg-white justify-center">
        <AnimatePresence mode="wait">
          {/* Step 0: Engagement Model */}
          {step === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4 h-full flex flex-col justify-center max-w-lg mx-auto w-full"
            >
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-teal-50 to-white border border-teal-100 rounded-2xl p-3 flex items-center gap-4 shrink-0 shadow-[4px_4px_10px_rgba(13,148,136,0.05)] mb-4"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-[4px_4px_8px_rgba(13,148,136,0.3),-2px_-2px_4px_rgba(255,255,255,0.5)_inset]">
                  <Handshake className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-teal-900">Engagement Model</h3>
                  <p className="text-teal-700 text-xs mt-0.5 leading-relaxed">How deep is the partnership?</p>
                </div>
                <div className="ml-auto w-16 h-16 hidden md:block">
                  <InteractiveFloat src={Float1} alt="Partner Float" />
                </div>
              </motion.div>

              <div className="grid grid-cols-1 gap-2">
                {[
                  { id: 'Advisory', icon: <Users />, desc: 'Strategic guidance on GCC setup & scaling' },
                  { id: 'Co-delivery', icon: <Handshake />, desc: 'Shared responsibility for specific outcomes' },
                  { id: 'Managed Services', icon: <Zap />, desc: 'End-to-end management of operations' }
                ].map((m) => (
                  <button
                    key={m.id}
                    onClick={() => onUpdate({ involvement: m.id as InvolvementLevel })}
                    className={`relative p-3 rounded-xl border text-left transition-all group flex items-start gap-3 ${involvement === m.id
                      ? 'border-teal-500 bg-teal-50 text-teal-900 shadow-md ring-1 ring-teal-500'
                      : 'border-gray-100 bg-white text-gray-500 hover:border-teal-200'
                      }`}
                  >
                    <div className={`p-1.5 rounded-lg shrink-0 ${involvement === m.id ? 'bg-teal-600 text-white' : 'bg-gray-100/50'}`}>
                      {React.cloneElement(m.icon as React.ReactElement<{ className?: string }>, { className: 'w-4 h-4' })}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-sm">{m.id}</h4>
                        {involvement === m.id && <span className="text-[9px] font-bold bg-teal-200 text-teal-800 px-2 py-0.5 rounded-full">SELECTED</span>}
                      </div>
                      <p className="text-[11px] opacity-80 leading-snug mt-0.5">{m.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 1: Duration & Governance */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4 h-full flex flex-col justify-center max-w-2xl mx-auto w-full"
            >
              <div className="text-center mb-3">
                <h3 className="text-base font-bold text-gray-900">Terms & Governance</h3>
                <p className="text-xs text-gray-500">Timeline and decision making</p>
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-xs font-bold text-gray-700 uppercase tracking-widest">
                  <Clock className="w-4 h-4 mr-2 text-teal-600" />
                  Partnership Duration
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {['6 Months', '1 Year', '2 Years', '3+ Years'].map(d => (
                    <button
                      key={d}
                      onClick={() => onUpdate({ duration: d })}
                      className={`py-2 rounded-lg border text-[11px] font-bold transition-all ${duration === d ? 'bg-teal-600 border-teal-600 text-white' : 'bg-white border-gray-100 text-gray-400 hover:border-gray-300'}`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest">Decision Authority</label>
                <div className="flex bg-gray-50 p-1 rounded-xl">
                  {['GCC Owned', 'Shared', 'Partner Owned'].map(a => (
                    <button
                      key={a}
                      onClick={() => onUpdate({ authority: a })}
                      className={`flex-1 py-2 rounded-lg text-[11px] font-bold transition-all ${authority === a ? 'bg-white text-teal-800 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                      {a}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase">Review Cadence</label>
                <div className="flex gap-2">
                  {['Weekly', 'Bi-Weekly', 'Monthly'].map(c => (
                    <button
                      key={c}
                      onClick={() => onUpdate({ cadence: c })}
                      className={`px-3 py-1.5 rounded-lg border text-[10px] font-bold ${cadence === c ? 'bg-teal-50 border-teal-500 text-teal-700' : 'bg-white border-gray-100 text-gray-400'}`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 2: Scope & Outcomes */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4 h-full flex flex-col justify-center max-w-4xl mx-auto w-full"
            >
              <div className="text-center mb-3">
                <h3 className="text-base font-bold text-gray-900">Scope & Outcomes</h3>
                <p className="text-xs text-gray-500">Deliverables and success factors</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="flex items-center text-xs font-bold text-gray-700 uppercase tracking-widest">
                    <PieChart className="w-4 h-4 mr-2 text-teal-600" />
                    Required Services
                  </label>
                  <div className="grid grid-cols-1 gap-1.5">
                    {SERVICES.map(s => {
                      const active = services.includes(s);
                      return (
                        <button
                          key={s}
                          onClick={() => toggleArrayItem('services', services, s)}
                          className={`w-full text-left px-3 py-2 rounded-xl border text-[11px] font-bold transition-all ${active ? 'bg-teal-50 border-teal-500 text-teal-800' : 'bg-white border-gray-100 text-gray-400 hover:border-gray-200'}`}
                        >
                          {s}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center text-xs font-bold text-gray-700 uppercase tracking-widest">
                    <BarChart3 className="w-4 h-4 mr-2 text-teal-600" />
                    Target Outcomes
                  </label>
                  <div className="space-y-1.5">
                    {['Faster Time-to-Market', 'Cost Reduction > 30%', 'Process Standardization', 'Access to Niche Talent'].map(o => {
                      const active = outcomes.includes(o);
                      return (
                        <button
                          key={o}
                          onClick={() => toggleArrayItem('outcomes', outcomes, o)}
                          className={`w-full flex items-center justify-between p-2.5 rounded-xl border transition-all ${active ? 'bg-indigo-50 border-indigo-200' : 'bg-white border-gray-100'}`}
                        >
                          <span className={`text-[11px] font-bold ${active ? 'text-indigo-800' : 'text-gray-400'}`}>{o}</span>
                          {active && <div className="w-2 h-2 rounded-full bg-indigo-500" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Navigation Footer */}
      <div className="p-2 border-t border-gray-50 flex items-center justify-between shrink-0 mt-auto">
        <button
          onClick={handlePrev}
          className="flex items-center space-x-2 font-bold px-4 py-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <span className="text-xs">Previous</span>
        </button>
        <div className="flex space-x-1">
          {[0, 1, 2].map(i => (
            <div key={i} className={`w-1.5 h-1.5 rounded-full transition-colors ${step === i ? 'bg-teal-500' : 'bg-gray-200'}`} />
          ))}
        </div>
        <button
          onClick={handleNext}
          className="flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-xl font-bold shadow-lg shadow-teal-200 hover:shadow-teal-300 transition-all active:scale-95"
        >
          <span className="text-xs">Next Step</span>
        </button>
      </div>
    </motion.div>
  );
};
