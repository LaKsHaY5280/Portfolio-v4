"use client";
import { motion } from "framer-motion";

export const SuccessNotification = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="absolute inset-0 flex items-center justify-center bg-earth-dark/95 backdrop-blur-sm
                 rounded-xl z-10  max-w-lg mx-auto h-fit p-10"
    >
      <div className="text-center px-6 py-8">
        {/* Success Icon */}
        <div className="mb-6 relative">
          {/* Outer Ring */}
          <motion.div
            className="w-16 h-16 rounded-full border-2 border-earth-sand mx-auto"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.1,
            }}
          />
          {/* Checkmark */}
          <motion.svg
            className="w-8 h-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                       text-earth-sand"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.path
              d="M20 6L9 17l-5-5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </div>

        {/* Success Message */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-xl font-gemola text-earth-sand mb-2">
            Message Sent!
          </h3>
          <p className="text-earth-light/80 font-al">
            Thank you for reaching out! I'll get back to you soon.
          </p>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Glowing Dots */}
          <motion.div
            className="absolute w-2 h-2 rounded-full bg-earth-sand/30 blur-sm"
            style={{ top: "20%", left: "20%" }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute w-2 h-2 rounded-full bg-earth-sand/30 blur-sm"
            style={{ bottom: "20%", right: "20%" }}
            animate={{ scale: [1.5, 1, 1.5], opacity: [0.7, 0.3, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Gradient Lines */}
          <motion.div
            className="absolute h-px w-20 bg-gradient-to-r from-transparent via-earth-sand/40 to-transparent"
            style={{ top: "40%", left: "0" }}
            animate={{ x: ["0%", "100%", "0%"] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute h-px w-20 bg-gradient-to-r from-transparent via-earth-sand/40 to-transparent"
            style={{ bottom: "40%", right: "0" }}
            animate={{ x: ["0%", "-100%", "0%"] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>
      </div>
    </motion.div>
  );
};
