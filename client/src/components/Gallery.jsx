import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const results = [
    {
        name: 'Aditi M.',
        location: 'Mumbai',
        treatment: 'Keratin Treatment',
        before: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80',
        after: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&q=80',
        duration: '3 months',
    },
    {
        name: 'Rohan K.',
        location: 'Pune',
        treatment: 'Hair Fall Treatment',
        before: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
        after: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
        duration: '6 months',
    },
    {
        name: 'Sneha P.',
        location: 'Delhi',
        treatment: 'Color & Styling',
        before: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80',
        after: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&q=80',
        duration: '1 session',
    },
    {
        name: 'Priya V.',
        location: 'Bangalore',
        treatment: 'Scalp Therapy',
        before: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80',
        after: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
        duration: '4 months',
    },
];

export default function Gallery() {
    const [loading, setLoading] = useState(true);
    const [selected, setSelected] = useState(null);

    useEffect(() => { const t = setTimeout(() => setLoading(false), 1400); return () => clearTimeout(t); }, []);

    return (
        <section id="results" className="section-spacing bg-warm">
            <div className="container-elegant">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="heading-eyebrow mb-3 block">Transformations</span>
                    <h2 className="heading-display text-headline mb-4">Real Results</h2>
                    <p className="body-text max-w-lg mx-auto">
                        Before and after stories from real clients across India.
                    </p>
                </motion.div>

                {loading ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-charcoal-50">
                                <div className="grid grid-cols-2 gap-0.5">
                                    <div className="skeleton-pulse h-40" />
                                    <div className="skeleton-pulse h-40" />
                                </div>
                                <div className="p-4 space-y-2">
                                    <div className="skeleton-pulse h-4 w-2/3" />
                                    <div className="skeleton-pulse h-3 w-1/2" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {results.map((r, i) => (
                            <motion.div
                                key={i}
                                variants={{
                                    hidden: { opacity: 0, y: 24 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                                }}
                                className="card-elegant cursor-pointer group"
                                onClick={() => setSelected(r)}
                            >
                                <div className="grid grid-cols-2">
                                    <div className="relative h-44 overflow-hidden">
                                        <img src={r.before} alt="Before" className="w-full h-full object-cover" />
                                        <span className="absolute bottom-2 left-2 text-[10px] font-semibold uppercase tracking-wider bg-black/60 text-white px-2 py-0.5 rounded">
                                            Before
                                        </span>
                                    </div>
                                    <div className="relative h-44 overflow-hidden">
                                        <img src={r.after} alt="After" className="w-full h-full object-cover" />
                                        <span className="absolute bottom-2 left-2 text-[10px] font-semibold uppercase tracking-wider bg-brand-500 text-white px-2 py-0.5 rounded">
                                            After
                                        </span>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="font-medium text-charcoal-900 text-sm">{r.name} — {r.location}</div>
                                    <div className="text-xs text-charcoal-400 mt-0.5">{r.treatment} · {r.duration}</div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={() => setSelected(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="grid grid-cols-2">
                                <div className="relative h-64 md:h-80">
                                    <img src={selected.before} alt="Before" className="w-full h-full object-cover" />
                                    <span className="absolute top-3 left-3 text-xs font-semibold uppercase tracking-wider bg-black/60 text-white px-3 py-1 rounded-full">Before</span>
                                </div>
                                <div className="relative h-64 md:h-80">
                                    <img src={selected.after} alt="After" className="w-full h-full object-cover" />
                                    <span className="absolute top-3 left-3 text-xs font-semibold uppercase tracking-wider bg-brand-500 text-white px-3 py-1 rounded-full">After</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="font-display text-xl font-semibold text-charcoal-900">{selected.name}</h3>
                                <p className="text-sm text-charcoal-400 mt-1">{selected.location} · {selected.treatment} · {selected.duration}</p>
                                <button onClick={() => setSelected(null)} className="btn-primary mt-4 text-sm py-2.5 px-5">Close</button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
