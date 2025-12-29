
import React from 'react';
import {
  ArrowRight,
  Play,
  TrendingUp,
  Users,
  Target,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Layout,
  BarChart3,
  Globe,
  Cpu,
  Shield,
  Lightbulb
} from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onStart: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 py-6 lg:py-10 min-h-[calc(100vh-80px)]">
      {/* Left Content Side */}
      <div className="w-full lg:max-w-xl xl:max-w-2xl space-y-4 lg:space-y-6 z-30 text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 text-red-600 text-[9px] font-black uppercase tracking-[0.2em] border border-red-100"
        >
          <span className="flex h-1.5 w-1.5 rounded-full bg-red-600 mr-2 animate-pulse"></span>
          Strategic GCC Diagnostic v2.0
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.1]"
        >
          Your India <br />
          <span className="text-teal-600">Innovation Hub</span> <br />
          Starts Here.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xs md:text-sm text-gray-500 max-w-lg leading-relaxed font-medium"
        >
          Go beyond labor arbitrage. Navigate the complexity of scaling, governance, and AI transformation with JoulesToWatts' precision diagnostic roadmap.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 pt-2"
        >
          <button
            onClick={onStart}
            className="pulse-teal relative z-40 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center transition-all group shadow-2xl shadow-teal-600/30"
          >
            Start Navigator Quest
            <ArrowRight className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Right Visual Side with Orbital Elements */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex-1 relative w-full lg:min-h-[400px] flex items-center justify-center scale-90 lg:scale-100 origin-center"
      >
        {/* Decorative Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-gradient-to-tr from-teal-50 to-red-50 rounded-full blur-[60px] opacity-50 -z-10" />

        {/* Orbital Pillar 1: Technology (Fast) */}
        <div className="absolute top-0 left-0 z-20 animate-float hidden md:block">
          <div className="bg-white p-2 rounded-xl shadow-lg border border-teal-50 flex items-center space-x-2 backdrop-blur-md bg-white/90">
            <div className="w-6 h-6 rounded-lg bg-teal-600 flex items-center justify-center text-white">
              <Cpu className="w-3 h-3" />
            </div>
            <div className="pr-1">
              <p className="text-[8px] font-black text-gray-900 uppercase leading-none">Technology</p>
              <p className="text-[7px] font-bold text-teal-500 mt-0.5">AI-Ready</p>
            </div>
          </div>
        </div>

        {/* Orbital Pillar 2: Talent (Slow) */}
        <div className="absolute bottom-10 -left-4 z-20 animate-float-slow hidden md:block">
          <div className="bg-white p-2 rounded-xl shadow-lg border border-gray-100 flex items-center space-x-2 backdrop-blur-md bg-white/90">
            <div className="w-6 h-6 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600">
              <Users className="w-3 h-3" />
            </div>
            <div className="pr-1">
              <p className="text-[8px] font-black text-gray-900 uppercase leading-none">Talent</p>
              <p className="text-[7px] font-bold text-gray-400 mt-0.5">10L+ Pros</p>
            </div>
          </div>
        </div>

        {/* Orbital Pillar 3: Governance (Slow) */}
        <div className="absolute -top-4 right-8 z-20 animate-float-slow hidden md:block">
          <div className="bg-white p-2 rounded-xl shadow-lg border border-gray-100 flex items-center space-x-2 backdrop-blur-md bg-white/90">
            <div className="w-6 h-6 rounded-lg bg-red-50 flex items-center justify-center text-red-600">
              <Shield className="w-3 h-3" />
            </div>
            <div className="pr-1">
              <p className="text-[8px] font-black text-gray-900 uppercase leading-none">Governance</p>
              <p className="text-[7px] font-bold text-red-400 mt-0.5">Mitigated</p>
            </div>
          </div>
        </div>

        {/* Orbital Pillar 4: Innovation (Fast) */}
        <div className="absolute bottom-4 right-0 z-20 animate-float hidden md:block">
          <div className="bg-white p-2 rounded-xl shadow-lg border border-teal-50 flex items-center space-x-2 backdrop-blur-md bg-white/90">
            <div className="w-6 h-6 rounded-lg bg-teal-900 flex items-center justify-center text-teal-400">
              <Lightbulb className="w-3 h-3" />
            </div>
            <div className="pr-1">
              <p className="text-[8px] font-black text-gray-900 uppercase leading-none">Innovation</p>
              <p className="text-[7px] font-bold text-teal-600 mt-0.5">Value Led</p>
            </div>
          </div>
        </div>

        {/* Central Dashboard Preview "Window" */}
        <div className="relative w-full max-w-[380px] aspect-[4/5] bg-white rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden flex flex-col group">
          {/* Header Bar */}
          <div className="h-10 border-b border-gray-50 flex items-center justify-between px-4 bg-gray-50/50">
            <div className="flex space-x-1">
              <div className="w-2 h-2 rounded-full bg-red-400"></div>
              <div className="w-2 h-2 rounded-full bg-teal-200"></div>
              <div className="w-2 h-2 rounded-full bg-teal-400"></div>
            </div>
            <div className="bg-white px-2 py-0.5 rounded-full border border-gray-100 flex items-center space-x-1.5">
              <Globe className="w-2 h-2 text-teal-600" />
              <span className="text-[8px] font-black text-gray-400 uppercase tracking-tighter">j2w-navigator.io</span>
            </div>
            <div className="w-6 h-6 rounded-lg bg-teal-100/50 border border-teal-200 flex items-center justify-center">
              <Layout className="w-2.5 h-2.5 text-teal-600" />
            </div>
          </div>

          {/* Body Content */}
          <div className="flex-1 p-4 space-y-4 bg-gradient-to-b from-white to-gray-50/20">
            {/* Maturity Gauge */}
            <div className="p-4 bg-teal-900 rounded-[1.5rem] text-white shadow-lg relative overflow-hidden group-hover:scale-[1.01] transition-transform duration-500">
              <div className="absolute top-0 right-0 w-20 h-20 bg-teal-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-xl"></div>
              <div className="flex items-center justify-between mb-1">
                <p className="text-[8px] font-black uppercase tracking-[0.2em] opacity-60">Global Maturity</p>
                <Zap className="w-3 h-3 text-red-500" />
              </div>
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-black">4.8</span>
                <span className="text-teal-400 font-bold text-[9px] uppercase">Transform</span>
              </div>
              <div className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '88%' }}
                  transition={{ duration: 2, delay: 0.5 }}
                  className="h-full bg-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.5)]"
                />
              </div>
            </div>

            {/* Widget Grid */}
            <div className="grid grid-cols-2 gap-2">
              <div className="p-3 bg-white rounded-xl border border-gray-100 shadow-sm space-y-1.5 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="w-6 h-6 rounded-lg bg-teal-50 flex items-center justify-center">
                    <Users className="w-3 h-3 text-teal-600" />
                  </div>
                  <TrendingUp className="w-2 h-2 text-teal-500" />
                </div>
                <div>
                  <p className="text-[7px] font-black text-gray-400 uppercase">Talent</p>
                  <p className="text-sm font-black text-teal-900">Tier 1A</p>
                </div>
              </div>

              <div className="p-3 bg-white rounded-xl border border-gray-100 shadow-sm space-y-1.5 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="w-6 h-6 rounded-lg bg-red-50 flex items-center justify-center">
                    <ShieldCheck className="w-3 h-3 text-red-600" />
                  </div>
                  <CheckCircle2 className="w-2 h-2 text-teal-500" />
                </div>
                <div>
                  <p className="text-[7px] font-black text-gray-400 uppercase">Security</p>
                  <p className="text-sm font-black text-teal-900">98%</p>
                </div>
              </div>
            </div>

            {/* Strategy Chart Mini */}
            <div className="p-4 bg-white rounded-[1.5rem] border border-gray-100 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-[8px] font-black text-gray-900 uppercase tracking-widest">Growth Curve</p>
                <BarChart3 className="w-3 h-3 text-gray-300" />
              </div>
              <div className="flex items-end justify-between h-10 gap-1.5">
                {[40, 65, 85, 100].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 1 + i * 0.1, duration: 0.8 }}
                      className={`w-full rounded-t-sm ${i === 3 ? 'bg-red-600' : 'bg-teal-600/20'}`}
                    />
                    <span className="text-[6px] font-bold text-gray-400">M{i * 3 + 3}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Badge */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full border border-gray-100 shadow-lg flex items-center space-x-2">
            <span className="w-1 h-1 rounded-full bg-teal-600 animate-pulse"></span>
            <span className="text-[7px] font-black text-teal-900 uppercase tracking-widest whitespace-nowrap">Benchmarking 500+ GCC Ecosystems</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
