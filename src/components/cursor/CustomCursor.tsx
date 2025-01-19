"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover">(
    "default"
  );

  useEffect(() => {
    // Track mouse movement and update cursor position
    const moveCursor = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    // Add event listener for mouse movement
    window.addEventListener("mousemove", moveCursor);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  useEffect(() => {
    // Change cursor style on link hover
    const links = document.querySelectorAll("a");

    const linksAndButtons = document.querySelectorAll("a, button");

    linksAndButtons.forEach((element) => {
      element.addEventListener("mouseenter", () => setCursorVariant("hover"));
      element.addEventListener("mouseleave", () => setCursorVariant("default"));
    });

    // Cleanup event listeners on unmount
    return () => {
      links.forEach((link) => {
        link.removeEventListener("mouseenter", () => setCursorVariant("hover"));
        link.removeEventListener("mouseleave", () =>
          setCursorVariant("default")
        );
      });
    };
  }, []);

  const variants = {
    default: {
      width: 24,
      height: 24,
      borderRadius: "50%",
      clipPath: "circle(50%)",
      backgroundColor: "white",
    },
    hover: {
      width: 24,
      height: 24,
      borderRadius: "50%",
      clipPath: "circle(50%)",
      backgroundColor: "white",
    },
  };

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-50 transform-gpu"
      animate={cursorVariant}
      variants={variants}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      style={{
        position: "absolute",
        x: cursorPosition.x - 12,
        y: cursorPosition.y - 12,
      }}
    />
  );
}
