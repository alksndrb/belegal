import Image from "next/image";
import logoAndNameSvg from "../../../public/svg.svg";
import Link from "next/link";
export function FooterContent({ children }) {
  return <div className=" bg-light shadow-inner py-5">{children}</div>;
}

export function FooterLogo() {
  return (
    <div className="flex justify-center">
      <Image
        src={logoAndNameSvg}
        alt="be-legal-logo"
        className="w-[130px]"
      ></Image>
    </div>
  );
}

export function FooterLinks({ links, lang }) {
  const navLinks = links[lang].map((link, index) => (
    <span key={link.id}>
      <Link href={link.src} className={"text-base h-fit"}>
        {link.name}
      </Link>
      {index < links[lang].length - 1 && <span className="px-3">|</span>}
    </span>
  ));
  return <div className="text-center pt-3">{navLinks}</div>;
}
export function FooterCopyrightText({ children }) {
  return (
    <div className="text-center text-sm text-gray-600 pt-3">{children}</div>
  );
}
