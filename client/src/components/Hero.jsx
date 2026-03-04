import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-end pb-16 md:pb-24 overflow-hidden bg-warm">
            {/* Background image with overlay */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&q=80"
                    alt="Hair care"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
            </div>

            <div className="container-elegant relative z-10 text-white">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-3xl"
                >
                    <span className="heading-eyebrow text-brand-300 mb-4 block">
                        Crafted for Indian Hair
                    </span>

                    <h1 className="heading-display text-hero text-white mb-6">
                        Unlock Your Hair's <em className="italic font-normal text-brand-300">Natural</em> Beauty
                    </h1>

                    <p className="text-lg md:text-xl text-white/70 max-w-xl mb-10 leading-relaxed font-light">
                        Expert treatments rooted in Ayurveda, designed for the modern Indian lifestyle.
                        Your journey to healthier, radiant hair starts here.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a href="#quiz" className="btn-primary bg-white text-charcoal-900 hover:bg-cream-100">
                            Take the Hair Quiz
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <a href="#services" className="btn-secondary border-white/30 text-white hover:bg-white/10 hover:border-white/60">
                            Explore Services
                        </a>
                    </div>
                </motion.div>

                {/* Trust strip */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="mt-16 pt-8 border-t border-white/15 flex flex-wrap gap-8 md:gap-16"
                >
                    {[
                        { value: '12K+', label: 'Happy Clients' },
                        { value: '4.9★', label: 'Rating' },
                        { value: '8+', label: 'Years' },
                        { value: '100%', label: 'Natural Products' },
                    ].map(({ value, label }) => (
                        <div key={label}>
                            <div className="text-xl md:text-2xl font-display font-semibold text-white">{value}</div>
                            <div className="text-xs text-white/50 mt-1">{label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
