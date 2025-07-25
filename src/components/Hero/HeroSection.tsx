"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dennoivp4/image/upload/v1753100434/Head_Banner_fbcorw.png"
          alt="TruSafe Security Guard"
          fill
          className="object-cover"
          style={{
            objectPosition: "70% 50%", // 70% from left (showing more guard), 50% vertically centered
          }}
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              <span className="text-white">Trust</span>
              <span className="mx-4 text-white">+</span>
              <span className="text-white">Safety</span>
              <br />
              <span className="text-maroon">=</span>
              <span className="ml-4 text-maroon">TRUSAFE</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl font-semibold mb-2 text-gold"
            >
              India&apos;s Most Trusted Security Partner
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg opacity-90 mb-8 max-w-2xl"
            >
              Professional security services with trained guards, 24/7
              surveillance, and customized protection plans for your peace of
              mind.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://forms.gle/3MU4SmcoX7uVJ4ZB6"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4 inline-block text-center"
              >
                Hire Security Guard
              </a>
              <a
                href="https://forms.gle/ruqMMid56kdWoN2j6"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block text-center"
              >
                Apply for Job
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Statistics Cards */}
          {/* <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-4 text-gold">
                  24/7 Protection
                </h3>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-gold">500+</div>
                    <div className="text-sm opacity-80">Satisfied Clients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gold">24/7</div>
                    <div className="text-sm opacity-80">Round the Clock</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gold">100%</div>
                    <div className="text-sm opacity-80">Professional</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gold">5★</div>
                    <div className="text-sm opacity-80">Rated Service</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>

      {/* Scroll Indicator - Different for Mobile and Desktop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center text-white">
          {/* Desktop Version */}
          <div className="hidden md:flex flex-col items-center">
            <span className="text-sm mb-2 opacity-80">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
            >
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </motion.div>
          </div>

          {/* Mobile Version */}
          <div className="md:hidden flex flex-col items-center">
            <span className="text-sm mb-2 opacity-80">Swipe up to explore</span>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center"
            >
              <ChevronDownIcon className="w-6 h-6 opacity-70" />
              <ChevronDownIcon className="w-6 h-6 opacity-50 -mt-2" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
