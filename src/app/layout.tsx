"use client";
import "./globals.css";
import { ReactNode, useEffect } from "react";
import i18n from "../../i18n";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, []);

  return (
    <html lang="de">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="relative bg-black text-white">
        <div className=" mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
