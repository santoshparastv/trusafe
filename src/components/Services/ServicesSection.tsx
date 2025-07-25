"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Trained Guards",
      description:
        "Our security guards are highly trained professionals equipped to handle all security challenges with expertise and vigilance.",
      image:
        "https://res.cloudinary.com/dennoivp4/image/upload/v1753100519/service.png",
      alt: "Professional Trained Security Guards",
    },
    {
      id: 2,
      title: "Customized Plans",
      description:
        "Tailoring security plans to meet the specific needs of each client, ensuring comprehensive protection and peace of mind at all times.",
      image:
        "https://res.cloudinary.com/dennoivp4/image/upload/v1753100582/service_2_image.jpg",
      alt: "Customized Security Plans",
    },
    {
      id: 3,
      title: "24/7 Surveillance",
      description:
        "Offering round-the-clock surveillance and monitoring services to guarantee the safety and security of your premises day and night.",
      image:
        "https://res.cloudinary.com/dennoivp4/image/upload/v1753100538/trusafe_qkqs4z.png",
      alt: "24/7 Surveillance Services",
    },
  ];

  return (
    <section id="services" className="section-padding bg-gray-900">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Providing top-notch security solutions for residential areas,
            society premises, banquet halls, events, hospitals, factories,
            commercial spaces, schools, and colleges.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-maroon mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="btn-primary px-8 py-4 text-lg rounded-full">
            Get Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
