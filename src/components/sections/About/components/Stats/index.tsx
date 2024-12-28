"use client";
import { motion } from "framer-motion";
import { useStats } from "@/hooks/about";
import { AnimatedNumber } from "./AnimatedNumber";

export const Stats = () => {
  const stats = useStats();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="stat-item text-center group relative"
          whileHover={{
            y: -5,
            transition: { type: "spring", stiffness: 300 },
          }}
        >
          <div className="relative mb-2">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="absolute -inset-y-4 bg-earth-sand/10 rounded-xl -z-10 w-full h-full"
            />
            <h3 className="text-4xl font-gemola text-earth-dark inline-flex items-baseline">
              <AnimatedNumber
                value={parseInt(stat.years)}
                delay={index * 0.2}
              />
            </h3>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
          >
            <p className="text-lg font-al text-earth-brown mb-1 group-hover:text-earth-dark transition-colors">
              {stat.area}
            </p>
            <p className="text-sm font-al text-earth-brown/70 group-hover:text-earth-brown/90 transition-colors">
              {stat.details}
            </p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};
