
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Users, Lightbulb, CheckCircle2, AlertCircle } from 'lucide-react';
import { InteractiveFloat } from './InteractiveFloat';
import { OperatingModel } from '../types';

import Float1 from "@/src/assets/pages/solutions/ai-solutions/Hero Section/float2.png"

interface QuestVisionProps {
  model: OperatingModel;
  objective: string;
  valueProposition: string;
  differentiation: string;
  kpis: string[];
  onUpdate: (data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const MODELS = [
  { id: 'Cost Center', icon: <Database />, desc: 'Focus on labor arbitrage and operational efficiency.' },
  { id: 'Shared Services', icon: <Users />, desc: 'Standardized global processes and shared accountability.' },
  { id: 'Innovation Hub', icon: <Lightbulb />, desc: 'Strategic global ownership and R&D leadership.' },
];

const KPI_OPTIONS = [
  'SLAs (Service Levels)',
  'ROI (Return on Investment)',
  'Cycle Time Reduction',
  'Quality Targets',
  'Attrition Rate',
  'Innovation Conversion',
  'Global Process Ownership',
  'CSAT (Customer Satisfaction)'
];

export const QuestVision: React.FC<QuestVisionProps> = ({
  model,
  objective,
  valueProposition,
  differentiation,
  kpis,
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

  const toggleKpi = (kpi: string) => {
    const newKpis = kpis.includes(kpi)
      ? kpis.filter(k => k !== kpi)
      : [...kpis, kpi];
    onUpdate({ kpis: newKpis });
  };

  const isRoiMissing = !kpis.includes('ROI (Return on Investment)');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col h-full w-full overflow-hidden"
    >
      <div className="flex-1 p-1 overflow-hidden flex flex-col relative bg-white justify-center">
        <AnimatePresence mode="wait">
          {/* Step 1: Operating Model */}
          {step === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-3 h-full flex flex-col justify-center max-w-lg mx-auto w-full"
            >
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-teal-50 to-white border border-teal-100 rounded-2xl p-3 flex items-center gap-4 shrink-0 shadow-[4px_4px_10px_rgba(13,148,136,0.05)] mb-4"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-[4px_4px_8px_rgba(13,148,136,0.3),-2px_-2px_4px_rgba(255,255,255,0.5)_inset]">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-teal-900">Operating Model</h3>
                  <p className="text-teal-700 text-xs mt-0.5 leading-relaxed">Define the core structure of your center.</p>
                </div>
                <div className="ml-auto w-16 h-16 hidden md:block">
                  <InteractiveFloat src={Float1} alt="Vision Float" />
                </div>
              </motion.div>
              <div className="grid grid-cols-1 gap-2">
                {MODELS.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => onUpdate({ model: m.id as OperatingModel })}
                    className={`relative p-3 rounded-xl border text-left transition-all group hover:shadow-md ${model === m.id
                      ? 'border-teal-500 bg-teal-50 ring-2 ring-teal-500/10'
                      : 'border-gray-100 bg-white hover:border-teal-200'
                      }`}
                  >
                    <div className="flex items-center space-x-3 mb-1.5">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${model === m.id ? 'bg-teal-600 text-white' : 'bg-gray-50 text-gray-400 group-hover:text-teal-600'
                        }`}>
                        {React.cloneElement(m.icon as React.ReactElement<{ className?: string }>, { className: 'w-4 h-4' })}
                      </div>
                      <h4 className={`font-bold text-sm ${model === m.id ? 'text-teal-900' : 'text-gray-900'}`}>{m.id}</h4>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed ml-12">{m.desc}</p>
                    {model === m.id && (
                      <div className="absolute top-3 right-3 text-teal-600">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 2: Strategy */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1 flex flex-col gap-4 h-full justify-center max-w-2xl mx-auto w-full"
            >
              <div className="text-center mb-1">
                <h3 className="text-base font-bold text-gray-900">Strategic Value</h3>
                <p className="text-xs text-gray-500">Articulate your competitive advantage</p>
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">Value Proposition</label>
                <textarea
                  className="w-full p-3 bg-white border border-gray-100 focus:border-teal-500 outline-none transition-all rounded-xl text-xs text-gray-700 resize-none shadow-sm h-24"
                  placeholder="What unique value will this center allow you to deliver?"
                  value={valueProposition}
                  onChange={(e) => onUpdate({ valueProposition: e.target.value })}
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">Competitive Differentiation</label>
                <textarea
                  className="w-full p-3 bg-white border border-gray-100 focus:border-teal-500 outline-none transition-all rounded-xl text-xs text-gray-700 resize-none shadow-sm h-24"
                  placeholder="How does this differentiate you from competitors?"
                  value={differentiation}
                  onChange={(e) => onUpdate({ differentiation: e.target.value })}
                />
              </div>
            </motion.div>
          )}

          {/* Step 3: KPIs */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-3 h-full flex flex-col justify-center max-w-4xl mx-auto w-full"
            >
              <div className="flex items-center justify-between shrink-0 mb-3">
                <div>
                  <h3 className="text-base font-bold text-gray-900">Success Metrics</h3>
                  <p className="text-xs text-gray-500">Define how you measure success</p>
                </div>
                {isRoiMissing && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center text-[9px] font-bold text-red-600 uppercase tracking-tighter bg-red-50 px-2 py-1 rounded-full"
                  >
                    <AlertCircle className="w-3 h-3 mr-1" />
                    ROI is critical
                  </motion.div>
                )}
              </div>
              <div className="grid grid-cols-2 gap-2">
                {KPI_OPTIONS.map((kpi) => {
                  const isSelected = kpis.includes(kpi);
                  const isCritical = kpi.includes('ROI');
                  return (
                    <button
                      key={kpi}
                      onClick={() => toggleKpi(kpi)}
                      className={`flex items-center p-3 rounded-xl border transition-all text-left ${isSelected
                        ? 'bg-teal-600 border-teal-600 text-white shadow-md'
                        : 'bg-white border-gray-100 text-gray-500 hover:border-teal-100'
                        }`}
                    >
                      <div className={`w-4 h-4 rounded border flex-shrink-0 mr-2 flex items-center justify-center ${isSelected ? 'bg-white border-white' : 'bg-gray-50 border-gray-200'
                        }`}>
                        {isSelected && <div className="w-2 h-2 bg-teal-600 rounded-sm" />}
                      </div>
                      <span className={`text-[11px] font-bold leading-tight ${isCritical && !isSelected ? 'text-red-900/40' : ''}`}>
                        {kpi}
                      </span>
                    </button>
                  );
                })}
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
