import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/Abount.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div
      className="min-h-screen transition-colors duration-500"
      style={{
        background: "var(--bg)",
        color: "var(--text)",
      }}
    >
      <div className="relative  overflow-hidden">
        {/* Background */}

        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-blue-500/20 blur-[170px] rounded-full" />

          <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-cyan-500/20 blur-[170px] rounded-full" />

          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-purple-500/10 blur-[170px] rounded-full" />
        </div>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
