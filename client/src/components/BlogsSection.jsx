import { motion } from 'framer-motion';

function BlogsSection() {
    return (
        <section className="py-16 bg-[var(--bg-tertiary)]" id="blogs">
            <div className="container">
                <motion.div
                    className="max-w-2xl mx-auto text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {/* Coming Soon Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6"
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        Coming Soon
                    </motion.div>

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
                        Blog
                    </h2>

                    <p className="text-lg text-[var(--text-secondary)] mb-8">
                        I'm working on sharing my learnings about Cloud Security, Automation, and GenAI.
                        Stay tuned for technical deep-dives and practical guides!
                    </p>

                    {/* Placeholder Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        {[
                            { title: "Cloud Armor Best Practices", tag: "Security" },
                            { title: "Automating SCC Reports", tag: "Automation" },
                            { title: "Using Gemini for Terraform", tag: "GenAI" },
                        ].map((blog, index) => (
                            <motion.div
                                key={blog.title}
                                className="bg-white rounded-xl p-6 border border-[var(--border-subtle)] opacity-60"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 0.6, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-600">
                                    {blog.tag}
                                </span>
                                <h3 className="font-medium text-[var(--text-primary)] mt-3 mb-2">
                                    {blog.title}
                                </h3>
                                <div className="h-2 bg-gray-100 rounded w-full"></div>
                                <div className="h-2 bg-gray-100 rounded w-3/4 mt-2"></div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default BlogsSection;
