import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import BentoCard from './BentoCard';

// Skills data organized by category
const skillsData = {
    cloudPlatforms: [
        { name: 'Google Cloud', icon: '☁️', color: '#4285F4' },
        { name: 'AWS', icon: '🟠', color: '#FF9900' },
        { name: 'Azure', icon: '🔷', color: '#0078D4' },
    ],
    frontend: [
        { name: 'React', icon: '⚛️', color: '#61DAFB' },
        { name: 'Next.js', icon: '▲', color: '#ffffff' },
        { name: 'TypeScript', icon: '📘', color: '#3178C6' },
        { name: 'Tailwind', icon: '🎨', color: '#06B6D4' },
    ],
    backend: [
        { name: 'Node.js', icon: '💚', color: '#339933' },
        { name: 'Python', icon: '🐍', color: '#3776AB' },
        { name: 'Go', icon: '🐹', color: '#00ADD8' },
        { name: 'Express', icon: '⚡', color: '#ffffff' },
    ],
    devops: [
        { name: 'Docker', icon: '🐳', color: '#2496ED' },
        { name: 'Kubernetes', icon: '☸️', color: '#326CE5' },
        { name: 'Terraform', icon: '🏗️', color: '#7B42BC' },
        { name: 'CI/CD', icon: '🔄', color: '#10B981' },
    ],
    databases: [
        { name: 'PostgreSQL', icon: '🐘', color: '#4169E1' },
        { name: 'MongoDB', icon: '🍃', color: '#47A248' },
        { name: 'Redis', icon: '🔴', color: '#DC382D' },
        { name: 'BigQuery', icon: '📊', color: '#4285F4' },
    ],
};

function SkillsGrid() {
    const { t, isTransitioning, fontClass, isMarathi } = useLanguage();

    const categories = [
        { key: 'cloudPlatforms', skills: skillsData.cloudPlatforms },
        { key: 'frontend', skills: skillsData.frontend },
        { key: 'backend', skills: skillsData.backend },
        { key: 'devops', skills: skillsData.devops },
        { key: 'databases', skills: skillsData.databases },
    ];

    return (
        <BentoCard span={2} delay={0.3}>
            <div className="flex flex-col h-full">
                {/* Header */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`skills-header-${isMarathi ? 'mr' : 'en'}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isTransitioning ? 0 : 1 }}
                        exit={{ opacity: 0 }}
                        className={`mb-4 ${fontClass}`}
                    >
                        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">
                            {t('skillsTitle')}
                        </h3>
                        <p className="text-sm text-[var(--text-secondary)]">
                            {t('skillsSubtitle')}
                        </p>
                    </motion.div>
                </AnimatePresence>

                {/* Skills Categories */}
                <div className="space-y-4">
                    {categories.map((category, catIndex) => (
                        <motion.div
                            key={category.key}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + catIndex * 0.1 }}
                        >
                            {/* Category Label */}
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={`cat-${category.key}-${isMarathi ? 'mr' : 'en'}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: isTransitioning ? 0 : 1 }}
                                    exit={{ opacity: 0 }}
                                    className={`text-xs text-[var(--text-tertiary)] uppercase tracking-wider mb-2 ${fontClass}`}
                                >
                                    {t(category.key)}
                                </motion.p>
                            </AnimatePresence>

                            {/* Skills Pills */}
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.span
                                        key={skill.name}
                                        className="skill-pill"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.5 + catIndex * 0.1 + skillIndex * 0.05 }}
                                        whileHover={{
                                            scale: 1.1,
                                            borderColor: skill.color,
                                            boxShadow: `0 0 15px ${skill.color}40`
                                        }}
                                    >
                                        <span>{skill.icon}</span>
                                        <span className="text-[var(--text-primary)]">{skill.name}</span>
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </BentoCard>
    );
}

export default SkillsGrid;
