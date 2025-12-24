import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

function CloudHeroCard() {
    const { t, isTransitioning, fontClass } = useLanguage();

    return (
        <motion.div
            className="card trophy-card col-span-6 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
        >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 shimmer pointer-events-none" />

            {/* Content */}
            <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                    <motion.div
                        className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-4xl shadow-lg"
                        animate={{
                            rotate: [0, -5, 5, -5, 0],
                            scale: [1, 1.05, 1]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        🏆
                    </motion.div>

                    <div>
                        <AnimatePresence mode="wait">
                            <motion.h3
                                key={`hero-title`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isTransitioning ? 0 : 1 }}
                                className={`text-2xl font-bold text-[var(--text-primary)] ${fontClass}`}
                            >
                                {t('cloudHeroTitle')}
                            </motion.h3>
                        </AnimatePresence>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="px-3 py-1 bg-yellow-500 text-white text-sm font-bold rounded-full">
                                #3
                            </span>
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={`hero-subtitle`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: isTransitioning ? 0 : 1 }}
                                    className={`text-amber-700 font-semibold ${fontClass}`}
                                >
                                    {t('cloudHeroSubtitle')}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <AnimatePresence mode="wait">
                    <motion.p
                        key={`hero-desc`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isTransitioning ? 0 : 1 }}
                        className={`text-[var(--text-secondary)] mb-4 ${fontClass}`}
                    >
                        {t('cloudHeroDescription')}
                    </motion.p>
                </AnimatePresence>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3">
                    {[
                        { label: 'Event', value: 'Cloud Hero' },
                        { label: 'Focus', value: 'Gemini + Terraform' },
                        { label: 'Year', value: 'Dec 2025' },
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            className="bg-white/60 backdrop-blur-sm rounded-xl p-3 text-center border border-yellow-200"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                        >
                            <div className="text-amber-700 font-bold text-sm">{stat.value}</div>
                            <div className="text-xs text-[var(--text-secondary)]">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default CloudHeroCard;
