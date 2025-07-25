"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const JoinUsSection: React.FC = () => {
  return (
    <section id="join-us" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8 lg:mb-0 flex justify-center"
          >
            <div className="w-full max-w-md rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://res.cloudinary.com/dennoivp4/image/upload/v1753100582/service_2_image.jpg"
                alt="Join Our TruSafe Security Team"
                width={600}
                height={600}
                className="object-cover w-full h-72 lg:h-[420px]"
                quality={90}
                priority={false}
              />
            </div>
          </motion.div>
          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-start"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-maroon mb-6">
              Join Us
            </h2>
            <p className="mb-5 text-gray-700 text-lg leading-relaxed max-w-xl">
              TruSafe is always in search of trustworthy individuals to join our
              team of professional security guards. If you’re dedicated,
              vigilant, and value community safety, we want you!
              <br />
              <br />
              We offer professional training, supportive work environment,
              uniforms, and clear career paths for everyone. Join us in
              safeguarding neighborhoods, businesses, and communities every day.
            </p>
            <ul className="mb-5 text-gray-700 space-y-2 pl-5 list-disc">
              <li>Professional onsite and offsite training</li>
              <li>Attractive salary packages and benefits</li>
              <li>Uniforms and equipment provided</li>
              <li>Supportive team atmosphere</li>
              <li>Opportunities for advancement</li>
            </ul>
            <a
              href="https://forms.gle/ruqMMid56kdWoN2j6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-3 rounded-full text-lg inline-block text-center"
            >
              Apply for Job
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
