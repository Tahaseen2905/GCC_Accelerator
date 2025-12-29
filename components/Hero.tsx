
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
    <section className="relative flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12 py-12 lg:py-20">
      {/* Left Content Side */}
      <div className="w-full lg:max-w-xl xl:max-w-2xl space-y-6 lg:space-y-8 z-30 text-left lg:pt-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center px-4 py-1.5 rounded-full bg-red-50 text-red-600 text-[10px] font-black uppercase tracking-[0.2em] border border-red-100"
        >
          <span className="flex h-1.5 w-1.5 rounded-full bg-red-600 mr-2 animate-pulse"></span>
          Strategic GCC Diagnostic v2.0
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.2]"
        >
          Your India <br />
          <span className="text-teal-600">Innovation Hub</span> <br />
          Starts Here.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm md:text-base text-gray-500 max-w-lg leading-relaxed font-medium"
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
            className="pulse-teal relative z-40 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-black text-[11px] uppercase tracking-widest flex items-center justify-center transition-all group shadow-2xl shadow-teal-600/30"
          >
            Start Navigator Quest
            <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          {/* <button className="flex items-center justify-center space-x-3 text-gray-900 font-black text-[11px] uppercase tracking-widest px-6 py-4 hover:text-teal-600 transition-colors group">
            <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center shadow-sm group-hover:border-teal-200 group-hover:shadow-lg transition-all">
              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
            </div>
            <span>Methodology</span>
          </button> */}
        </motion.div>
      </div>

      {/* Right Visual Side with Orbital Elements */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex-1 relative w-full lg:min-h-[500px] flex items-start justify-center"
      >
        {/* Decorative Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-teal-50 to-red-50 rounded-full blur-[80px] opacity-50 -z-10" />

        {/* Orbital Pillar 1: Technology (Fast) */}
        <div className="absolute top-4 -left-4 z-20 animate-float hidden md:block">
          <div className="bg-white p-3 rounded-xl shadow-xl border border-teal-50 flex items-center space-x-3 backdrop-blur-md bg-white/90">
            <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white">
              <Cpu className="w-4 h-4" />
            </div>
            <div className="pr-1">
              <p className="text-[9px] font-black text-gray-900 uppercase leading-none">Technology</p>
              <p className="text-[8px] font-bold text-teal-500 mt-1">AI-Ready</p>
            </div>
          </div>
        </div>

        {/* Orbital Pillar 2: Talent (Slow) */}
        <div className="absolute bottom-16 -left-8 z-20 animate-float-slow hidden md:block">
          <div className="bg-white p-3 rounded-xl shadow-xl border border-gray-100 flex items-center space-x-3 backdrop-blur-md bg-white/90">
            <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600">
              <Users className="w-4 h-4" />
            </div>
            <div className="pr-1">
              <p className="text-[9px] font-black text-gray-900 uppercase leading-none">Talent</p>
              <p className="text-[8px] font-bold text-gray-400 mt-1">10L+ Pros</p>
            </div>
          </div>
        </div>

        {/* Orbital Pillar 3: Governance (Slow) */}
        <div className="absolute top-0 -right-4 z-20 animate-float-slow hidden md:block">
          <div className="bg-white p-3 rounded-xl shadow-xl border border-gray-100 flex items-center space-x-3 backdrop-blur-md bg-white/90">
            <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-600">
              <Shield className="w-4 h-4" />
            </div>
            <div className="pr-1">
              <p className="text-[9px] font-black text-gray-900 uppercase leading-none">Governance</p>
              <p className="text-[8px] font-bold text-red-400 mt-1">Mitigated</p>
            </div>
          </div>
        </div>

        {/* Orbital Pillar 4: Innovation (Fast) */}
        <div className="absolute bottom-8 -right-8 z-20 animate-float hidden md:block">
          <div className="bg-white p-3 rounded-xl shadow-xl border border-teal-50 flex items-center space-x-3 backdrop-blur-md bg-white/90">
            <div className="w-8 h-8 rounded-lg bg-teal-900 flex items-center justify-center text-teal-400">
              <Lightbulb className="w-4 h-4" />
            </div>
            <div className="pr-1">
              <p className="text-[9px] font-black text-gray-900 uppercase leading-none">Innovation</p>
              <p className="text-[8px] font-bold text-teal-600 mt-1">Value Led</p>
            </div>
          </div>
        </div>

        {/* Central Dashboard Preview "Window" */}
        <div className="relative w-full max-w-[480px] aspect-[4/5] bg-white rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden flex flex-col group">
          {/* Header Bar */}
          <div className="h-14 border-b border-gray-50 flex items-center justify-between px-6 bg-gray-50/50">
            <div className="flex space-x-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-teal-200"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-teal-400"></div>
            </div>
            <div className="bg-white px-3 py-1 rounded-full border border-gray-100 flex items-center space-x-2">
              <Globe className="w-2.5 h-2.5 text-teal-600" />
              <span className="text-[9px] font-black text-gray-400 uppercase tracking-tighter">j2w-navigator.io</span>
            </div>
            <div className="w-8 h-8 rounded-lg bg-teal-100/50 border border-teal-200 flex items-center justify-center">
              <Layout className="w-3.5 h-3.5 text-teal-600" />
            </div>
          </div>

          {/* Body Content */}
          <div className="flex-1 p-6 space-y-6 bg-gradient-to-b from-white to-gray-50/20">
            {/* Maturity Gauge */}
            <div className="p-5 bg-teal-900 rounded-[2rem] text-white shadow-lg relative overflow-hidden group-hover:scale-[1.01] transition-transform duration-500">
              <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] opacity-60">Global Maturity</p>
                <Zap className="w-3.5 h-3.5 text-red-500" />
              </div>
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl font-black">4.8</span>
                <span className="text-teal-400 font-bold text-[10px] uppercase">Transform</span>
              </div>
              <div className="mt-3 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '88%' }}
                  transition={{ duration: 2, delay: 0.5 }}
                  className="h-full bg-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.5)]"
                />
              </div>
            </div>

            {/* Widget Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm space-y-2 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="w-7 h-7 rounded-lg bg-teal-50 flex items-center justify-center">
                    <Users className="w-3.5 h-3.5 text-teal-600" />
                  </div>
                  <TrendingUp className="w-2.5 h-2.5 text-teal-500" />
                </div>
                <div>
                  <p className="text-[8px] font-black text-gray-400 uppercase">Talent</p>
                  <p className="text-lg font-black text-teal-900">Tier 1A</p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm space-y-2 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="w-7 h-7 rounded-lg bg-red-50 flex items-center justify-center">
                    <ShieldCheck className="w-3.5 h-3.5 text-red-600" />
                  </div>
                  <CheckCircle2 className="w-2.5 h-2.5 text-teal-500" />
                </div>
                <div>
                  <p className="text-[8px] font-black text-gray-400 uppercase">Security</p>
                  <p className="text-lg font-black text-teal-900">98%</p>
                </div>
              </div>
            </div>

            {/* Strategy Chart Mini */}
            <div className="p-5 bg-white rounded-[2rem] border border-gray-100 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-[9px] font-black text-gray-900 uppercase tracking-widest">Growth Curve</p>
                <BarChart3 className="w-3.5 h-3.5 text-gray-300" />
              </div>
              <div className="flex items-end justify-between h-14 gap-2">
                {[40, 65, 85, 100].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 1 + i * 0.1, duration: 0.8 }}
                      className={`w-full rounded-t-lg ${i === 3 ? 'bg-red-600' : 'bg-teal-600/20'}`}
                    />
                    <span className="text-[7px] font-bold text-gray-400">M{i * 3 + 3}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Badge */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 px-5 py-2 bg-white/90 backdrop-blur-md rounded-full border border-gray-100 shadow-lg flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-600 animate-pulse"></span>
            <span className="text-[8px] font-black text-teal-900 uppercase tracking-widest whitespace-nowrap">Benchmarking 500+ GCC Ecosystems</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
