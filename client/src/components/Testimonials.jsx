import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const testimonials = [
    {
        name: 'Vikas Dighe',
        location: 'Sangamner',
        image: '/vikasdatapoc/vikas.jpg',
        rating: 5,
        text: 'खूपच भारी अनुभव! केसांची काळजी घेण्याचा उत्तम मार्ग सापडला. आयुर्वेदिक ट्रीटमेंट एकदम झकास आहे. माझे केस आता मजबूत आणि चमकदार दिसतात.',
        treatment: 'Ayurvedic Hair Treatment',
    },
    {
        name: 'Ananya Reddy',
        location: 'Bangalore',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=faces',
        rating: 5,
        text: 'Got my bridal hair done here and received so many compliments! The team understood exactly what I wanted. The photos came out stunning.',
        treatment: 'Bridal Services',
    },
    {
        name: 'Kavitha Nair',
        location: 'Delhi',
        image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=120&h=120&fit=crop&crop=faces',
        rating: 5,
        text: 'The keratin treatment here is the best I\'ve ever had. My frizzy, unmanageable hair is now smooth and glossy. Worth every rupee!',
        treatment: 'Keratin Treatment',
    },
    {
        name: 'Meera Iyer',
        location: 'Chennai',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=faces',
        rating: 4,
        text: 'Love their products! The amla oil has become a staple in my routine. Natural ingredients and amazing results from day one.',
        treatment: 'Product Purchase',
    },
];

export default function Testimonials() {
    const [active, setActive] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => { const t = setTimeout(() => setLoading(false), 1200); return () => clearTimeout(t); }, []);
    useEffect(() => {
        const interval = setInterval(() => setActive((p) => (p + 1) % testimonials.length), 6000);
        return () => clearInterval(interval);
    }, []);

    const t = testimonials[active];

    return (
        <section id="testimonials" className="section-spacing bg-warm">
            <div className="container-elegant">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="heading-eyebrow mb-3 block">Client Stories</span>
                    <h2 className="heading-display text-headline mb-4">What Our Clients Say</h2>
                    <p className="body-text max-w-lg mx-auto">
                        Real experiences from people who transformed their hair with us.
                    </p>
                </motion.div>

                {loading ? (
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="skeleton-pulse w-20 h-20 rounded-full mx-auto mb-6" />
                        <div className="skeleton-pulse h-4 w-3/4 mx-auto mb-3" />
                        <div className="skeleton-pulse h-4 w-2/3 mx-auto mb-3" />
                        <div className="skeleton-pulse h-3 w-1/3 mx-auto" />
                    </div>
                ) : (
                    <div className="max-w-2xl mx-auto text-center">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <img
                                src={t.image}
                                alt={t.name}
                                className="w-20 h-20 rounded-full object-cover mx-auto mb-6 border-2 border-cream-200"
                            />

                            {/* Stars */}
                            <div className="flex gap-1 justify-center mb-6">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <svg key={i} className={`w-4 h-4 ${i < t.rating ? 'text-brand-400' : 'text-charcoal-100'}`} fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <blockquote className="font-display text-xl md:text-2xl font-medium text-charcoal-800 leading-relaxed mb-6 italic">
                                "{t.text}"
                            </blockquote>

                            <div className="font-semibold text-charcoal-900">{t.name}</div>
                            <div className="text-sm text-charcoal-400">{t.location} · {t.treatment}</div>
                        </motion.div>

                        {/* Dots */}
                        <div className="flex gap-2 justify-center mt-10">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActive(i)}
                                    className={`h-1.5 rounded-full transition-all duration-400 ${i === active ? 'w-8 bg-brand-500' : 'w-4 bg-charcoal-200 hover:bg-charcoal-300'
                                        }`}
                                    aria-label={`Testimonial ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
