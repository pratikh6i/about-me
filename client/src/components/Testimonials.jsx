import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { SkeletonTestimonial } from './Skeleton';

const testimonials = [
    {
        id: 1,
        name: 'Priya Sharma',
        location: 'Mumbai',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces',
        rating: 5,
        text: 'After years of struggling with hair fall, LushLocks transformed my hair completely! The Ayurvedic treatment is magical. My hair has never looked this healthy.',
        treatment: 'Ayurvedic Hair Treatment',
    },
    {
        id: 2,
        name: 'Ananya Reddy',
        location: 'Bangalore',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces',
        rating: 5,
        text: 'Got my bridal hair done here and received so many compliments! The team understood exactly what I wanted. The photos came out stunning.',
        treatment: 'Bridal Services',
    },
    {
        id: 3,
        name: 'Kavitha Nair',
        location: 'Delhi',
        image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=faces',
        rating: 5,
        text: 'The keratin treatment here is the best I\'ve ever had. My frizzy, unmanageable hair is now smooth and glossy. Worth every rupee!',
        treatment: 'Keratin Treatment',
    },
    {
        id: 4,
        name: 'Meera Iyer',
        location: 'Chennai',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces',
        rating: 4,
        text: 'Love their products! The amla oil has become a staple in my routine. Natural ingredients and amazing results.',
        treatment: 'Product Purchase',
    },
];

export default function Testimonials() {
    const [isLoading, setIsLoading] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1800);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="testimonials" className="section bg-neutral-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
            </div>

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-white/10 text-primary-300 rounded-full text-sm font-medium mb-4">
                        Client Love
                    </span>
                    <h2 className="section-title text-white">
                        What Our Clients{' '}
                        <span className="text-primary-400">Say</span>
                    </h2>
                    <p className="section-subtitle text-neutral-400">
                        Real stories from real people who transformed their hair with us.
                    </p>
                </motion.div>

                {isLoading ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <SkeletonTestimonial key={i} className="bg-neutral-800" />
                        ))}
                    </div>
                ) : (
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
                        }}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                className={`p-6 rounded-2xl transition-all duration-500 ${index === activeIndex
                                        ? 'bg-primary-600 shadow-xl shadow-primary-900/30 scale-105'
                                        : 'bg-neutral-800 hover:bg-neutral-750'
                                    }`}
                            >
                                {/* Header */}
                                <div className="flex items-center gap-4 mb-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-14 h-14 rounded-full object-cover border-2 border-white/20"
                                    />
                                    <div>
                                        <h4 className="font-display font-semibold">{testimonial.name}</h4>
                                        <p className={`text-sm ${index === activeIndex ? 'text-primary-200' : 'text-neutral-400'}`}>
                                            {testimonial.location}
                                        </p>
                                    </div>
                                </div>

                                {/* Rating */}
                                <div className="flex gap-1 mb-3">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <svg
                                            key={i}
                                            className={`w-4 h-4 ${i < testimonial.rating
                                                    ? index === activeIndex
                                                        ? 'text-white'
                                                        : 'text-secondary-400'
                                                    : 'text-neutral-600'
                                                }`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className={`text-sm leading-relaxed mb-4 ${index === activeIndex ? 'text-white/90' : 'text-neutral-300'
                                    }`}>
                                    "{testimonial.text}"
                                </p>

                                {/* Treatment Tag */}
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${index === activeIndex
                                        ? 'bg-white/20 text-white'
                                        : 'bg-neutral-700 text-neutral-300'
                                    }`}>
                                    {testimonial.treatment}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                )}

                {/* Navigation Dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex
                                    ? 'w-8 bg-primary-400'
                                    : 'bg-neutral-600 hover:bg-neutral-500'
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
