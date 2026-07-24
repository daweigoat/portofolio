import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Story from "@/components/sections/Story";
import Skills from "@/components/sections/Skills";
import TechStack from "@/components/sections/TechStack";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import CaseStudies from "@/components/sections/CaseStudies";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Workflow from "@/components/sections/Workflow";
import GitHub from "@/components/sections/GitHub";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Certificates from "@/components/sections/Certificates";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Subtle section dividers */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <About />

      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <Story />

      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <Skills />

      <TechStack />

      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <Services />

      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <Projects />

      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <CaseStudies />

      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <Experience />

      <Education />

      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <Certificates />

      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <Workflow />

      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <GitHub />

      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <FAQ />

      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <Contact />
    </>
  );
}
