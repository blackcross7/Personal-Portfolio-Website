import Navbar from './pages/Navbar';
import HeroSection from './pages/HeroSection';
import AboutSection from './pages/AboutSection';
import SocialSidebar from "./pages/SocialSidebar";
import ExperiencePage from './pages/ExperiencePage';
import ProjectSection from './pages/ProjectSection';

function App() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <ExperiencePage />
        <ProjectSection />
        <SocialSidebar />
      </main>
    </>
  );
}

export default App;
