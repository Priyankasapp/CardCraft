import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FiMoon, FiSun } from "react-icons/fi";
const MotionLink = motion(Link);

const CardCraftLogo = () => {
  return (
    <motion.div
      className="flex items-center gap-2 cursor-pointer select-none"
      whileHover="hover"
      whileTap={{ scale: 0.97 }}
    >
      {/* Animated stacked card icon */}
      <motion.div
        style={{ position: "relative", width: 36, height: 36 }}
        initial="rest"
        whileHover="hover"
      >
        {/* Card 1 — back */}
        <motion.div
          variants={{
            rest: { x: -4, y: -4, rotate: -6, opacity: 0.35 },
            hover: {
              x: -7,
              y: -6,
              rotate: -10,
              opacity: 0.5,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            },
          }}
          style={{
            position: "absolute",
            width: 28,
            height: 18,
            borderRadius: 4,
            background: "#534AB7",
            top: 8,
            left: 4,
          }}
        />
        {/* Card 2 — middle */}
        <motion.div
          variants={{
            rest: { x: -2, y: -2, rotate: -3, opacity: 0.6 },
            hover: {
              x: -4,
              y: -3,
              rotate: -5,
              opacity: 0.75,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0.03,
              },
            },
          }}
          style={{
            position: "absolute",
            width: 28,
            height: 18,
            borderRadius: 4,
            background: "#378ADD",
            top: 8,
            left: 4,
          }}
        />
        {/* Card 3 — front */}
        <motion.div
          variants={{
            rest: { x: 0, y: 0, rotate: 0 },
            hover: {
              x: 1,
              y: 0,
              rotate: 2,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0.06,
              },
            },
          }}
          style={{
            position: "absolute",
            width: 28,
            height: 18,
            borderRadius: 4,
            background: "linear-gradient(135deg, #185FA5 0%, #534AB7 100%)",
            top: 8,
            left: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: 5,
            gap: 3,
          }}
        >
          {/* Name line */}
          <motion.div
            style={{
              width: 14,
              height: 2.5,
              borderRadius: 1.5,
              background: "white",
            }}
            variants={{
              rest: { width: 14 },
              hover: { width: 16, transition: { delay: 0.1, duration: 0.2 } },
            }}
          />
          {/* Sub line */}
          <div
            style={{
              width: 10,
              height: 1.5,
              borderRadius: 1,
              background: "rgba(255,255,255,0.5)",
            }}
          />
          {/* QR dots */}
          <div
            style={{
              position: "absolute",
              right: 5,
              top: 4,
              display: "grid",
              gridTemplateColumns: "3px 3px",
              gap: 1.5,
            }}
          >
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                style={{
                  width: 2.5,
                  height: 2.5,
                  borderRadius: 0.5,
                  background: "rgba(255,255,255,0.7)",
                }}
                variants={{
                  rest: { opacity: 0.7 },
                  hover: { opacity: 1, transition: { delay: 0.08 + i * 0.04 } },
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Brand text */}
      <div style={{ display: "flex", alignItems: "baseline", gap: 0 }}>
        <motion.span
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: "#0C447C",
            letterSpacing: "-0.5px",
            lineHeight: 1,
          }}
          variants={{
            hover: { color: "#185FA5", transition: { duration: 0.2 } },
          }}
        >
          Card
        </motion.span>
        <motion.span
          style={{
            fontSize: 20,
            fontWeight: 300,
            color: "#534AB7",
            letterSpacing: "-0.5px",
            lineHeight: 1,
          }}
          variants={{
            hover: { color: "#7F77DD", transition: { duration: 0.2 } },
          }}
        >
          Craft
        </motion.span>
      </div>
    </motion.div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);

    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Templates", href: "/templates" },
    { name: "Editor", href: "/editor" },
    { name: "Features", href: "/editor" },
    { name: "Pricing", href: "#" },
  ];

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const linkVariants = {
    hover: { scale: 1.05, color: "#6366f1" },
    tap: { scale: 0.95 },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50"
          : "bg-white shadow-md border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <CardCraftLogo />

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <MotionLink
                key={link.name}
                to={link.href}
                variants={linkVariants}
                whileHover="hover"
                whileTap="tap"
                className="px-4 py-2 text-sm font-medium text-gray-700 rounded-lg transition-colors hover:text-indigo-600 hover:bg-indigo-50/50"
              >
                {link.name}
              </MotionLink>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
              className="w-11 h-11 flex items-center justify-center rounded-full border border-purple-200 bg-white shadow-sm hover:shadow-md transition-all"
            >
              {darkMode ? (
                <FiSun size={20} className="text-gray-500" />
              ) : (
                <FiMoon size={20} className="text-gray-700" />
              )}
            </motion.button>
            <MotionLink
              to="#"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(168,85,247,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden px-8 py-3 text-sm font-semibold text-white rounded-xl shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg, #d946ef 0%, #8b5cf6 50%, #6366f1 100%)",
                textDecoration: "none",
              }}
            >
              Get Started
            </MotionLink>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none transition-colors"
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-inner overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navLinks.map((link, idx) => (
                <MotionLink
                  key={link.name}
                  to={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ x: 8, color: "#4f46e5" }}
                  className="block px-3 py-3 rounded-lg text-base font-medium text-gray-800 hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-200"
                >
                  {link.name}
                </MotionLink>
              ))}
              <div className="pt-4 pb-2">
                <MotionLink
                  to="#"
                  whileTap={{ scale: 0.97 }}
                  className="flex w-full items-center justify-center px-4 py-3 text-base font-semibold text-white bg-indigo-600 rounded-xl shadow-md hover:bg-indigo-700 transition-colors"
                >
                  Get Started
                </MotionLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
