import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

// Skills data organized by category
const skillsData = {
    security: [
        { name: 'Cloud Armor', icon: '🛡️' },
        { name: 'Security Command Center', icon: '🔐' },
        { name: 'IAM', icon: '🔑' },
        { name: 'Prowler', icon: '🔍' },
        { name: 'ThreatMapper', icon: '🗺️' },
        { name: 'Tenable', icon: '📊' },
    ],
    automation: [
        { name: 'Python', icon: '🐍' },
        { name: 'Bash', icon: '💻' },
        { name: 'Google Apps Script', icon: '📝' },
        { name: 'Terraform', icon: '🏗️' },
        { name: 'gcloud CLI', icon: '☁️' },
    ],
    aiTools: [
        { name: 'Gemini Ultra', icon: '✨' },
        { name: 'NotebookLM', icon: '📓' },
        { name: 'Grok', icon: '🤖' },
        { name: 'Claude', icon: '🧠' },
        { name: 'Antigravity', icon: '🚀' },
    ],
    cloud: [
        { name: 'Google Cloud', icon: '☁️' },
        { name: 'AWS', icon: '🟠' },
        { name: 'Cloud Run', icon: '▶️' },
        { name: 'Pub/Sub', icon: '📬' },
        { name: 'BigQuery', icon: '📈' },
    ],
};

function TechStack() {
    const { t, isTransitioning, fontClass } = useLanguage();

    const categories = [
        { key: 'security', skills: skillsData.security, color: '#ea4335' },
        { key: 'automation', skills: skillsData.automation, color: '#4285f4' },
        { key: 'aiTools', skills: skillsData.aiTools, color: '#9333ea' },
        { key: 'cloud', skills: skillsData.cloud, color: '#34a853' },
    ];

    return (
        <section className="py-12 bg-[var(--bg-tertiary)]">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`skills-header`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isTransitioning ? 0 : 1 }}
                            className={fontClass}
                        >
                            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
                                {t('skillsTitle')}
                            </h2>
                            <p className="text-[var(--text-secondary)]">
                                {t('skillsSubtitle')}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>

                {/* Skills Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, catIndex) => (
                        <motion.div
                            key={category.key}
                            className="bg-white rounded-2xl p-6 border border-[var(--border-subtle)] shadow-sm"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * catIndex }}
                            whileHover={{
                                y: -4,
                                boxShadow: `0 15px 40px ${category.color}15`
                            }}
                        >
                            {/* Category Label */}
                            <AnimatePresence mode="wait">
                                <motion.h3
                                    key={`cat-${category.key}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: isTransitioning ? 0 : 1 }}
                                    className={`text-sm font-bold uppercase tracking-wider mb-4 ${fontClass}`}
                                    style={{ color: category.color }}
                                >
                                    {t(category.key)}
                                </motion.h3>
                            </AnimatePresence>

                            {/* Skills List */}
                            <div className="space-y-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + catIndex * 0.1 + skillIndex * 0.05 }}
                                    >
                                        <span className="text-xl">{skill.icon}</span>
                                        <span className="text-sm font-medium text-[var(--text-primary)]">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TechStack;
