"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="footer" className="w-full py-6 text-center text-gray-400 mt-10">
      <p className="text-sm">
        {t("footer.rights", { year: new Date().getFullYear() })}
      </p>
      <div className="mt-4">
        <Link href="/impressum" className="text-white-500 underline">
          Impressum
        </Link>
      </div>
    </footer>
  );
}
