"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const links = {
    en: [
      { id: 0, name: "Home", src: "/" },
      { id: 1, name: "About", src: "/about" },
      { id: 2, name: "Contact", src: "/contact" },
      { id: 3, name: "Core Practice", src: "/core-practice" },
      { id: 4, name: "Team", src: "/team" },
    ],
    sr: [
      { id: 0, name: "Početna", src: "/sr" },
      { id: 1, name: "O nama", src: "/about/sr" },
      { id: 2, name: "Kontakt", src: "/contact/sr" },
      { id: 3, name: "Pravne Oblasti", src: "/core-practice/sr" },
      { id: 4, name: "Tim", src: "/team/sr" },
    ],
  };
  const path = usePathname();
  const lang = path.slice(path.length - 2) === "sr" ? "sr" : "en";
  const pagePath =
    lang === "en"
      ? path
      : path === "/sr"
      ? "/"
      : path.slice(0, path.length - 3);
  const navLinks = links[lang].map((link) => (
    <Link
      href={link.src}
      key={link.id}
      className="mr-2 md:mr-3 lg:mr-4 hover:text-primary  tranisition-all ease duration-200"
    >
      {link.name}
    </Link>
  ));
  const pagePathSr =
    pagePath + pagePath.slice(pagePath.length - 1) === "/" ? "sr" : "/sr";

  const langSelector =
    lang === "en" ? (
      <Link href={pagePathSr}>SRB</Link>
    ) : (
      <Link href={pagePath}>ENG</Link>
    );
  return (
    <header>
      <nav className="w-max hidden sm:flex uppercase text-base lg:text-xl font-semibold items-center">
        {navLinks}
        {langSelector}
      </nav>
    </header>
  );
}
