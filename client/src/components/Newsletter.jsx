import { motion } from 'framer-motion';
import { useState } from 'react';
import { useSnackbar } from '../contexts/SnackbarContext';

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { showSnackbar } = useSnackbar();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            showSnackbar('Please enter your email address', 'warning');
            return;
        }

        if (!email.includes('@')) {
            showSnackbar('Please enter a valid email address', 'error');
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        showSnackbar('Welcome to LushLocks! Check your inbox for exclusive tips 💌', 'success');
        setEmail('');
        setIsSubmitting(false);
    };

    return (
        <section id="newsletter" className="section bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto text-center"
                >
                    <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6">
                        ✉️ Stay Updated
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
                        Get Exclusive Hair Care Tips
                    </h2>
                    <p className="text-lg text-neutral-400 mb-8">
                        Join 10,000+ subscribers for weekly tips, exclusive offers, and new product launches.
                        No spam, unsubscribe anytime.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="flex-1 px-5 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-neutral-400 focus:outline-none focus:border-primary-400 focus:bg-white/15 transition-all"
                        />
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn btn-primary px-8 py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <span className="flex items-center gap-2">
                                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    Subscribing...
                                </span>
                            ) : (
                                'Subscribe'
                            )}
                        </button>
                    </form>

                    <p className="mt-4 text-sm text-neutral-500">
                        By subscribing, you agree to our Privacy Policy.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
