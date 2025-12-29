
import React, { useState, useEffect } from 'react';
import { QUEST_CONFIG } from '../constants';
import { NavigatorState, DigitalMaturity, OperatingModel, EntityType, InvolvementLevel } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Lock, Unlock, Info, Plus, X, Server, Sparkles, LogOut } from 'lucide-react';
import { QuestMission } from './QuestMission';
import { QuestVision } from './QuestVision';
import { QuestTeam } from './QuestTeam';
import { QuestGovernance } from './QuestGovernance';
import { QuestPartner } from './QuestPartner';
import { QuestTech } from './QuestTech';
import { QuestTransition } from './QuestTransition';

interface QuestFormProps {
  onComplete: (state: NavigatorState) => void;
  onUpdateScore: (score: number) => void;
  onExit: () => void;
}

export const QuestForm: React.FC<QuestFormProps> = ({ onComplete, onUpdateScore, onExit }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showTransition, setShowTransition] = useState(false);
  const [newStackInput, setNewStackInput] = useState('');
  const [state, setState] = useState<NavigatorState>({
    mission: { industry: '', companyName: '', goals: [], maturity: 'Defined', timeline: '6-12 months' },
    vision: { model: 'Innovation Hub', objective: '', valueProposition: '', differentiation: '', kpis: [] },
    tech: { platforms: [], stacks: [], cloudStrategy: '', aiUseCases: [], customPlatform: '', customStack: '', customAiUseCase: '' },
    team: { headcount: 100, budget: '', location: '', workModel: 'Hybrid', talentChannels: [], cultureFrameworks: [], infrastructure: [] },
    governance: { entityType: 'Pvt Ltd', parentIntegration: '', complianceStandards: [], ipOwnership: 'Global', reportingCadence: 'Monthly', riskMitigation: [], ecosystemPartners: [] },
    partner: { involvement: 'Advisory', duration: '2 years', authority: 'Shared', cadence: 'Weekly', services: [], outcomes: [] },
  });
  const [showFeedback, setShowFeedback] = useState(false);

  // Scroll to top whenever the step changes or transition ends
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep, showTransition]);

  useEffect(() => {
    // Advanced score calculation based on J2W maturity framework
    let baseScore = (currentStep - 1) * 12;

    // Tech Maturity
    if (state.tech.customStack || state.tech.customAiUseCase) baseScore += 8;
    if (state.tech.cloudStrategy.includes('Cloud-Native')) baseScore += 5;

    // Vision quality bonus
    if (state.vision.model === 'Innovation Hub') baseScore += 10;
    if (state.vision.kpis.includes('Innovation Conversion')) baseScore += 5;
    if (state.vision.kpis.includes('ROI (Return on Investment)')) baseScore += 5;

    // Team & Culture bonus
    if (state.team.cultureFrameworks.length >= 3) baseScore += 7;
    if (state.team.infrastructure.includes('Digital-First')) baseScore += 5;

    // Governance maturity bonus
    if (state.governance.complianceStandards.length >= 4) baseScore += 10;
    if (state.governance.riskMitigation.length >= 2) baseScore += 5;
    if (state.governance.ecosystemPartners.length >= 3) baseScore += 5;

    // Partner involvement boost
    if (state.partner.involvement === 'Managed Services') baseScore += 10;
    if (state.partner.involvement === 'Co-delivery') baseScore += 7;

    onUpdateScore(Math.min(baseScore, 100));

    if (currentStep === 5 && state.governance.complianceStandards.length === 0) {
      setShowFeedback(true);
      setTimeout(() => setShowFeedback(false), 5000);
    }
  }, [currentStep, state, onUpdateScore]);

  const next = () => {
    if (currentStep <= 6) {
      setShowTransition(true);
    }
  };

  const handleTransitionComplete = () => {
    setShowTransition(false);
    if (currentStep < 6) setCurrentStep(prev => prev + 1);
    else onComplete(state);
  };

  const prev = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  const updateState = (quest: keyof NavigatorState, data: any) => {
    setState(prev => ({
      ...prev,
      [quest]: { ...prev[quest], ...data }
    }));
  };

  const handleAddStack = () => {
    if (newStackInput.trim()) {
      const updatedStacks = [...state.tech.stacks, newStackInput.trim()];
      updateState('tech', { stacks: updatedStacks, customStack: newStackInput.trim() });
      setNewStackInput('');
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <QuestMission
            industry={state.mission.industry}
            companyName={state.mission.companyName}
            goals={state.mission.goals}
            maturity={state.mission.maturity}
            onUpdate={(data) => updateState('mission', data)}
            onNext={next}
            onPrev={prev}
          />
        );
      case 2:
        return (
          <QuestVision
            model={state.vision.model}
            objective={state.vision.objective}
            valueProposition={state.vision.valueProposition}
            differentiation={state.vision.differentiation}
            kpis={state.vision.kpis}
            onUpdate={(data) => updateState('vision', data)}
            onNext={next}
            onPrev={prev}
          />
        );
      case 3:
        return (
          <QuestTech
            platforms={state.tech.platforms}
            stacks={state.tech.stacks}
            cloudStrategy={state.tech.cloudStrategy}
            aiUseCases={state.tech.aiUseCases}
            customPlatform={state.tech.customPlatform}
            customStack={state.tech.customStack}
            customAiUseCase={state.tech.customAiUseCase}
            onUpdate={(data) => updateState('tech', data)}
            onNext={next}
            onPrev={prev}
          />
        );
      case 4:
        return (
          <QuestTeam
            headcount={state.team.headcount}
            budget={state.team.budget}
            location={state.team.location}
            workModel={state.team.workModel}
            talentChannels={state.team.talentChannels}
            cultureFrameworks={state.team.cultureFrameworks}
            infrastructure={state.team.infrastructure}
            onUpdate={(data) => updateState('team', data)}
            onNext={next}
            onPrev={prev}
          />
        );
      case 5:
        return (
          <QuestGovernance
            entityType={state.governance.entityType}
            parentIntegration={state.governance.parentIntegration}
            complianceStandards={state.governance.complianceStandards}
            ipOwnership={state.governance.ipOwnership}
            reportingCadence={state.governance.reportingCadence}
            riskMitigation={state.governance.riskMitigation}
            ecosystemPartners={state.governance.ecosystemPartners}
            onUpdate={(data) => updateState('governance', data)}
            onNext={next}
            onPrev={prev}
          />
        );
      case 6:
        return (
          <QuestPartner
            involvement={state.partner.involvement}
            duration={state.partner.duration}
            authority={state.partner.authority}
            cadence={state.partner.cadence}
            services={state.partner.services}
            outcomes={state.partner.outcomes}
            onUpdate={(data) => updateState('partner', data)}
            onNext={next}
            onPrev={prev}
          />
        );
      default:
        return null;
    }
  };

  const isFinalStep = currentStep === 6;

  return (
    <div className="w-full relative">
      <AnimatePresence>
        {showTransition && (
          <QuestTransition
            questId={currentStep}
            onComplete={handleTransitionComplete}
          />
        )}
      </AnimatePresence>

      <div className="bg-white overflow-hidden relative h-screen flex flex-col">
        {/* Progress Sidebar */}
        <div className="flex border-b border-gray-100 overflow-x-auto no-scrollbar bg-white relative">
          {isFinalStep && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute bottom-0 left-0 right-0 h-1 bg-teal-600 shadow-[0_0_15px_rgba(13,148,136,0.8)] z-10"
            />
          )}

          {QUEST_CONFIG.map(q => {
            const isActive = currentStep === q.id;
            const isCompleted = currentStep > q.id;

            return (
              <div
                key={q.id}
                className={`flex-1 min-w-[80px] flex flex-col items-center py-3 transition-colors relative ${isActive ? 'bg-teal-50' : 'bg-white'}`}
              >
                <motion.div
                  animate={isActive ? { y: [0, -4, 0], scale: [1, 1.05, 1] } : {}}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className={`w-10 h-10 rounded-2xl flex items-center justify-center mb-1 transition-all duration-500 relative z-10
                  ${isCompleted || isActive
                      ? 'bg-gradient-to-br from-teal-400 to-teal-600 text-white shadow-[4px_4px_8px_rgba(13,148,136,0.3),-2px_-2px_4px_rgba(255,255,255,0.5)_inset,2px_2px_4px_rgba(0,0,0,0.1)_inset]'
                      : 'bg-gray-100 text-gray-400 shadow-[inset_1px_1px_3px_rgba(0,0,0,0.05)]'
                    }`}
                >
                  {isCompleted ? <Unlock className="w-4 h-4" /> : isActive ? q.icon : <Lock className="w-4 h-4" />}
                </motion.div>
                <span className={`text-[8px] font-bold uppercase tracking-widest hidden sm:block mt-1 ${isCompleted || isActive ? 'text-teal-900' : 'text-gray-400'}`}>{q.title}</span>
                {isActive && <motion.div layoutId="quest-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600" />}
              </div>
            )
          })}
        </div>

        <div className="flex-1 p-3 sm:p-4 relative w-full h-full flex flex-col overflow-hidden">

          {/* <div className="absolute top-8 right-10 z-20">
            <button
              onClick={onExit}
              className="flex items-center space-x-2 bg-gray-50 border border-gray-100 px-2 py-1 sm:px-3 sm:py-1.5 rounded-xl text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.1em] text-gray-500 hover:bg-red-50 hover:text-red-600 hover:border-red-100 transition-all shadow-sm group"
            >
              <LogOut className="w-2.5 h-2.5 sm:w-3 sm:h-3 group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to Dashboard</span>
            </button>
          </div> */}

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col h-full"
            >
              {/* <div className="space-y-2 pr-24 flex-shrink-0">
                <div className="flex items-center space-x-2">
                  <h2 className="text-lg sm:text-xl font-extrabold text-teal-900 leading-none">Quest {currentStep}: {QUEST_CONFIG[currentStep - 1].title}</h2>
                  {isFinalStep && <Sparkles className="w-4 h-4 text-teal-500 animate-pulse" />}
                </div>
                <p className="text-xs font-medium text-gray-400">Step {currentStep} of 6</p>
              </div> */}

              <div className="flex-grow overflow-hidden flex flex-col justify-center">
                {renderStep()}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer Removed - Navigation delegated to components */}
      </div>

      <AnimatePresence>
        {showFeedback && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-red-600 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center space-x-3 z-50 whitespace-nowrap"
          >
            <Info className="w-5 h-5" />
            <span className="font-black text-xs uppercase tracking-widest">Compliance standards are mandatory for global entities.</span>
          </motion.div>
        )}
      </AnimatePresence>

      <style>
        {`
          @keyframes pulse-red {
            0% { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.4); }
            70% { box-shadow: 0 0 0 15px rgba(220, 38, 38, 0); }
            100% { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0); }
          }
        `}
      </style>
    </div>
  );
};
