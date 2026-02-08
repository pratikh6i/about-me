import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Skeleton, SkeletonCard } from './Skeleton';

const products = [
    {
        id: 1,
        name: 'Amla & Bhringraj Oil',
        category: 'Hair Oil',
        price: '₹599',
        rating: 4.9,
        reviews: 234,
        image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&h=400&fit=crop',
        badge: 'Bestseller',
        badgeColor: 'bg-secondary-500 text-white',
    },
    {
        id: 2,
        name: 'Keratin Repair Shampoo',
        category: 'Shampoo',
        price: '₹449',
        rating: 4.7,
        reviews: 189,
        image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=400&h=400&fit=crop',
        badge: 'New',
        badgeColor: 'bg-primary-500 text-white',
    },
    {
        id: 3,
        name: 'Deep Conditioning Mask',
        category: 'Treatment',
        price: '₹799',
        rating: 4.8,
        reviews: 156,
        image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop',
        badge: null,
        badgeColor: '',
    },
    {
        id: 4,
        name: 'Anti-Dandruff Serum',
        category: 'Serum',
        price: '₹649',
        rating: 4.6,
        reviews: 98,
        image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop',
        badge: '20% Off',
        badgeColor: 'bg-accent-500 text-white',
    },
];

export default function Products() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="products" className="section gradient-mesh">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-4">
                        Shop Our Products
                    </span>
                    <h2 className="section-title">
                        Premium Hair Care{' '}
                        <span className="text-gradient">Products</span>
                    </h2>
                    <p className="section-subtitle">
                        Curated collection of products made with natural ingredients,
                        specially formulated for Indian hair types.
                    </p>
                </motion.div>

                {isLoading ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <SkeletonCard key={i} />
                        ))}
                    </div>
                ) : (
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
                        }}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {products.map((product) => (
                            <motion.div
                                key={product.id}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                className="card group"
                            >
                                {/* Image Container */}
                                <div className="relative aspect-square overflow-hidden bg-neutral-100">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    {product.badge && (
                                        <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${product.badgeColor}`}>
                                            {product.badge}
                                        </span>
                                    )}
                                    {/* Quick Actions */}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                                        <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors shadow-lg">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </button>
                                        <button className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors shadow-lg">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <span className="text-xs font-medium text-primary-600 uppercase tracking-wide">
                                        {product.category}
                                    </span>
                                    <h3 className="font-display font-semibold text-lg text-neutral-900 mt-1 mb-2 group-hover:text-primary-600 transition-colors">
                                        {product.name}
                                    </h3>

                                    {/* Rating */}
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="flex items-center text-secondary-500">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-neutral-200'}`} viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <span className="text-sm text-neutral-500">({product.reviews})</span>
                                    </div>

                                    {/* Price */}
                                    <div className="flex items-center justify-between">
                                        <span className="font-display font-bold text-xl text-neutral-900">{product.price}</span>
                                        <button className="btn btn-ghost text-sm px-4 py-2">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <a href="#" className="btn btn-secondary">
                        View All Products
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
