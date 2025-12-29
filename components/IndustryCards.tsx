
import React from 'react';
import { INDUSTRIES } from '../constants';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight,
  TrendingUp
} from 'lucide-react';

// High-Fidelity SVG Components mimicking the requested Google Flat Icon style
const BFSIcon = () => (
  <svg viewBox="0 0 512 512" className="w-12 h-12">
    <rect x="64" y="320" width="384" height="64" rx="8" fill="#4285F4" />
    <rect x="96" y="160" width="48" height="160" rx="4" fill="#669DF6" />
    <rect x="176" y="160" width="48" height="160" rx="4" fill="#669DF6" />
    <rect x="256" y="160" width="48" height="160" rx="4" fill="#669DF6" />
    <rect x="336" y="160" width="48" height="160" rx="4" fill="#669DF6" />
    <path d="M256 32L64 160h384L256 32z" fill="#1967D2" />
    <circle cx="256" cy="416" r="32" fill="#FBBC04" />
  </svg>
);

const ITIcon = () => (
  <svg viewBox="0 0 512 512" className="w-12 h-12">
    <rect x="48" y="96" width="416" height="288" rx="24" fill="#E8EAED" />
    <rect x="72" y="120" width="368" height="208" rx="8" fill="#202124" />
    <rect x="208" y="384" width="96" height="32" fill="#BDC1C6" />
    <rect x="144" y="416" width="224" height="16" rx="8" fill="#9AA0A6" />
    <path d="M256 48l48 80h-96z" fill="#34A853" />
    <path d="M400 64l-40 40 40 40 40-40z" fill="#EA4335" />
    <circle cx="100" cy="64" r="24" fill="#FBBC04" />
    <text x="145" y="260" fill="#4285F4" fontSize="120" fontWeight="bold" fontFamily="Arial">IT</text>
  </svg>
);

const HealthcareIcon = () => (
  <svg viewBox="0 0 512 512" className="w-12 h-12">
    <path d="M256 448l-32-32C112 304 48 240 48 160a112 112 0 01200-64 112 112 0 01200 64c0 80-64 144-176 256l-32 32z" fill="#EA4335" />
    <rect x="224" y="144" width="64" height="160" rx="8" fill="white" />
    <rect x="176" y="192" width="160" height="64" rx="8" fill="white" />
    <circle cx="384" cy="128" r="48" fill="#4285F4" opacity="0.2" />
  </svg>
);

const AutoIcon = () => (
  <svg viewBox="0 0 512 512" className="w-12 h-12">
    <path d="M448 256h-32l-32-96H128l-32 96H64a32 32 0 00-32 32v96a32 32 0 0032 32h32a48 48 0 0096 0h128a48 48 0 0096 0h32a32 32 0 0032-32v-96a32 32 0 00-32-32z" fill="#FBBC04" />
    <path d="M128 160l32-64h192l32 64z" fill="#F7CB4D" />
    <rect x="96" y="288" width="64" height="32" rx="8" fill="white" />
    <rect x="352" y="288" width="64" height="32" rx="8" fill="white" />
    <circle cx="128" cy="416" r="32" fill="#3C4043" />
    <circle cx="384" cy="416" r="32" fill="#3C4043" />
  </svg>
);

const getIndustryStyle = (industry: string) => {
  switch (industry) {
    case 'BFSI':
      return {
        visual: <BFSIcon />,
        color: 'text-blue-600',
        bg: 'bg-blue-50',
        border: 'border-blue-100',
        accent: 'bg-blue-600'
      };
    case 'IT':
      return {
        visual: <ITIcon />,
        color: 'text-teal-600',
        bg: 'bg-teal-50',
        border: 'border-teal-100',
        accent: 'bg-teal-600'
      };
    case 'Healthcare':
      return {
        visual: <HealthcareIcon />,
        color: 'text-rose-600',
        bg: 'bg-rose-50',
        border: 'border-rose-100',
        accent: 'bg-rose-600'
      };
    case 'Automotive':
      return {
        visual: <AutoIcon />,
        color: 'text-amber-600',
        bg: 'bg-amber-50',
        border: 'border-amber-100',
        accent: 'bg-amber-600'
      };
    default:
      return {
        visual: <ITIcon />,
        color: 'text-teal-600',
        bg: 'bg-teal-50',
        border: 'border-teal-100',
        accent: 'bg-teal-600'
      };
  }
};

export const IndustryCards: React.FC = () => {
  return (
    <div className="space-y-16">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-teal-600 font-black text-[10px] uppercase tracking-[0.3em] mb-2"
        >
          Ecosystem Intelligence
        </motion.div>
        <h2 className="text-4xl font-black text-gray-900 tracking-tight">Industry Landscape</h2>
        <p className="text-gray-500 font-medium leading-relaxed">
          Explore the current GCC footprint across key sectors in India's booming innovation market.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {INDUSTRIES.map((item, idx) => {
          const style = getIndustryStyle(item.industry);
          return (
            <motion.div
              key={item.industry}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -12 }}
              className="bg-white p-7 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-teal-900/5 transition-all relative overflow-hidden group"
            >
              {/* Background Decoration */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${style.bg} rounded-full translate-x-12 -translate-y-12 opacity-40 group-hover:scale-125 transition-transform duration-700`}></div>
              
              <div className="flex items-start justify-between mb-10 relative z-10">
                <div className={`w-20 h-20 bg-white border border-gray-50 rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  {style.visual}
                </div>
                <div className="flex flex-col items-end">
                  <span className={`text-[9px] font-black ${style.color} ${style.bg} px-3 py-1.5 rounded-full uppercase tracking-wider border ${style.border}`}>
                    {item.industry}
                  </span>
                </div>
              </div>
              
              <div className="space-y-6 relative z-10">
                <div>
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Total Impact</p>
                  <div className="flex items-baseline space-x-2">
                    <p className="text-2xl font-black text-gray-900 leading-none">{item.headcount}</p>
                    <ArrowUpRight className="w-4 h-4 text-teal-500" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-3 h-3 text-teal-600" />
                      <p className="text-[9px] text-gray-400 font-black uppercase tracking-widest">CSAT</p>
                    </div>
                    <p className="text-lg font-black text-teal-600">{item.csat}</p>
                  </div>
                  <div className="space-y-1 text-right">
                    <p className="text-[9px] text-gray-400 font-black uppercase tracking-widest">Attrition</p>
                    <p className="text-lg font-black text-rose-500">{item.attrition}</p>
                  </div>
                </div>

                {/* Progress Bar Visualization */}
                <div className="mt-2 h-1.5 w-full bg-gray-50 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '85%' }}
                    viewport={{ once: true }}
                    className={`h-full ${style.accent} opacity-80 shadow-[0_0_8px_rgba(0,0,0,0.1)]`}
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
