
import React, { useState } from 'react';
import { EVOLUTION_STAGES } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export const EvolutionStepper: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <div className="space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-red-600 font-black text-[10px] uppercase tracking-[0.3em] mb-2"
        >
          Maturity Roadmap
        </motion.div>
        <h2 className="text-4xl font-black text-gray-900 tracking-tight">Evolution Framework</h2>
        <p className="text-gray-500 font-medium leading-relaxed">
          Transition through JoulesToWatts' professional 4-stage lifecycle for GCC excellence.
        </p>
      </div>

      <div className="relative pt-8">
        {/* Progressive Connector Line */}
        <div className="absolute top-[6.5rem] left-[10%] right-[10%] h-[2px] bg-gray-100 z-0 hidden lg:block"></div>
        <motion.div 
          className="absolute top-[6.5rem] left-[10%] h-[2px] bg-teal-600 z-0 hidden lg:block"
          initial={{ width: 0 }}
          animate={{ width: `${(activeStage / (EVOLUTION_STAGES.length - 1)) * 80}%` }}
          transition={{ duration: 0.8 }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {EVOLUTION_STAGES.map((stage, idx) => (
            <motion.div 
              key={stage.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`flex flex-col items-center text-center cursor-pointer group px-4`}
              onClick={() => setActiveStage(idx)}
            >
              <div className={`w-24 h-24 rounded-3xl flex items-center justify-center mb-6 transition-all duration-500 relative ${activeStage === idx ? 'bg-teal-600 text-white shadow-2xl shadow-teal-600/30 scale-110' : 'bg-white border border-gray-100 text-gray-400 hover:border-teal-200 hover:text-teal-600'}`}>
                {React.cloneElement(stage.icon as React.ReactElement<{ className?: string }>, { className: "w-8 h-8" })}
                
                {/* Step Marker */}
                <div className={`absolute -top-2 -right-2 w-7 h-7 rounded-xl font-black text-[10px] flex items-center justify-center border-2 ${activeStage === idx ? 'bg-red-600 border-white text-white' : 'bg-white border-gray-100 text-gray-400'}`}>
                  {idx + 1}
                </div>
              </div>
              
              <div className={`space-y-2 transition-all duration-500 ${activeStage === idx ? 'opacity-100' : 'opacity-60'}`}>
                <h3 className="text-lg font-black text-gray-900 tracking-tight">{stage.title}</h3>
                <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">{stage.id} phase</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Reverted Linear Summary Card - Purely Text-Based */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="max-w-4xl mx-auto mt-8 p-12 bg-white rounded-[3rem] shadow-xl border border-gray-50 text-center space-y-6"
        >
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-[10px] font-black text-white bg-teal-600 px-4 py-1.5 rounded-full uppercase tracking-[0.2em]">Phase 0{activeStage + 1}</span>
              <span className="text-[10px] font-black text-red-600 uppercase tracking-widest">Core Strategy</span>
            </div>
            
            <h4 className="text-3xl font-black text-teal-900 tracking-tight">
              {EVOLUTION_STAGES[activeStage].title}
            </h4>
            
            <p className="text-lg text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
              In this stage, the focus is on {EVOLUTION_STAGES[activeStage].details.toLowerCase()}. 
              This linear progression ensures all operational and strategic foundations are established before moving to subsequent growth tiers.
            </p>

           
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
