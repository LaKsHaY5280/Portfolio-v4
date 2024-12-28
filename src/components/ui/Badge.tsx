import { motion } from "framer-motion";

interface BadgeProps {
  text: string;
  variant?: "default" | "outline";
}

const Badge = ({ text, variant = "default" }: BadgeProps) => {
  const variants = {
    default: "bg-earth-cream text-earth-brown",
    outline: "border border-earth-brown text-earth-brown",
  };

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`px-3 py-1 rounded-full text-sm font-al  tracking-wide ${variants[variant]}`}
    >
      {text}
    </motion.span>
  );
};

export default Badge;
