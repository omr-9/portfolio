import About from "../components/About";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { StarsBackground } from "../components/StarsBackground";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden text-foreground bg-background ">
      <StarsBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>

    </div>
  )
}
