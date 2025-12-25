import { motion } from 'framer-motion';
import { profileData, assetPath } from '../data/content';

function HeroSection() {
    const stats = [
        { value: profileData.stats.yearsExp, label: profileData.stats.yearsLabel, color: '#4285f4' },
        { value: profileData.stats.clients, label: profileData.stats.clientsLabel, color: '#34a853' },
        { value: profileData.stats.scripts, label: profileData.stats.scriptsLabel, color: '#9333ea' },
        { value: profileData.stats.sops, label: profileData.stats.sopsLabel, color: '#f97316' },
    ];

    return (
        <section className="hero-section">
            {/* Hero Image with Fade */}
            <div className="hero-image-container">
                <img
                    src={`${assetPath}/profile.jpg`}
                    alt="Pratik Shetti"
                    className="hero-image"
                    onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'linear-gradient(90deg, rgba(248,250,252,1) 0%, rgba(248,250,252,0.8) 30%, transparent 60%)'
                    }}
                />
            </div>

            {/* Content */}
            <div className="container relative z-10 py-16 md:py-24">
                <motion.div
                    className="max-w-2xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        {profileData.currentRole} • {profileData.since}
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        className="text-5xl md:text-6xl font-bold gradient-text mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        {profileData.name}
                    </motion.h1>

                    {/* Tagline */}
                    <motion.h2
                        className="text-xl md:text-2xl font-semibold text-[var(--text-primary)] mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        {profileData.tagline}
                    </motion.h2>

                    {/* Subtext - The Key Differentiator */}
                    <motion.p
                        className="text-lg text-[var(--accent-purple)] font-medium mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        {profileData.subtext}
                    </motion.p>

                    {/* Location */}
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[var(--border-subtle)] shadow-sm mb-8"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--accent-primary)]">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span className="text-sm font-medium text-[var(--text-primary)]">
                            {profileData.location}
                        </span>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                className="bg-white rounded-2xl p-4 border border-[var(--border-subtle)] shadow-sm"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.6 + index * 0.1 }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: `0 10px 30px ${stat.color}20`
                                }}
                            >
                                <div className="text-3xl font-bold" style={{ color: stat.color }}>
                                    {stat.value}
                                </div>
                                <div className="text-xs text-[var(--text-secondary)] font-medium mt-1">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        className="mt-8 flex flex-wrap gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <a
                            href={profileData.links.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A66C2] text-white font-medium hover:shadow-lg transition-all hover:scale-105"
                        >
                            {/* Official LinkedIn Icon */}
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            Let's Collaborate
                        </a>
                        <a
                            href={profileData.links.resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[var(--border-subtle)] text-[var(--text-primary)] font-medium hover:shadow-lg transition-all hover:scale-105"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                                <line x1="16" y1="13" x2="8" y2="13" />
                                <line x1="16" y1="17" x2="8" y2="17" />
                            </svg>
                            Download Resume
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default HeroSection;
