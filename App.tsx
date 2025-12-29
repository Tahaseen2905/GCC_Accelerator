
import React, { useState, useEffect } from 'react';

import { LandingPage } from './pages/LandingPage';
import { QuestPage } from './pages/QuestPage';
import { ResultsPage } from './pages/ResultsPage';
import { QuestSnapshot } from './components/QuestSnapshot';
import { NavigatorState } from './types';
import { AnimatePresence, motion } from 'framer-motion';
import { QuestForm } from './components/QuestForm';

const INITIAL_STATE: NavigatorState = {
  mission: { industry: '', companyName: '', goals: [], maturity: 'Defined', timeline: '6-12 months' },
  vision: { model: 'Innovation Hub', objective: '', valueProposition: '', differentiation: '', kpis: [] },
  tech: { platforms: [], stacks: [], cloudStrategy: '', aiUseCases: [] },
  team: {
    headcount: 100,
    budget: '',
    location: '',
    workModel: 'Hybrid',
    talentChannels: [],
    cultureFrameworks: [],
    infrastructure: []
  },
  governance: {
    entityType: 'Pvt Ltd',
    parentIntegration: '',
    complianceStandards: [],
    ipOwnership: 'Global',
    reportingCadence: 'Monthly',
    riskMitigation: [],
    ecosystemPartners: []
  },
  partner: {
    involvement: 'Advisory',
    duration: '2 years',
    authority: 'Shared',
    cadence: 'Weekly',
    services: [],
    outcomes: []
  },
};

import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';

const App: React.FC = () => {
  const navigate = useNavigate();
  const [state, setState] = useState<NavigatorState>(INITIAL_STATE);
  const [score, setScore] = useState(0);

  const handleStartQuest = () => {
    navigate('/quest');
  };

  const handleExitQuest = () => {
    navigate('/');
  };

  const handleQuestComplete = (finalState: NavigatorState) => {
    setState(finalState);
    navigate('/loading');
    setTimeout(() => {
      navigate('/results');
    }, 2500);
  };

  const updateScore = (newScore: number) => setScore(newScore);

  return (
    <div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<LandingPage onStart={handleStartQuest} />} />
            <Route path="/quest" element={
              <QuestPage
                onComplete={handleQuestComplete}
                onUpdateScore={updateScore}
                onExit={handleExitQuest}
              />
            } />
            <Route path="/loading" element={
              <motion.div
                key="loading"
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
              >
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 border-8 border-teal-100 rounded-full"></div>
                  <motion.div
                    className="absolute inset-0 border-8 border-t-teal-600 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  ></motion.div>
                </div>
                <motion.h2
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="mt-8 text-2xl font-bold text-teal-800"
                >
                  Generating AI Diagnostic Report...
                </motion.h2>
                <p className="text-gray-500 mt-2">Calibrating maturity scores against 500+ GCCs</p>
              </motion.div>
            } />
            <Route path="/results" element={
              <ResultsPage state={state} onReset={() => navigate('/')} />
            } />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default App;
