"use client";

import { ReactNode, useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function ParallaxSection({
  children,
  backgroundImage = "parallax-bg.jpg",
}: {
  children: ReactNode;
  backgroundImage?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px", isMobile ? "0px" : "60rem"]
  );

  return (
    <motion.div
      ref={ref}
      className="relative bg-cover bg-center bg-no-repeat py-40 px-10 w-screen mb-32"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        y,
        marginBottom: isMobile ? "0px" : "70rem",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-80 z-0" />
      <div className="relative z-10 flex flex-col items-center justify-center">
        {children}
      </div>
    </motion.div>
  );
}
