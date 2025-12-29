import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Server, X, Plus } from 'lucide-react';
import { InteractiveFloat } from './InteractiveFloat';
import { TechState } from '../types';

interface QuestTechProps {
    platforms: string[];
    stacks: string[];
    cloudStrategy: string;
    aiUseCases: string[];
    customPlatform?: string;
    customStack?: string;
    customAiUseCase?: string;
    onUpdate: (data: Partial<TechState>) => void;
    onNext: () => void;
    onPrev: () => void;
}

export const QuestTech: React.FC<QuestTechProps> = ({
    platforms,
    stacks,
    cloudStrategy,
    aiUseCases,
    customPlatform,
    customStack,
    customAiUseCase,
    onUpdate,
    onNext,
    onPrev
}) => {
    const [step, setStep] = useState(0);
    const [newStackInput, setNewStackInput] = useState('');

    const handleNext = () => {
        if (step < 3) setStep(s => s + 1);
        else onNext();
    };

    const handlePrev = () => {
        if (step > 0) setStep(s => s - 1);
        else onPrev();
    };

    const handleAddStack = () => {
        if (newStackInput.trim()) {
            const updatedStacks = [...stacks, newStackInput.trim()];
            onUpdate({ stacks: updatedStacks, customStack: newStackInput.trim() });
            setNewStackInput('');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col h-full w-full overflow-hidden"
        >
            <div className="flex-1 p-1 overflow-hidden flex flex-col relative justify-center">
                <AnimatePresence mode="wait">
                    {/* Page 1: Core Platforms */}
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
                                    <Server className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-teal-900">Core Platforms</h3>
                                    <p className="text-teal-700 text-xs mt-0.5 leading-relaxed">What are the foundational systems for your center?</p>
                                </div>
                                <div className="ml-auto w-16 h-16 hidden md:block">
                                    <InteractiveFloat src="../src/assets/pages/solutions/ai-solutions/Hero Section/float3.png" alt="Tech Float" />
                                </div>
                            </motion.div>

                            <div className="grid grid-cols-2 gap-2">
                                {['SAP', 'Oracle', 'Salesforce', 'ServiceNow', 'Workday'].map(p => (
                                    <button
                                        key={p}
                                        onClick={() => {
                                            const ps = platforms.includes(p) ? platforms.filter(x => x !== p) : [...platforms, p];
                                            onUpdate({ platforms: ps });
                                        }}
                                        className={`p-3 rounded-xl text-xs font-bold transition-all border text-center ${platforms.includes(p) ? 'bg-teal-600 border-teal-600 text-white shadow-md' : 'bg-white border-gray-100 text-gray-500 hover:border-teal-200'}`}
                                    >
                                        {p}
                                    </button>
                                ))}
                            </div>

                            <input
                                className="w-full p-3 text-xs bg-gray-50 border border-gray-100 rounded-xl outline-none focus:bg-white focus:border-teal-500 transition-all text-center"
                                placeholder="Other platform..."
                                value={customPlatform || ''}
                                onChange={e => onUpdate({ customPlatform: e.target.value })}
                            />
                        </motion.div>
                    )}

                    {/* Page 2: Stack Preferences */}
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-3 h-full flex flex-col justify-center"
                        >
                            <div className="text-center mb-3">
                                <h3 className="text-base font-bold text-gray-900">Technology Stack</h3>
                                <p className="text-xs text-gray-500">Select preferred languages and frameworks</p>
                            </div>

                            <div className="flex flex-wrap gap-2 justify-center mb-3">
                                {['.NET', 'React', 'Python', 'Go', 'Node.js', 'Kotlin'].map(p => {
                                    const isSelected = stacks.includes(p);
                                    return (
                                        <button
                                            key={p}
                                            onClick={() => {
                                                const ps = isSelected ? stacks.filter(x => x !== p) : [...stacks, p];
                                                onUpdate({ stacks: ps });
                                            }}
                                            className={`px-5 py-2 rounded-full text-xs font-bold border transition-all ${isSelected ? 'bg-teal-600 border-teal-600 text-white' : 'bg-white border-gray-100 text-gray-500 hover:border-gray-200'}`}
                                        >
                                            {p}
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Custom Stacks */}
                            <div className="flex flex-wrap gap-2 justify-center">
                                {stacks.filter(s => !['.NET', 'React', 'Python', 'Go', 'Node.js', 'Kotlin'].includes(s)).map(s => (
                                    <button
                                        key={s}
                                        onClick={() => onUpdate({ stacks: stacks.filter(x => x !== s) })}
                                        className="px-3 py-1.5 rounded-full text-[10px] font-bold bg-teal-50 border border-teal-200 text-teal-700 flex items-center space-x-1"
                                    >
                                        <span>{s}</span>
                                        <X className="w-3 h-3" />
                                    </button>
                                ))}
                            </div>

                            <div className="flex gap-2 max-w-sm mx-auto w-full mt-3">
                                <input
                                    className="flex-grow p-2.5 text-xs border border-gray-100 rounded-xl outline-none focus:border-teal-500"
                                    placeholder="Add unique technology..."
                                    value={newStackInput}
                                    onChange={e => setNewStackInput(e.target.value)}
                                    onKeyPress={e => e.key === 'Enter' && handleAddStack()}
                                />
                                <button
                                    onClick={handleAddStack}
                                    className="bg-teal-50 text-teal-600 p-2.5 rounded-xl hover:bg-teal-100 transition-colors"
                                >
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* Page 3: Cloud Strategy */}
                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-3 h-full flex flex-col justify-center"
                        >
                            <div className="text-center mb-4">
                                <h3 className="text-base font-bold text-gray-900">Cloud Strategy</h3>
                                <p className="text-xs text-gray-500">How will you deploy your infrastructure?</p>
                            </div>

                            <div className="grid grid-cols-1 gap-2 max-w-md mx-auto w-full">
                                {['Public Cloud First', 'Hybrid Infrastructure', 'Multi-Cloud Native', 'On-Prem / Private Cloud'].map(strategy => (
                                    <button
                                        key={strategy}
                                        onClick={() => onUpdate({ cloudStrategy: strategy })}
                                        className={`p-4 rounded-xl border text-left transition-all relative group ${cloudStrategy === strategy ? 'border-teal-500 bg-teal-50 text-teal-900 shadow-md' : 'border-gray-100 bg-white text-gray-500 hover:border-teal-100'}`}
                                    >
                                        <span className="font-bold block text-xs">{strategy}</span>
                                        {cloudStrategy === strategy && <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-teal-500 rounded-full" />}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Page 4: AI/ML Use Cases */}
                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-3 h-full flex flex-col justify-center max-w-lg mx-auto w-full"
                        >
                            <div className="text-center mb-4">
                                <h3 className="text-base font-bold text-gray-900">AI & ML Capabilities</h3>
                                <p className="text-xs text-gray-500">Select target use cases for the center</p>
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                                {['Fraud Detection', 'Supply Chain Opt', 'Predictive Analytics', 'GenAI Support', 'Vision Intelligence'].map(u => (
                                    <button
                                        key={u}
                                        onClick={() => {
                                            const us = aiUseCases.includes(u) ? aiUseCases.filter(x => x !== u) : [...aiUseCases, u];
                                            onUpdate({ aiUseCases: us });
                                        }}
                                        className={`p-3 rounded-xl text-[11px] text-center border transition-all font-bold ${aiUseCases.includes(u) ? 'bg-teal-50 border-teal-500 text-teal-700 shadow-sm' : 'bg-white border-gray-100 text-gray-400 hover:border-gray-200'}`}
                                    >
                                        {u}
                                    </button>
                                ))}
                            </div>

                            <div className="mt-2">
                                <textarea
                                    className="w-full p-3 text-xs bg-white border border-teal-50 rounded-xl outline-none focus:border-teal-500 h-20 transition-all resize-none"
                                    placeholder="Suggest Your Own Use Case..."
                                    value={customAiUseCase || ''}
                                    onChange={e => onUpdate({ customAiUseCase: e.target.value })}
                                />
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
                    {[0, 1, 2, 3].map(i => (
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
