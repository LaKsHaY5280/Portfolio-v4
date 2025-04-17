"use client";
import { useMyInfo } from "@/hooks/_myInfo/useMyInfo";
import { motion } from "framer-motion";
import { useLayoutContent } from "@/hooks/layout";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const { name, bio, resumeUrl } = useMyInfo();
  const { footer, navigation } = useLayoutContent();

  // Function to render the appropriate icon based on the link label
  const renderIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case "github":
        return <FaGithub />;
      case "linkedin":
        return <FaLinkedin />;
      case "twitter":
        return <FaTwitter />;
      case "instagram":
        return <FaInstagram />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-earth-dark text-earth-light relative overflow-hidden">
      {/* Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(187, 165, 143, 0.15) 2px, transparent 0)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-7xl mx-auto container-padding py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="col-span-2 space-y-6">
            <motion.h2
              className="text-2xl font-gemola"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {name}
            </motion.h2>
            <motion.p
              className="text-earth-light/70 font-al max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {footer.tagline}
            </motion.p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <motion.h3
              className="text-lg font-gemola text-earth-sand"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {footer.sections[0]}
            </motion.h3>
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {navigation.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="block text-earth-light/70 hover:text-earth-sand transition-colors duration-300 font-al
                            relative group"
                  whileHover={{ x: 5 }}
                >
                  <span className="relative">
                    {link.label}
                    <motion.span
                      className="absolute -bottom-0.5 left-0 w-0 h-px bg-earth-sand"
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <motion.h3
              className="text-lg font-gemola text-earth-sand"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {footer.sections[1]}
            </motion.h3>
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {footer.links.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-earth-light/70 hover:text-earth-sand transition-colors duration-300 font-al
                            relative group"
                  whileHover={{ x: 5 }}
                >
                  <span className="relative capitalize flex items-center gap-2">
                    <motion.span
                      className="w-4 h-4"
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {renderIcon(link.label)}
                    </motion.span>
                    {link.label}
                    <motion.span
                      className="absolute -bottom-0.5 left-0 w-0 h-px bg-earth-sand"
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-16 pt-8 border-t border-earth-light/10 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-earth-light/50 font-al text-sm">
            {footer.copyright}
          </p>
          <div className="flex items-center gap-6">
            <motion.a
              href={footer.buttons[0].href}
              rel="noopener noreferrer"
              className="text-earth-light/50 hover:text-earth-sand text-sm font-al transition-colors duration-300"
              whileHover={{ x: 2 }}
            >
              {footer.buttons[0].label}
            </motion.a>
            {/* <motion.a
              href={footer.buttons[1].href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-earth-light/50 hover:text-earth-sand text-sm font-al transition-colors duration-300"
              whileHover={{ x: 2 }}
            >
              {footer.buttons[1].label}
            </motion.a> */}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
