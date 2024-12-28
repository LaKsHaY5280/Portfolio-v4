"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMyInfo } from "@/hooks/_myInfo/useMyInfo";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Hero = () => {
  const { name, role, bio, buttons } = useMyInfo();
  const bioRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const roleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Initial fade in animation - faster start
    tl.fromTo(
      containerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6 }
    );

    // Name reveal animation - quicker follow-up
    tl.fromTo(
      nameRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.5 },
      "-=0.3" // Start before previous animation ends
    );

    // Line expansion - faster and overlapping
    tl.fromTo(
      lineRef.current,
      { width: 0, opacity: 0 },
      { width: "6rem", opacity: 1, duration: 0.4 },
      "-=0.2"
    );

    // Role text reveal - quicker
    tl.fromTo(
      roleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4 },
      "-=0.2"
    );

    // Bio text animation - faster stagger
    if (bioRef.current) {
      const words = bio.split(" ");
      bioRef.current.innerHTML = words
        .map(
          (word) => `
          <div class="inline-block overflow-hidden">
            <span class="inline-block translate-y-full opacity-0">
              ${word}
            </span>
          </div>
        `
        )
        .join("");

      tl.to(
        bioRef.current.querySelectorAll("span"),
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.02, // Faster word reveal
          ease: "power2.out",
        },
        "-=0.2"
      );
    }
  }, [bio]);

  // Faster button animations
  const buttonVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, mass: 0.5 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section className="h-screen relative flex items-center justify-center section-padding bg-gradient-to-b from-earth-light to-earth-cream">
      <div
        ref={containerRef}
        className="max-w-7xl w-full mx-auto container-padding"
      >
        <div className="flex flex-col items-center justify-center">
          <div className="text-center">
            <h1
              ref={nameRef}
              className="text-responsive-4xl md:text-responsive-5xl font-gemola mb-4 md:mb-6 text-earth-dark"
            >
              {name}
            </h1>
            <div
              ref={lineRef}
              className="w-16 md:w-24 h-0.5 md:h-1 bg-earth-sand mx-auto mb-4 md:mb-6 rounded-full"
            />
          </div>

          <h2
            ref={roleRef}
            className="text-responsive-xl md:text-responsive-2xl font-al tracking-normal text-earth-brown mb-6 md:mb-8 text-center"
          >
            {role}
          </h2>

          <div
            ref={bioRef}
            className="text-responsive-base md:text-responsive-lg font-al tracking-wide text-earth-dark/80 max-w-2xl mx-auto mb-8 md:mb-12 text-center"
          />

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6  sm:w-auto px-4 sm:px-0 mx-auto">
            <motion.a
              href="#contact"
              className="btn-primary tracking-wide w-full sm:w-auto text-responsive-base"
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap"
              transition={{ delay: 0.8 }}
            >
              {buttons.contact}
            </motion.a>
            <motion.a
              href="#projects"
              className="btn-secondary tracking-wide w-full sm:w-auto text-responsive-base"
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap"
              transition={{ delay: 0.9 }}
            >
              {buttons.projects}
            </motion.a>
          </div>
        </div>
      </div>

      <motion.div
        onClick={() => {
          const aboutSection = document.getElementById("about");
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="w-5 h-8 rounded-full border-2 border-earth-dark/20 flex justify-center p-1">
          <motion.div
            className="w-1 h-1.5 bg-earth-dark/40 rounded-full"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
