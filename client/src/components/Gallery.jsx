import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Skeleton } from './Skeleton';

const transformations = [
    {
        id: 1,
        before: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&h=500&fit=crop',
        after: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=500&fit=crop',
        name: 'Riya',
        treatment: 'Keratin Treatment',
        category: 'smoothing',
    },
    {
        id: 2,
        before: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=500&fit=crop',
        after: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=400&h=500&fit=crop',
        name: 'Priya',
        treatment: 'Hair Coloring',
        category: 'color',
    },
    {
        id: 3,
        before: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=500&fit=crop',
        after: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&h=500&fit=crop',
        name: 'Ananya',
        treatment: 'Hair Restoration',
        category: 'treatment',
    },
    {
        id: 4,
        before: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop',
        after: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
        name: 'Arjun',
        treatment: 'Hair Styling',
        category: 'styling',
    },
];

const filters = [
    { value: 'all', label: 'All' },
    { value: 'smoothing', label: 'Smoothing' },
    { value: 'color', label: 'Coloring' },
    { value: 'treatment', label: 'Treatment' },
    { value: 'styling', label: 'Styling' },
];

export default function Gallery() {
    const [isLoading, setIsLoading] = useState(true);
    const [activeFilter, setActiveFilter] = useState('all');
    const [lightbox, setLightbox] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1600);
        return () => clearTimeout(timer);
    }, []);

    const filteredItems = activeFilter === 'all'
        ? transformations
        : transformations.filter(t => t.category === activeFilter);

    return (
        <section id="gallery" className="section gradient-mesh">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-4">
                        Real Results
                    </span>
                    <h2 className="section-title">
                        Before & After{' '}
                        <span className="text-gradient">Transformations</span>
                    </h2>
                    <p className="section-subtitle">
                        See the incredible transformations our clients have experienced.
                    </p>
                </motion.div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {filters.map((filter) => (
                        <button
                            key={filter.value}
                            onClick={() => setActiveFilter(filter.value)}
                            className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${activeFilter === filter.value
                                    ? 'bg-primary-500 text-white shadow-md'
                                    : 'bg-white text-neutral-600 hover:bg-neutral-100'
                                }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                {isLoading ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <Skeleton key={i} variant="card" height="400px" />
                        ))}
                    </div>
                ) : (
                    <motion.div
                        layout
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredItems.map((item) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="card group cursor-pointer"
                                    onClick={() => setLightbox(item)}
                                >
                                    {/* Before/After Image Container */}
                                    <div className="relative aspect-[4/5] overflow-hidden">
                                        {/* Before Image */}
                                        <img
                                            src={item.before}
                                            alt={`${item.name} before`}
                                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                                        />
                                        {/* After Image */}
                                        <img
                                            src={item.after}
                                            alt={`${item.name} after`}
                                            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                        />

                                        {/* Labels */}
                                        <div className="absolute top-4 left-4 px-3 py-1 bg-neutral-900/80 text-white text-xs font-medium rounded-full transition-opacity group-hover:opacity-0">
                                            Before
                                        </div>
                                        <div className="absolute top-4 left-4 px-3 py-1 bg-primary-500 text-white text-xs font-medium rounded-full opacity-0 transition-opacity group-hover:opacity-100">
                                            After ✨
                                        </div>

                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                                            <span className="text-white font-medium text-sm">
                                                Click to enlarge
                                            </span>
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="p-4">
                                        <h4 className="font-display font-semibold text-neutral-900">{item.name}</h4>
                                        <p className="text-sm text-primary-600">{item.treatment}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                )}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightbox && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                        onClick={() => setLightbox(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-5xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setLightbox(null)}
                                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="relative">
                                    <img
                                        src={lightbox.before}
                                        alt="Before"
                                        className="w-full rounded-xl"
                                    />
                                    <span className="absolute top-4 left-4 px-4 py-2 bg-neutral-900/80 text-white font-medium rounded-full">
                                        Before
                                    </span>
                                </div>
                                <div className="relative">
                                    <img
                                        src={lightbox.after}
                                        alt="After"
                                        className="w-full rounded-xl"
                                    />
                                    <span className="absolute top-4 left-4 px-4 py-2 bg-primary-500 text-white font-medium rounded-full">
                                        After ✨
                                    </span>
                                </div>
                            </div>

                            <div className="text-center mt-6">
                                <h3 className="text-2xl font-display font-bold text-white">{lightbox.name}</h3>
                                <p className="text-primary-400">{lightbox.treatment}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
