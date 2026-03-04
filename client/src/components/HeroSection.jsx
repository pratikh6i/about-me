import { motion } from 'framer-motion';
import { profileData, assetPath } from '../data/content';

const googleColors = ['#4285f4', '#ea4335', '#fbbc04', '#34a853'];

const socialLinks = [
    {
        name: 'LinkedIn',
        url: profileData.links.linkedin,
        hoverColor: '#0077b5',
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
        ),
    },
    {
        name: 'GitHub',
        url: profileData.links.github,
        hoverColor: '#333',
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
        ),
    },
    {
        name: 'X',
        url: profileData.links.twitter,
        hoverColor: '#1da1f2',
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
    {
        name: 'Skills',
        url: profileData.links.skillBoost,
        hoverColor: '#4285f4',
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
        ),
    },
];

const stats = [
    { value: profileData.stats.yearsExp, label: profileData.stats.yearsLabel, color: '#4285f4' },
    { value: profileData.stats.clients, label: profileData.stats.clientsLabel, color: '#ea4335' },
    { value: profileData.stats.scripts, label: profileData.stats.scriptsLabel, color: '#fbbc04' },
    { value: profileData.stats.sops, label: profileData.stats.sopsLabel, color: '#34a853' },
];

function HeroSection() {
    return (
        <section className="relative min-h-[85vh] flex items-center overflow-hidden" id="hero">
            {/* Subtle background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white to-green-50/30 pointer-events-none" />
            <div className="absolute top-20 left-0 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

            <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-16 md:py-20">
                {/* Left - Content */}
                <div className="order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Role Badge */}
                        <div className="badge mb-5">
                            <span className="w-2 h-2 rounded-full bg-google-green animate-pulse" />
                            {profileData.currentRole} · Since {profileData.since}
                        </div>

                        {/* Name & Tagline */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                            {profileData.name}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 font-medium mb-2">
                            {profileData.tagline}
                        </p>
                        <p className="text-sm md:text-base text-google-blue font-medium mb-5 max-w-lg">
                            {profileData.subtext}
                        </p>

                        {/* Location */}
                        <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-6">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ea4335" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            {profileData.location}
                        </div>

                        {/* Stats with Google-colored left borders (old box style with bg highlight) */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-3.5 relative overflow-hidden border border-gray-100 shadow-sm hover:shadow-card-hover transition-all"
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                    whileHover={{ y: -2 }}
                                >
                                    {/* Google-colored left accent line */}
                                    <div
                                        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-xl"
                                        style={{ backgroundColor: stat.color }}
                                    />
                                    <div className="pl-2">
                                        <div className="text-2xl md:text-3xl font-bold" style={{ color: stat.color }}>
                                            {stat.value}
                                        </div>
                                        <div className="text-[10px] md:text-xs text-gray-500 font-medium mt-0.5 leading-tight">
                                            {stat.label}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Links — from new design */}
                        <motion.div
                            className="flex items-center gap-2.5"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                        >
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-white hover:shadow-md transition-all duration-200"
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = link.hoverColor}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                                    title={link.name}
                                >
                                    {link.icon}
                                </a>
                            ))}
                            <a
                                href={profileData.links.resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-1 px-6 py-2.5 rounded-full bg-google-blue text-white text-sm font-medium hover:bg-blue-600 transition-all shadow-sm hover:shadow-glow-blue inline-flex items-center gap-2"
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                                </svg>
                                Resume
                            </a>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Right side spacer - keeps grid spacing for the content side */}
                <div className="order-1 lg:order-2 relative h-[400px] md:h-[500px] lg:h-[600px]" />
            </div>

            {/* Profile Image — Absolute positioned, fills right half (matching deployed layout) */}
            <motion.div
                className="absolute right-0 hidden lg:block"
                // top/bottom match the section's py-16 md:py-20 padding so image stays within content area
                style={{ left: '50%', width: '50%', overflow: 'hidden', top: '4rem', bottom: '0' }}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
                <img
                    src={`${assetPath}/profile.jpg`}
                    alt={profileData.name}
                    className="w-full h-full object-cover"
                    style={{
                        // =====================================================
                        // IMAGE POSITION — Change '50% 0%' to adjust framing
                        //   '50% 0%' = centered horizontally, anchored to top
                        //   'center center' = centered both ways
                        //   '70% 0%' = shifted right, anchored to top
                        // =====================================================
                        objectPosition: '50% 0%',
                        // Top + Bottom fade
                        maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 60%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 60%, transparent 100%)',
                    }}
                />
                {/* Left-edge gradient blend overlay */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        // =====================================================
                        // LEFT EDGE FADE — Controls how the image blends into the background
                        //   Adjust the % values to change the fade width
                        //   0% = fully opaque background color
                        //   50% = fully transparent (image fully visible)
                        // =====================================================
                        background: 'linear-gradient(90deg, rgba(239,246,255,1) 0%, rgba(239,246,255,0.6) 8%, rgba(239,246,255,0.2) 15%, transparent 25%)',
                    }}
                />
            </motion.div>
        </section>
    );
}

export default HeroSection;
