import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

function VibesCard() {
    const { t, isTransitioning, fontClass } = useLanguage();

    const vibes = [
        { icon: '🎧', labelKey: 'music', emoji: '🎵' },
        { icon: '🔭', labelKey: 'interests', emoji: '🚀' },
        { icon: '🌍', labelKey: 'languages', emoji: '💬' },
        { icon: '💭', labelKey: 'philosophy', emoji: '🌌' },
    ];

    return (
        <motion.div
            className="card vibe-card col-span-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
        >
            <AnimatePresence mode="wait">
                <motion.h3
                    key={`vibes-title`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isTransitioning ? 0 : 1 }}
                    className={`text-lg font-bold text-[var(--text-primary)] mb-4 ${fontClass}`}
                >
                    ✨ {t('vibesTitle')}
                </motion.h3>
            </AnimatePresence>

            <div className="space-y-3">
                {vibes.map((vibe, index) => (
                    <motion.div
                        key={vibe.labelKey}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                    >
                        <span className="text-xl">{vibe.icon}</span>
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={`vibe-${vibe.labelKey}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isTransitioning ? 0 : 1 }}
                                className={`text-sm text-[var(--text-secondary)] leading-relaxed ${fontClass}`}
                            >
                                {t(vibe.labelKey)}
                            </motion.p>
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>

            {/* Vibe Coder Badge */}
            <motion.div
                className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-medium"
                whileHover={{ scale: 1.05 }}
                animate={{
                    boxShadow: ['0 0 0 rgba(168,85,247,0.4)', '0 0 20px rgba(168,85,247,0.6)', '0 0 0 rgba(168,85,247,0.4)']
                }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <span>⚡</span>
                {t('vibeCoder')}
            </motion.div>
        </motion.div>
    );
}

export default VibesCard;
