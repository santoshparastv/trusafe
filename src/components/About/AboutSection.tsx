"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Mobile Logo - Only visible on mobile */}
            <div className="lg:hidden flex justify-center mb-6">
              <div className="w-24 h-24 flex items-center justify-center">
                <Image
                  src="https://res.cloudinary.com/dennoivp4/image/upload/v1753100183/logo_g0mnvy.svg"
                  alt="TruSafe Logo"
                  width={80}
                  height={80}
                  className="w-20 h-20"
                />
              </div>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-maroon mb-6">
              About Us
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>Trusafe Security & Solutions Pvt. Ltd.</strong> is one
                of the fastest-growing security agencies based in Moradabad,
                Uttar Pradesh.
              </p>

              <p>
                We are committed to offering reliable, professional, and trained
                manpower for all your security needs - residential to industrial
                sectors.
              </p>

              <p>
                With verified guards, proper uniforms, and 24/7 monitoring, your
                safety is in trusted hands.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-4">
              <a
                href="https://wa.me/your-number"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
              >
                <FaWhatsapp className="text-lg" />
              </a>
              <a
                href="https://facebook.com/your-page"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <FaFacebook className="text-lg" />
              </a>
              <a
                href="https://instagram.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href="https://linkedin.com/company/your-company"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors"
              >
                <FaLinkedin className="text-lg" />
              </a>
            </div>

            {/* About Us Button */}
            <div className="pt-6">
              <button className="btn-primary px-8 py-3 rounded-full">
                About Us
              </button>
            </div>
          </motion.div>

          {/* Right Content - Large TruSafe Logo (Desktop Only) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              <Image
                src="https://res.cloudinary.com/dennoivp4/image/upload/v1753100183/logo_g0mnvy.svg"
                alt="TruSafe Logo"
                width={320}
                height={320}
                className="w-80 h-80 drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
