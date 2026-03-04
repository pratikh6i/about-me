import { motion } from 'framer-motion';
import { techArsenal } from '../data/content';

const googleColorsOrder = ['#4285f4', '#ea4335', '#fbbc04', '#34a853', '#4285f4'];

function TechArsenal() {
    const categories = Object.values(techArsenal);

    return (
        <section className="py-14 bg-gray-50/50" id="skills">
            <div className="container">
                <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="flex justify-center gap-1.5 mb-4">
                        {['#4285f4', '#ea4335', '#fbbc04', '#34a853'].map((c) => (
                            <div key={c} className="w-2 h-2 rounded-full" style={{ backgroundColor: c }} />
                        ))}
                    </div>
                    <h2 className="section-heading mb-3">Tech Arsenal</h2>
                    <p className="section-subheading mx-auto">
                        Tools and technologies I wield daily
                    </p>
                </motion.div>

                {/* Larger cards, Google colors in order */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
                    {categories.map((category, catIndex) => {
                        const color = googleColorsOrder[catIndex % googleColorsOrder.length];
                        return (
                            <motion.div
                                key={category.title}
                                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-card hover:shadow-card-hover transition-all group relative overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: catIndex * 0.08 }}
                                whileHover={{ y: -4 }}
                            >
                                {/* Colored top accent — thick for visibility */}
                                <div
                                    className="absolute top-0 left-0 right-0 h-1 transition-all group-hover:h-1.5"
                                    style={{ backgroundColor: color }}
                                />

                                {/* Category Header */}
                                <div className="flex items-center gap-2.5 mb-5">
                                    <div
                                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                                        style={{ backgroundColor: `${color}15` }}
                                    >
                                        <div
                                            className="w-3 h-3 rounded-full"
                                            style={{ backgroundColor: color }}
                                        />
                                    </div>
                                    <h3
                                        className="text-base font-bold"
                                        style={{ color: color }}
                                    >
                                        {category.title}
                                    </h3>
                                </div>

                                {/* Skills as chips — larger and clearer */}
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1.5 text-sm font-medium rounded-lg transition-colors"
                                            style={{
                                                backgroundColor: `${color}08`,
                                                color: color,
                                                border: `1px solid ${color}20`,
                                            }}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default TechArsenal;
