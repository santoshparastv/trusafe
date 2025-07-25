"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-maroon mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Get in touch with us for all your security needs. We're here to help
            you 24/7.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h3>

            {/* Contact Items */}
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-maroon text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-lg" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                  <p className="text-gray-600">
                    Kanth Road, Bhatawali,
                    <br />
                    Moradabad, Uttar Pradesh 244001
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-maroon text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-lg" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600">
                    <a
                      href="tel:+919876543210"
                      className="hover:text-maroon transition-colors"
                    >
                      +91 98765 43210
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-maroon text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-lg" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">
                    <a
                      href="mailto:info@trusafesecurity.in"
                      className="hover:text-maroon transition-colors"
                    >
                      info@trusafesecurity.in
                    </a>
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <FaWhatsapp className="text-lg" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">WhatsApp</h4>
                  <p className="text-gray-600">
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-600 transition-colors"
                    >
                      +91 98765 43210
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            {/* <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a 
                href="https://forms.gle/3MU4SmcoX7uVJ4ZB6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary px-6 py-3 rounded-full inline-block text-center"
              >
                Hire Security Guard
              </a>
              <button className="btn-secondary px-6 py-3 rounded-full">
                Get Quote
              </button>
            </div> */}
          </motion.div>

          {/* Right: Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="w-full h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps?q=Trusafe,+Kanth+Rd,+Kajipura,+Bhatawali+Mustahkam,+Moradabad,+Uttar+Pradesh+244001&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Trusafe Location"
                className="w-full h-full"
              />
            </div>

            {/* Map Caption */}
            <div className="mt-4 text-center">
              <p className="text-gray-600 text-sm">
                📍 Visit our office in Moradabad, Uttar Pradesh
              </p>
            </div>
          </motion.div>
        </div>

        {/* Business Hours */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 bg-gray-50 rounded-lg p-6"
        >
          {/* <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Business Hours
            </h3>
            <div className="grid md:grid-cols-2 gap-4 max-w-md mx-auto">
              <div>
                <p className="font-semibold text-gray-900">Office Hours</p>
                <p className="text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Emergency</p>
                <p className="text-gray-600">24/7 Available</p>
              </div>
            </div>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
