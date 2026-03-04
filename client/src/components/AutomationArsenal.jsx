import { motion } from 'framer-motion';
import { automationArsenal } from '../data/content';

const accentColors = ['#4285f4', '#ea4335', '#fbbc04', '#34a853'];

function AutomationArsenal() {
    return (
        <section className="py-14" id="automation">
            <div className="container">
                {/* Header */}
                <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="flex justify-center gap-1.5 mb-4">
                        {accentColors.map((c) => (
                            <div key={c} className="w-2 h-2 rounded-full" style={{ backgroundColor: c }} />
                        ))}
                    </div>
                    <h2 className="section-heading mb-3">The Automation Arsenal</h2>
                    <p className="section-subheading mx-auto">
                        Custom tools I've built to automate the boring stuff.{' '}
                        <span className="font-medium text-google-blue">Most security engineers just monitor — I build.</span>
                    </p>
                </motion.div>

                {/* Tools Grid — Elevated Cards with distinct shadows */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {automationArsenal.map((tool, index) => (
                        <motion.div
                            key={tool.name}
                            className="bg-white rounded-xl border border-gray-100 p-5 shadow-card hover:shadow-card-hover transition-all group relative overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.04 }}
                            whileHover={{ y: -3 }}
                        >
                            {/* Colored accent bar */}
                            <div
                                className="absolute top-0 left-0 right-0 h-[3px]"
                                style={{ backgroundColor: accentColors[index % accentColors.length] }}
                            />

                            {/* Header Row */}
                            <div className="flex items-start justify-between mb-3">
                                <div
                                    className="h-9 rounded-lg flex items-center justify-center px-2 gap-1.5 transition-colors"
                                    style={{
                                        backgroundColor: `${accentColors[index % accentColors.length]}10`,
                                    }}
                                >
                                    {tool.icons && tool.icons.length > 0 ? (
                                        tool.icons.map((icon, i) => (
                                            <img key={i} src={icon} alt="" className="h-6 w-auto object-contain" />
                                        ))
                                    ) : (
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#6b7280">
                                            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                                        </svg>
                                    )}
                                </div>
                                <span
                                    className="px-2.5 py-1 text-xs font-medium rounded-full transition-colors"
                                    style={{
                                        backgroundColor: `${accentColors[index % accentColors.length]}10`,
                                        color: accentColors[index % accentColors.length],
                                    }}
                                >
                                    {tool.tech}
                                </span>
                            </div>

                            {/* Content */}
                            <h3 className="font-semibold text-gray-900 mb-1.5 group-hover:text-google-blue transition-colors">
                                {tool.name}
                            </h3>
                            <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                                {tool.description}
                            </p>

                            {/* Link */}
                            {tool.githubLink !== '#' ? (
                                <a
                                    href={tool.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-sm font-medium text-google-blue hover:underline"
                                >
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    View on GitHub
                                </a>
                            ) : (
                                <span className="text-xs text-gray-400 italic">Private / Internal Tool</span>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Note */}
                <motion.div
                    className="mt-8 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-google-green text-sm font-medium border border-green-100">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                        </svg>
                        Built with Python, Bash, Terraform &amp; Gemini
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default AutomationArsenal;
