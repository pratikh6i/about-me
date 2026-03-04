import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clientCaseStudies, assetPath } from '../data/content';

function CaseStudyCard({ client, isExpanded, onToggle, index }) {
    const isAPAC = client.industry === 'APAC';
    const accentColor = isAPAC ? '#4285f4' : '#fbbc04';

    return (
        <motion.div
            className="bg-white rounded-xl border border-gray-100 overflow-hidden transition-all relative shadow-card hover:shadow-card-hover"
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            whileHover={{ y: -2 }}
        >
            {/* Colored left border */}
            <div
                className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-xl"
                style={{ backgroundColor: accentColor }}
            />

            {/* Header */}
            <div className="p-5 pl-5 cursor-pointer" onClick={onToggle}>
                <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0 p-1.5">
                            <img src={`${assetPath}/gcp.svg`} alt="GCP" className="w-full h-full" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900 leading-tight">
                                {client.title}
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                                <span
                                    className="px-2 py-0.5 text-xs font-medium rounded-full"
                                    style={{ background: client.tagBg, color: client.tagColor }}
                                >
                                    {client.industry}
                                </span>
                                <span className="text-xs text-gray-400">{client.duration}</span>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        className="w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 flex-shrink-0 hover:bg-blue-50 hover:text-google-blue transition-colors"
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </motion.div>
                </div>

                {/* Quick Tags */}
                <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 bg-gray-50 rounded-lg text-xs font-medium text-gray-700">
                        {client.metric}
                    </span>
                    <span className="px-2.5 py-1 bg-blue-50 text-google-blue rounded-lg text-xs font-medium">
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
                        <div className="px-5 pb-5 border-t border-gray-50 pt-4 space-y-4">
                            {/* Mission */}
                            <div>
                                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                                    The Mission
                                </h4>
                                <p className="text-sm text-gray-600 leading-relaxed">{client.mission}</p>
                            </div>

                            {/* Responsibilities */}
                            <div>
                                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                    What I Delivered
                                </h4>
                                <ul className="space-y-1.5">
                                    {client.responsibilities.map((resp, i) => (
                                        <motion.li
                                            key={i}
                                            className="flex items-start gap-2 text-sm text-gray-600"
                                            initial={{ opacity: 0, x: -8 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.04 }}
                                        >
                                            <span className="mt-0.5 flex-shrink-0" style={{ color: '#34a853' }}>✓</span>
                                            {resp}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tech Stack */}
                            <div>
                                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                    Tech Stack
                                </h4>
                                <div className="flex flex-wrap gap-1.5">
                                    {client.techStack.map((tech, i) => (
                                        <span key={i} className="px-2 py-1 text-xs font-medium rounded-md bg-blue-50 text-google-blue">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-2">
                                {Object.entries(client.stats).map(([key, value]) => (
                                    <div key={key} className="bg-gray-50 rounded-lg p-3 text-center">
                                        <div className="text-sm font-bold text-gray-900">{value}</div>
                                        <div className="text-xs text-gray-500 mt-0.5">{key}</div>
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

    return (
        <section className="py-14 bg-gray-50/50" id="experience">
            <div className="container">
                <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {/* Google-colored accent dots */}
                    <div className="flex justify-center gap-1.5 mb-4">
                        {['#4285f4', '#ea4335', '#fbbc04', '#34a853'].map((c) => (
                            <div key={c} className="w-2 h-2 rounded-full" style={{ backgroundColor: c }} />
                        ))}
                    </div>
                    <h2 className="section-heading mb-3">Client Case Studies</h2>
                    <p className="section-subheading mx-auto">
                        Securing global infrastructure across 8 enterprise clients. Click any card to see detailed contributions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {clientCaseStudies.map((client, index) => (
                        <CaseStudyCard
                            key={client.id}
                            client={client}
                            index={index}
                            isExpanded={expandedId === client.id}
                            onToggle={() => setExpandedId(expandedId === client.id ? null : client.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ClientCaseStudies;
