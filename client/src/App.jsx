import { useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import ClientCaseStudies from './components/ClientCaseStudies';
import AutomationArsenal from './components/AutomationArsenal';
import HallOfFame from './components/HallOfFame';
import TechArsenal from './components/TechArsenal';
import ProjectInventory from './components/ProjectInventory';
import AchievementsAndInterests from './components/AchievementsAndInterests';
import NewsSection from './components/NewsSection';
import BlogsSection from './components/BlogsSection';
import Footer from './components/Footer';
import GoogleTranslate from './components/GoogleTranslate';
import { assetPath } from './data/content';
import './index.css';

function App() {
  // Time-based Favicon Logic
  useEffect(() => {
    const updateFavicon = () => {
      const hours = new Date().getHours();
      const favicon = document.querySelector('link[rel="icon"]');
      if (favicon) {
        // Night time: 7 PM (19) to 6 AM
        if (hours >= 19 || hours < 6) {
          favicon.href = `${assetPath}/moon.svg`;
        } else {
          favicon.href = `${assetPath}/sun.svg`;
        }
      }
    };

    updateFavicon();
    // Update every minute in case they stay long
    const interval = setInterval(updateFavicon, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] overflow-x-hidden">
      {/* Fixed Header with Google Translate */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 py-4 px-6 bg-white/80 backdrop-blur-md border-b border-[var(--border-subtle)] overflow-hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Starry/Pattern Background for Header */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="stars" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="currentColor" />
                <circle cx="50" cy="40" r="1.5" fill="currentColor" />
                <circle cx="90" cy="20" r="1" fill="currentColor" />
                <circle cx="30" cy="80" r="1" fill="currentColor" />
                <circle cx="70" cy="60" r="1.2" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#stars)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
          {/* Logo/Name */}
          <div className="relative group">
            <motion.a
              href="#"
              className="text-xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
            >
              Pratik Shetti
            </motion.a>
          </div>


          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#experience" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
              Experience
            </a>
            <a href="#automation" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
              Automation
            </a>
            <a href="#achievements" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
              Achievements
            </a>
            <a href="#skills" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
              Projects
            </a>
            <a href="#blogs" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
              Blog
            </a>
          </nav>

          {/* Google Translate */}
          <div className="flex items-center gap-4">
            <GoogleTranslate />
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <HeroSection />

        {/* Client Case Studies */}
        <ClientCaseStudies />

        {/* Automation Arsenal */}
        <AutomationArsenal />

        {/* Hall of Fame */}
        <HallOfFame />

        {/* Tech Arsenal */}
        <TechArsenal />

        {/* Project Inventory */}
        <ProjectInventory />

        {/* Achievements & Interests */}
        <AchievementsAndInterests />

        {/* News Section */}
        <NewsSection />

        {/* Blogs Section */}
        <BlogsSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
