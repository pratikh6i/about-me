import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

function SkillBoostCard() {
    const { t, isTransitioning, fontClass } = useLanguage();

    const skillBoostUrl = 'https://www.skills.google/public_profiles/14a39d36-3d88-4a0c-85ec-9533ba770ac1';

    const stats = [
        { value: '120+', label: 'Labs Completed', color: '#4285f4' },
        { value: '78,750', label: 'Total Points', color: '#34a853' },
        { value: '38+', label: 'Courses', color: '#fbbc04' },
    ];

    return (
        <motion.a
            href={skillBoostUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="card card-accent col-span-6 block cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
        >
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
                <motion.div
                    className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                </motion.div>

                <div>
                    <AnimatePresence mode="wait">
                        <motion.h3
                            key={`sb-title`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isTransitioning ? 0 : 1 }}
                            className={`text-xl font-bold text-white ${fontClass}`}
                        >
                            {t('skillBoostTitle')}
                        </motion.h3>
                    </AnimatePresence>
                    <p className="text-white/80 text-sm">Tier 1: Expert Partner Engineer</p>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        className="bg-white/10 rounded-xl p-3 text-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                    >
                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                        <div className="text-xs text-white/70">{stat.label}</div>
                    </motion.div>
                ))}
            </div>

            {/* CTA */}
            <div className="flex items-center justify-between">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={`vp-text`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isTransitioning ? 0 : 1 }}
                        className={`text-white/90 font-medium ${fontClass}`}
                    >
                        {t('viewProfile')} →
                    </motion.span>
                </AnimatePresence>

                <div className="flex gap-1">
                    {['🏅', '🎖️', '🏆', '⭐'].map((badge, i) => (
                        <motion.span
                            key={i}
                            className="text-xl"
                            animate={{ y: [0, -4, 0] }}
                            transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                        >
                            {badge}
                        </motion.span>
                    ))}
                </div>
            </div>
        </motion.a>
    );
}

export default SkillBoostCard;
