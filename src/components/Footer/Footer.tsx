"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer: React.FC = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-choose" },
    { name: "Join Us", href: "#join-us" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Residential Security",
    "Industrial Security",
    "Event Security",
    "Corporate Security",
    "Hospital Security",
    "Educational Security",
  ];

  return (
    <footer className="text-gray-800" style={{ backgroundColor: "#F1EFE9" }}>
      {/* Main Footer Content */}
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="https://res.cloudinary.com/dennoivp4/image/upload/v1753100183/logo_g0mnvy.svg"
                alt="Trusafe Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold text-gray-800">Trusafe</span>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              India&apos;s most trusted security partner providing professional
              security services with trained guards, 24/7 surveillance, and
              customized protection plans.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
              >
                <FaWhatsapp className="text-lg" />
              </a>
              <a
                href="https://facebook.com/trusafe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <FaFacebook className="text-lg" />
              </a>
              <a
                href="https://instagram.com/trusafe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href="https://linkedin.com/company/trusafe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors"
              >
                <FaLinkedin className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 text-black">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 text-black">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-600">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 text-black">Contact Info</h3>
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-maroon mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Kanth Road, Bhatawali,
                    <br />
                    Moradabad, Uttar Pradesh 244001
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-3">
                <FaPhone className="text-maroon flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-maroon flex-shrink-0" />
                <a
                  href="mailto:info@trusafesecurity.in"
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  info@trusafesecurity.in
                </a>
              </div>

              {/* Business Hours */}
              <div className="mt-6">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Business Hours
                </h4>
                <p className="text-gray-600 text-sm">
                  Mon - Sat: 9:00 AM - 6:00 PM
                </p>
                <p className="text-gray-600 text-sm">
                  Emergency: 24/7 Available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="border-t border-gray-300">
        <div className="container-custom py-6">
          <div className="text-center space-y-2">
            <p className="text-gray-500 text-sm">
              © 2025 Trusafe Security & Solutions Pvt. Ltd. | All rights
              reserved.
            </p>
            <p className="text-gray-500 text-sm">
              GST Registered | CIN: [U81100UP2025PTC225232]
            </p>
            <p className="text-gray-500 text-sm">Powered by Trusafe Team</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
