import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';
import { IndustryCards } from '../components/IndustryCards';
import { EvolutionStepper } from '../components/EvolutionStepper';

interface LandingPageProps {
    onStart: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full"
        >
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Hero onStart={onStart} />
                </div>
            </section>

            {/* Industry Landscape Section */}
            <section className="w-full bg-teal-50/40 py-24 border-y border-teal-100/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <IndustryCards />
                </div>
            </section>

            {/* Evolution Framework Section */}
            <section className="w-full bg-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#008080 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <EvolutionStepper />
                </div>
            </section>
        </motion.div>
    );
};
