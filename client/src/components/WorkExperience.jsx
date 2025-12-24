import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const clientData = [
    {
        id: 'clientA',
        icon: '🛒',
        tagClass: 'client-tag-retail',
        accentColor: '#4285f4',
        stats: { reports: '42+', ips: '12+', sops: '6' },
    },
    {
        id: 'clientB',
        icon: '🚗',
        tagClass: 'client-tag-auto',
        accentColor: '#34a853',
        stats: { tickets: '80/130', months: '14+', scripts: '8+' },
    },
    {
        id: 'clientC',
        icon: '🚕',
        tagClass: 'client-tag-transport',
        accentColor: '#fbbc04',
        stats: { scripts: '7', reports: '18/23' },
    },
    {
        id: 'clientD',
        icon: '🏢',
        tagClass: 'client-tag-insurance',
        accentColor: '#9333ea',
        stats: { projects: '300+', sops: '6', reports: '130+' },
    },
    {
        id: 'clientE',
        icon: '💻',
        tagClass: 'client-tag-saas',
        accentColor: '#ec4899',
        stats: { findings: '5000+', hours: '5' },
    },
];

function WorkExperienceCard({ client, index }) {
    const { t, isTransitioning, fontClass } = useLanguage();

    const clientName = t(client.id);
    const industry = t(`${client.id}Industry`);
    const mission = t(`${client.id}Mission`);
    const role = t(`${client.id}Role`);
    const win1 = t(`${client.id}Win1`);
    const win2 = t(`${client.id}Win2`);
    const win3 = t(`${client.id}Win3`);
    const tech = t(`${client.id}Tech`);

    return (
        <motion.div
            className="work-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            whileHover={{ y: -4 }}
        >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                    <motion.span
                        className="text-3xl"
                        whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.4 }}
                    >
                        {client.icon}
                    </motion.span>
                    <div>
                        <AnimatePresence mode="wait">
                            <motion.h3
                                key={`name-${client.id}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isTransitioning ? 0 : 1 }}
                                className={`text-lg font-bold text-[var(--text-primary)] ${fontClass}`}
                            >
                                {clientName}
                            </motion.h3>
                        </AnimatePresence>
                        <span className={`${client.tagClass} client-tag`}>{industry}</span>
                    </div>
                </div>
            </div>

            {/* Mission */}
            <div className="mb-4">
                <p className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-1">
                    {t('theMission')}
                </p>
                <AnimatePresence mode="wait">
                    <motion.p
                        key={`mission-${client.id}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isTransitioning ? 0 : 1 }}
                        className={`text-sm font-medium text-[var(--text-primary)] ${fontClass}`}
                    >
                        {mission}
                    </motion.p>
                </AnimatePresence>
            </div>

            {/* Role */}
            <div className="mb-4">
                <p className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-1">
                    {t('myRole')}
                </p>
                <AnimatePresence mode="wait">
                    <motion.p
                        key={`role-${client.id}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isTransitioning ? 0 : 1 }}
                        className={`text-sm font-medium ${fontClass}`}
                        style={{ color: client.accentColor }}
                    >
                        {role}
                    </motion.p>
                </AnimatePresence>
            </div>

            {/* Wins */}
            <div className="mb-4">
                <p className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-2">
                    {t('theWin')}
                </p>
                <AnimatePresence mode="wait">
                    <motion.ul
                        key={`wins-${client.id}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isTransitioning ? 0 : 1 }}
                        className={`win-list ${fontClass}`}
                    >
                        <li>{win1}</li>
                        {win2 && <li>{win2}</li>}
                        {win3 && <li>{win3}</li>}
                    </motion.ul>
                </AnimatePresence>
            </div>

            {/* Tech Stack */}
            <div className="pt-4 border-t border-[var(--border-subtle)]">
                <p className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-2">
                    {t('techUsed')}
                </p>
                <div className="flex flex-wrap gap-2">
                    {tech.split(', ').map((item, i) => (
                        <motion.span
                            key={i}
                            className="px-2 py-1 text-xs font-medium rounded-md"
                            style={{
                                background: `${client.accentColor}15`,
                                color: client.accentColor
                            }}
                            whileHover={{ scale: 1.05 }}
                        >
                            {item}
                        </motion.span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

function WorkExperience() {
    const { t, isTransitioning, fontClass } = useLanguage();

    return (
        <section className="py-12">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`work-header`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isTransitioning ? 0 : 1 }}
                            className={fontClass}
                        >
                            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
                                {t('workTitle')}
                            </h2>
                            <p className="text-[var(--text-secondary)]">
                                {t('workSubtitle')}
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    {/* Current Role Badge */}
                    <motion.div
                        className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-primary)] text-white text-sm font-medium"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse"></span>
                        {t('currentRole')} • {t('since')}
                    </motion.div>
                </motion.div>

                {/* Work Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {clientData.map((client, index) => (
                        <WorkExperienceCard key={client.id} client={client} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WorkExperience;
