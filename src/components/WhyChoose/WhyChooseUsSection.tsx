"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const WhyChooseUsSection: React.FC = () => {
  return (
    <section id="why-choose" className="section-padding bg-[#f5f5f2]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative min-h-[240px] h-64 lg:h-96 w-full"
          >
            <Image
              src="https://res.cloudinary.com/dennoivp4/image/upload/v1753180300/why_choose_us.png"
              alt="Why Choose Us - Security system"
              fill
              className="object-cover rounded-md"
              quality={90}
              priority
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
            className="bg-[#f5f5f2] p-6 lg:p-12 rounded-md flex flex-col items-start justify-center h-full w-full shadow-md"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              Why Choose Us?
            </h2>
            <p className="text-gray-700 text-lg mb-7 leading-relaxed">
              Trusafe offers PSARA Licensed guards, verified and uniformed. With
              regular monitoring by field officers, we ensure a professional
              look and discipline. Benefit from affordable rates and flexible
              contracts.
            </p>
            <a
              href="https://forms.gle/ruqMMid56kdWoN2j6"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-8 py-3 rounded shadow font-medium hover:bg-gray-900 transition-all inline-block text-center"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
