import Link from "next/link";
import Image from "next/image";
import logoAndNameSvg from "../../../public/svg.svg";
import logoSvg from "../../../public/svg_emblem.svg";

export function Navbar({ children }) {
  return (
    <nav className="flex justify-center items-center h-[70px] py-2 px-10">
      {children}
    </nav>
  );
}

export function NavbarLink({ src, children }) {
  return (
    <Link
      href={src}
      className="hidden sm:block mx-2 md:mx-3 xl:mx-5 text-lg h-fit relative slideFromLeftPrimary "
    >
      {children}
    </Link>
  );
}

export function NavbarLangSelector({ src, children }) {
  return (
    <Link
      href={src}
      className="hidden sm:block mx-2 md:mx-3 xl:mx-5 text-lg h-fit
    "
    >
      {children}
    </Link>
  );
}

export function LogoAndNameSvg() {
  return (
    <Image
      src={logoAndNameSvg}
      alt="be-legal-logo"
      className="w-[200px] absolute sm:hidden lg:block left-5 xl:left-10"
    ></Image>
  );
}

export function LogoSvg() {
  return (
    <Image
      src={logoSvg}
      alt="be-legal-logo"
      className="w-[50px] absolute hidden sm:block lg:hidden left-5"
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

export function DropDownMenu({ navLink, langSelector }) {}
