import { motion } from 'framer-motion';
import { achievements, personalInterests, vibeCoderProjects } from '../data/content';

function AchievementsAndInterests() {
    return (
        <section className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50" id="about">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Achievements */}
                    <motion.div
                        className="bg-white rounded-2xl border border-[var(--border-subtle)] p-6 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="#f59e0b">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                            Achievements
                        </h3>
                        <div className="space-y-4">
                            {achievements.map((achievement, index) => (
                                <motion.div
                                    key={achievement.title}
                                    className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-4 border border-yellow-200"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                                            {index === 0 ? '★' : index === 1 ? '1st' : '3rd'}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-amber-900 text-sm">{achievement.title}</h4>
                                            <p className="text-xs text-amber-700 mt-1">{achievement.description}</p>
                                            <div className="flex items-center gap-3 mt-2 text-xs text-amber-600">
                                                <span>{achievement.venue}</span>
                                                <span>•</span>
                                                <span>{achievement.year}</span>
                                                <span>•</span>
                                                <span className="font-semibold text-green-600">{achievement.prize}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Personal Interests */}
                    <motion.div
                        className="bg-white rounded-2xl border border-[var(--border-subtle)] p-6 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4285f4" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 6v6l4 2" />
                            </svg>
                            When Not Building/Securing Cloud
                        </h3>
                        <div className="space-y-3">
                            {personalInterests.map((interest, index) => (
                                <motion.div
                                    key={interest.title}
                                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <div className="w-2 h-2 rounded-full bg-[var(--accent-primary)] mt-2 flex-shrink-0"></div>
                                    <div>
                                        <h4 className="font-medium text-[var(--text-primary)] text-sm">{interest.title}</h4>
                                        <p className="text-xs text-[var(--text-secondary)]">{interest.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Vibe Coder Projects */}
                    <motion.div
                        className="bg-white rounded-2xl border border-[var(--border-subtle)] p-6 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="#9333ea">
                                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                            </svg>
                            Vibe Coder Projects
                        </h3>
                        <div className="space-y-4">
                            {vibeCoderProjects.map((project, index) => (
                                <motion.a
                                    key={project.title}
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200 hover:shadow-md transition-all group"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ x: 4 }}
                                >
                                    <div>
                                        <h4 className="font-semibold text-purple-900 group-hover:text-purple-600 transition-colors">
                                            {project.title}
                                        </h4>
                                        <p className="text-sm text-purple-700 mt-1">{project.description}</p>
                                        <span className="text-xs text-purple-500 mt-2 inline-flex items-center gap-1">
                                            View Project
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </span>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Vibe Coder Badge */}
                        <motion.div
                            className="mt-6 text-center"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold shadow-lg">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                                </svg>
                                Vibe Coder Mode: ON
                            </span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default AchievementsAndInterests;
