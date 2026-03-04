import { motion } from 'framer-motion';
import { useState } from 'react';
import { hallOfFame, certifications } from '../data/content';
import { Lightbox } from './Lightbox';

function HallOfFame() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState({ src: '', alt: '' });

    const openLightbox = (src, alt) => {
        setCurrentImage({ src, alt });
        setLightboxOpen(true);
    };

    return (
        <section className="py-14" id="achievements">
            <Lightbox
                src={currentImage.src}
                alt={currentImage.alt}
                isOpen={lightboxOpen}
                onClose={() => setLightboxOpen(false)}
            />

            <div className="container">
                <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="flex justify-center gap-1.5 mb-4">
                        {['#4285f4', '#ea4335', '#fbbc04', '#34a853'].map((c) => (
                            <div key={c} className="w-2 h-2 rounded-full" style={{ backgroundColor: c }} />
                        ))}
                    </div>
                    <h2 className="section-heading mb-3">Hall of Fame</h2>
                    <p className="section-subheading mx-auto">
                        Certifications, achievements, and recognition
                    </p>
                </motion.div>

                {/* Featured Cards Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
                    {/* Cloud Hero Card — Glassmorphism */}
                    <motion.div
                        className="rounded-xl p-6 relative overflow-hidden border border-amber-200/60"
                        style={{
                            background: 'linear-gradient(135deg, rgba(255,247,237,0.9), rgba(254,243,199,0.7))',
                            backdropFilter: 'blur(20px)',
                        }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -3 }}
                    >
                        {/* Decorative gradient blob */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-300/20 rounded-full blur-2xl" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-md">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-amber-900">{hallOfFame.cloudHero.title}</h3>
                                    <div className="flex items-center gap-2">
                                        <span className="px-2 py-0.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full">#3</span>
                                        <span className="text-sm text-amber-700 font-medium">{hallOfFame.cloudHero.subtitle}</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm text-amber-800 mb-4 leading-relaxed">{hallOfFame.cloudHero.description}</p>
                            <div className="flex items-center gap-3">
                                <a
                                    href={hallOfFame.cloudHero.image}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-semibold hover:shadow-lg transition-all"
                                >
                                    🏆 View Proof
                                </a>
                                <span className="text-xs text-amber-700">{hallOfFame.cloudHero.year}</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Skill Boost Card — Glassmorphism */}
                    <motion.div
                        className="rounded-xl p-6 text-white relative overflow-hidden"
                        style={{
                            background: 'linear-gradient(135deg, #4285f4, #1a73e8)',
                        }}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -3 }}
                    >
                        {/* Decorative blobs */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center backdrop-blur-sm">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">{hallOfFame.skillBoost.title}</h3>
                                    <p className="text-blue-200 text-sm font-medium">{hallOfFame.skillBoost.tier}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-3 mb-5">
                                {[
                                    { val: hallOfFame.skillBoost.labs, label: 'Labs' },
                                    { val: hallOfFame.skillBoost.points, label: 'Points' },
                                    { val: hallOfFame.skillBoost.courses, label: 'Courses' },
                                ].map((s) => (
                                    <div key={s.label} className="bg-white/10 rounded-xl p-3 text-center backdrop-blur-sm border border-white/10">
                                        <div className="text-xl font-bold">{s.val}</div>
                                        <div className="text-xs text-blue-200">{s.label}</div>
                                    </div>
                                ))}
                            </div>

                            <a
                                href={hallOfFame.skillBoost.profileUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-google-blue text-xs font-bold hover:bg-blue-50 transition-colors shadow-sm"
                            >
                                View Public Profile →
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Certifications Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-lg font-semibold text-gray-900 mb-5 text-center">Verified Certifications</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={cert.name}
                                className="bg-white rounded-xl border border-gray-100 p-5 text-center hover:shadow-card-hover transition-all flex flex-col items-center justify-between group relative overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                whileHover={{ y: -3 }}
                            >
                                {/* Colored shadow on hover */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"
                                    style={{ boxShadow: `0 8px 30px ${cert.color}20` }}
                                />

                                <div className="relative z-10 w-full flex flex-col items-center">
                                    <div
                                        className="w-20 h-20 mx-auto mb-4 rounded-xl overflow-hidden flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
                                        style={{ backgroundColor: `${cert.color}10` }}
                                        onClick={() => cert.badge && openLightbox(cert.badge, cert.name)}
                                    >
                                        {cert.badge ? (
                                            <img src={cert.badge} alt={cert.name} className="w-full h-full object-contain p-2" />
                                        ) : (
                                            <svg width="40" height="40" viewBox="0 0 24 24" fill={cert.color}>
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        )}
                                    </div>
                                    <div className="mb-3">
                                        <h4 className="font-semibold text-gray-900 text-sm leading-tight mb-1">{cert.name}</h4>
                                        <p className="text-xs text-gray-500">{cert.provider}</p>
                                    </div>
                                    <a
                                        href={cert.verifyUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium transition-colors"
                                        style={{
                                            backgroundColor: `${cert.color}10`,
                                            color: cert.color,
                                        }}
                                    >
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                        </svg>
                                        Verify
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default HallOfFame;
