import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { hallOfFame, certifications, assetPath } from '../data/content';
import { Lightbox } from './Lightbox';

function HallOfFame() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState({ src: '', alt: '' });

    const openLightbox = (src, alt) => {
        setCurrentImage({ src, alt });
        setLightboxOpen(true);
    };

    return (
        <section className="py-16 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50" id="achievements">
            <Lightbox
                src={currentImage.src}
                alt={currentImage.alt}
                isOpen={lightboxOpen}
                onClose={() => setLightboxOpen(false)}
            />

            <div className="container">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="relative inline-block">
                        <motion.img
                            src={`${assetPath}/santa-hat.svg`}
                            className="absolute -top-7 -left-5 w-10 h-10 pointer-events-none z-20"
                            initial={{ rotate: -20, y: 5, opacity: 0 }}
                            whileInView={{ rotate: -15, y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
                        />
                        < h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-3" >
                            Hall of Fame
                        </h2 >
                    </div >
                    <p className="text-[var(--text-secondary)]">
                        Certifications, achievements, and recognition
                    </p>
                </motion.div >

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Cloud Hero Card */}
                    <motion.div
                        className="bg-gradient-to-br from-yellow-100 via-amber-100 to-yellow-200 rounded-3xl p-8 border-2 border-yellow-300 relative overflow-hidden"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                    >
                        {/* Shimmer */}
                        <div className="absolute inset-0 shimmer pointer-events-none opacity-50" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-amber-900">
                                        {hallOfFame.cloudHero.title}
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <span className="px-3 py-1 bg-yellow-500 text-white text-sm font-bold rounded-full">
                                            #3
                                        </span>
                                        <span className="text-amber-700 font-semibold">
                                            {hallOfFame.cloudHero.subtitle}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-amber-800 mb-6 leading-relaxed">
                                {hallOfFame.cloudHero.description}
                            </p>

                            <div className="flex items-center gap-4">
                                <a
                                    href={hallOfFame.cloudHero.image}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-500 text-white text-sm font-semibold hover:bg-yellow-600 transition-colors shadow-sm hover:shadow-md"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M15 3h6v6M10 14L21 3M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                                    </svg>
                                    View Achievement Proof
                                </a>
                                <span className="text-sm text-amber-700 font-medium">
                                    {hallOfFame.cloudHero.year}
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Skill Boost Card */}
                    <motion.div
                        className="bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 rounded-3xl p-8 text-white relative overflow-hidden"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">{hallOfFame.skillBoost.title}</h3>
                                    <p className="text-blue-200">{hallOfFame.skillBoost.tier}</p>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 mb-8">
                                <div className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
                                    <div className="text-2xl font-bold">{hallOfFame.skillBoost.labs}</div>
                                    <div className="text-xs text-blue-200">Labs Completed</div>
                                </div>
                                <div className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
                                    <div className="text-2xl font-bold">{hallOfFame.skillBoost.points}</div>
                                    <div className="text-xs text-blue-200">Total Points</div>
                                </div>
                                <div className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
                                    <div className="text-2xl font-bold">{hallOfFame.skillBoost.courses}</div>
                                    <div className="text-xs text-blue-200">Courses</div>
                                </div>
                            </div>

                            <a
                                href={hallOfFame.skillBoost.profileUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-blue-600 text-sm font-bold hover:bg-blue-50 transition-colors shadow-sm hover:shadow-md"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M15 3h6v6M10 14L21 3M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                                </svg>
                                View Public Profile
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Certifications */}
                <motion.div
                    className="mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6 text-center">
                        Verified Certifications
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={cert.name}
                                className="bg-white rounded-2xl border border-[var(--border-subtle)] p-8 text-center hover:shadow-xl transition-all h-full flex flex-col items-center justify-between"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                            >
                                {/* Badge Image or Icon */}
                                <div className="w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden bg-[var(--bg-tertiary)] flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
                                    onClick={() => cert.badge && openLightbox(cert.badge, cert.name)}
                                >
                                    {cert.badge ? (
                                        <img
                                            src={cert.badge}
                                            alt={cert.name}
                                            className="w-full h-full object-contain p-4"
                                            onError={(e) => {
                                                console.error('Certification badge failed to load:', e.target.src);
                                                e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center"><svg width="48" height="48" viewBox="0 0 24 24" fill="${cert.color}"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></div>`;
                                            }}
                                        />
                                    ) : (
                                        <svg width="64" height="64" viewBox="0 0 24 24" fill={cert.color}>
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    )}
                                </div>

                                <div>
                                    <h4 className="font-bold text-[var(--text-primary)] mb-2 text-lg leading-tight">
                                        {cert.name}
                                    </h4>
                                    <p className="text-sm text-[var(--text-secondary)] mb-6">
                                        {cert.provider}
                                    </p>
                                </div>

                                <a
                                    href={cert.verifyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-105"
                                    style={{ background: `${cert.color}15`, color: cert.color }}
                                >
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                    </svg>
                                    Verify
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>


            </div >
        </section >
    );
}

export default HallOfFame;
