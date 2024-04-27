"use client";
import usePath from "@/utils/usePath";
import { Navbar, NavbarLink, NavbarLangSelector } from "./headerComponents";
import { LogoAndNameSvg } from "../Logo/logoComponents";
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
  const { lang, pagePath, pagePathSr } = usePath();
  const navLinks = links[lang].map((link) => (
    <NavbarLink src={link.src} key={link.id}>
      {link.name}
    </NavbarLink>
  ));

  const langSelector = (
    <NavbarLangSelector src={lang === "en" ? pagePathSr : pagePath}>
      {lang === "en" ? "SRB" : "ENG"}
    </NavbarLangSelector>
  );
  return (
    <header>
      <Navbar>
        <div className="absolute left-10">
          <LogoAndNameSvg />
        </div>
        {navLinks}
        {langSelector}
      </Navbar>
    </header>
  );
}
