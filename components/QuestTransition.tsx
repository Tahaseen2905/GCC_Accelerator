import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Zap, Users, ShieldCheck, Target, Handshake, TrendingUp, Sparkles, Rocket } from 'lucide-react';
import { TransitionHero } from './TransitionHero';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from 'recharts';

interface QuestTransitionProps {
  questId: number;
  onComplete: () => void;
}

const INDUSTRY_COMPARISON = [
  { sector: 'BFSI', leader: 'JPMorgan', headcount: 55000, color: '#0f766e' },
  { sector: 'Auto', leader: 'Bosch', headcount: 31000, color: '#0d9488' },
  { sector: 'IT/Cloud', leader: 'Microsoft', headcount: 18000, color: '#14b8a6' },
  { sector: 'Pharma', leader: 'Abbott', headcount: 6000, color: '#5eead4' },
];

const EVOLUTION_DATA = [
  { stage: 'Entry', focus: 'Cost', color: '#94a3b8' },
  { stage: 'Growth', focus: 'Scale', color: '#2dd4bf' },
  { stage: 'Mature', focus: 'Optimize', color: '#0d9488' },
  { stage: 'Transform', focus: 'Value', color: '#134e4a' },
];

const TECH_ADOPTION = [
  { tech: 'Cloud', value: 92 },
  { tech: 'AI/ML', value: 85 },
  { tech: 'RPA', value: 78 },
];

