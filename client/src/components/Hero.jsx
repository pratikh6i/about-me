import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Gradient Mesh */}
            <div className="absolute inset-0 gradient-mesh" />

            {/* Decorative Blobs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300/30 rounded-full blur-3xl blob-animate" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-300/20 rounded-full blur-3xl blob-animate" style={{ animationDelay: '-4s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary-200/20 rounded-full blur-3xl" />

            <div className="container-custom relative z-10 pt-24 pb-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center lg:text-left"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6"
                        >
                            ✨ India's Premium Hair Care Destination
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-neutral-900 mb-6 leading-tight"
                        >
                            Unlock Your Hair's{' '}
                            <span className="text-gradient">Natural Beauty</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg md:text-xl text-neutral-600 mb-8 max-w-lg mx-auto lg:mx-0"
                        >
                            Expert solutions tailored for Indian hair. From traditional Ayurvedic treatments to modern styling,
                            discover the perfect care routine for your unique hair type.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <a href="#quiz" className="btn btn-primary text-base px-8 py-4">
                                <span>Discover Your Hair Type</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                            <a href="#services" className="btn btn-secondary text-base px-8 py-4">
                                Explore Services
                            </a>
                        </motion.div>

                        {/* Trust Indicators */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8"
                        >
                            <div className="text-center">
                                <div className="text-2xl font-display font-bold text-primary-600">10K+</div>
                                <div className="text-sm text-neutral-500">Happy Clients</div>
                            </div>
                            <div className="w-px h-10 bg-neutral-200" />
                            <div className="text-center">
                                <div className="text-2xl font-display font-bold text-primary-600">4.9★</div>
                                <div className="text-sm text-neutral-500">Average Rating</div>
                            </div>
                            <div className="w-px h-10 bg-neutral-200" />
                            <div className="text-center">
                                <div className="text-2xl font-display font-bold text-primary-600">15+</div>
                                <div className="text-sm text-neutral-500">Years Experience</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative"
                    >
                        <div className="relative aspect-square max-w-lg mx-auto">
                            {/* Main Image Container */}
                            <div className="absolute inset-8 rounded-3xl gradient-primary opacity-20 blur-2xl" />
                            <div className="relative bg-gradient-to-br from-primary-400 to-primary-600 rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=600&fit=crop&crop=faces"
                                    alt="Beautiful Indian woman with healthy shiny hair"
                                    className="w-full h-full object-cover mix-blend-overlay opacity-90"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
                            </div>

                            {/* Floating Cards */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8 }}
                                className="absolute -left-4 top-1/4 glass rounded-2xl p-4 shadow-xl"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-secondary-400 flex items-center justify-center">
                                        <span>🌿</span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-sm">100% Natural</div>
                                        <div className="text-xs text-neutral-500">Ayurvedic Ingredients</div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.9 }}
                                className="absolute -right-4 bottom-1/4 glass rounded-2xl p-4 shadow-xl"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-accent-300 flex items-center justify-center">
                                        <span>💆‍♀️</span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-sm">Expert Care</div>
                                        <div className="text-xs text-neutral-500">Personalized Treatment</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="flex flex-col items-center gap-2 text-neutral-400"
                >
                    <span className="text-xs uppercase tracking-widest">Scroll</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    );
}
