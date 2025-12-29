import React from 'react';
import { motion } from 'framer-motion';

// Asset Imports - Assuming standard Vite/Webpack handling of image imports
import GlobalExpertise from '@/src/assets/pages/offerings/Why Choose Us Section/Global Expertise.png';
import Growth from '@/src/assets/pages/offerings/Hero Section/Floating/growth.png';
// Using a fallback for Brain if the specific file name varies, but based on list it is 'ai-brain.png'
import AIBrain from '@/src/assets/pages/solutions/ai-solutions/What We Deliver/ai-brain.png';
import PartnershipModel from '@/src/assets/pages/offerings/Why Choose Us Section/Partnership Model.png';
import EnterpriseSecurity from '@/src/assets/pages/offerings/Why Choose Us Section/Enterprise Security.png';
import Partnership from '@/src/assets/pages/solutions/ai-solutions/Where J2W/Partnership.png';

interface TransitionHeroProps {
    questId: number;
}

export const TransitionHero: React.FC<TransitionHeroProps> = ({ questId }) => {
    // Shared "Floating" animation for the weightless feel
    const floatAnim = {
        y: [-10, 10, -10],
        rotate: [-2, 2, -2],
        scale: [1, 1.05, 1],
        transition: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    // Shared "Idle Orbit" for 3D feel simulation
    const orbitAnim = {
        y: [-15, 15, -15],
        rotateY: [-15, 15, -15],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    return (
        <div className="relative w-72 h-72 flex items-center justify-center [perspective:1000px]">
            {/* Unified Ambient Glow */}
            <div className="absolute inset-0 bg-teal-500/10 blur-[80px] rounded-full animate-pulse" />

            {/* Quest 1: Mission - Global Expertise */}
            {questId === 1 && (
                <motion.div animate={orbitAnim} className="relative preserve-3d">
                    <div className="relative w-48 h-48 drop-shadow-2xl">
                        <img src={GlobalExpertise} alt="Mission Global" className="w-full h-full object-contain" />
                    </div>
                </motion.div>
            )}

            {/* Quest 2: Vision - Growth Chart/Rocket */}
            {questId === 2 && (
                <motion.div animate={floatAnim} className="relative preserve-3d">
                    <div className="relative w-56 h-56 drop-shadow-2xl">
                        <img src={Growth} alt="Vision Growth" className="w-full h-full object-contain" />
                    </div>
                    {/* Particle sparkles for growth */}
                    <motion.div
                        animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                        className="absolute top-0 right-10 w-4 h-4 bg-yellow-400 rounded-full blur-sm"
                    />
                </motion.div>
            )}

            {/* Quest 3: Tech - AI Brain */}
            {questId === 3 && (
                <motion.div animate={floatAnim} className="relative preserve-3d">
                    <div className="relative w-56 h-56 drop-shadow-[0_20px_50px_rgba(45,212,191,0.3)]">
                        <img src={AIBrain} alt="Tech AI" className="w-full h-full object-contain" />
                    </div>
                    {/* Tech Rings */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border-2 border-dashed border-teal-400/30 rounded-full scale-125"
                    />
                </motion.div>
            )}

            {/* Quest 4: Team - Partnership Model (Representative of Team Sync) */}
            {questId === 4 && (
                <motion.div animate={floatAnim} className="relative preserve-3d">
                    <div className="relative w-56 h-56 drop-shadow-2xl">
                        <img src={PartnershipModel} alt="Team Partnership" className="w-full h-full object-contain" />
                    </div>
                </motion.div>
            )}

            {/* Quest 5: Governance - Enterprise Security */}
            {questId === 5 && (
                <motion.div animate={floatAnim} className="relative preserve-3d">
                    <div className="relative w-48 h-48 drop-shadow-2xl">
                        <img src={EnterpriseSecurity} alt="Governance Security" className="w-full h-full object-contain" />
                    </div>
                    {/* Shield Glow Pulse */}
                    <motion.div
                        animate={{ opacity: [0, 0.5, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full"
                    />
                </motion.div>
            )}

            {/* Quest 6: Partner - Partnership Handshake */}
            {questId === 6 && (
                <motion.div animate={floatAnim} className="relative preserve-3d">
                    <div className="relative w-56 h-56 drop-shadow-2xl">
                        <img src={Partnership} alt="Global Partnership" className="w-full h-full object-contain" />
                    </div>
                    {/* Connecting Orbits */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-4 border border-teal-500/20 rounded-full border-dashed"
                    />
                </motion.div>
            )}
        </div>
    );
};
