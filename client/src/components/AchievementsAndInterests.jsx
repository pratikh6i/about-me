import { motion } from 'framer-motion';
import { achievements, personalInterests, vibeCoderProjects, globalIncidents } from '../data/content';

const interestEmojis = {
    'Google Maps Contributor': '🗺️',
    'Technology Educator': '👨‍🏫',
    'Learning Spanish': '🇪🇸',
    'Astrophysics Enthusiast': '🔭',
    'Chess & Cricket Player': '♟️',
};

function AchievementsAndInterests() {
    return (
        <section className="py-14 bg-gray-50/50" id="about">
            <div className="container">
                {/* Global Incident Monitoring — New Featured Section */}
                <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-2.5 mb-5">
                        <div className="flex gap-1">
                            {['#4285f4', '#ea4335', '#fbbc04', '#34a853'].map((c) => (
                                <div key={c} className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: c }} />
                            ))}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">Global Incident Response</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {globalIncidents.map((incident, index) => (
                            <motion.div
                                key={incident.title}
                                className="bg-white rounded-xl border border-gray-100 p-6 relative overflow-hidden shadow-card hover:shadow-card-hover transition-all"
                                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -2 }}
                            >
                                {/* Colored left accent */}
                                <div
                                    className="absolute left-0 top-0 bottom-0 w-[4px] rounded-l-xl"
                                    style={{ backgroundColor: incident.color }}
                                />

                                <div className="pl-2">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-2xl">{incident.icon}</span>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{incident.title}</h4>
                                            <span className="text-xs font-medium" style={{ color: incident.color }}>
                                                {incident.subtitle}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed mt-2">{incident.description}</p>
                                    <div className="mt-3 flex items-center gap-2">
                                        <span
                                            className="px-2.5 py-0.5 text-xs font-semibold rounded-full"
                                            style={{
                                                backgroundColor: `${incident.color}10`,
                                                color: incident.color,
                                            }}
                                        >
                                            {incident.region}
                                        </span>
                                        <span className="text-xs text-gray-400">Active Monitoring & WAF Tuning</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Three Column Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

                    {/* Achievements */}
                    <motion.div
                        className="bg-white rounded-xl border border-gray-100 p-5 relative overflow-hidden shadow-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-google-yellow to-amber-400" />
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="text-xl">🏆</span>
                            Achievements
                        </h3>
                        <div className="space-y-3">
                            {achievements.map((a, index) => (
                                <motion.div
                                    key={a.title}
                                    className="rounded-lg p-3.5 border border-amber-100/80 relative overflow-hidden"
                                    style={{ backgroundColor: '#fffbeb' }}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <h4 className="font-semibold text-amber-900 text-sm">{a.title}</h4>
                                    <p className="text-xs text-amber-700 mt-1">{a.description}</p>
                                    <div className="flex items-center gap-2 mt-2 text-xs text-amber-600">
                                        <span>{a.venue}</span>
                                        <span>·</span>
                                        <span>{a.year}</span>
                                        <span>·</span>
                                        <span className="font-semibold text-google-green">{a.prize}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Personal Interests */}
                    <motion.div
                        className="bg-white rounded-xl border border-gray-100 p-5 relative overflow-hidden shadow-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-google-blue to-blue-400" />
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="text-xl">🌍</span>
                            When Not Building/Securing Cloud
                        </h3>
                        <div className="space-y-1">
                            {personalInterests.map((interest, index) => (
                                <motion.div
                                    key={interest.title}
                                    initial={{ opacity: 0, x: -8 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    {interest.url ? (
                                        <a
                                            href={interest.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-blue-50 transition-colors group"
                                        >
                                            <span className="text-base mt-0.5">{interestEmojis[interest.title] || '✨'}</span>
                                            <div>
                                                <h4 className="font-medium text-gray-800 text-sm group-hover:text-google-blue transition-colors">
                                                    {interest.title}
                                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="inline ml-1 opacity-40">
                                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                        <polyline points="15 3 21 3 21 9" />
                                                        <line x1="10" y1="14" x2="21" y2="3" />
                                                    </svg>
                                                </h4>
                                                {interest.desc && <p className="text-xs text-gray-500">{interest.desc}</p>}
                                            </div>
                                        </a>
                                    ) : (
                                        <div className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-gray-50 transition-colors">
                                            <span className="text-base mt-0.5">{interestEmojis[interest.title] || '✨'}</span>
                                            <div>
                                                <h4 className="font-medium text-gray-800 text-sm">{interest.title}</h4>
                                                {interest.desc && <p className="text-xs text-gray-500">{interest.desc}</p>}
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Vibe Coded Projects */}
                    <motion.div
                        className="bg-white rounded-xl border border-gray-100 p-5 relative overflow-hidden shadow-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-violet-500 to-purple-500" />
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="text-xl">⚡</span>
                            Vibe Coded Projects
                        </h3>
                        <div className="space-y-3">
                            {vibeCoderProjects.map((project, index) => (
                                <motion.a
                                    key={project.title}
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block rounded-xl p-3.5 border border-violet-100 hover:shadow-md transition-all group relative overflow-hidden"
                                    style={{ background: 'linear-gradient(135deg, #f5f3ff, #ede9fe)' }}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ x: 3 }}
                                >
                                    <h4 className="font-semibold text-violet-900 text-sm group-hover:text-violet-600 transition-colors">
                                        {project.title}
                                    </h4>
                                    <p className="text-xs text-violet-700 mt-1">{project.description}</p>
                                    <span className="text-xs text-violet-500 mt-2 inline-flex items-center gap-1 font-medium">
                                        View Project →
                                    </span>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default AchievementsAndInterests;
