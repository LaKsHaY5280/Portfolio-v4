"use client";
import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import SectionDivider from "@/components/ui/SectionDivider";
import PageTransition from "@/components/ui/PageTransition";

// Client component that uses the search params
function ScrollToSection() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check if there's a section parameter in the URL
    const sectionParam = searchParams.get("section");

    if (sectionParam) {
      // Find the corresponding section element
      const sectionElement = document.getElementById(sectionParam);

      if (sectionElement) {
        // Add a small delay to ensure the page is fully loaded
        setTimeout(() => {
          sectionElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 300);
      }
    }
  }, [searchParams]);

  return null;
}

export default function Home() {
  return (
    <PageTransition>
      {/* Wrap the component using useSearchParams in Suspense */}
      <Suspense fallback={null}>
        <ScrollToSection />
      </Suspense>
      
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Contact />
    </PageTransition>
  );
}
