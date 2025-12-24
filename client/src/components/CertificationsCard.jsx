import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

function CertificationsCard() {
    const { t, isTransitioning, fontClass } = useLanguage();

    const certs = [
        {
            name: 'Associate Cloud Engineer',
            provider: 'Google Cloud',
            icon: '☁️',
            color: '#4285f4',
            badge: 'ACE'
        },
        {
            name: 'Cloud Digital Leader',
            provider: 'Google Cloud',
            icon: '🎓',
            color: '#34a853',
            badge: 'CDL'
        },
        {
            name: 'Cloud Practitioner',
            provider: 'AWS',
            icon: '🟠',
            color: '#ff9900',
            badge: 'CCP'
        },
    ];

    return (
        <motion.div
            className="card col-span-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
        >
            <AnimatePresence mode="wait">
                <motion.h3
                    key={`certs-title`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isTransitioning ? 0 : 1 }}
                    className={`text-lg font-bold text-[var(--text-primary)] mb-4 ${fontClass}`}
                >
                    🏆 {t('certsTitle')}
                </motion.h3>
            </AnimatePresence>

            <div className="space-y-3">
                {certs.map((cert, index) => (
                    <motion.div
                        key={cert.name}
                        className="flex items-center gap-3 p-3 rounded-xl border border-[var(--border-subtle)] hover:border-[var(--border-hover)] transition-all"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        whileHover={{
                            x: 4,
                            boxShadow: `0 4px 20px ${cert.color}20`
                        }}
                    >
                        <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm"
                            style={{ background: cert.color }}
                        >
                            {cert.badge}
                        </div>
                        <div>
                            <p className="font-medium text-[var(--text-primary)] text-sm">
                                {cert.name}
                            </p>
                            <p className="text-xs text-[var(--text-secondary)]">
                                {cert.provider}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export default CertificationsCard;
