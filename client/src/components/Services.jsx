import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Skeleton } from './Skeleton';

const services = [
    {
        id: 1,
        icon: '💇‍♀️',
        title: 'Hair Styling',
        description: 'From traditional braids to modern cuts, we craft styles that complement your personality and lifestyle.',
        color: 'bg-primary-100 text-primary-600',
    },
    {
        id: 2,
        icon: '🌿',
        title: 'Ayurvedic Treatment',
        description: 'Deep conditioning with natural ingredients like amla, brahmi, and bhringraj for stronger, healthier hair.',
        color: 'bg-secondary-100 text-secondary-600',
    },
    {
        id: 3,
        icon: '✨',
        title: 'Hair Spa',
        description: 'Luxurious spa treatments to nourish your scalp, reduce stress, and promote hair growth.',
        color: 'bg-accent-100 text-accent-600',
    },
    {
        id: 4,
        icon: '🎨',
        title: 'Color & Highlights',
        description: 'Premium hair coloring services with ammonia-free products safe for Indian hair types.',
        color: 'bg-purple-100 text-purple-600',
    },
    {
        id: 5,
        icon: '💆‍♀️',
        title: 'Scalp Therapy',
        description: 'Targeted treatments for dandruff, hair fall, and scalp conditions using advanced techniques.',
        color: 'bg-blue-100 text-blue-600',
    },
    {
        id: 6,
        icon: '👰',
        title: 'Bridal Services',
        description: 'Complete bridal hair packages including mehendi-day styling, sangeet looks, and the perfect wedding day hair.',
        color: 'bg-rose-100 text-rose-600',
    },
];

export default function Services() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading
        const timer = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section id="services" className="section bg-white">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-medium mb-4">
                        Our Services
                    </span>
                    <h2 className="section-title">
                        Expert Care for Every{' '}
                        <span className="text-gradient">Hair Need</span>
                    </h2>
                    <p className="section-subtitle">
                        From traditional Ayurvedic treatments to modern styling techniques,
                        we offer comprehensive services tailored for Indian hair.
                    </p>
                </motion.div>

                {isLoading ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="bento-tile">
                                <Skeleton width="3rem" height="3rem" className="rounded-xl mb-4" />
                                <Skeleton variant="title" width="60%" className="mb-3" />
                                <Skeleton variant="text" count={2} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {services.map((service) => (
                            <motion.div
                                key={service.id}
                                variants={itemVariants}
                                className="bento-tile group cursor-pointer"
                            >
                                <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                                    {service.icon}
                                </div>
                                <h3 className="font-display font-bold text-xl text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-neutral-600 leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="mt-5 flex items-center text-primary-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span>Learn more</span>
                                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </section>
    );
}
