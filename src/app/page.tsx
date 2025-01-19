"use client";

import React, { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import SocialLinks from "@/components/SocialLinks";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  const [colorReverse, setcolorReverse] = useState(true);

  useEffect(() => {
    const heroSection = document.querySelector("#hero");
    const blogSection = document.querySelector("#blog");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === "hero" || entry.target.id === "blog") {
            setcolorReverse(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (heroSection) {
      observer.observe(heroSection);
    }
    if (blogSection) {
      observer.observe(blogSection);
    }

    return () => {
      if (heroSection) {
        observer.unobserve(heroSection);
      }
      if (blogSection) {
        observer.unobserve(blogSection);
      }
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const heroSection = document.querySelector("#hero");
      if (heroSection) {
        console.log(heroSection.getBoundingClientRect().top);
        setcolorReverse(
          heroSection.getBoundingClientRect().top < 100 &&
            heroSection.getBoundingClientRect().top > -1000
        );
      }
    }, 200);
  }, []);

  return (
    <>
      <NavBar colorReverse={colorReverse} />
      <main
        className={`flex flex-col items-center justify-start min-h-screen space-y-8 transition-colors duration-500 ${
          colorReverse ? "bg-[#D3D3D3]" : "bg-[#121212]"
        }`}
      >
        {/* hero */}
        <HeroSection colorReverse={colorReverse} />
        <SocialLinks colorReverse={colorReverse} />
        {/* about */}
        <AboutSection />
        {/* projects */}
        <ProjectsSection />
        {/* blog */}
        <BlogSection colorReverse={colorReverse} />
        {/* contact */}
        <ContactSection />
      </main>
    </>
  );
}
