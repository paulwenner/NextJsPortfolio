"use client";

import { motion } from "framer-motion";
import ParallaxSection from "@/components/ParallaxSection";
import { useTranslation } from "react-i18next";

interface Experience {
  title: string;
  company: string;
  date: string;
  location: string;
  description: string[];
  skills: string;
}

export default function AboutSection() {
  const { t } = useTranslation();

  // Cast the return type of t() to an array of Experience objects
  const experiences: Experience[] = t("about.experience", {
    returnObjects: true,
  }) as Experience[];

  return (
    <ParallaxSection backgroundImage="/images/parallax-about.jpg">
      <section
        id="about"
        className="w-full max-w-5xl mx-auto text-center text-gray-100 px-4 py-10"
      >
        {/* Title Section */}
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold mb-12 tracking-wide"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t("about.title")}
        </motion.h2>

        {/* Timeline Section */}
        <div className="relative">
          {/* Timeline Line (with dashed style) */}
          <div
            className="absolute w-1 h-full bg-gradient-to-b from-gray-500 to-gray-300 left-1/2 transform -translate-x-1/2 
                          border-l border-dashed border-gray-500"
            style={{ borderWidth: "2px", borderColor: "gray" }}
          ></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col items-center md:flex-row ${
                  index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Experience Content */}
                <div
                  className={`max-w-md p-6 rounded-2xl shadow-xl transition-transform duration-300 ease-out 
                              bg-gradient-to-br from-gray-300 to-gray-200 text-black
                              ${index % 2 === 0 ? "md:ml-8" : "md:mr-8"}`}
                >
                  <h3 className="text-xl md:text-2xl font-bold mb-3">
                    {exp.title}
                  </h3>
                  <p className="text-sm font-medium mb-1">
                    {exp.company} | {exp.date}
                  </p>
                  <p className="text-sm mb-4">{exp.location}</p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    {exp.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm font-semibold">
                    {t("Skills")}: {exp.skills}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </ParallaxSection>
  );
}
