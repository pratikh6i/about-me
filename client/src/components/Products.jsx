import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useSnackbar } from '../contexts/SnackbarContext';

const products = [
    {
        name: 'Bhringraj Growth Oil',
        category: 'Oil',
        price: '₹649',
        originalPrice: '₹799',
        rating: 4.8,
        reviews: 142,
        badge: 'Bestseller',
        image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&q=80',
        desc: 'Cold-pressed bhringraj with amla & coconut. Stimulates growth and reduces hair fall.',
    },
    {
        name: 'Hibiscus Repair Mask',
        category: 'Treatment',
        price: '₹899',
        originalPrice: null,
        rating: 4.7,
        reviews: 98,
        badge: 'New',
        image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&q=80',
        desc: 'Deep-conditioning mask with hibiscus extract. Repairs damage and restores shine.',
    },
    {
        name: 'Anti-Dandruff Serum',
        category: 'Serum',
        price: '₹549',
        originalPrice: '₹699',
        rating: 4.6,
        reviews: 76,
        badge: null,
        image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=400&q=80',
        desc: 'Tea tree & neem formula that targets dandruff at the root. Gentle, everyday use.',
    },
    {
        name: 'Silk Protein Shampoo',
        category: 'Shampoo',
        price: '₹449',
        originalPrice: null,
        rating: 4.9,
        reviews: 203,
        badge: 'Top Rated',
        image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=400&q=80',
        desc: 'Sulfate-free cleansing with silk proteins. Leaves hair soft without stripping natural oils.',
    },
];

const Stars = ({ rating }) => (
    <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} className={`w-3.5 h-3.5 ${i < Math.round(rating) ? 'text-brand-400' : 'text-charcoal-100'}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))}
    </div>
);

export default function Products() {
    const [loading, setLoading] = useState(true);
    const { showSnackbar } = useSnackbar();

    useEffect(() => { const t = setTimeout(() => setLoading(false), 1400); return () => clearTimeout(t); }, []);

    return (
        <section id="products" className="section-spacing bg-warm-alt">
            <div className="container-elegant">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="heading-eyebrow mb-3 block">Shop</span>
                    <h2 className="heading-display text-headline mb-4">Curated Products</h2>
                    <p className="body-text max-w-lg mx-auto">
                        Natural, cruelty-free formulas crafted for Indian hair — from monsoon frizz to summer damage.
                    </p>
                </motion.div>

                {loading ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-charcoal-50">
                                <div className="skeleton-pulse h-56 w-full" />
                                <div className="p-5 space-y-3">
                                    <div className="skeleton-pulse h-4 w-1/3" />
                                    <div className="skeleton-pulse h-5 w-3/4" />
                                    <div className="skeleton-pulse h-3 w-full" />
                                    <div className="skeleton-pulse h-8 w-1/2 mt-2" />
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
                        {products.map((p) => (
                            <motion.div
                                key={p.name}
                                variants={{
                                    hidden: { opacity: 0, y: 24 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                                }}
                                className="card-elegant group"
                            >
                                {/* Image */}
                                <div className="relative h-56 overflow-hidden bg-cream-100">
                                    <img
                                        src={p.image}
                                        alt={p.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    {p.badge && (
                                        <span className="absolute top-3 left-3 px-2.5 py-1 bg-charcoal-900 text-white text-[10px] font-semibold uppercase tracking-wider rounded-full">
                                            {p.badge}
                                        </span>
                                    )}
                                </div>

                                {/* Info */}
                                <div className="p-5">
                                    <span className="text-[11px] font-medium uppercase tracking-wider text-charcoal-300">{p.category}</span>
                                    <h3 className="font-display text-lg font-semibold text-charcoal-900 mt-1 mb-1.5">{p.name}</h3>
                                    <p className="text-xs text-charcoal-400 leading-relaxed mb-3">{p.desc}</p>

                                    <div className="flex items-center gap-2 mb-4">
                                        <Stars rating={p.rating} />
                                        <span className="text-xs text-charcoal-300">({p.reviews})</span>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-lg font-semibold text-charcoal-900">{p.price}</span>
                                            {p.originalPrice && (
                                                <span className="text-sm text-charcoal-300 line-through">{p.originalPrice}</span>
                                            )}
                                        </div>
                                        <button
                                            onClick={() => showSnackbar(`${p.name} added to cart!`, 'success')}
                                            className="w-9 h-9 rounded-full bg-charcoal-900 text-white flex items-center justify-center hover:bg-brand-600 transition-colors"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </section>
    );
}
