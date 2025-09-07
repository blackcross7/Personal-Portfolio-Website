import Navbar from './pages/Navbar';
import HeroSection from './pages/HeroSection';
import AboutSection from './pages/AboutSection';
import SocialSidebar from "./pages/SocialSidebar";
import ExperiencePage from './pages/ExperiencePage';
import ProjectSection from './pages/ProjectSection';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main
        className="
          overflow-x-hidden 
          overflow-y-scroll   /* scrolling enabled */
        "
        style={{
          scrollbarWidth: "none",          /* Firefox */
          msOverflowStyle: "none"          /* IE/Edge */
        }}
      >
        {/* Hide scrollbar for Chrome/Safari/Edge */}
        <style>
          {`
            main::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

        <HeroSection />
        <AboutSection />
        <ExperiencePage />
        <ProjectSection />
        <Contact />
        <Footer />
        <SocialSidebar />
      </main>
    </>
  );
}

export default App;
