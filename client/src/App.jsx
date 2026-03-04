import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ClientCaseStudies from './components/ClientCaseStudies';
import AutomationArsenal from './components/AutomationArsenal';
import AIInnovation from './components/AIInnovation';
import TechArsenal from './components/TechArsenal';
import HallOfFame from './components/HallOfFame';
import AchievementsAndInterests from './components/AchievementsAndInterests';
import ProjectInventory from './components/ProjectInventory';
import BlogsSection from './components/BlogsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <ClientCaseStudies />
        <AutomationArsenal />
        <AIInnovation />
        <TechArsenal />
        <HallOfFame />
        <AchievementsAndInterests />
        <ProjectInventory />
        <BlogsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
