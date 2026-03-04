import { motion } from 'framer-motion';
import { useState } from 'react';
import { useSnackbar } from '../contexts/SnackbarContext';

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const { showSnackbar } = useSnackbar();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !email.includes('@')) {
            showSnackbar('Please enter a valid email address.', 'error');
            return;
        }
        setSubmitting(true);
        setTimeout(() => {
            showSnackbar('Welcome to the LushLocks family! 💛', 'success');
            setEmail('');
            setSubmitting(false);
        }, 800);
    };

    return (
        <section className="section-spacing bg-charcoal-900">
            <div className="container-elegant">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-xl mx-auto text-center"
                >
                    <span className="heading-eyebrow text-brand-400 mb-3 block">Stay Updated</span>
                    <h2 className="heading-display text-headline text-white mb-4">
                        Join Our Newsletter
                    </h2>
                    <p className="text-charcoal-400 mb-8">
                        Hair care tips, exclusive offers, and new product launches — straight to your inbox.
                    </p>

                    <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your@email.com"
                            className="flex-1 px-5 py-3 bg-charcoal-800 border border-charcoal-700 rounded-full text-white text-sm placeholder:text-charcoal-500 focus:outline-none focus:border-brand-500 transition-colors"
                        />
                        <button
                            type="submit"
                            disabled={submitting}
                            className="btn-primary bg-brand-500 hover:bg-brand-600 whitespace-nowrap disabled:opacity-50"
                        >
                            {submitting ? 'Sending...' : 'Subscribe'}
                        </button>
                    </form>

                    <p className="text-xs text-charcoal-600 mt-4">
                        No spam, ever. Unsubscribe anytime.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
