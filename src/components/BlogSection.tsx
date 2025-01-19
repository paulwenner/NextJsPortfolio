"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaLinkedin } from "react-icons/fa";
import { useEffect } from "react";

interface BlogSectionProps {
  colorReverse: boolean;
}

export default function BlogSection({ colorReverse }: BlogSectionProps) {
  const { t } = useTranslation();

  useEffect(() => {
    const linkedInScript = document.createElement("script");
    linkedInScript.src = "https://platform.linkedin.com/in.js";
    linkedInScript.async = true;
    document.body.appendChild(linkedInScript);
  }, []);

  return (
    <section
      id="blog"
      className="w-full max-w-4xl text-center mb-20 px-4"
      style={{ margin: "10rem" }}
    >
      <motion.h2
        className={`text-3xl md:text-4xl font-extrabold mb-8 ${
          colorReverse ? "text-black" : "text-accent"
        }`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {t("blog.title")}
      </motion.h2>

      <motion.div
        className="bg-[#1a1a1a] p- rounded-lg shadow-lg mb-6 p-4 bg-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.a
          href="https://www.linkedin.com/posts/paul-wenner-94780128b_%F0%9D%90%80%F0%9D%90%88-%F0%9D%90%96%F0%9D%90%A8%F0%9D%90%A7%F0%9D%90%AD-%F0%9D%90%91%F0%9D%90%9E%F0%9D%90%A9%F0%9D%90%A5%F0%9D%90%9A%F0%9D%90%9C%F0%9D%90%9E-%F0%9D%90%92%F0%9D%90%A8%F0%9D%90%9F%F0%9D%90%AD%F0%9D%90%B0%F0%9D%90%9A%F0%9D%90%AB%F0%9D%90%9E-activity-7285303140113870848-kl8t?utm_source=share&utm_medium=member_desktop"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <FaLinkedin className="w-6 h-6 mr-2 text-black" />
          <span
            className={`text-md ${colorReverse ? "text-black" : "text-accent"}`}
          >
            <b>
              AI Won’t Replace Software Engineers – But Engineers Who Use AI
              Will Replace Those Who Don’t!
            </b>
          </span>
        </motion.a>
      </motion.div>

      <motion.div
        className="bg-[#1a1a1a] p- rounded-lg shadow-lg mb-6"
        style={{ minHeight: "50vh" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:share:7285303139165982722"
            style={{ minHeight: "50vh" }}
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            frameBorder="0"
            allowFullScreen
            title="Embedded LinkedIn Post"
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
}
