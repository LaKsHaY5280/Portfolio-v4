"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { useLayoutContent } from "@/hooks/layout";
import { useMyInfo } from "@/hooks/_myInfo/useMyInfo";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

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
  const { socialLinks, name, resumeUrl } = useMyInfo();
  const [isHomePage, setIsHomePage] = useState(true);

  // Check if we're on the home page
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsHomePage(window.location.pathname === "/" || window.location.pathname === "");
    }
  }, []);

  // Create a CSS class for body instead of directly manipulating the style
  useEffect(() => {
    // Only run on the client side
    if (typeof document !== "undefined") {
      if (isOpen) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }

      return () => {
        document.body.classList.remove("overflow-hidden");
      };
    }
  }, [isOpen]);

  const socialLinksArray = [
    { name: "GitHub", icon: <FaGithub className="w-5 h-5" />, url: socialLinks.github },
    { name: "LinkedIn", icon: <FaLinkedin className="w-5 h-5" />, url: socialLinks.linkedin },
    { name: "Twitter", icon: <FaTwitter className="w-5 h-5" />, url: socialLinks.twitter },
  ];

  if (socialLinks.instagram) {
    socialLinksArray.push({
      name: "Instagram",
      icon: <FaInstagram className="w-5 h-5" />,
      url: socialLinks.instagram,
    });
  }

  return (
    <div
      className={`fixed inset-0 top-0 left-0 w-screen h-screen md:hidden ${
        isOpen ? "block" : "hidden"
      }`}
      style={{
        zIndex: 9999,
        position: "fixed",
      }}
    >
      {/* Full screen background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f2efe8] to-[#e8d9cd]" />

      {/* Close button */}
      <motion.button
        className="absolute top-6 right-6 z-10 p-2.5 rounded-full bg-earth-sand/10 text-earth-dark border border-earth-dark/10"
        whileTap={{ scale: 0.95 }}
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ delay: 0.1 }}
        aria-label="Close menu"
      >
        <svg
          className="w-5 h-5"
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

      {/* Content Container */}
      <motion.div
        className="absolute inset-0 flex flex-col w-full h-full overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="min-h-screen flex flex-col px-8 py-20">
          {/* Header - Reduced top margin */}
          <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -15 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h2 className="font-gemola text-2xl sm:text-3xl text-earth-dark">{name}</h2>
            <div className="h-px w-24 bg-earth-sand/40 mx-auto mt-2"></div>
          </motion.div>

          {/* Navigation Links - Compact Layout */}
          <div className="flex-1 flex flex-col justify-center">
            <nav className="flex flex-col gap-3 sm:gap-5">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{
                    opacity: isOpen ? 1 : 0,
                    x: isOpen ? 0 : -10,
                  }}
                  transition={{
                    delay: 0.15 + index * 0.05,
                    duration: 0.3,
                  }}
                >
                  <motion.a
                    href={isHomePage ? item.href : `/?section=${item.label.toLowerCase()}`}
                    onClick={(e) => {
                      if (isHomePage) {
                        e.preventDefault();
                        const element = document.getElementById(
                          item.label.toLowerCase()
                        );
                        if (element) {
                          onClose();
                          element.scrollIntoView({ behavior: "smooth" });
                          setActiveSection(item.label.toLowerCase());
                        }
                      }
                    }}
                    className="block py-2.5 text-2xl transition-colors text-center"
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className={`relative font-al inline-block ${
                      activeSection === item.label.toLowerCase()
                        ? "text-earth-dark font-medium"
                        : "text-earth-brown/80"
                    }`}>
                      {item.label}
                      {activeSection === item.label.toLowerCase() && (
                        <motion.span
                          className="absolute -bottom-1 left-0 right-0 h-[2px] bg-earth-sand"
                          layoutId="activeMobileNav"
                        />
                      )}
                    </span>
                  </motion.a>
                </motion.div>
              ))}
            </nav>
          </div>

          {/* Footer Section - Reduced margins and padding */}
          <div className="mt-4">
            {/* Action Buttons */}
            <div className="space-y-2 mb-6">
              {/* Resume Button */}
              {resumeUrl && (
                <motion.a
                  href={resumeUrl}
                  className="block w-full py-3.5 px-6 bg-earth-sand/10 text-earth-dark text-center rounded-lg 
                           font-medium text-lg border border-earth-sand/20 relative overflow-hidden group"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 10 }}
                  transition={{ delay: 0.3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 font-al flex items-center justify-center gap-2">
                    Resume
                    <svg
                      className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-earth-sand/10 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.a>
              )}

              {/* Get in Touch Button */}
              <motion.a
                href={isHomePage ? button.href : `/?section=contact`}
                className="block w-full py-3.5 px-6 bg-earth-dark text-earth-light text-center rounded-lg 
                         font-medium text-lg relative overflow-hidden group"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 10 }}
                transition={{ delay: 0.35 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => {
                  if (isHomePage) {
                    e.preventDefault();
                    const element = document.getElementById('contact');
                    if (element) {
                      onClose();
                      element.scrollIntoView({ behavior: "smooth" });
                      setActiveSection('contact');
                    }
                  }
                }}
              >
                <span className="relative z-10 font-al flex items-center justify-center gap-2">
                  {button.label}
                  <motion.svg
                    className="w-5 h-5"
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
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.a>
            </div>

            {/* Social Links - Always visible */}
            <motion.div
              className="flex justify-center items-center gap-4 mb-5 border-t border-earth-sand/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: isOpen ? 1 : 0 }}
              transition={{ delay: 0.4 }}
            >
              {socialLinksArray.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-earth-light/50 text-earth-brown/80 hover:bg-earth-sand/20 hover:text-earth-dark transition-colors"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: isOpen ? 1 : 0, 
                    y: isOpen ? 0 : 20 
                  }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);
  const { scrollY } = useScroll();
  const { navigation, button } = useLayoutContent();
  const { name, resumeUrl } = useMyInfo();

  // Check if we're on the home page
  useEffect(() => {
    if (typeof window !== "undefined") {
      // If the URL path is just "/" or "" or "/?" with optional query params, we're on the home page
      setIsHomePage(window.location.pathname === "/" || window.location.pathname === "");
    }
  }, []);

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
    <ClientOnly>
      <motion.header
        className="fixed top-0 left-0 right-0 z-10 backdrop-blur-md"
        style={{
          backgroundColor: headerBg,
          borderBottom: `1px solid`,
          borderColor: headerBorder,
        }}
      >
        <nav className="max-w-7xl mx-auto container-padding py-4">
          <div className="flex items-center justify-between relative z-[2]">
            {/* Logo */}
            <div className="relative">
              <motion.a
                href="/"
                className="text-xl font-gemola text-earth-dark relative inline-block"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <span className="whitespace-nowrap">{name}</span>
              </motion.a>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <motion.a
                  key={item.label}
                  href={isHomePage ? item.href : `/?section=${item.label.toLowerCase()}`}
                  className={`relative font-al text-sm group ${
                    activeSection === item.label.toLowerCase()
                      ? "text-earth-dark"
                      : "text-earth-dark/60 hover:text-earth-dark"
                  }`}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  onClick={(e) => {
                    // Only handle smooth scrolling on the home page
                    if (isHomePage) {
                      e.preventDefault();
                      const element = document.getElementById(
                        item.label.toLowerCase()
                      );
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                        setActiveSection(item.label.toLowerCase());
                      }
                    }
                    // On other pages, let the normal link navigation happen
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

            {/* Mobile Menu Button & Get in Touch */}
            <div className="flex items-center gap-4">
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

              {/* Action Buttons */}
              <div className="hidden md:flex items-center gap-4">
                {/* Resume Button */}
                {resumeUrl && (
                  <motion.a
                    href={resumeUrl}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-al text-earth-dark
                              bg-earth-sand/10 hover:bg-earth-sand/20 rounded-lg transition-all duration-300 
                              relative overflow-hidden border border-earth-sand/20"
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    <span className="relative z-10">Resume</span>
                    <svg
                      className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:rotate-12"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-earth-sand/10 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.a>
                )}

                {/* Get in Touch Button */}
                <motion.a
                  href={isHomePage ? button.href : `/?section=contact`}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-al text-earth-dark
                            bg-earth-dark/5 hover:bg-earth-dark/10 rounded-lg transition-colors relative overflow-hidden"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  onClick={(e) => {
                    if (isHomePage) {
                      e.preventDefault();
                      const element = document.getElementById('contact');
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                        setActiveSection('contact');
                      }
                    }
                  }}
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
    </ClientOnly>
  );
};

export default Header;
