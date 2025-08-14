import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Stats from "./components/Stats";
import ScrollVelocitySection from "./components/ScrollVelocitySection";
import Contact from "./components/Contact";
import Skill from "./components/Skills";
import Footer from "./components/Footer";
export default function Home() {
  return (
   <>

   <Hero/>
   <Stats/>
   <Projects/>
   {/* <Skill/> */}
   <About/>
   <Contact/>
   <Footer/>
   {/* <ScrollVelocitySection/> */}
 
   </>
  );
}
