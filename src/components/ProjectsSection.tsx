"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function ProjectsSection() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="w-full max-w-6xl text-center mb-20 mt-10 px-10"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {t("projects.title", "Project Overview")}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Projekt A - Crateflow */}
        <motion.div
          className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-2xl font-extrabold text-white mb-3">
            {t("projects.crateflow.title")}
          </h3>
          <Image
            src="/images/crateflow.webp"
            alt="Crateflow"
            width={500}
            height={300}
            className="w-auto aspect-video mb-3 rounded cursor-pointer"
            onClick={() => setSelectedImage("/images/crateflow.webp")}
          />
          <p className="text-sm text-gray-400">
            {t("projects.crateflow.description")}
          </p>
          {/* Github-Link (Beispiel) */}
        </motion.div>

        {/* Projekt B - Harvard CS50 */}
        <motion.div
          className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-2xl font-extrabold text-white mb-3">
            {t("projects.cs50.title")}
          </h3>
          <Image
            src="/images/cs50x.webp"
            alt="Harvard CS50"
            width={500}
            height={300}
            className="w-auto aspect-video mb-3 rounded cursor-pointer"
            onClick={() => setSelectedImage("/images/cs50x.webp")}
          />
          <p className="text-sm text-gray-400">
            {t("projects.cs50.description")}
          </p>
        </motion.div>

        {/* Projekt C - Clients */}
        <motion.div
          className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-2xl font-extrabold text-white mb-3">
            {t("projects.clients.title")}
          </h3>
          <Image
            src="/images/clients.webp"
            alt="Kundenwebseiten"
            width={500}
            height={300}
            className="w-auto aspect-video mb-3 rounded cursor-pointer"
            onClick={() => setSelectedImage("/images/clients.webp")}
          />
          <p className="text-sm text-gray-400">
            {t("projects.clients.description")}
          </p>
        </motion.div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <Image
            src={selectedImage}
            alt="Enlarged"
            fill
            style={{ objectFit: "contain" }}
            className="max-w-full max-h-full"
          />
        </div>
      )}
    </section>
  );
}
