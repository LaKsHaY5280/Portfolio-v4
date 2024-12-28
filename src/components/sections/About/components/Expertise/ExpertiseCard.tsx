"use client";
import { motion } from "framer-motion";
import { Skill } from "@/data/skills/types";

interface ExpertiseCardProps {
  category: string;
  items: Skill[];
  index: number;
}

export const ExpertiseCard = ({
  category,
  items,
  index,
}: ExpertiseCardProps) => {
  return (
    <motion.div
      className="skill-item relative p-6 sm:p-8 rounded-2xl overflow-hidden group cursor-pointer"
      whileHover={{
        scale: 1.02,
        transition: { type: "spring", stiffness: 300 },
      }}
    >
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-earth-dark/[0.03] via-earth-dark/[0.05] to-earth-dark/[0.03]
                   group-hover:from-earth-dark/[0.06] group-hover:via-earth-dark/[0.08] group-hover:to-earth-dark/[0.06]
                   transition-all duration-500"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(34, 48, 48, 0.03) 0%, rgba(34, 48, 48, 0.05) 50%, rgba(34, 48, 48, 0.03) 100%)",
            "linear-gradient(225deg, rgba(34, 48, 48, 0.03) 0%, rgba(34, 48, 48, 0.05) 50%, rgba(34, 48, 48, 0.03) 100%)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />

      {/* Animated Pattern */}
      <motion.div
        className="absolute inset-0 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(34, 48, 48, 0.1) 1px, transparent 0)`,
          backgroundSize: "16px 16px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "16px 16px"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Animated Border */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <motion.div
          className="w-full h-full border border-earth-dark/[0.07] rounded-2xl group-hover:border-earth-dark/10 
                     transition-colors duration-300"
          whileHover={{
            boxShadow: "inset 0 0 20px rgba(34, 48, 48, 0.05)",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative">
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <motion.h3
            className="text-responsive-xl sm:text-responsive-2xl font-gemola text-earth-dark"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {category}
          </motion.h3>
          <motion.div
            className="flex-1 h-[1px]"
            style={{
              background:
                "linear-gradient(to right, rgba(34, 48, 48, 0.1), transparent)",
            }}
            whileHover={{
              scaleX: 1.1,
              originX: 0,
            }}
          />
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-3">
          {items.map((item, idx) => (
            <motion.div
              key={item.name}
              className="px-3 sm:px-4 py-2 text-responsive-sm font-al rounded-xl relative group/item overflow-hidden"
              whileHover={{
                y: -4,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-earth-sand/10 to-transparent opacity-0"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%", opacity: 1 }}
                transition={{ duration: 0.6 }}
              />

              {/* Background with enhanced hover */}
              <motion.div
                className="absolute inset-0 bg-earth-dark/[0.04] rounded-xl border border-earth-dark/[0.07]
                         transition-all duration-300"
                whileHover={{
                  backgroundColor: "rgba(34, 48, 48, 0.08)",
                  borderColor: "rgba(34, 48, 48, 0.15)",
                  boxShadow: "0 4px 12px rgba(34, 48, 48, 0.05)",
                }}
              />

              {/* Text with scale effect */}
              <div className="relative flex items-center gap-2">
                <motion.span
                  className="block text-earth-dark/80 transition-colors duration-300"
                  whileHover={{
                    scale: 1.05,
                    color: "rgba(34, 48, 48, 0.95)",
                  }}
                >
                  {item.name}
                </motion.span>
                <motion.span
                  className="text-responsive-xs text-earth-dark/40"
                  whileHover={{ scale: 1.1 }}
                >
                  {item.proficiency}%
                </motion.span>
              </div>

              {/* Corner Decorations */}
              <motion.div
                className="absolute top-0 right-0 w-2 h-2 border-t border-r border-earth-dark/0 
                           transition-all duration-300 opacity-0"
                whileHover={{
                  opacity: 1,
                  borderColor: "rgba(34, 48, 48, 0.2)",
                }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-earth-dark/0 
                           transition-all duration-300 opacity-0"
                whileHover={{
                  opacity: 1,
                  borderColor: "rgba(34, 48, 48, 0.2)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
