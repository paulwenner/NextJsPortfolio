"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

interface SocialLinksProps {
  colorReverse?: boolean;
}

export default function SocialLinks({ colorReverse }: SocialLinksProps) {
  const { t } = useTranslation();

  return (
    <motion.div
      className="flex space-x-4 mb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      style={{ marginBottom: "15rem" }}
    >
      <motion.a
        href="https://www.linkedin.com/in/paul-wenner-94780128b/"
        target="_blank"
        rel="noopener noreferrer"
        className={`${colorReverse ? "text-black" : "text-white"}`}
        whileHover={{ scale: 1.3 }}
        aria-label={t("social.linkedin")}
      >
        <FaLinkedin className="w-6 h-6" />
      </motion.a>
      <motion.a
        href="https://www.instagram.com/_.paulwennr/"
        target="_blank"
        rel="noopener noreferrer"
        className={`${colorReverse ? "text-black" : "text-white"}`}
        whileHover={{ scale: 1.3 }}
        aria-label={t("social.instagram")}
      >
        <FaInstagram className="w-6 h-6" />
      </motion.a>
      <motion.a
        href="https://twitter.com/paulwennr"
        target="_blank"
        rel="noopener noreferrer"
        className={`${colorReverse ? "text-black" : "text-white"}`}
        whileHover={{ scale: 1.3 }}
        aria-label={t("social.twitter")}
      >
        <FaXTwitter className="w-6 h-6" />
      </motion.a>
      {/* github */}
      <motion.a
        href="https://github.com/paulwenner"
        target="_blank"
        rel="noopener noreferrer"
        className={`${colorReverse ? "text-black" : "text-white"}`}
        whileHover={{ scale: 1.3 }}
        aria-label={t("social.github")}
      >
        <FaGithub className="w-6 h-6" />
      </motion.a>
    </motion.div>
  );
}
