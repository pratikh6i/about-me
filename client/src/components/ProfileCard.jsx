import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import BentoCard from './BentoCard';
import LazyImage from './LazyImage';

function ProfileCard() {
    const { t, isTransitioning, fontClass, isMarathi } = useLanguage();

    // Stats data
    const stats = [
        { value: '3+', labelKey: 'yearsExperience' },
        { value: '20+', labelKey: 'projectsCompleted' },
        { value: '5+', labelKey: 'cloudCertifications' },
    ];

    return (
        <BentoCard span={2} rowSpan={2} delay={0} gradient>
            <div className="flex flex-col h-full">
                {/* Avatar Section */}
                <div className="flex items-start gap-6 mb-6">
                    <motion.div
                        className="relative"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        {/* Gradient Ring */}
                        <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-br from-[var(--accent-blue)] via-[var(--accent-purple)] to-[var(--accent-pink)]">
                            <div className="w-full h-full rounded-full overflow-hidden bg-[var(--bg-secondary)]">
                                <LazyImage
                                    src="/assets/avatar.jpg"
                                    alt="Pratik Shetti"
                                    className="w-full h-full"
                                    placeholderColor="purple"
                                />
                            </div>
                        </div>

                        {/* Online Indicator */}
                        <motion.div
                            className="absolute bottom-1 right-1 w-5 h-5 bg-[var(--accent-green)] rounded-full border-2 border-[var(--bg-secondary)]"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </motion.div>

                    <div className="flex-1">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={isMarathi ? 'mr' : 'en'}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: isTransitioning ? 0 : 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className={fontClass}
                            >
                                <p className="text-[var(--text-secondary)] text-sm mb-1">
                                    {t('greeting')}
                                </p>
                                <h1 className="text-3xl font-bold gradient-text mb-1">
                                    {t('name')}
                                </h1>
                                <p className="text-[var(--accent-purple)] font-medium">
                                    {t('role')}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Description */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`desc-${isMarathi ? 'mr' : 'en'}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isTransitioning ? 0 : 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className={`mb-6 ${fontClass}`}
                    >
                        <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                            {t('profileTitle')}
                        </h2>
                        <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                            {t('profileDescription')}
                        </p>
                    </motion.div>
                </AnimatePresence>

                {/* Location Badge */}
                <div className="mb-6">
                    <span className="badge">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={`loc-${isMarathi ? 'mr' : 'en'}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isTransitioning ? 0 : 1 }}
                                exit={{ opacity: 0 }}
                                className={fontClass}
                            >
                                {t('location')}
                            </motion.span>
                        </AnimatePresence>
                    </span>
                </div>

                {/* Stats Grid */}
                <div className="mt-auto grid grid-cols-3 gap-4">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.labelKey}
                            className="text-center p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)]"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            whileHover={{ scale: 1.05, borderColor: 'var(--accent-blue)' }}
                        >
                            <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`stat-${stat.labelKey}-${isMarathi ? 'mr' : 'en'}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: isTransitioning ? 0 : 1 }}
                                    exit={{ opacity: 0 }}
                                    className={`text-xs text-[var(--text-secondary)] mt-1 ${fontClass}`}
                                >
                                    {t(stat.labelKey)}
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </BentoCard>
    );
}

export default ProfileCard;
