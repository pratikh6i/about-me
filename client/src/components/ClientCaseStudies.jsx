import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clientCaseStudies } from '../data/content';

// Google Cloud Logo SVG
const GCPLogo = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12.65 9.51L14.39 6.23L14.47 6.09C13.15 5.4 11.63 5 10 5C8.69 5 7.44 5.28 6.32 5.77L8.61 9.55C9.02 9.22 9.49 8.96 10 8.78C10.85 8.47 11.77 8.44 12.65 9.51Z" fill="#EA4335" />
        <path d="M19.93 10.31L17.64 6.53C16.52 5.04 14.88 4.02 12.99 3.82C13.66 4.49 14.26 5.23 14.47 6.09L14.39 6.23L12.65 9.51L16.53 9.51L19.93 10.31Z" fill="#4285F4" />
        <path d="M6.32 5.77L4.03 9.55C3.37 10.5 3 11.7 3 13C3 17.42 6.58 21 11 21C11.63 21 12.24 20.93 12.83 20.81L12.93 20.79L14.47 17.51L10.59 17.51L6.32 5.77Z" fill="#34A853" />
        <path d="M12.93 20.79C16.47 20.05 19.24 17.16 19.93 13.46L19.93 10.31L16.53 9.51L12.65 9.51C11.77 8.44 10.85 8.47 10 8.78C9.49 8.96 9.02 9.22 8.61 9.55L10.59 17.51L14.47 17.51L12.93 20.79Z" fill="#FBBC05" />
    </svg>
);

function CaseStudyCard({ client, isExpanded, onToggle }) {
    return (
        <motion.div
            className="bg-white rounded-2xl border border-[var(--border-subtle)] overflow-hidden shadow-sm hover:shadow-lg transition-all"
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            {/* Header - Always Visible */}
            <div
                className="p-6 cursor-pointer"
                onClick={onToggle}
            >
                <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                        {/* GCP Logo */}
                        <div className="w-10 h-10 rounded-xl bg-[var(--bg-tertiary)] flex items-center justify-center flex-shrink-0">
                            <GCPLogo />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-[var(--text-primary)]">
                                {client.title}
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                                <span
                                    className="px-2 py-0.5 text-xs font-semibold rounded-full"
                                    style={{ background: client.tagBg, color: client.tagColor }}
                                >
                                    {client.industry}
                                </span>
                                <span className="text-xs text-[var(--text-tertiary)]">
                                    {client.duration}
                                </span>
                            </div>
                        </div>
                    </div>

                    <motion.button
                        className="w-8 h-8 rounded-full bg-[var(--bg-tertiary)] flex items-center justify-center text-[var(--text-secondary)]"
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                    >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                            <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                        </svg>
                    </motion.button>
                </div>

                {/* Quick Stats */}
                <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[var(--bg-tertiary)] rounded-full text-sm font-medium text-[var(--text-primary)]">
                        {client.metric}
                    </span>
                    <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
                        {client.role}
                    </span>
                </div>
            </div>

            {/* Expanded Details */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-6 border-t border-[var(--border-subtle)] pt-4">
                            {/* Mission */}
                            <div className="mb-4">
                                <h4 className="text-xs font-bold text-[var(--text-tertiary)] uppercase tracking-wider mb-2">
                                    The Mission
                                </h4>
                                <p className="text-sm text-[var(--text-secondary)]">
                                    {client.mission}
                                </p>
                            </div>

                            {/* Responsibilities */}
                            <div className="mb-4">
                                <h4 className="text-xs font-bold text-[var(--text-tertiary)] uppercase tracking-wider mb-2">
                                    What I Delivered
                                </h4>
                                <ul className="space-y-2">
                                    {client.responsibilities.map((resp, i) => (
                                        <motion.li
                                            key={i}
                                            className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.05 }}
                                        >
                                            <span className="text-green-500 mt-0.5 font-bold">✓</span>
                                            {resp}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tech Stack */}
                            <div className="mb-4">
                                <h4 className="text-xs font-bold text-[var(--text-tertiary)] uppercase tracking-wider mb-2">
                                    Tech Stack
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {client.techStack.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 text-xs font-medium rounded-md bg-blue-50 text-blue-700"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Key Stats */}
                            <div className="grid grid-cols-3 gap-3">
                                {Object.entries(client.stats).map(([key, value]) => (
                                    <div
                                        key={key}
                                        className="bg-[var(--bg-tertiary)] rounded-xl p-3 text-center"
                                    >
                                        <div className="text-lg font-bold text-[var(--text-primary)]">{value}</div>
                                        <div className="text-xs text-[var(--text-secondary)]">{key}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

function ClientCaseStudies() {
    const [expandedId, setExpandedId] = useState(null);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <section className="py-16 bg-[var(--bg-tertiary)]" id="experience">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-3">
                        Client Case Studies
                    </h2>
                    <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
                        Securing global infrastructure across 8 enterprise clients. Click any card to see detailed contributions.
                    </p>
                </motion.div>

                {/* Case Study Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {clientCaseStudies.map((client, index) => (
                        <motion.div
                            key={client.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <CaseStudyCard
                                client={client}
                                isExpanded={expandedId === client.id}
                                onToggle={() => toggleExpand(client.id)}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ClientCaseStudies;
