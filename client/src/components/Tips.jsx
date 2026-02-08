import { motion } from 'framer-motion';
import { useState } from 'react';

const tips = [
    {
        id: 1,
        title: 'Oiling Your Hair Right',
        icon: '🫒',
        content: 'Apply warm coconut or amla oil to your scalp and hair. Massage gently for 5-10 minutes using circular motions. Leave it overnight or for at least 2 hours before washing.',
        tags: ['All Hair Types', 'Weekly'],
        color: 'bg-primary-50 border-primary-200',
    },
    {
        id: 2,
        title: 'Dealing with Monsoon Hair',
        icon: '🌧️',
        content: 'During monsoon, use anti-fungal shampoo to prevent scalp infections. Avoid tying wet hair and let it air dry. Apply light leave-in serum to combat humidity-induced frizz.',
        tags: ['Monsoon Care', 'India Specific'],
        color: 'bg-blue-50 border-blue-200',
    },
    {
        id: 3,
        title: 'Natural Remedies for Hair Fall',
        icon: '🌿',
        content: 'Mix onion juice with honey and apply to your scalp. Fenugreek (methi) seeds soaked overnight and ground into paste work wonders. Hibiscus paste promotes growth naturally.',
        tags: ['Hair Fall', 'Ayurvedic'],
        color: 'bg-secondary-50 border-secondary-200',
    },
    {
        id: 4,
        title: 'Protect from Hard Water',
        icon: '💧',
        content: 'Indian tap water is often hard. Use filtered water for final rinse, or add apple cider vinegar to remove mineral buildup. Consider installing a shower filter.',
        tags: ['India Specific', 'Daily Care'],
        color: 'bg-accent-50 border-accent-200',
    },
    {
        id: 5,
        title: 'Heat Protection Tips',
        icon: '🔥',
        content: 'Always use heat protectant spray before styling. Keep straighteners below 180°C for Indian hair. Air dry whenever possible to maintain natural texture.',
        tags: ['Styling', 'Protection'],
        color: 'bg-purple-50 border-purple-200',
    },
    {
        id: 6,
        title: 'Diet for Hair Health',
        icon: '🥗',
        content: 'Include curry leaves, amla, spinach, and dal in your diet. Stay hydrated with at least 8 glasses of water. Biotin-rich foods like eggs and almonds strengthen hair.',
        tags: ['Nutrition', 'Inside-Out Care'],
        color: 'bg-green-50 border-green-200',
    },
];

export default function Tips() {
    const [expandedId, setExpandedId] = useState(null);

    return (
        <section id="tips" className="section bg-white">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-accent-100 text-accent-600 rounded-full text-sm font-medium mb-4">
                        Expert Advice
                    </span>
                    <h2 className="section-title">
                        Hair Care Tips for{' '}
                        <span className="text-gradient">Indian Hair</span>
                    </h2>
                    <p className="section-subtitle">
                        Practical, tried-and-tested tips specifically for the Indian climate and hair types.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
                    }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {tips.map((tip) => (
                        <motion.div
                            key={tip.id}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            className={`rounded-2xl border-2 ${tip.color} overflow-hidden transition-all duration-300 hover:shadow-lg`}
                        >
                            <button
                                onClick={() => setExpandedId(expandedId === tip.id ? null : tip.id)}
                                className="w-full p-6 text-left"
                            >
                                <div className="flex items-start gap-4">
                                    <span className="text-3xl">{tip.icon}</span>
                                    <div className="flex-1">
                                        <h3 className="font-display font-bold text-lg text-neutral-900 mb-2">
                                            {tip.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {tip.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2 py-1 bg-white/80 rounded-full text-xs font-medium text-neutral-600"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <motion.svg
                                        animate={{ rotate: expandedId === tip.id ? 180 : 0 }}
                                        className="w-5 h-5 text-neutral-400 flex-shrink-0 mt-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </motion.svg>
                                </div>
                            </button>

                            <motion.div
                                initial={false}
                                animate={{
                                    height: expandedId === tip.id ? 'auto' : 0,
                                    opacity: expandedId === tip.id ? 1 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="px-6 pb-6 pt-0">
                                    <div className="h-px bg-neutral-200 mb-4" />
                                    <p className="text-neutral-600 leading-relaxed">
                                        {tip.content}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
