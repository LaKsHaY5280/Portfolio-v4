"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useExperienceContent } from "@/hooks/experience";
import { TimelineBackground } from "./components/Background";
import { Timeline } from "./components/Timeline";
import { Achievements } from "./components/Achievements";

export const Experience = () => {
  const [hasInteracted, setHasInteracted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { header } = useExperienceContent();

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="min-h-screen section-padding bg-earth-cream relative overflow-hidden"
      onMouseEnter={() => setHasInteracted(true)}
    >
      <TimelineBackground />

      <div className="max-w-7xl mx-auto container-padding relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-gemola text-earth-dark mb-4">
            {header.subtitle}
          </h2>
          <p className="text-lg font-al text-earth-brown/80 max-w-2xl mx-auto">
            {header.description}
          </p>
        </motion.div>

        <Timeline />
        <Achievements />
      </div>
    </section>
  );
};

export default Experience;
