import { motion } from 'framer-motion';
import { useState } from 'react';

const faqs = [
    {
        question: 'What makes LushLocks different from other salons?',
        answer: 'We specialize in Indian hair types and use a blend of traditional Ayurvedic treatments with modern techniques. Our stylists are trained to understand the unique needs of Indian hair, from dealing with hard water damage to monsoon-related issues.',
    },
    {
        question: 'How often should I get a hair spa treatment?',
        answer: 'For Indian hair, we recommend a hair spa every 2-4 weeks depending on your hair condition and exposure to pollution. If you use heat styling tools frequently, monthly treatments help maintain hair health.',
    },
    {
        question: 'Are your products suitable for all hair types?',
        answer: 'Yes! Our product range is specifically formulated for different Indian hair types - from straight to curly, oily to dry scalp. During your consultation, we\'ll recommend products best suited for your specific needs.',
    },
    {
        question: 'Do you offer services for men as well?',
        answer: 'Absolutely! We have dedicated services for men including hair cuts, beard grooming, scalp treatments for hair thinning, and hair coloring. Our experts understand male pattern concerns specific to Indian men.',
    },
    {
        question: 'What are your payment options?',
        answer: 'We accept all major credit/debit cards, UPI payments (GPay, PhonePe, Paytm), net banking, and cash. We also offer EMI options for premium treatments and bridal packages.',
    },
    {
        question: 'How do I book an appointment?',
        answer: 'You can book through our website, call us directly, or walk in. For bridal services and specialized treatments, we recommend booking at least 1-2 weeks in advance to ensure availability.',
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" className="section bg-white">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-4">
                            Got Questions?
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-6">
                            Frequently Asked{' '}
                            <span className="text-gradient">Questions</span>
                        </h2>
                        <p className="text-lg text-neutral-600 mb-8">
                            Can't find what you're looking for? Our team is always happy to help.
                            Reach out to us anytime!
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#contact" className="btn btn-primary">
                                Contact Us
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <a href="tel:+919876543210" className="btn btn-ghost">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                +91 98765 43210
                            </a>
                        </div>
                    </motion.div>

                    {/* FAQ Accordion */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`rounded-2xl border-2 transition-all duration-300 ${openIndex === index
                                        ? 'border-primary-300 bg-primary-50'
                                        : 'border-neutral-200 bg-white hover:border-neutral-300'
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                                >
                                    <span className={`font-display font-semibold ${openIndex === index ? 'text-primary-700' : 'text-neutral-900'
                                        }`}>
                                        {faq.question}
                                    </span>
                                    <motion.span
                                        animate={{ rotate: openIndex === index ? 45 : 0 }}
                                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${openIndex === index
                                                ? 'bg-primary-500 text-white'
                                                : 'bg-neutral-100 text-neutral-600'
                                            }`}
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        </svg>
                                    </motion.span>
                                </button>

                                <motion.div
                                    initial={false}
                                    animate={{
                                        height: openIndex === index ? 'auto' : 0,
                                        opacity: openIndex === index ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <p className="px-6 pb-5 text-neutral-600 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
