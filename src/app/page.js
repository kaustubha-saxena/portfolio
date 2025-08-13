import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Stats from "./components/Stats";
import ScrollVelocitySection from "./components/ScrollVelocitySection";
import Contact from "./components/Contact";
export default function Home() {
  return (
   <>

   <Hero/>
   <Stats/>
   <Projects/>
   <About/>
   <Contact/>
   {/* <ScrollVelocitySection/> */}
   <div className="h-1200"></div>
   </>
  );
}
