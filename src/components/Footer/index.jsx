"use client";
import usePath from "@/utils/usePath";
import {
  FooterContent,
  FooterCopyrightText,
  FooterLinks,
  FooterLogo,
} from "./footerComponents";

export default function Footer() {
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

  return (
    <footer>
      <FooterContent>
        <FooterLogo />
        <FooterLinks links={links} lang={lang} />
        <FooterCopyrightText>
          © 2024 BeLegal. All rights reserved.
        </FooterCopyrightText>
      </FooterContent>
    </footer>
  );
}
