"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface NotificationProps {
  message: string;
  type?: "success" | "error" | "info";
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

const Notification = ({
  message,
  type = "info",
  isVisible,
  onClose,
  duration = 3000,
}: NotificationProps) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  const variants = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-earth-dark",
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-24 right-4 z-50"
        >
          <div
            className={`${variants[type]} font-al  tracking-wide text-earth-light px-6 py-3 rounded-lg shadow-lg`}
          >
            {message}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;
