import { motion } from 'framer-motion';
import { LanguageProvider } from './contexts/LanguageContext';
import LanguageToggle from './components/LanguageToggle';
import HeroSection from './components/HeroSection';
import WorkExperience from './components/WorkExperience';
import TechStack from './components/TechStack';
import SkillBoostCard from './components/SkillBoostCard';
import CloudHeroCard from './components/CloudHeroCard';
import CertificationsCard from './components/CertificationsCard';
import SocialLinks from './components/SocialLinks';
import VibesCard from './components/VibesCard';
import './index.css';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[var(--bg-primary)]">
        {/* Fixed Header with Language Toggle */}
        <motion.header
          className="fixed top-0 left-0 right-0 z-50 py-4 px-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-7xl mx-auto flex justify-end">
            <LanguageToggle />
          </div>
        </motion.header>

        {/* Hero Section */}
        <HeroSection />

        {/* Bento Grid Section */}
        <section className="py-12">
          <div className="container">
            <div className="bento-grid">
              {/* Skill Boost Card - Large */}
              <SkillBoostCard />

              {/* Cloud Hero Trophy Card - Large */}
              <CloudHeroCard />

              {/* Certifications */}
              <CertificationsCard />

              {/* Social Links */}
              <SocialLinks />

              {/* Personal Vibes */}
              <VibesCard />
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <WorkExperience />

        {/* Tech Stack Section */}
        <TechStack />

        {/* Footer */}
        <motion.footer
          className="py-12 bg-white border-t border-[var(--border-subtle)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="container text-center">
            <div className="flex items-center justify-center gap-2 text-[var(--text-secondary)] text-sm mb-2">
              <span>Built with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                ❤️
              </motion.span>
              <span>and</span>
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ☕
              </motion.span>
              <span>using</span>
              <span className="font-semibold text-[var(--accent-purple)]">Antigravity</span>
            </div>
            <p className="text-[var(--text-tertiary)] text-xs">
              © {new Date().getFullYear()} Pratik Shetti • Cloud Security Engineer
            </p>
            <motion.div
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 text-sm font-medium"
              whileHover={{ scale: 1.05 }}
            >
              <span>⚡</span>
              Vibe Coder Mode: ON
            </motion.div>
          </div>
        </motion.footer>
      </div>
    </LanguageProvider>
  );
}

export default App;
