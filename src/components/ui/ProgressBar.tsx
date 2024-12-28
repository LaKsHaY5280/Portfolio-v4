"use client";
import { motion } from "framer-motion";

interface ProgressBarProps {
  progress: number;
  label?: string;
  showPercentage?: boolean;
  className?: string;
}

const ProgressBar = ({
  progress,
  label,
  showPercentage = true,
  className = "",
}: ProgressBarProps) => {
  return (
    <div className={className}>
      {label && (
        <div className="flex justify-between mb-2">
          <span className="font-al  tracking-wide text-earth-brown">
            {label}
          </span>
          {showPercentage && (
            <span className="font-al  tracking-wide text-earth-sage">
              {progress}%
            </span>
          )}
        </div>
      )}
      <div className="relative h-2 bg-earth-cream rounded-full overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-full bg-earth-sand rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${progress}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
