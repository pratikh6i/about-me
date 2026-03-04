import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profileData, assetPath } from '../data/content';

const navLinks = [
    { label: 'Experience', href: '#experience' },
    { label: 'Tools', href: '#automation' },
    { label: 'Skills', href: '#skills' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Projects', href: '#projects' },
    { label: 'AI', href: '#ai-innovation' },
];

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Track active section
            const sections = navLinks.map(l => l.href.replace('#', ''));
            for (const id of sections.reverse()) {
                const el = document.getElementById(id);
                if (el && el.getBoundingClientRect().top <= 150) {
                    setActiveSection(id);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-hidden ${scrolled
                ? 'shadow-lg'
                : 'bg-transparent'
                }`}
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
            {/* Datacenter Background — always rendered, toggled via opacity for preloading */}
            <div className={`absolute inset-0 transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <img
                    src={`${assetPath}/datacenter-bg.png`}
                    alt=""
                    className="w-full h-full object-cover"
                />
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-gray-900/85 backdrop-blur-sm" />
            </div>
            {/* Google-colored accent bar at bottom */}
            <div className={`absolute bottom-0 left-0 right-0 flex h-[2px] transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex-1" style={{ backgroundColor: '#4285f4' }} />
                <div className="flex-1" style={{ backgroundColor: '#ea4335' }} />
                <div className="flex-1" style={{ backgroundColor: '#fbbc04' }} />
                <div className="flex-1" style={{ backgroundColor: '#34a853' }} />
            </div>

            <div className="container relative z-10 flex items-center justify-between h-16">
                {/* Google-colored Logo */}
                <a href="#" className="flex items-center gap-2.5 group">
                    <div className={`w-8 h-8 rounded-xl border shadow-sm flex items-center justify-center overflow-hidden group-hover:shadow-md transition-all ${scrolled ? 'bg-white/10 border-white/20' : 'bg-white border-gray-200'}`}>
                        <div className="grid grid-cols-2 gap-[3px]">
                            <div className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: '#4285f4' }} />
                            <div className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: '#ea4335' }} />
                            <div className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: '#fbbc04' }} />
                            <div className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: '#34a853' }} />
                        </div>
                    </div>
                    <span className={`font-semibold hidden sm:block text-sm tracking-tight transition-colors ${scrolled ? 'text-white' : 'text-gray-900'}`}>
                        {profileData.name}
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.replace('#', '');
                        return (
                            <a
                                key={link.label}
                                href={link.href}
                                className={`relative text-sm px-3.5 py-1.5 rounded-full transition-all font-medium ${scrolled
                                    ? isActive
                                        ? 'text-white bg-white/20'
                                        : 'text-white/70 hover:text-white hover:bg-white/10'
                                    : isActive
                                        ? 'text-google-blue bg-blue-50'
                                        : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                                    }`}
                            >
                                {link.label}
                            </a>
                        );
                    })}
                    <a
                        href={profileData.links.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-3 text-sm font-medium px-5 py-2 rounded-full bg-google-blue text-white hover:bg-blue-600 transition-colors shadow-sm hover:shadow-glow-blue"
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className={`md:hidden p-2 rounded-xl transition-colors ${scrolled ? 'text-white hover:bg-white/10' : 'text-gray-600 hover:bg-gray-100'}`}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        {mobileOpen ? (
                            <path d="M18 6L6 18M6 6l12 12" />
                        ) : (
                            <path d="M3 12h18M3 6h18M3 18h18" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        className={`md:hidden border-t shadow-lg ${scrolled ? 'bg-gray-900/95 backdrop-blur-xl border-white/10' : 'bg-white/95 backdrop-blur-xl border-gray-100'}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="container relative z-10 py-4 flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className={`py-2.5 px-3 rounded-xl font-medium transition-all ${scrolled ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-gray-600 hover:text-google-blue hover:bg-blue-50'}`}
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href={profileData.links.resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-medium px-4 py-2.5 rounded-full bg-google-blue text-white text-center hover:bg-blue-600 transition-colors mt-2"
                            >
                                Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}

export default Navbar;
