"use client";
import { motion } from "framer-motion";
import { useMyInfo } from "@/hooks/_myInfo/useMyInfo";
import { SocialLinks } from "@/data/_myInfo/type";

const SocialIcons = ({ socialLinksData }: { socialLinksData: SocialLinks }) => {
  const socialLinks = [
    {
      href: socialLinksData.github,
      icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.47-1.13 7.29-.14.77-.42 1.03-.68 1.06-.58.06-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.52.36-.99.53-1.41.52-.46-.01-1.35-.26-2.01-.47-.81-.26-1.45-.4-1.4-.85.03-.22.46-.45 1.3-.68 5.09-2.22 8.49-3.68 10.19-4.4.49-.21 1.6-.66 1.77-.72z",
      delay: 0.5,
      duration: 2.5,
    },
    {
      href: socialLinksData.linkedin,
      icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
      delay: 0.6,
      duration: 2.8,
    },
    {
      href: socialLinksData.twitter,
      icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
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
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d={social.icon} />
            </svg>
          </motion.span>
        </motion.a>
      ))}
    </motion.div>
  );
};

const Frame = ({ children }: { children: React.ReactNode }) => {
  const { email, socialLinks: socialLinksData } = useMyInfo();

  return (
    <>
      {/* Main Content */}
      <main className="relative">{children}</main>

      {/* Frame Overlay */}
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
    </>
  );
};

export default Frame;
