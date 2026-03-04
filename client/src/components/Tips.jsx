import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const tips = [
    {
        title: 'Monsoon Hair Care Routine',
        category: 'Seasonal',
        content: 'Use a mild anti-fungal shampoo twice a week during monsoons. Apply a light leave-in conditioner to prevent humidity frizz. Avoid tying wet hair in tight buns — it weakens roots.',
    },
    {
        title: 'Oil Massage for Growth',
        category: 'Ayurvedic',
        content: 'Warm coconut or bhringraj oil and massage into scalp in circular motions for 10 minutes. Leave overnight and wash next morning with a sulfate-free shampoo. Do this twice a week for best results.',
    },
    {
        title: 'Diet for Stronger Hair',
        category: 'Nutrition',
        content: 'Include sprouts, walnuts, amla, and fish in your diet for keratin and biotin. Drink at least 3 liters of water daily. Consider a daily supplement of biotin (5000 mcg) and zinc.',
    },
    {
        title: 'Protect from Hard Water',
        category: 'Daily Care',
        content: 'Install a shower filter if your area has hard water — it strips natural oils. Rinse hair with diluted apple cider vinegar once a week to remove mineral buildup and restore shine.',
    },
    {
        title: 'Henna: The Natural Conditioner',
        category: 'Ayurvedic',
        content: 'Mix henna with yogurt, methi powder, and egg for a deep-conditioning hair mask. Apply for 2 hours and wash off. It strengthens hair, adds natural color, and boosts volume.',
    },
    {
        title: 'Heat Styling Without Damage',
        category: 'Styling',
        content: 'Always use a heat protectant spray before straightening or curling. Keep temperature below 180°C. Limit to once a week, and always deep condition afterwards.',
    },
];

export default function Tips() {
    const [open, setOpen] = useState(null);

    return (
        <section id="tips" className="section-spacing bg-warm-alt">
            <div className="container-elegant">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="heading-eyebrow mb-3 block">Expert Advice</span>
                    <h2 className="heading-display text-headline mb-4">Hair Care Tips</h2>
                    <p className="body-text max-w-lg mx-auto">
                        Practical, India-specific advice from our expert stylists and trichologists.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-3">
                    {tips.map((tip, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.04 }}
                            className="bg-white rounded-xl border border-charcoal-50 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full flex items-center justify-between p-5 text-left"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="px-2.5 py-0.5 bg-cream-100 text-brand-600 text-[10px] font-semibold uppercase tracking-wider rounded-full">
                                        {tip.category}
                                    </span>
                                    <span className="font-medium text-charcoal-900">{tip.title}</span>
                                </div>
                                <svg
                                    className={`w-5 h-5 text-charcoal-300 transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`}
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeWidth="1.5" d="M12 4v16m8-8H4" />
                                </svg>
                            </button>
                            <AnimatePresence>
                                {open === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        <div className="px-5 pb-5 text-sm text-charcoal-500 leading-relaxed border-t border-charcoal-50 pt-4">
                                            {tip.content}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
