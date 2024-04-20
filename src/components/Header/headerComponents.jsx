import Link from "next/link";

export function Navbar({ children }) {
  return (
    <nav className="w-max hidden sm:flex uppercase text-base lg:text-xl font-semibold items-center">
      {children}
    </nav>
  );
}

export function NavbarLink({ src, children }) {
  return (
    <Link
      href={src}
      className="mr-2 md:mr-3 lg:mr-4 hover:text-primary  tranisition-all ease duration-200"
    >
      {children}
    </Link>
  );
}

export function NavbarLangSelector({ src, children }) {
  return (
    <Link
      href={src}
      className="mr-2 md:mr-3 lg:mr-4 hover:text-primary  tranisition-all ease duration-200"
    >
      {children}
    </Link>
  );
}
