import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Skills from "@/components/home/Skills";
import Projects from "@/components/home/Projects";
import Resume from "@/components/home/Resume";
import Contact from "@/components/home/Contacts";

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
