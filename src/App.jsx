import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ClickSpark from "./components/ui/ClickSpark";


import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";

function App() {
  return (
    <>
    <ClickSpark
      sparkColor="#b85cff"
      sparkSize={12}
      sparkRadius={24}
      sparkCount={10}
      duration={500}
      easing="ease-out"
      extraScale={1}
    >
    <div className="min-h-screen cursor-default bg-[#242424] text-white">
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
    </ClickSpark>
  </>
  );
}

export default App;