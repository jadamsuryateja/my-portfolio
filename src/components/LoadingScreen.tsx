import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
    const [text, setText] = useState('INITIALIZING...');
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const texts = [
            'INITIALIZING NEURAL LINK...',
            'LOADING CORE MODULES...',
            'OPTIMIZING INTERFACE...',
            'ACCESS GRANTED'
        ];
        let currentIndex = 0;

        const textInterval = setInterval(() => {
            currentIndex++;
            if (currentIndex < texts.length) {
                setText(texts[currentIndex]);
            }
        }, 1200);

        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                return prev + 1;
            });
        }, 40);

        const completeTimeout = setTimeout(() => {
            clearInterval(textInterval);
            clearInterval(progressInterval);
            onComplete();
        }, 5000); // Total loading time 5s

        return () => {
            clearInterval(textInterval);
            clearInterval(progressInterval);
            clearTimeout(completeTimeout);
        };
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center font-mono text-white overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            {/* Central Glitch Text */}
            <div className="relative z-10 mb-8">
                <motion.h1
                    key={text}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-2xl md:text-4xl font-black tracking-widest glitched-text"
                    data-text={text}
                >
                    {text}
                </motion.h1>
            </div>

            {/* Progress Bar Container */}
            <div className="relative z-10 w-64 md:w-96 h-2 bg-gray-900 rounded-full overflow-hidden border border-gray-800">
                <motion.div
                    className="h-full bg-gradient-to-r from-orange-500 to-yellow-500 shadow-[0_0_15px_rgba(249,115,22,0.6)]"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: "linear" }}
                />
            </div>

            {/* Bottom Percentage */}
            <div className="mt-4 font-mono text-orange-500 text-sm">
                {progress}% COMPLETED
            </div>

            {/* Decorative Corners */}
            <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-orange-500/50" />
            <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-orange-500/50" />

        </motion.div>
    );
};

export default LoadingScreen;
