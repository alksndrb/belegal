"use client";
import usePath from "@/utils/usePath";
import {
  FooterAdress,
  FooterContent,
  FooterEmail,
  FooterPhone,
  FooterSocials,
  FooterTitle,
  LogoSvgLarge,
} from "./footerComponents";
export default function Footer() {
  const { lang, pagePath, pagePathSr } = usePath();
  const contact = {
    en: {
      title: "Contact",
      address:
        "Jurija Gagarina 14 E, door 47, floor 7, Belville, Belgrade - New Belgrade",
    },
    sr: {
      title: "Kontakt",
      address:
        "Jurija Gagarina 14 E, stan broj 47, sedmi sprat, Belville, Beograd - Novi Beograd",
    },
  };

  return (
    <footer>
      <FooterContent>
        <div>
          <FooterTitle>
            {lang === "en" ? contact.en.title : contact.sr.title}
          </FooterTitle>
          <FooterAdress>
            {lang === "en" ? contact.en.address : contact.sr.address}
          </FooterAdress>
          <FooterEmail>office@gagiclaw.com</FooterEmail>
          <FooterPhone>+381 64 474 00 08</FooterPhone>
          <FooterSocials />
        </div>
        <LogoSvgLarge />
      </FooterContent>
    </footer>
  );
}
