import Link from "next/link";

export function Navbar({ children }) {
  return (
    <nav className="flex justify-center items-center just h-[100px] py-2 px-10">
      {children}
    </nav>
  );
}

export function NavbarLink({ src, children }) {
  return (
    <Link
      href={src}
      className="mx-5 text-lg h-fit relative slideFromLeftPrimary"
    >
      {children}
    </Link>
  );
}

export function NavbarLangSelector({ src, children }) {
  return (
    <Link
      href={src}
      className="mx-5 text-lg h-fit
    "
    >
      {children}
    </Link>
  );
}
