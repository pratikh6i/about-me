import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import LazyImage from './LazyImage';

function HeroSection() {
    const { t, isTransitioning, fontClass } = useLanguage();

    const stats = [
        { value: '1+', labelKey: 'yearsExperience', color: '#4285f4' },
        { value: '100+', labelKey: 'projectsSecured', color: '#34a853' },
        { value: '15+', labelKey: 'scriptsBuilt', color: '#9333ea' },
        { value: '200+', labelKey: 'reportsDelivered', color: '#f97316' },
    ];

    return (
        <section className="hero-section">
            {/* Hero Image with Fade */}
            <div className="hero-image-container">
                <LazyImage
                    src="/assets/profile.jpg"
                    alt="Pratik Shetti"
                    className="hero-image"
                    placeholderColor="blue"
                />
                {/* Gradient Overlay */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'linear-gradient(90deg, rgba(248,250,252,1) 0%, rgba(248,250,252,0.8) 30%, transparent 60%)'
                    }}
                />
            </div>

            {/* Content */}
            <div className="container relative z-10 py-16 md:py-24">
                <motion.div
                    className="max-w-2xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Greeting */}
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={`greeting`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isTransitioning ? 0 : 1 }}
                            className={`text-[var(--text-secondary)] text-lg mb-2 ${fontClass}`}
                        >
                            {t('greeting')}
                        </motion.p>
                    </AnimatePresence>

                    {/* Name */}
                    <AnimatePresence mode="wait">
                        <motion.h1
                            key={`name`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isTransitioning ? 0 : 1 }}
                            className={`text-5xl md:text-6xl font-bold gradient-text mb-4 ${fontClass}`}
                        >
                            {t('name')}
                        </motion.h1>
                    </AnimatePresence>

                    {/* Role & Tagline */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`role`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isTransitioning ? 0 : 1 }}
                            className={fontClass}
                        >
                            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)] mb-2">
                                {t('role')}
                            </h2>
                            <p className="text-lg text-[var(--accent-purple)] font-medium mb-4">
                                {t('tagline')}
                            </p>
                            <p className="text-[var(--text-secondary)] max-w-lg">
                                {t('subtitle')}
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    {/* Location Badge */}
                    <motion.div
                        className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[var(--border-subtle)] shadow-sm"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <span className="text-lg">📍</span>
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={`location`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isTransitioning ? 0 : 1 }}
                                className={`text-sm font-medium text-[var(--text-primary)] ${fontClass}`}
                            >
                                {t('location')}
                            </motion.span>
                        </AnimatePresence>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div
                        className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.labelKey}
                                className="bg-white rounded-2xl p-4 border border-[var(--border-subtle)] shadow-sm"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: `0 10px 30px ${stat.color}20`
                                }}
                            >
                                <div
                                    className="text-3xl font-bold"
                                    style={{ color: stat.color }}
                                >
                                    {stat.value}
                                </div>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={`stat-${stat.labelKey}`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: isTransitioning ? 0 : 1 }}
                                        className={`text-xs text-[var(--text-secondary)] font-medium mt-1 ${fontClass}`}
                                    >
                                        {t(stat.labelKey)}
                                    </motion.div>
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default HeroSection;
