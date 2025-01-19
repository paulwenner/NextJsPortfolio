"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import React from "react";

interface HeroSectionProps {
  colorReverse: boolean;
}

export default function HeroSection({ colorReverse }: HeroSectionProps) {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="w-full max-w-4xl text-center mb-16 mt-20 px-4 flex flex-col items-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg mb-6 mt-6"
      >
        <Image
          src="/my-image.jpeg"
          alt="Paul Wenner"
          fill
          style={{ objectFit: "cover" }}
        />
      </motion.div>
      <motion.h1
        className={`text-4xl md:text-6xl font-bold mb-4 ${
          colorReverse ? "text-black" : "text-accent"
        }`}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t("hero.title")} <br className="hidden md:block" />
        <span>{t("hero.subtitle")}</span>
      </motion.h1>
      <motion.p
        className={`text-md md:text-lg ${
          colorReverse ? "text-gray-700" : "text-gray-300"
        } italic mb-4`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        {t("hero.slogan")}
      </motion.p>
      <motion.p
        className={`text-md md:text-lg ${
          colorReverse ? "text-gray-700" : "text-gray-300"
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {t("hero.description")}
      </motion.p>
    </section>
  );
}
