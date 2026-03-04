import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const services = [
    {
        icon: '🌿',
        title: 'Ayurvedic Hair Treatment',
        desc: 'Ancient wisdom meets modern science. Deep-nourishing treatments with amla, brahmi, and bhringraj for holistic hair revival.',
        duration: '90 min',
        price: '₹2,499',
    },
    {
        icon: '✨',
        title: 'Keratin Smoothing',
        desc: 'Tame humidity and frizz with our formaldehyde-free keratin system. Silky, manageable hair that lasts up to 4 months.',
        duration: '120 min',
        price: '₹4,999',
    },
    {
        icon: '💆‍♀️',
        title: 'Scalp Rejuvenation',
        desc: 'Advanced scalp therapy targeting dandruff, dryness, and hair fall. Includes micro-circulation massage and nutrient infusion.',
        duration: '60 min',
        price: '₹1,799',
    },
    {
        icon: '💇‍♀️',
        title: 'Precision Styling',
        desc: 'Bespoke cuts and styling by our master stylists. Tailored to your face shape, hair texture, and personal style.',
        duration: '45 min',
        price: '₹999',
    },
    {
        icon: '🎨',
        title: 'Color & Highlights',
        desc: 'From subtle balayage to bold fashion colors. Using ammonia-free, nourishing dyes that protect hair integrity.',
        duration: '150 min',
        price: '₹3,499',
    },
    {
        icon: '👰',
        title: 'Bridal Packages',
        desc: 'Complete bridal hair — from mehendi to reception. Trial sessions, day-of styling, and touch-up kits included.',
        duration: 'Custom',
        price: '₹14,999',
    },
];

export default function Services() {
    const [loading, setLoading] = useState(true);
    useEffect(() => { const t = setTimeout(() => setLoading(false), 1200); return () => clearTimeout(t); }, []);

    return (
        <section id="services" className="section-spacing bg-warm">
            <div className="container-elegant">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="heading-eyebrow mb-3 block">What We Offer</span>
                    <h2 className="heading-display text-headline mb-4">
                        Our Services
                    </h2>
                    <p className="body-text max-w-lg mx-auto">
                        Each treatment is personalized for Indian hair types — from oily scalps to dry, coarse textures.
                    </p>
                </motion.div>

                {loading ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-white border border-charcoal-50">
                                <div className="skeleton-pulse w-12 h-12 rounded-xl mb-6" />
                                <div className="skeleton-pulse h-5 w-2/3 mb-3" />
                                <div className="skeleton-pulse h-3 w-full mb-2" />
                                <div className="skeleton-pulse h-3 w-4/5" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {services.map((s) => (
                            <motion.div
                                key={s.title}
                                variants={{
                                    hidden: { opacity: 0, y: 24 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                                }}
                                className="card-elegant p-8 group"
                            >
                                <div className="text-3xl mb-5">{s.icon}</div>
                                <h3 className="font-display text-xl font-semibold text-charcoal-900 mb-2">{s.title}</h3>
                                <p className="text-sm text-charcoal-400 leading-relaxed mb-6">{s.desc}</p>
                                <div className="flex items-center justify-between pt-4 border-t border-charcoal-50">
                                    <span className="text-xs text-charcoal-300">{s.duration}</span>
                                    <span className="text-sm font-semibold text-brand-600">{s.price}</span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </section>
    );
}
