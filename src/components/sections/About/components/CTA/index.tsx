"use client";
import { motion } from "framer-motion";
import { useCTA } from "@/hooks/about";

const buttonVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

export const CTA = () => {
  const { title, description, resumeUrl, buttons } = useCTA();

  return (
    <div className="flex flex-col items-center text-center pt-8 md:pt-12 border-t border-earth-sand/30">
      <h3 className="cta-title text-responsive-2xl md:text-responsive-3xl font-gemola text-earth-dark mb-4 md:mb-6">
        {title}
      </h3>
      <p className="cta-text text-responsive-base md:text-responsive-lg font-al text-earth-brown/80 mb-6 md:mb-8 max-w-2xl">
        {description}
      </p>
      <div className="cta-buttons flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto">
        {resumeUrl && (
          <motion.a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary tracking-wide w-full sm:w-auto flex items-center justify-center gap-2 text-responsive-base"
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            transition={{ delay: 0.2 }}
          >
            <svg
              className="w-4 h-4 md:w-5 md:h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <span>{buttons.resume}</span>
          </motion.a>
        )}
      </div>
    </div>
  );
};
