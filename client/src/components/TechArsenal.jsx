import { motion } from 'framer-motion';
import { techArsenal } from '../data/content';

function TechArsenal() {
    const categories = Object.values(techArsenal);

    return (
        <section className="py-16 bg-white" id="skills">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-3">
                        Tech Arsenal
                    </h2>
                    <p className="text-[var(--text-secondary)]">
                        Tools and technologies I wield daily
                    </p>
                </motion.div>

                {/* Skills Grid - Clean Card Design */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {categories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            className="rounded-2xl p-5 transition-all"
                            style={{ backgroundColor: category.bgColor }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.08 }}
                            whileHover={{ y: -4, scale: 1.02 }}
                        >
                            {/* Category Header */}
                            <h3
                                className="text-sm font-bold mb-4"
                                style={{ color: category.color }}
                            >
                                {category.title}
                            </h3>

                            {/* Skills List - Vertical */}
                            <div className="space-y-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill}
                                        className="text-sm text-[var(--text-primary)] font-medium"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: catIndex * 0.08 + skillIndex * 0.03 }}
                                    >
                                        {skill}
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

export default TechArsenal;
