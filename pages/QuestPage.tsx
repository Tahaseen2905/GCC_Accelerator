import React from 'react';
import { motion } from 'framer-motion';
import { QuestForm } from '../components/QuestForm';
import { NavigatorState } from '../types';

interface QuestPageProps {
    onComplete: (data: NavigatorState) => void;
    onUpdateScore: (score: number) => void;
    onExit: () => void;
}

export const QuestPage: React.FC<QuestPageProps> = ({ onComplete, onUpdateScore, onExit }) => {
    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            className="w-full"
        >
            <QuestForm onComplete={onComplete} onUpdateScore={onUpdateScore} onExit={onExit} />
        </motion.div>
    );
};
