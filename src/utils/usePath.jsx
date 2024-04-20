"use client";
import { usePathname } from "next/navigation";

export default function usePath() {
  const path = usePathname();
  const lang = path.slice(path.length - 2) === "sr" ? "sr" : "en";
  const pagePath =
    lang === "en"
      ? path
      : path === "/sr"
      ? "/"
      : path.slice(0, path.length - 3);

  const pagePathSr =
    pagePath + pagePath.slice(pagePath.length - 1) === "/" ? "sr" : "/sr";
  return { lang, pagePath, pagePathSr };
}
