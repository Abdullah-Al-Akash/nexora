// src/components/shared/Navbar.jsx

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/images/logo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/blog", label: "Blog" },
    { path: "/faq", label: "FAQ" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* Navbar Height Logo অনুযায়ী অ্যাডজাস্ট */}
          <div className="flex justify-between items-center h-20 md:h-24">
            {/* Logo with Gradient Border */}
            <NavLink to="/" className="flex items-center">
              <div className="p-[2px] rounded-full bg-gradient-to-r from-greenNeon via-cyan to-blueDeep">
                <div className="bg-black rounded-full p-1">
                  <img
                    src={logo}
                    alt="Nexora Logo"
                    className="h-16 md:h-20 w-auto object-contain rounded-full"
                  />
                </div>
              </div>
            </NavLink>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center space-x-10 h-full">
              {navLinks.map((link) => (
                <li key={link.path} className="flex items-center h-full">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-base font-medium transition-all duration-300 relative ${
                        isActive
                          ? "text-white"
                          : "text-white/60 hover:text-white"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.label}
                        {isActive && (
                          <motion.span
                            layoutId="activeNav"
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-greenNeon to-cyan rounded-full"
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* CTA Button - Same Gradient as Logo */}
            <div className="hidden md:flex items-center h-full">
              <NavLink
                to="/contact"
                className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-greenNeon via-cyan to-blueDeep rounded-full hover:shadow-lg hover:shadow-cyan/20 transition-all duration-300 hover:scale-105"
              >
                Get Started
              </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white/80 hover:text-white transition-colors focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              <div className="w-7 h-6 flex flex-col justify-between">
                <span
                  className={`block h-0.5 bg-white transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-2.5" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-white transition-all duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-white transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-2.5" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer - Logo Removed, Color Adjusted */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-50 w-80 h-full bg-black/95 backdrop-blur-lg border-l border-white/10 shadow-2xl md:hidden"
            >
              <div className="flex flex-col h-full p-8">
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="self-end text-white/60 hover:text-white transition-colors p-2"
                >
                  <svg
                    className="w-7 h-7"
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
                </button>

                {/* Brand Name in Drawer - Gradient Text */}
                <div className="mt-10 mb-12">
                  <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-greenNeon via-cyan to-blueDeep">
                    Nexora
                  </span>
                </div>

                {/* Nav Links with Hover Effect */}
                <ul className="space-y-8">
                  {navLinks.map((link) => (
                    <li key={link.path}>
                      <NavLink
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `text-2xl font-medium transition-all duration-300 block ${
                            isActive
                              ? "text-transparent bg-clip-text bg-gradient-to-r from-greenNeon via-cyan to-blueDeep"
                              : "text-white/60 hover:text-white"
                          }`
                        }
                      >
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>

                {/* Bottom Section */}
                <div className="mt-auto pt-8 border-t border-white/10">
                  <p className="text-white/30 text-sm">
                    © 2026 Nexora. All rights reserved.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
