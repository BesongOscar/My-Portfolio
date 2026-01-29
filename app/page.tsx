import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Contact from "@/components/Contacts";

/**
 * Home page component
 * Displays the main landing page with all portfolio sections
 */
export default function Home() {
  return (
   <>
   <Hero/>
   <About/>
   <Skills/>
   <Projects/>
   <Resume/>
   <Contact/>
   </>
  );
}
