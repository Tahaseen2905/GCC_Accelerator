import React from 'react';
import { motion } from 'framer-motion';

export const ParticleBackground: React.FC = () => {
    // Generate random particles - Deep Blue / Silver / Gold Theme
    const particles = [...Array(12)].map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 100 + 50, // Larger, more subtle blobs
        duration: Math.random() * 20 + 20, // Very slow movement
        color: i % 3 === 0 ? '#1e293b' : i % 3 === 1 ? '#e2e8f0' : '#f59e0b', // Slate-900, Slate-200, Amber-500
        opacity: i % 3 === 0 ? 0.03 : 0.05 // Very faint
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-slate-50">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    initial={{ x: `${p.x}vw`, y: `${p.y}vh` }}
                    animate={{
                        y: [`${p.y}vh`, `${p.y - 20}vh`, `${p.y}vh`],
                        x: [`${p.x}vw`, `${p.x + 10}vw`, `${p.x}vw`],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute rounded-full blur-3xl mix-blend-multiply"
                    style={{
                        width: p.size,
                        height: p.size,
                        backgroundColor: p.color,
                        opacity: p.opacity
                    }}
                />
            ))}
        </div>
    );
};
