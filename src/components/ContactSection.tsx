"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ParallaxSection from "@/components/ParallaxSection";

export default function ContactSection() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST", // Ensure the method is POST
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Reset form fields
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <ParallaxSection backgroundImage="/images/parallax-contact.webp">
        <section className="max-w-4xl mx-auto text-center text-white">
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold mb-6"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t("contact.title")}
          </motion.h2>
          <motion.p
            className="text-md md:text-lg mb-8 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t("contact.description")}
          </motion.p>

          <motion.form
            className="flex flex-col gap-4 md:w-2/3 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              type="text"
              placeholder={t("contact.form.name")}
              className="p-2 rounded bg-gray-800 placeholder-gray-400"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              type="email"
              placeholder={t("contact.form.email")}
              className="p-2 rounded bg-gray-800 placeholder-gray-400"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <textarea
              placeholder={t("contact.form.message")}
              className="p-2 rounded bg-gray-800 placeholder-gray-400 h-32 resize-none"
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
            <button
              type="submit"
              className="bg-accent text-black font-bold py-2 px-4 rounded hover:scale-105 transition-transform"
            >
              {t("contact.form.button")}
            </button>
          </motion.form>
          <div className="flex flex-col gap-4 md:w-2/3 mx-auto mt-4">
            {status === "success" && (
              <div className="p-4 bg-green-100 text-green-700 rounded">
                {t("contact.form.success")}
              </div>
            )}
            {status === "error" && (
              <div className="p-4 bg-red-100 text-red-700 rounded">
                {t("contact.form.error")}
              </div>
            )}
          </div>
        </section>
        <div id="contact"></div>
      </ParallaxSection>
    </>
  );
}
