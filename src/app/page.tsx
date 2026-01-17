import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";
import Resume from "@/sections/Resume";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />     {/* contains Summary + Experience + Skills + Education */}
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}
