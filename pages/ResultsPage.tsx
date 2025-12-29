import React from 'react';
import { motion } from 'framer-motion';
import { QuestSnapshot } from '../components/QuestSnapshot';
import { NavigatorState } from '../types';

interface ResultsPageProps {
    state: NavigatorState;
    onReset: () => void;
}

export const ResultsPage: React.FC<ResultsPageProps> = ({ state, onReset }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <QuestSnapshot state={state} onReset={onReset} />
        </motion.div>
    );
};