const TransitionGraph: React.FC<{ id: number }> = ({ id }) => {
  if (id === 1) {
    return (
      <div className="w-full h-48 mt-2 bg-white rounded-2xl p-3 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-1">
          <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Industry Scale</p>
          <div className="flex items-center space-x-1">
            <span className="w-1.5 h-1.5 bg-teal-600 rounded-full"></span>
            <span className="text-[8px] font-bold text-gray-400">Headcount</span>
          </div>
        </div>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart data={INDUSTRY_COMPARISON} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
            <XAxis dataKey="sector" tick={{ fontSize: 9, fontWeight: 700, fill: '#64748b' }} axisLine={false} tickLine={false} />
            <Tooltip
              cursor={{ fill: '#f0fdfa' }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-white p-1.5 border border-gray-100 shadow-xl rounded-lg">
                      <p className="text-[9px] font-bold text-gray-500">{payload[0].payload.leader}</p>
                      <p className="text-xs font-black text-teal-600">{payload[0].value?.toLocaleString()}+</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar dataKey="headcount" radius={[3, 3, 0, 0]} animationDuration={1000}>
              {INDUSTRY_COMPARISON.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }

  if (id === 2) {
    return (
      <div className="w-full h-48 mt-2 bg-white rounded-2xl p-3 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-1">
          <div className="w-full mt-2 space-y-2">
            <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest text-center">GCC Evolution</p>
            <div className="flex justify-between items-center px-1">
              {EVOLUTION_DATA.map((item, idx) => (
                <div key={item.stage} className="flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + (idx * 0.2) }}
                    style={{ backgroundColor: item.color }}
                    className="w-7 h-7 rounded-full flex items-center justify-center text-white shadow-lg mb-1"
                  >
                    {idx + 1}
                  </motion.div>
                  <span className="text-[8px] font-bold text-gray-600">{item.stage}</span>
                </div>
              ))}
            </div>
            <div className="h-1 bg-gray-100 rounded-full mx-3 mt-1 relative overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, delay: 0.5 }}
                className="h-full bg-teal-500"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (id === 3) {
    return (
      <div className="w-full h-48 mt-2 bg-white rounded-2xl p-3 shadow-sm border border-gray-100 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Tech Priorities</p>
          <div className="flex items-center space-x-1">
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
            <span className="text-[8px] font-bold text-gray-400">% Adopt</span>
          </div>
        </div>

        <div className="space-y-3 px-1 flex-1 flex flex-col justify-center">
          {TECH_ADOPTION.map((t, i) => (
            <div key={t.tech} className="space-y-1">
              <div className="flex justify-between text-[9px] font-bold text-gray-600">
                <span className="flex items-center gap-1.5">
                  {i === 0 && <Rocket className="w-3 h-3 text-teal-500" />}
                  {i === 1 && <Sparkles className="w-3 h-3 text-purple-500" />}
                  {i === 2 && <Zap className="w-3 h-3 text-blue-500" />}
                  {t.tech}
                </span>
                <span>{t.value}%</span>
              </div>
              <div className="h-1.5 bg-gray-50 rounded-full overflow-hidden border border-gray-100">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${t.value}%` }}
                  transition={{ duration: 1, delay: 0.5 + (i * 0.2) }}
                  className={`h-full rounded-full ${i === 0 ? 'bg-teal-500' : i === 1 ? 'bg-purple-500' : 'bg-blue-500'}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return null;
}

const TRANSITION_CONTENT = [
  {
    id: 1,
    title: "Industry Landscape",
    insight: "Benchmarking against Global Leaders.",
    data: "1,800+ GCCs already operational in India",
    icon: <MapPin className="w-12 h-12" />,
    color: "teal"
  },
  {
    id: 2,
    title: "Strategy Calibration",
    insight: "Aligning with the Evolution Framework.",
    data: "65% of mature GCCs now hold Global Process Ownership (GPO)",
    icon: <TrendingUp className="w-12 h-12" />,
    color: "teal"
  },
  {
    id: 3,
    title: "Tech Arsenal",
    insight: "Your stack is AI-Ready.",
    data: "95% of IT GCCs prioritize Agility & AI Governance in 2025",
    icon: <Zap className="w-12 h-12" />,
    color: "red"
  },
  {
    id: 4,
    title: "Building Excellence",
    insight: "Defining a Culture of Global Leadership.",
    data: "~10 Lakhs skilled professionals power the India GCC talent pool",
    icon: <Users className="w-12 h-12" />,
    color: "teal"
  },
  {
    id: 5,
    title: "Governance Vault",
    insight: "Robust controls established.",
    data: "Regulatory compliance is the #1 priority for Board alignment",
    icon: <ShieldCheck className="w-12 h-12" />,
    color: "teal"
  },
  {
    id: 6,
    title: "Ready for Takeoff",
    insight: "Strategic Alignment Complete.",
    data: "Preparing your final 360° Diagnostic Roadmap...",
    icon: <Handshake className="w-12 h-12" />,
    color: "teal"
  }
];

export const QuestTransition: React.FC<QuestTransitionProps> = ({ questId, onComplete }) => {
  const content = TRANSITION_CONTENT[questId - 1];

  useEffect(() => {
    // Lock scroll when transition starts
    document.body.style.overflow = 'hidden';

    // Increased duration to allow reading charts
    const timer = setTimeout(() => {
      onComplete();
    }, 4500);

    return () => {
      // Restore scroll when transition ends
      document.body.style.overflow = 'unset';
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-white p-2 overflow-hidden"
    >
      {/* Background Pulses */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/2 left-1/4 w-96 h-96 bg-teal-500 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 text-center max-w-lg w-full space-y-4">
        <div className="flex justify-center mb-4">
          <TransitionHero questId={questId} />
        </div>

        <div className="space-y-2">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-teal-600 font-black uppercase tracking-[0.2em] text-[10px]"
          >
            Phase {questId} Complete
          </motion.p>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-black text-gray-900 tracking-tight"
          >
            {content.title}
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xs font-medium text-gray-500"
          >
            {content.insight}
          </motion.p>
        </div>

        {/* Dynamic Graph/Insight Component */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <TransitionGraph id={questId} />
        </motion.div>

        {/* Loading Bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.2, duration: 4 }}
          className="h-1 bg-gray-100 rounded-full overflow-hidden mt-6 mx-auto w-1/2"
        >
          <motion.div
            layoutId="transition-bar"
            className={`h-full w-full ${content.color === 'red' ? 'bg-red-500' : 'bg-teal-500'}`}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};
