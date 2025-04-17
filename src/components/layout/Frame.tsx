"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useMyInfo } from "@/hooks/_myInfo/useMyInfo";
import { SocialLinks } from "@/data/_myInfo/type";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

// Create a client-only component wrapper
const ClientOnly = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className={className}></div>;
  }

  return <>{children}</>;
};

const SocialIcons = ({ socialLinksData }: { socialLinksData: SocialLinks }) => {
  const socialLinks = [
    {
      href: socialLinksData.github,
      icon: <FaGithub />,
      delay: 0.5,
      duration: 2.5,
    },
    {
      href: socialLinksData.linkedin,
      icon: <FaLinkedin />,
      delay: 0.6,
      duration: 2.8,
    },
    {
      href: socialLinksData.instagram,
      icon: <FaInstagram />,
      delay: 0.7,
      duration: 3.1,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative flex flex-col items-center gap-8"
    >
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          className="cursor-pointer pointer-events-auto relative group"
          whileHover={{ y: -2, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -10 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -4, 0],
            transition: {
              y: {
                repeat: Infinity,
                duration: social.duration,
                ease: "easeInOut",
              },
            },
          }}
          transition={{ duration: 0.3, delay: social.delay }}
        >
          <span className="absolute inset-0 backdrop-blur-[1px] mix-blend-overlay rounded-lg group-hover:bg-white/10 group-hover:backdrop-blur-[2px] transition-all duration-500 ease-out" />
          <motion.span
            className="relative block p-2 text-white mix-blend-difference"
            whileHover={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-5 h-5 block">{social.icon}</span>
          </motion.span>
        </motion.a>
      ))}
    </motion.div>
  );
};

const Frame = ({ children }: { children: React.ReactNode }) => {
  const { socialLinks: socialLinksData } = useMyInfo();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {/* Main Content */}
      <main className="relative">{children}</main>

      {/* Frame Overlay - Only render animations on client */}
      <ClientOnly className="fixed inset-0 pointer-events-none mix-blend-difference">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 pointer-events-none mix-blend-difference"
        >
          {/* Left Side - Social Icons */}
          <div className="absolute left-8 top-0 h-full z-[100] hidden lg:block">
            <div className="h-full flex flex-col items-center justify-center gap-6">
              {/* Top Line */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="w-[1px] h-32 bg-gradient-to-b from-transparent via-white/50 to-white/50 origin-top"
              />

              <SocialIcons socialLinksData={socialLinksData} />

              {/* Bottom Line */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="w-[1px] h-32 bg-gradient-to-t from-transparent via-white/50 to-white/50 origin-bottom"
              />
            </div>
          </div>

          {/* Right Side - Email */}
          <div className="absolute right-8 top-0 h-full z-[100] hidden lg:block">
            <div className="h-full flex flex-col items-center justify-center gap-6">
              {/* Top Line */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="w-[1px] h-32 bg-gradient-to-b from-transparent via-white/50 to-white/50 origin-top"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative flex flex-col items-center gap-6"
              >
                {/* Email */}
                <motion.a
                  href="mailto:lakshaygoyal.connect@gmail.com"
                  className="cursor-pointer pointer-events-auto relative group"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    y: [0, -3, 0],
                    transition: {
                      y: {
                        repeat: Infinity,
                        duration: 3,
                        ease: "easeInOut",
                      },
                    },
                  }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  <motion.span
                    className="absolute inset-0 mix-blend-overlay rounded-[4px] group-hover:bg-white/5 transition-all duration-300"
                    whileHover={{
                      boxShadow: "0 0 8px rgba(255,255,255,0.2)",
                      backdropFilter: "blur(4px)",
                    }}
                  />
                  <motion.span
                    className="relative block px-3.5 py-2 text-white mix-blend-exclusion [writing-mode:vertical-lr] text-[11px] tracking-[0.25em] uppercase font-al"
                    whileHover={{ letterSpacing: "0.3em" }}
                    transition={{ duration: 0.3 }}
                  >
                    lakshaygoyal.connect@gmail.com
                  </motion.span>
                </motion.a>
              </motion.div>

              {/* Bottom Line */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="w-[1px] h-32 bg-gradient-to-t from-transparent via-white/50 to-white/50 origin-bottom"
              />
            </div>
          </div>
        </motion.div>
      </ClientOnly>
    </>
  );
};

export default Frame;
