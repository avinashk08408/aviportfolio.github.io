import Cursor from "./components/Cursor/Cursor";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Journey from "./components/Journey/Journey";
import Journey from "./components/Certifications/Certifications";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Cursor />

      <Navbar />

      <main>

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Journey />

        <Certifications />
        
        <Contact />

      </main>

      <Footer />
    </>
  );
}

export default App;
