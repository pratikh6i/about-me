import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { assetPath } from '../data/content';

const ChristmasGreeting = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 5000); // Show for 5 seconds total, then fade away over 3s as requested

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -20, transition: { duration: 3 } }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-6 pointer-events-none"
                >
                    <div className="relative max-w-lg w-full bg-white/10 backdrop-blur-xl rounded-3xl p-1 shadow-2xl overflow-hidden pointer-events-auto border border-white/20">
                        {/* Image with Border Fade (using mask-image) */}
                        <div
                            className="relative w-full aspect-video rounded-2xl overflow-hidden"
                            style={{
                                maskImage: 'radial-gradient(circle, black 60%, transparent 100%)',
                                WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 100%)'
                            }}
                        >
                            <img
                                src={`${assetPath}/christmas-greeting.png`}
                                alt="Merry Christmas"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Overlay Text/Vibe */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-black/10"
                        >
                            <h2 className="text-3xl font-bold text-white drop-shadow-lg mb-2">
                                Merry Christmas!
                            </h2>
                            <p className="text-lg text-white/90 drop-shadow-md font-medium">
                                Wishing you happy holidays! 🎄✨
                            </p>
                        </motion.div>

                        {/* Close Button */}
                        <button
                            onClick={() => setIsVisible(false)}
                            className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors backdrop-blur-md"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ChristmasGreeting;
