"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-choose" },
    { name: "Join Us", href: "#join-us" },
    { name: "Contact", href: "#contact" },
  ];

  if (!isMounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-200 rounded animate-pulse"></div>
              <span className="text-2xl font-bold text-maroon">Trusafe</span>
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <span
                  key={item.name}
                  className="font-medium"
                  style={{ color: "var(--text-primary)" }}
                >
                  {item.name}
                </span>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <button className="btn-secondary text-sm">
                Hire Security Guard
              </button>
              <button className="btn-primary text-sm">Apply for Job</button>
            </div>

            <button
              className="lg:hidden p-2"
              style={{ color: "var(--text-primary)" }}
            >
              <Bars3Icon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg backdrop-blur-sm border-b border-gray-200"
          : "bg-white/95 backdrop-blur-sm border-b border-gray-100"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://res.cloudinary.com/dennoivp4/image/upload/v1753100183/logo_g0mnvy.svg"
              alt="Trusafe Logo"
              width={40}
              height={40}
              className="w-10 h-10"
              priority
            />
            <span className="text-2xl font-bold text-maroon">Trusafe</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-medium relative group transition-colors duration-300 hover-maroon"
                style={{ color: "var(--text-primary)" }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-maroon transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://forms.gle/3MU4SmcoX7uVJ4ZB6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm inline-block text-center"
            >
              Hire Security Guard
            </a>
            <a
              href="https://forms.gle/ruqMMid56kdWoN2j6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm inline-block text-center"
            >
              Apply for Job
            </a>
          </div>

          <button
            className="lg:hidden p-2 transition-colors duration-300 hover-maroon"
            style={{ color: "var(--text-primary)" }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="container-custom py-6">
              <nav className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="font-medium py-2 transition-colors duration-300 hover-maroon"
                    style={{ color: "var(--text-primary)" }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col space-y-3 mt-6 pt-6 border-t border-gray-200">
                <a
                  href="https://forms.gle/3MU4SmcoX7uVJ4ZB6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full inline-block text-center"
                >
                  Hire Security Guard
                </a>
                <a
                  href="https://forms.gle/ruqMMid56kdWoN2j6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full inline-block text-center"
                >
                  Apply for Job
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
