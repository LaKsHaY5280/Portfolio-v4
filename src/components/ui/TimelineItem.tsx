"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Card from "./Card";
import Badge from "./Badge";
import Tooltip from "./Tooltip";

interface TimelineItemProps {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
  isLast?: boolean;
}

const TimelineItem = ({
  title,
  company,
  location,
  startDate,
  endDate,
  description,
  technologies,
  isLast = false,
}: TimelineItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isLast && (
        <motion.div
          className="absolute left-8 top-24 bottom-0 w-0.5 bg-earth-sand/30"
          animate={{
            backgroundColor: isHovered
              ? "var(--earth-dark)"
              : "var(--earth-sand)",
            opacity: isHovered ? 0.5 : 0.3,
          }}
          transition={{ duration: 0.3 }}
        />
      )}

      <Card hover={false} className="relative">
        <motion.div
          className="absolute -left-3 top-8 w-6 h-6 rounded-full bg-earth-sand"
          animate={{
            scale: isHovered ? 1.2 : 1,
            backgroundColor: isHovered
              ? "var(--earth-dark)"
              : "var(--earth-sand)",
          }}
          transition={{ duration: 0.3 }}
        />

        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
          <div>
            <motion.h3
              className="text-xl font-gemola tracking-tight text-earth-dark"
              animate={{ color: isHovered ? "var(--earth-dark)" : undefined }}
            >
              {title}
            </motion.h3>
            <p className="font-al  tracking-wide text-earth-brown">{company}</p>
            <Tooltip text={`Located in ${location}`}>
              <p className="text-earth-sage text-sm font-al  tracking-wide cursor-help">
                {location}
              </p>
            </Tooltip>
          </div>
          <div className="text-earth-sage whitespace-nowrap font-al  tracking-wide">
            {startDate} - {endDate}
          </div>
        </div>

        <ul className="list-disc list-inside space-y-2 mt-4">
          {description.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="font-al  tracking-wide text-earth-brown/80 hover:text-earth-dark transition-colors"
            >
              {item}
            </motion.li>
          ))}
        </ul>

        <motion.div
          className="flex flex-wrap gap-2 mt-4"
          animate={{ y: isHovered ? 5 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              text={tech}
              variant={index % 2 === 0 ? "default" : "outline"}
            />
          ))}
        </motion.div>
      </Card>
    </motion.div>
  );
};

export default TimelineItem;
