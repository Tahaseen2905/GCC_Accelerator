import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Sparkles, ChevronRight, BarChart3, ShieldCheck, Zap, Phone, TrendingUp } from 'lucide-react';
import { NavigatorState } from '../types';

interface QuestSnapshotProps {
    state: NavigatorState;
    onReset: () => void;
}

export const QuestSnapshot: React.FC<QuestSnapshotProps> = ({ state, onReset }) => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row"
            >
                {/* Left Panel: Teaser & Archetype */}
                <div className="w-full md:w-5/12 bg-gradient-to-br from-teal-600 to-teal-800 p-8 text-white relative overflow-hidden flex flex-col justify-between">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none"
                        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                    />

                    <div>
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center space-x-2 text-teal-200 mb-6 font-bold text-xs tracking-widest uppercase"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span>Analysis Complete</span>
                        </motion.div>

                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-3xl font-black mb-2"
                        >
                            Your AI Center Strategy is Ready.
                        </motion.h1>

                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-teal-100/80 text-sm leading-relaxed"
                        >
                            We've calibrated your inputs against 500+ global GCC benchmarks.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-12 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                    >
                        <div className="text-teal-200 text-xs font-bold uppercase tracking-widest mb-2">Detected Archetype</div>
                        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-100">
                            {state.vision.model || "Innovation Hub"}
                        </div>
                        <div className="mt-4 flex items-center space-x-2 text-xs text-white/80">
                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            <span>High Potential for ROI</span>
                        </div>
                    </motion.div>
                </div>

                {/* Right Panel: Teaser & Locked Details */}
                <div className="w-full md:w-7/12 flex flex-col relative bg-gray-50/50">

                    {/* VISIBLE TEASER SECTION */}
                    <div className="p-8 pb-4 z-10">
                        <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                            <span className="bg-teal-100 text-teal-800 p-2 rounded-lg mr-3">
                                <BarChart3 className="w-5 h-5" />
                            </span>
                            Executive Summary
                        </h2>

                        <div className="grid grid-cols-2 gap-4">
                            {/* Score Card */}
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100"
                            >
                                <div className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-2">Maturity Score</div>
                                <div className="flex items-end space-x-2">
                                    <div className="text-4xl font-black text-teal-600">72</div>
                                    <div className="text-sm text-gray-400 font-bold mb-1">/ 100</div>
                                </div>
                                <div className="mt-3 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "72%" }}
                                        transition={{ delay: 1, duration: 1.5 }}
                                        className="h-full bg-teal-500 rounded-full"
                                    />
                                </div>
                            </motion.div>

                            {/* ROI Card */}
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.7 }}
                                className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100"
                            >
                                <div className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-2">Projected Savings</div>
                                <div className="text-4xl font-black text-gray-800">$2.4M</div>
                                <div className="mt-2 flex items-center text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded w-fit">
                                    <TrendingUp className="w-3 h-3 mr-1" />
                                    <span>+15% Year 1</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* LOCKED & BLURRED SECTION */}
                    <div className="flex-1 relative p-8 pt-4 overflow-hidden">
                        <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6 opacity-50">
                            <h2 className="text-lg font-bold text-gray-400">Strategic Implementation Map</h2>
                        </div>

                        {/* Blurred Content */}
                        <div className="space-y-4 filter blur-[6px] opacity-60 select-none pointer-events-none">
                            {/* Item 1 */}
                            <div className="bg-white border border-gray-200 p-5 rounded-xl flex items-center justify-between shadow-sm">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-teal-50 rounded-lg" />
                                    <div className="space-y-2">
                                        <div className="h-4 w-48 bg-gray-200 rounded" />
                                        <div className="h-3 w-32 bg-gray-100 rounded" />
                                    </div>
                                </div>
                            </div>
                            {/* Item 2 */}
                            <div className="bg-white border border-gray-200 p-5 rounded-xl flex items-center justify-between shadow-sm">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-purple-50 rounded-lg" />
                                    <div className="space-y-2">
                                        <div className="h-4 w-56 bg-gray-200 rounded" />
                                        <div className="h-3 w-40 bg-gray-100 rounded" />
                                    </div>
                                </div>
                            </div>
                            {/* Item 3 */}
                            <div className="bg-white border border-gray-200 p-5 rounded-xl flex items-center justify-between shadow-sm">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-blue-50 rounded-lg" />
                                    <div className="space-y-2">
                                        <div className="h-4 w-56 bg-gray-200 rounded" />
                                        <div className="h-3 w-40 bg-gray-100 rounded" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* OVERLAY CTA */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.5, duration: 0.8 }}
                            className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50/60 z-20 backdrop-blur-[2px]"
                        >
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 2.8, duration: 0.5 }}
                                className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl border border-gray-100 text-center max-w-sm w-full mx-4"
                            >
                                <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4 text-teal-600 shadow-inner">
                                    <Lock className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Unlock Detailed Roadmap</h3>
                                <p className="text-gray-500 text-xs mb-6 leading-relaxed">
                                    Get the full 15-page PDF report with budget breakdowns, hiring timelines, and vendor recommendations.
                                </p>
                                <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3.5 rounded-xl flex items-center justify-center space-x-2 transition-all shadow-lg hover:shadow-teal-500/30 group active:scale-95">
                                    <span>Contact J2W Experts</span>
                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <div className="mt-4 flex items-center justify-center space-x-2 text-[10px] text-gray-400 font-bold uppercase tracking-wide">
                                    <Phone className="w-3 h-3" />
                                    <span>OR CALL: +91 80 4646 0000</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className="p-4 text-center border-t border-gray-100 bg-white z-10 rounded-br-3xl">
                        <button
                            onClick={onReset}
                            className="text-gray-400 text-xs font-bold hover:text-gray-600 transition-colors uppercase tracking-widest"
                        >
                            Start New Assessment
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
