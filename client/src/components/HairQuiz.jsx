import { motion } from 'framer-motion';
import { useState } from 'react';
import { useSnackbar } from '../contexts/SnackbarContext';

const questions = [
    {
        id: 1,
        question: 'What is your hair texture?',
        options: [
            { value: 'straight', label: 'Straight', emoji: '💁‍♀️' },
            { value: 'wavy', label: 'Wavy', emoji: '🌊' },
            { value: 'curly', label: 'Curly', emoji: '🌀' },
            { value: 'coily', label: 'Coily', emoji: '⭕' },
        ],
    },
    {
        id: 2,
        question: 'How would you describe your scalp?',
        options: [
            { value: 'oily', label: 'Oily', emoji: '💧' },
            { value: 'dry', label: 'Dry', emoji: '🏜️' },
            { value: 'normal', label: 'Normal', emoji: '✅' },
            { value: 'combination', label: 'Combination', emoji: '☯️' },
        ],
    },
    {
        id: 3,
        question: 'What is your main hair concern?',
        options: [
            { value: 'hairfall', label: 'Hair Fall', emoji: '😢' },
            { value: 'dandruff', label: 'Dandruff', emoji: '❄️' },
            { value: 'frizz', label: 'Frizz', emoji: '⚡' },
            { value: 'greying', label: 'Premature Greying', emoji: '🤍' },
        ],
    },
];

export default function HairQuiz() {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [showResult, setShowResult] = useState(false);
    const { showSnackbar } = useSnackbar();

    const handleAnswer = (questionId, value) => {
        setAnswers(prev => ({ ...prev, [questionId]: value }));

        if (currentStep < questions.length - 1) {
            setTimeout(() => setCurrentStep(prev => prev + 1), 300);
        } else {
            setTimeout(() => {
                setShowResult(true);
                showSnackbar('Your personalized hair care routine is ready! 🎉', 'success');
            }, 300);
        }
    };

    const resetQuiz = () => {
        setCurrentStep(0);
        setAnswers({});
        setShowResult(false);
    };

    return (
        <section id="quiz" className="section bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />

            <div className="container-custom relative z-10">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-4">
                            🔮 Personalized Recommendation
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
                            Discover Your Perfect Hair Care Routine
                        </h2>
                        <p className="text-lg text-white/80">
                            Answer 3 simple questions to get personalized product & treatment recommendations.
                        </p>
                    </motion.div>

                    {!showResult ? (
                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12"
                        >
                            {/* Progress Bar */}
                            <div className="flex gap-2 mb-8">
                                {questions.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${index <= currentStep ? 'bg-white' : 'bg-white/20'
                                            }`}
                                    />
                                ))}
                            </div>

                            <div className="text-center">
                                <span className="text-sm text-white/60 uppercase tracking-wide">
                                    Question {currentStep + 1} of {questions.length}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-display font-bold mt-2 mb-8">
                                    {questions[currentStep].question}
                                </h3>

                                <div className="grid grid-cols-2 gap-4">
                                    {questions[currentStep].options.map((option) => (
                                        <button
                                            key={option.value}
                                            onClick={() => handleAnswer(questions[currentStep].id, option.value)}
                                            className={`p-6 rounded-2xl bg-white/10 hover:bg-white/20 border-2 border-transparent hover:border-white/40 transition-all duration-300 group ${answers[questions[currentStep].id] === option.value
                                                    ? 'bg-white/30 border-white/60'
                                                    : ''
                                                }`}
                                        >
                                            <span className="text-4xl block mb-2 group-hover:scale-110 transition-transform">
                                                {option.emoji}
                                            </span>
                                            <span className="font-display font-semibold text-lg">{option.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white text-neutral-900 rounded-3xl p-8 md:p-12 text-center"
                        >
                            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary-100 flex items-center justify-center text-4xl">
                                ✨
                            </div>
                            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                                Your Personalized Results Are Ready!
                            </h3>
                            <p className="text-neutral-600 mb-8 max-w-md mx-auto">
                                Based on your answers, we've curated a perfect hair care routine just for you.
                                Our experts recommend starting with our signature treatments.
                            </p>

                            <div className="grid grid-cols-3 gap-4 mb-8">
                                <div className="p-4 bg-primary-50 rounded-xl">
                                    <div className="text-3xl mb-2">🌿</div>
                                    <div className="font-semibold text-sm">Ayurvedic Oil</div>
                                </div>
                                <div className="p-4 bg-secondary-50 rounded-xl">
                                    <div className="text-3xl mb-2">💆‍♀️</div>
                                    <div className="font-semibold text-sm">Scalp Therapy</div>
                                </div>
                                <div className="p-4 bg-accent-50 rounded-xl">
                                    <div className="text-3xl mb-2">✨</div>
                                    <div className="font-semibold text-sm">Hair Spa</div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="#contact" className="btn btn-primary px-8">
                                    Book Free Consultation
                                </a>
                                <button onClick={resetQuiz} className="btn btn-secondary px-8">
                                    Retake Quiz
                                </button>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
}
