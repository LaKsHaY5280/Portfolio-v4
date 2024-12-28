"use client";
import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Introduction } from "./components/Introduction";
import { ProfileSection } from "./components/Profile";
import { Stats } from "./components/Stats";
import { Expertise } from "./components/Expertise";
import { CTA } from "./components/CTA";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: profileRef,
    offset: ["start end", "end start"],
  });

  const profileY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const introTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: introRef.current,
          start: "top center+=100",
        },
      });

      const statsTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top center+=200",
        },
      });

      const skillsTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top center+=200",
        },
      });

      const ctaTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top center+=200",
        },
      });

      introTimeline
        .from(`#${sectionRef.current?.id} .intro-title`, {
          y: 30,
          opacity: 0,
          duration: 0.6,
        })
        .from(
          `#${sectionRef.current?.id} .intro-text p`,
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.2,
          },
          "-=0.3"
        );

      statsTimeline.from(`#${sectionRef.current?.id} .stat-item`, {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
      });

      skillsTimeline.from(`#${sectionRef.current?.id} .skill-item`, {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
      });

      ctaTimeline
        .from(`#${sectionRef.current?.id} .cta-title`, {
          y: 30,
          opacity: 0,
          duration: 0.6,
        })
        .from(
          `#${sectionRef.current?.id} .cta-text`,
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.3"
        )
        .from(
          `#${sectionRef.current?.id} .cta-buttons`,
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.2"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen py-16 md:py-24 px-8 md:px-12 lg:px-20 bg-earth-cream overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="space-y-16 md:space-y-24">
          {/* Intro Section */}
          <div
            ref={introRef}
            className="flex flex-col md:flex-row gap-12 md:gap-16 items-center md:items-start"
          >
            <div className="w-full md:w-3/5">
              <Introduction />
            </div>
            <motion.div
              ref={profileRef}
              style={{ y: profileY }}
              className="w-full md:w-2/5 flex justify-center"
              whileHover={{
                scale: 1.02,
                transition: { type: "spring", stiffness: 200 },
              }}
            >
              <ProfileSection />
            </motion.div>
          </div>

          {/* Stats Section */}
          <div ref={statsRef}>
            <Stats />
          </div>

          {/* Expertise Section */}
          <div ref={skillsRef}>
            <Expertise />
          </div>

          {/* CTA Section */}
          <div ref={ctaRef}>
            <CTA />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
