"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { FiSettings } from "react-icons/fi";
import { FiX } from "react-icons/fi";

interface NavBarProps {
  colorReverse: boolean;
}

export default function NavBar({ colorReverse }: NavBarProps) {
  const { t, i18n } = useTranslation();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsSettingsOpen(false);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsSettingsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsSettingsOpen(false);
    }, 1000);
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-sm transition-colors duration-500 ${
          colorReverse ? "bg-[#D3D3D3]" : "bg-[#121212]"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center md:justify-center justify-end py-4 px-4">
          {/* Desktop Navigation Links */}
          <ul
            className={`hidden md:flex space-x-6 ${
              colorReverse ? "text-black" : "text-gray-300"
            }`}
          >
            <li>
              <Link href="#hero" className="hover:text-accent transition">
                {t("nav.home")}
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-accent transition">
                {t("nav.about")}
              </Link>
            </li>
            <li>
              <Link href="#projects" className="hover:text-accent transition">
                {t("nav.projects")}
              </Link>
            </li>
            <li>
              <Link href="#blog" className="hover:text-accent transition">
                {t("nav.blog")}
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-accent transition">
                {t("nav.contact")}
              </Link>
            </li>
          </ul>

          {/* Hamburger Button for Mobile */}
          <button
            className={`md:hidden focus:outline-none ${
              colorReverse
                ? "text-black hover:text-white"
                : "text-gray-300 hover:text-gray-100"
            }`}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Overlay when Mobile menu is open */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Side Mobile menu */}
      <div
        className={`fixed top-0 right-0 h-full w-screen sm:w-1/2 z-50 transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out ${
          colorReverse ? "bg-[#D3D3D3]" : "bg-[#121212]"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          {/* Close Button (X) */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className={`focus:outline-none ${
              colorReverse
                ? "text-black hover:text-white"
                : "text-white hover:text-gray-300"
            }`}
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <ul
          className={`flex flex-col space-y-4 mt-4 px-4 text-lg font-bold text-center ${
            colorReverse ? "text-black" : "text-gray-300"
          }`}
        >
          <li>
            <Link
              href="#hero"
              className="hover:text-accent transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("nav.home")}
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="hover:text-accent transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("nav.about")}
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="hover:text-accent transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("nav.projects")}
            </Link>
          </li>
          <li>
            <Link
              href="#blog"
              className="hover:text-accent transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("nav.blog")}
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="hover:text-accent transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("nav.contact")}
            </Link>
          </li>
        </ul>
      </div>

      {/* Language Settings (Gear Icon) */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => setIsSettingsOpen((prev) => !prev)}
          className="p-3 bg-gray-800 rounded-full shadow-lg hover:bg-gray-700 transition focus:outline-none focus:ring-2 focus:ring-gray-600"
        >
          <FiSettings className="text-white text-2xl" />
        </button>

        {isSettingsOpen && (
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="absolute bottom-16 right-0 bg-gray-900 text-white rounded shadow-lg w-48"
          >
            <button
              onClick={() => changeLanguage("de")}
              className="block w-full px-4 py-2 text-left hover:bg-gray-700 transition"
            >
              {t("buttons.language_de")}
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className="block w-full px-4 py-2 text-left hover:bg-gray-700 transition"
            >
              {t("buttons.language_en")}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
