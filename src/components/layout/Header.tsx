"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { useLayoutContent } from "@/hooks/layout";
import { useMyInfo } from "@/hooks/_myInfo/useMyInfo";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigation: Array<{ label: string; href: string }>;
  button: { label: string; href: string };
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const MobileMenu = ({
  isOpen,
  onClose,
  navigation,
  button,
  activeSection,
  setActiveSection,
}: MobileMenuProps) => {
  return (
    <motion.div
      className="md:hidden fixed inset-0 bg-white"
      initial={{ opacity: 0 }}
      animate={{
        opacity: isOpen ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
      style={{
        zIndex: 150,
        pointerEvents: isOpen ? "auto" : "none",
        backgroundColor: "#ffffff",
      }}
    >
      <div className="relative flex flex-col h-screen">
        {/* Background */}
        <motion.div
          className="absolute inset-0 overflow-hidden bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-earth-sand/10 to-white" />

          {/* Animated gradient orbs */}
          <motion.div
            className="absolute top-0 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-earth-sand/30 via-earth-sand/20 to-transparent blur-3xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isOpen
                ? {
                    opacity: 1,
                    scale: 1,
                    x: [0, 20, 0],
                    y: [0, 30, 0],
                  }
                : { opacity: 0, scale: 0.8 }
            }
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              opacity: { duration: 0.5, delay: 0.3 },
              scale: { duration: 0.5, delay: 0.3 },
            }}
          />
          <motion.div
            className="absolute bottom-0 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-l from-earth-sand/30 via-earth-sand/20 to-transparent blur-3xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isOpen
                ? {
                    opacity: 1,
                    scale: 1,
                    x: [0, -20, 0],
                    y: [0, -30, 0],
                  }
                : { opacity: 0, scale: 0.8 }
            }
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              opacity: { duration: 0.5, delay: 0.4 },
              scale: { duration: 0.5, delay: 0.4 },
            }}
          />

          {/* Grid pattern */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 0.05 : 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              backgroundImage: `
                linear-gradient(to right, rgb(200, 190, 180) 1px, transparent 1px),
                linear-gradient(to bottom, rgb(200, 190, 180) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />

          {/* Animated lines */}
          <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M0 200 C 200 150, 400 250, 600 200 S 800 150, 1000 200"
              stroke="rgba(200, 190, 180, 0.2)"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={
                isOpen
                  ? { pathLength: 1, opacity: 1 }
                  : { pathLength: 0, opacity: 0 }
              }
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            />
            <motion.path
              d="M0 400 C 200 350, 400 450, 600 400 S 800 350, 1000 400"
              stroke="rgba(200, 190, 180, 0.2)"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={
                isOpen
                  ? { pathLength: 1, opacity: 1 }
                  : { pathLength: 0, opacity: 0 }
              }
              transition={{ duration: 1.5, delay: 0.7, ease: "easeInOut" }}
            />
          </svg>

          {/* Floating dots */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-earth-sand/30"
              initial={{ opacity: 0, scale: 0 }}
              animate={
                isOpen
                  ? {
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                      y: ["0%", "100%"],
                    }
                  : { opacity: 0, scale: 0 }
              }
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: "0%",
              }}
            />
          ))}

          {/* Radial gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, transparent 0%, rgba(255, 255, 255, 0.9) 100%)",
            }}
          />
        </motion.div>

        {/* Content Container */}
        <div className="relative flex flex-col h-screen z-10">
          {/* Header */}
          {/* <div className="flex items-center justify-between py-4 px-6 border-b border-earth-sand/10 relative z-10 ">
            <motion.a
              href="#"
              className="text-xl font-gemola text-earth-dark"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
              transition={{ delay: 0.1 }}
            >
              Menu
            </motion.a>
            <motion.button
              className="p-2 -mr-2 text-earth-dark/60 hover:text-earth-dark rounded-full hover:bg-earth-sand/5 transition-colors"
              onClick={onClose}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 20 }}
              transition={{ delay: 0.1 }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>
          </div> */}

          {/* Navigation */}
          <div className="mt-auto px-6">
            <nav className="space-y-3">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isOpen ? 1 : 0,
                    y: isOpen ? 0 : 20,
                  }}
                  transition={{
                    delay: 0.2 + index * 0.1,
                    duration: 0.4,
                    ease: [0.36, 0, 0.66, 1],
                  }}
                >
                  <motion.a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(
                        item.label.toLowerCase()
                      );
                      if (element) {
                        onClose();
                        element.scrollIntoView({ behavior: "smooth" });
                        setActiveSection(item.label.toLowerCase());
                      }
                    }}
                    className={`group relative flex items-center justify-between py-6 transition-colors
                      ${
                        activeSection === item.label.toLowerCase()
                          ? "text-earth-dark"
                          : "text-earth-dark/60 hover:text-earth-dark"
                      }`}
                    whileHover="hover"
                  >
                    <div className="flex flex-col">
                      <span className="text-3xl font-al">{item.label}</span>
                      <motion.div
                        className="h-px bg-earth-sand/40 mt-2"
                        initial={{ scaleX: 0 }}
                        animate={{
                          scaleX:
                            activeSection === item.label.toLowerCase() ? 1 : 0,
                        }}
                        variants={{
                          hover: { scaleX: 1 },
                        }}
                        transition={{ duration: 0.3 }}
                        style={{ transformOrigin: "left" }}
                      />
                    </div>
                    <motion.div
                      className="text-earth-dark/40"
                      variants={{
                        hover: { x: 8 },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </motion.div>
                  </motion.a>
                </motion.div>
              ))}
            </nav>
          </div>

          {/* Footer with CTA */}
          <div className="mb-auto border-t border-earth-sand/10">
            <motion.div
              className="p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isOpen ? 1 : 0,
                y: isOpen ? 0 : 20,
              }}
              transition={{ delay: 0.4 }}
            >
              <motion.a
                href={button.href}
                className="relative w-full inline-flex items-center justify-center gap-3 px-6 py-5 text-lg font-al
                        bg-earth-dark text-white rounded-2xl transition-colors overflow-hidden group"
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-earth-sand/20 via-earth-sand/10 to-transparent"
                  initial={{ x: "-100%" }}
                  variants={{
                    hover: { x: "100%" },
                  }}
                  transition={{ duration: 0.8 }}
                />
                <span className="relative">{button.label}</span>
                <motion.svg
                  className="w-5 h-5 relative"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 0.5,
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </motion.svg>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const { navigation, button } = useLayoutContent();
  const { name, initials } = useMyInfo();

  const headerBg = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.8)"]
  );

  const headerBorder = useTransform(
    scrollY,
    [0, 50],
    ["rgba(34, 48, 48, 0)", "rgba(34, 48, 48, 0.1)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navigation.map((item) => item.label.toLowerCase());
      const viewportHeight = window.innerHeight;
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const threshold = viewportHeight * 0.3;
          return rect.top <= threshold && rect.bottom >= threshold;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigation]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-[200] backdrop-blur-md"
      style={{
        backgroundColor: headerBg,
        borderBottom: `1px solid`,
        borderColor: headerBorder,
      }}
    >
      <nav className="max-w-7xl mx-auto container-padding py-4">
        <div className="flex items-center justify-between relative z-[200]">
          {/* Logo */}
          <div className="relative">
            <motion.a
              href="#"
              className="text-xl font-gemola text-earth-dark relative inline-block group"
              whileHover="hover"
              initial="initial"
            >
              <div className="relative overflow-hidden">
                <motion.div
                  className="relative z-10 flex items-center"
                  variants={{
                    initial: { width: "2.5rem" },
                    hover: { width: "auto" },
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <span className="opacity-100 group-hover:opacity-0 transition-opacity duration-300 absolute">
                    {initials}
                  </span>
                  <motion.span
                    className="opacity-0 group-hover:opacity-100 whitespace-nowrap transition-all duration-300"
                    variants={{
                      initial: { x: 20 },
                      hover: { x: 0 },
                    }}
                  >
                    {name}
                  </motion.span>
                </motion.div>
              </div>
            </motion.a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className={`relative font-al text-sm group ${
                  activeSection === item.label.toLowerCase()
                    ? "text-earth-dark"
                    : "text-earth-dark/60 hover:text-earth-dark"
                }`}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(
                    item.label.toLowerCase()
                  );
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                    setActiveSection(item.label.toLowerCase());
                  }
                }}
              >
                <span className="relative">
                  {item.label}
                  {activeSection === item.label.toLowerCase() && (
                    <motion.span
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-earth-sand/40"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 20,
                      }}
                    />
                  )}
                  {activeSection !== item.label.toLowerCase() && (
                    <motion.span
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-earth-sand/40"
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-earth-dark/60 hover:text-earth-dark"
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>

          {/* Get in Touch Button */}
          <div className="hidden md:block">
            <motion.a
              href={button.href}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-al text-earth-dark
                        bg-earth-dark/5 hover:bg-earth-dark/10 rounded-lg transition-colors relative overflow-hidden"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <span>{button.label}</span>
              <motion.svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                initial={{ x: 0 }}
                animate={{ x: [0, 3, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 0.5,
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </motion.svg>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-earth-sand/10 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Component */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navigation={navigation}
        button={button}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    </motion.header>
  );
};

export default Header;
