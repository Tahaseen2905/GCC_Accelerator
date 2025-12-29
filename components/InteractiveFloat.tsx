import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface InteractiveFloatProps {
    src: string;
    alt: string;
    className?: string;
    depth?: number;
}

export const InteractiveFloat: React.FC<InteractiveFloatProps> = ({ src, alt, className = "", depth = 20 }) => {
    const ref = useRef<HTMLDivElement>(null);

    // Mouse position state
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring animation for the movement
    const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = ref.current?.getBoundingClientRect();
        if (rect) {
            const width = rect.width;
            const height = rect.height;
            const mouseXPos = e.clientX - rect.left - width / 2;
            const mouseYPos = e.clientY - rect.top - height / 2;
            x.set(mouseXPos);
            y.set(mouseYPos);
        }
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    // Calculate rotation and position based on mouse interaction
    const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
    const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);
    const moveX = useTransform(mouseX, [-300, 300], [-depth, depth]);
    const moveY = useTransform(mouseY, [-300, 300], [-depth, depth]);

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: 1000,
            }}
            className={`relative flex items-center justify-center cursor-pointer ${className}`}
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    x: moveX,
                    y: moveY,
                }}
                className="relative preserve-3d"
            >
                {/* Glow/Shadow effect behind */}
                <motion.div
                    className="absolute inset-0 bg-teal-500/20 blur-3xl rounded-full translate-z-[-20px]"
                    animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />

                <img
                    src={src}
                    alt={alt}
                    className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                />

                {/* Floating particles effect */}
                <motion.div
                    animate={{ y: [-10, -20, -10], opacity: [0, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                    className="absolute -top-4 -right-4 w-3 h-3 bg-yellow-400 rounded-full blur-[1px]"
                />
                <motion.div
                    animate={{ y: [10, 20, 10], opacity: [0, 1, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
                    className="absolute -bottom-2 -left-2 w-2 h-2 bg-teal-400 rounded-full blur-[1px]"
                />
            </motion.div>
        </motion.div>
    );
};
