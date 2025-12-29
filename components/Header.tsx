
import React from 'react';
import { Compass, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  score: number;
}

export const Header: React.FC<HeaderProps> = ({ score }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b z-40 h-20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white">
            <Compass className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-teal-900 leading-none">GCC</h1>
            <p className="text-xs font-semibold text-red-600 uppercase tracking-widest">Accelerator</p>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-teal-600 transition-colors">Framework</a>
            <a href="#" className="hover:text-teal-600 transition-colors">Insights</a>
            <a href="#" className="hover:text-teal-600 transition-colors">Success Stories</a>
          </nav>

          <div className="flex items-center bg-teal-50 border border-teal-100 rounded-full px-4 py-1.5 space-x-2">
            <Trophy className="w-4 h-4 text-teal-600" />
            <span className="text-sm font-bold text-teal-800">Score:</span>
            <AnimatePresence mode="popLayout">
              <motion.span
                key={score}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className="text-sm font-extrabold text-teal-600 min-w-[2ch] inline-block"
              >
                {score}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
};
