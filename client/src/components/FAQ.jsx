import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const faqs = [
    {
        q: 'What makes LushLocks different from other salons?',
        a: 'We combine Ayurvedic wisdom with modern trichology. Every treatment is customized for your specific hair type and concerns, using only natural and certified-safe products.',
    },
    {
        q: 'Do you use chemical-free products?',
        a: 'Yes — all our products are sulfate-free, paraben-free, and cruelty-free. Our Ayurvedic line uses certified organic ingredients sourced from Indian farms.',
    },
    {
        q: 'How long do treatments take to show results?',
        a: 'Keratin smoothing shows immediate results. Hair fall and scalp treatments typically show noticeable improvement in 4-6 weeks with consistent sessions.',
    },
    {
        q: 'Can I book a trial session before committing?',
        a: 'Absolutely! We offer a complimentary 15-minute consultation for new clients. For bridal packages, one trial session is included at no extra charge.',
    },
    {
        q: 'Do you offer home service?',
        a: 'Yes, premium home-visit services are available in Mumbai, Delhi, Bangalore, and Pune. Minimum booking of ₹3,000 applies for home visits.',
    },
    {
        q: 'What is the cancellation policy?',
        a: 'Free cancellation up to 24 hours before your appointment. Late cancellations may incur a 25% fee. You can reschedule anytime through our website or WhatsApp.',
    },
];

export default function FAQ() {
    const [open, setOpen] = useState(null);

    return (
        <section id="faq" className="section-spacing bg-warm">
            <div className="container-elegant">
                <div className="grid lg:grid-cols-5 gap-16">
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2"
                    >
                        <span className="heading-eyebrow mb-3 block">FAQ</span>
                        <h2 className="heading-display text-headline mb-4">Common Questions</h2>
                        <p className="body-text mb-8">
                            Can't find what you're looking for? Reach out to us directly.
                        </p>
                        <a href="mailto:hello@lushlocks.in" className="btn-secondary text-sm">
                            Contact Us
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </motion.div>

                    {/* Right — Accordion */}
                    <div className="lg:col-span-3 space-y-2">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.04 }}
                                className="border-b border-charcoal-100"
                            >
                                <button
                                    onClick={() => setOpen(open === i ? null : i)}
                                    className="w-full flex items-center justify-between py-5 text-left"
                                >
                                    <span className="font-medium text-charcoal-900 pr-4">{faq.q}</span>
                                    <svg
                                        className={`w-5 h-5 text-charcoal-300 shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <AnimatePresence>
                                    {open === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                        >
                                            <p className="pb-5 text-sm text-charcoal-500 leading-relaxed">
                                                {faq.a}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
