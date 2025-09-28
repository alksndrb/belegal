// Footer.jsx
"use client";
import usePath from "@/utils/usePath";
import {
  FooterContent,
  FooterLogo,
  FooterLinks,
  FooterContact,
} from "./footerComponents";

export default function Footer() {
  const links = {
    en: [
      { id: 0, name: "Blog", src: "/blog" },
      { id: 1, name: "Core Practice", src: "/core-practice" },
      { id: 2, name: "Team", src: "/team" },
    ],
    sr: [
      { id: 0, name: "Blog", src: "/blog/sr" },
      { id: 1, name: "Pravne Oblasti", src: "/core-practice/sr" },
      { id: 2, name: "Tim", src: "/team/sr" },
    ],
  };

  const { lang } = usePath();

  return (
    <footer>
      <FooterContent>
        <FooterLogo lang={lang} />
        <FooterContact lang={lang} />
        <FooterLinks links={links} lang={lang} />
      </FooterContent>
    </footer>
  );
}
