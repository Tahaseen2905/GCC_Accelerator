import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Users, DollarSign, Check, Layout, Briefcase, GraduationCap, Repeat } from 'lucide-react';
import { InteractiveFloat } from './InteractiveFloat';

interface QuestTeamProps {
  headcount: number;
  budget: string;
  location: string;
  workModel: string;
  talentChannels: string[];
  cultureFrameworks: string[];
  infrastructure: string[];
  onUpdate: (data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const LOCATIONS = [
  { name: 'Bengaluru', desc: 'Tech & R&D Hub' },
  { name: 'Hyderabad', desc: 'IT & Bio-Tech Hub' },
  { name: 'Pune', desc: 'Auto & Engineering Hub' },
  { name: 'Chennai', desc: 'SaaS & Auto Hub' },
  { name: 'NCR', desc: 'Global Services Hub' },
  { name: 'Mumbai', desc: 'Financial Tech Hub' }
];

const CHANNELS = [
  { id: 'Direct Hire', icon: <Briefcase className="w-4 h-4" /> },
  { id: 'Partner Agencies', icon: <Users className="w-4 h-4" /> },
  { id: 'Campus Programs', icon: <GraduationCap className="w-4 h-4" /> },
  { id: 'Internal Transfers', icon: <Repeat className="w-4 h-4" /> }
];

const FRAMEWORKS = [
  'Leadership Development',
  'Innovation Labs',
  'Upskilling & Certs',
  'Wellness Programs',
  'DEI Framework',
  'Global Mentorship'
];

export const QuestTeam: React.FC<QuestTeamProps> = ({
  headcount,
  budget,
  location,
  workModel,
  talentChannels,
  cultureFrameworks,
  infrastructure,
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
      <div className="flex-1 p-2 overflow-hidden flex flex-col relative bg-white">
        <AnimatePresence mode="wait">
          {/* Step 0: Scale (Headcount & Budget) */}
          {step === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6 h-full flex flex-col justify-center max-w-lg mx-auto w-full"
            >
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-teal-50 to-white border border-teal-100 rounded-2xl p-4 flex items-start gap-4 shrink-0 shadow-[4px_4px_10px_rgba(13,148,136,0.05)] mb-6"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-[4px_4px_8px_rgba(13,148,136,0.3),-2px_-2px_4px_rgba(255,255,255,0.5)_inset]">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-teal-900">Team Scale</h3>
                  <p className="text-teal-700 text-sm mt-1 leading-relaxed">Define the size and investment for Year 1.</p>
                </div>
                <div className="ml-auto w-24 h-24 hidden md:block">
                  <InteractiveFloat src="../src/assets/pages/solutions/ai-solutions/Hero Section/float4.png" alt="Team Float" />
                </div>
              </motion.div>

              <div className="space-y-4">
                <label className="flex items-center text-sm font-bold text-gray-700 uppercase tracking-widest">
                  <Users className="w-4 h-4 mr-2 text-teal-600" />
                  Year 1 Headcount: <span className="text-teal-600 ml-2 text-lg">{headcount}</span>
                </label>
                <div className="relative pt-2">
                  <input
                    type="range" min="10" max="1000" step="10"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
                    value={headcount}
                    onChange={e => onUpdate({ headcount: parseInt(e.target.value) })}
                  />
                  <div className="flex justify-between text-[10px] text-gray-400 mt-2 font-bold">
                    <span>10 FTE</span>
                    <span>500 FTE</span>
                    <span>1000 FTE</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="flex items-center text-sm font-bold text-gray-700 uppercase tracking-widest">
                  <DollarSign className="w-4 h-4 mr-2 text-teal-600" />
                  Operating Budget Range
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {['$1M-5M', '$5M-15M', '$15M+'].map(b => (
                    <button
                      key={b}
                      onClick={() => onUpdate({ budget: b })}
                      className={`py-4 rounded-xl border font-bold text-sm transition-all ${budget === b ? 'border-teal-500 bg-teal-50 text-teal-700 shadow-md' : 'border-gray-100 text-gray-500 hover:border-teal-200'
                        }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 1: Location Strategy */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6 h-full flex flex-col justify-center max-w-2xl mx-auto w-full"
            >
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-gray-900">Location Strategy</h3>
                <p className="text-sm text-gray-500">Where will your team be based?</p>
              </div>

              <div className="space-y-3">
                <label className="flex items-center text-sm font-bold text-gray-700 uppercase tracking-widest justify-center">
                  Work Model
                </label>
                <div className="flex justify-center space-x-2">
                  {['On-site', 'Hybrid', 'Remote'].map(m => (
                    <button
                      key={m}
                      onClick={() => onUpdate({ workModel: m })}
                      className={`px-6 py-2 rounded-full text-xs font-bold uppercase border transition-all ${workModel === m ? 'bg-teal-600 border-teal-600 text-white shadow-md' : 'bg-white border-gray-100 text-gray-500 hover:border-gray-200'
                        }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="flex items-center text-sm font-bold text-gray-700 uppercase tracking-widest">
                  <MapPin className="w-4 h-4 mr-2 text-teal-600" />
                  Hub Location
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {LOCATIONS.map(loc => (
                    <button
                      key={loc.name}
                      onClick={() => onUpdate({ location: loc.name })}
                      className={`p-4 rounded-xl border text-left transition-all relative overflow-hidden group ${location === loc.name ? 'border-teal-500 bg-teal-50 ring-1 ring-teal-500/10 shadow-sm' : 'border-gray-100 bg-white hover:border-teal-100'
                        }`}
                    >
                      <p className={`font-bold text-xs uppercase ${location === loc.name ? 'text-teal-900' : 'text-gray-900'}`}>{loc.name}</p>
                      <p className="text-[10px] text-gray-500 mt-1 whitespace-nowrap overflow-hidden text-ellipsis">{loc.desc}</p>
                      {location === loc.name && (
                        <div className="absolute top-2 right-2">
                          <Check className="w-3 h-3 text-teal-600" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 2: Talent & Ops */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4 h-full flex flex-col justify-center max-w-4xl mx-auto w-full"
            >
              <div className="text-center mb-2">
                <h3 className="text-lg font-bold text-gray-900">Talent & Operations</h3>
                <p className="text-sm text-gray-500">Building the right culture and infrastructure</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="flex items-center text-xs font-bold text-gray-700 uppercase tracking-widest">
                    Talent Channels
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {CHANNELS.map(ch => {
                      const active = talentChannels.includes(ch.id);
                      return (
                        <button
                          key={ch.id}
                          onClick={() => toggleArrayItem('talentChannels', talentChannels, ch.id)}
                          className={`p-3 rounded-xl border flex flex-col items-center justify-center text-center transition-all ${active ? 'border-teal-500 bg-teal-50 shadow-sm' : 'border-gray-100 bg-white hover:border-gray-200'
                            }`}
                        >
                          <div className={`mb-1 ${active ? 'text-teal-600' : 'text-gray-300'}`}>
                            {React.cloneElement(ch.icon as React.ReactElement<{ className?: string }>, { className: 'w-4 h-4' })}
                          </div>
                          <span className={`text-[9px] font-bold uppercase tracking-tighter ${active ? 'text-teal-900' : 'text-gray-500'}`}>{ch.id}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center text-xs font-bold text-gray-700 uppercase tracking-widest">
                    Culture Frameworks
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {FRAMEWORKS.map(f => {
                      const active = cultureFrameworks.includes(f);
                      return (
                        <button
                          key={f}
                          onClick={() => toggleArrayItem('cultureFrameworks', cultureFrameworks, f)}
                          className={`px-3 py-1.5 rounded-full border text-[9px] font-bold transition-all ${active ? 'bg-teal-600 border-teal-600 text-white' : 'bg-white border-gray-100 text-gray-500 hover:border-teal-200'
                            }`}
                        >
                          {f}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 space-y-2 mt-2">
                <label className="flex items-center text-xs font-bold text-gray-900 uppercase tracking-widest">
                  <Layout className="w-3 h-3 mr-2" />
                  Workspace Infrastructure
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {['Premium Grade-A', 'Co-working Flex', 'Digital-First', 'Satellite Hubs'].map(inf => {
                    const active = infrastructure.includes(inf);
                    return (
                      <button
                        key={inf}
                        onClick={() => toggleArrayItem('infrastructure', infrastructure, inf)}
                        className={`p-2 rounded-lg border text-[9px] font-bold transition-all ${active ? 'bg-white border-teal-600 text-teal-800 shadow-sm' : 'bg-white border-gray-200 text-gray-400'
                          }`}
                      >
                        {inf}
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation Footer */}
      <div className="p-2 border-t border-gray-50 flex items-center justify-between shrink-0">
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
