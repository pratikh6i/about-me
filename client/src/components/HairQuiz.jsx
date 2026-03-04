import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useSnackbar } from '../contexts/SnackbarContext';

const steps = [
    {
        question: 'What is your primary hair concern?',
        options: ['Hair Fall', 'Dandruff', 'Frizz & Dryness', 'Thinning Hair', 'Oily Scalp', 'Damage & Breakage'],
    },
    {
        question: 'How would you describe your hair texture?',
        options: ['Straight & Fine', 'Wavy', 'Curly', 'Coily / Thick'],
    },
    {
        question: 'How often do you wash your hair?',
        options: ['Daily', 'Every 2 days', 'Twice a week', 'Once a week'],
    },
];

const recommendations = {
    'Hair Fall': { treatment: 'Bhringraj Growth Therapy', product: 'Bhringraj Growth Oil', tip: 'Massage scalp with warm oil twice a week for 10 min.' },
    'Dandruff': { treatment: 'Scalp Rejuvenation', product: 'Anti-Dandruff Serum', tip: 'Avoid hot water; use lukewarm for washing.' },
    'Frizz & Dryness': { treatment: 'Keratin Smoothing', product: 'Hibiscus Repair Mask', tip: 'Use a microfiber towel and avoid heat styling.' },
    'Thinning Hair': { treatment: 'PRP Hair Treatment', product: 'Biotin Boost Serum', tip: 'Eat protein-rich foods and stay hydrated.' },
    'Oily Scalp': { treatment: 'Deep Cleanse Therapy', product: 'Silk Protein Shampoo', tip: 'Wash every 2 days; avoid touching your scalp frequently.' },
    'Damage & Breakage': { treatment: 'Bond Repair Treatment', product: 'Hibiscus Repair Mask', tip: 'Minimize chemical treatments and use a silk pillowcase.' },
};

export default function HairQuiz() {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [done, setDone] = useState(false);
    const { showSnackbar } = useSnackbar();

    const select = (option) => {
        const next = [...answers, option];
        setAnswers(next);
        if (step < steps.length - 1) {
            setStep(step + 1);
        } else {
            setDone(true);
            showSnackbar('Your personalized routine is ready!', 'success');
        }
    };

    const reset = () => { setStep(0); setAnswers([]); setDone(false); };

    const rec = recommendations[answers[0]] || recommendations['Hair Fall'];

    return (
        <section id="quiz" className="section-spacing bg-charcoal-900 text-white">
            <div className="container-elegant">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="heading-eyebrow text-brand-400 mb-3 block">Personalized For You</span>
                        <h2 className="heading-display text-headline text-white mb-4">Hair Care Quiz</h2>
                        <p className="text-charcoal-400 mb-12">
                            Answer 3 quick questions to get your customized hair care routine.
                        </p>
                    </motion.div>

                    <AnimatePresence mode="wait">
                        {!done ? (
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -30 }}
                                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            >
                                {/* Progress */}
                                <div className="flex gap-2 mb-8 justify-center">
                                    {steps.map((_, i) => (
                                        <div
                                            key={i}
                                            className={`h-1 rounded-full transition-all duration-500 ${i <= step ? 'w-10 bg-brand-500' : 'w-6 bg-charcoal-700'
                                                }`}
                                        />
                                    ))}
                                </div>

                                <h3 className="font-display text-2xl font-semibold mb-8">{steps[step].question}</h3>

                                <div className="grid grid-cols-2 gap-3">
                                    {steps[step].options.map((opt) => (
                                        <button
                                            key={opt}
                                            onClick={() => select(opt)}
                                            className="p-4 rounded-xl border border-charcoal-700 text-sm font-medium text-charcoal-200 hover:border-brand-500 hover:text-white hover:bg-charcoal-800 transition-all"
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="result"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="text-left bg-charcoal-800 rounded-2xl p-8 md:p-10"
                            >
                                <h3 className="font-display text-2xl font-semibold mb-6 text-center">Your Recommended Routine</h3>

                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-brand-500/20 flex items-center justify-center shrink-0">
                                            <span className="text-brand-400 text-lg">💆</span>
                                        </div>
                                        <div>
                                            <div className="text-xs uppercase tracking-wider text-charcoal-400 mb-1">Treatment</div>
                                            <div className="font-semibold text-white">{rec.treatment}</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-sage-500/20 flex items-center justify-center shrink-0">
                                            <span className="text-sage-400 text-lg">🧴</span>
                                        </div>
                                        <div>
                                            <div className="text-xs uppercase tracking-wider text-charcoal-400 mb-1">Product</div>
                                            <div className="font-semibold text-white">{rec.product}</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-cream-500/20 flex items-center justify-center shrink-0">
                                            <span className="text-cream-400 text-lg">💡</span>
                                        </div>
                                        <div>
                                            <div className="text-xs uppercase tracking-wider text-charcoal-400 mb-1">Daily Tip</div>
                                            <div className="font-semibold text-white">{rec.tip}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-4 mt-8 justify-center">
                                    <a href="#services" className="btn-primary bg-brand-500 hover:bg-brand-600">Book This Treatment</a>
                                    <button onClick={reset} className="btn-secondary border-charcoal-600 text-charcoal-300 hover:text-white hover:border-charcoal-400">
                                        Retake Quiz
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
