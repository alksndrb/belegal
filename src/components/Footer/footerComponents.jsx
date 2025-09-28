import Image from "next/image";
import Link from "next/link";
import logoAndNameSvg from "../../../public/svg.svg";
import {
  AddressIcon,
  PhoneIcon,
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  InstagramIcon,
  XIcon,
} from "@/components/Assets/icons";

// Wrapper
export function FooterContent({ children }) {
  return (
    <div className="bg-gray-50 border-t border-gray-300">
      <div className="max-w-[1280px] mx-auto px-6 pt-12 pb-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {children}
      </div>
      <div className="py-2 text-center text-sm text-gray-500">
        © 2024 BeLegal. All rights reserved.
      </div>
    </div>
  );
}

// Logo + description
export function FooterLogo({ lang }) {
  const description =
    lang === "sr"
      ? "BeLegal je beogradska advokatska kancelarija koja pruža jasnu, praktičnu pravnu podršku i zastupanje."
      : "BeLegal is a Belgrade-based law firm providing clear, practical legal advice and representation.";

  return (
    <div>
      <Image src={logoAndNameSvg} alt="be-legal-logo" className="w-[140px]" />
      <p className="text-sm text-gray-600 mt-4 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

// Navigation
// FooterLinks.jsx
// FooterLinks.jsx
export function FooterLinks({ links, lang }) {
  return (
    <div className="md:text-right">
      <h3 className="text-sm font-semibold text-[#189CA7] tracking-wide mb-4 uppercase">
        {lang === "sr" ? "Korisni Linkovi" : "Useful Links"}
      </h3>
      <ul className="inline-block text-left space-y-2">
        {links[lang].map((link) => (
          <li key={link.id}>
            <Link
              href={link.src}
              className="text-gray-600 hover:text-[#189CA7] transition"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Contact
export function FooterContact({ lang }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-[#189CA7] tracking-wide mb-4 uppercase">
        {lang === "sr" ? "Kontakt" : "Contact"}
      </h3>
      <ul className="space-y-2 text-gray-600 text-sm">
        <li className="flex items-center gap-2">
          <AddressIcon color="#189CA7" height="17px" width="17px" />
          {lang === "sr"
            ? "Jurija Gagarina 14 E, stan broj 47, sprat 7, Belville, Beograd - Novi Beograd"
            : "Jurija Gagarina 14 E, door 47, floor 7, Belville, Beograd - Novi Beograd"}
        </li>
        <li className="flex items-center gap-2">
          <EmailIcon color="#189CA7" /> office@belegal.rs
        </li>
        <li className="flex items-center gap-2">
          <PhoneIcon color="#189CA7" /> +381 64 30 000 21
        </li>
      </ul>

      {/* Social icons */}
      <div className="flex gap-4 mt-4">
        <a href="#" aria-label="LinkedIn">
          <LinkedinIcon
            color="#189CA7"
            className="w-5 h-5 hover:opacity-80 transition"
          />
        </a>
        <a href="#" aria-label="Instagram">
          <InstagramIcon
            color="#189CA7"
            className="w-5 h-5 hover:opacity-80 transition"
          />
        </a>
        <a href="#" aria-label="Facebook">
          <FacebookIcon
            color="#189CA7"
            className="w-5 h-5 hover:opacity-80 transition"
          />
        </a>
        <a href="#" aria-label="X">
          <XIcon
            height="20px"
            width="20px"
            color="#189CA7"
            className="w-5 h-5 hover:opacity-80 transition"
          />
        </a>
      </div>
    </div>
  );
}
