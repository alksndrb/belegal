import Link from "next/link";
import Image from "next/image";
import logoAndNameSvg from "../../../public/svg.svg";
import logoSvg from "../../../public/svg_emblem.svg";

export function Navbar({ children }) {
  return (
    <nav className="fixed w-[100vw] flex h-[70px] py-2 px-2 z-50 bg-light shadow-md">
      <div className="flex w-[1280px] m-auto justify-center items-center  relative">
        {children}
      </div>
    </nav>
  );
}

export function NavbarLinks({ links, lang, currentPageId }) {
  const navLinks = links[lang].map((link) => (
    <Link
      href={link.src}
      key={link.id}
      className={
        "hidden sm:block mx-2 md:mx-3 xl:mx-5 text-lg h-fit relative slideFromLeftPrimary " +
        (link.id === currentPageId ? "active" : "")
      }
      disabled={link.id === currentPageId ? true : false}
    >
      {link.name}
    </Link>
  ));
  return <>{navLinks}</>;
}

export function NavbarLangSelector({ lang, pagePath, pagePathSr }) {
  const langSelector = (
    <Link
      href={lang === "en" ? pagePathSr : pagePath}
      className="hidden sm:block mx-2 md:mx-3 xl:mx-5 text-lg h-fit z-40
    "
    >
      {lang === "en" ? "SRB" : "ENG"}
    </Link>
  );
  return <>{langSelector}</>;
}

export function LogoAndNameSvg() {
  return (
    <Image
      src={logoAndNameSvg}
      alt="be-legal-logo"
      className="w-[200px] absolute left-0 sm:hidden lg:block"
    ></Image>
  );
}

export function LogoSvg() {
  return (
    <Image
      src={logoSvg}
      alt="be-legal-logo"
      className="w-[50px] absolute hidden sm:block lg:hidden left-0"
    ></Image>
  );
}

export function DropdownButton({ toggle, click }) {
  return (
    <button
      className="absolute right-5 inline-block sm:hidden"
      onClick={toggle}
    >
      <div className="w-10 h-10 cursor-pointer transition-all ease duration-300">
        <div className="relative">
          <span
            className="absolute top-5 left-0 inline-block w-full h-1 bg-dark  rounded transition-all ease duration-200"
            style={{
              transform: click
                ? "rotate(-45deg) translateY(0)"
                : "rotate(0deg) translateY(15px)",
            }}
          >
            &nbsp;
          </span>
          <span
            className="absolute top-5 left-0  inline-block w-full h-1 bg-dark  rounded transition-all ease duration-200"
            style={{
              opacity: click ? 0 : 1,
            }}
          >
            &nbsp;
          </span>
          <span
            className="absolute top-5 left-0  inline-block w-full h-1 bg-dark  rounded transition-all ease duration-200"
            style={{
              transform: click
                ? "rotate(45deg) translateY(0)"
                : "rotate(0deg) translateY(-15px)",
            }}
          >
            &nbsp;
          </span>
        </div>
      </div>
    </button>
  );
}

export function DropDownMenu({
  click,
  handlePageChange,
  links,
  lang,
  currentPageId,
  pagePath,
  pagePathSr,
}) {
  const navLinks = links[lang].map((link) => (
    <Link
      href={link.src}
      key={link.id}
      className={
        "text-2xl py-2 border-b-2 w-[calc(100vw-40px)] text-center " +
        (link.id === currentPageId ? "active" : "")
      }
      disabled={link.id === currentPageId ? true : false}
      onClick={handlePageChange}
    >
      {link.name}
    </Link>
  ));
  const langSelector = (
    <Link
      href={lang === "en" ? pagePathSr : pagePath}
      className="text-2xl
    "
      onClick={handlePageChange}
    >
      {lang === "en" ? "SRB" : "ENG"}
    </Link>
  );
  return (
    <div
      className="h-[calc(100vh-70px)] w-full bg-light fixed top-[70px] transition-all ease duration-300 z-40
                flex flex-col justify-top items-center
                "
      style={{
        top: click ? "70px" : "-100vh",
      }}
    >
      {navLinks}
      {langSelector}
    </div>
  );
}
