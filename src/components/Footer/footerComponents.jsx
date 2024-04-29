import {
  AddressIcon,
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  PhoneIcon,
  XIcon,
} from "../Assets/icons";
import logoSvg from "../../../public/svg_emblem.svg";
import Image from "next/image";
export function FooterContent({ children }) {
  return (
    <div className=" bg-light shadow-inner px-4">
      <div className="max-w-[1280px] m-auto sm:flex justify-between py-5">
        {children}
      </div>
    </div>
  );
}
export function FooterTitle({ children }) {
  return <div className="pl-3 text-lg w-fit">{children}</div>;
}

export function LogoSvgLarge() {
  return (
    <Image
      src={logoSvg}
      alt="be-legal-logo"
      className="w-[220px] sm:w-[170px] px-4 sm:px-0 m-auto sm:m-0 sm:ml-4 "
    ></Image>
  );
}
export function FooterAdress({ children }) {
  return (
    <div className="flex pt-2 items-center text-sm gap-1">
      <p className="w-[25px] h-[25px]">
        <AddressIcon height={"25px"} width={"25px"} color={"black"} />
      </p>
      {children}
    </div>
  );
}
export function FooterEmail({ children }) {
  return (
    <div className="flex pt-2 items-center text-sm gap-1">
      <p className="w-[25px] h-[25px]">
        <EmailIcon height={"25px"} width={"25px"} color={"black"} />
      </p>
      {children}
    </div>
  );
}
export function FooterPhone({ children }) {
  return (
    <div className="flex pt-2 items-center text-sm gap-1">
      <p className="w-[25px] h-[25px]">
        <PhoneIcon height={"25px"} width={"25px"} color={"black"} />
      </p>
      {children}
    </div>
  );
}
export function FooterSocials() {
  return (
    <div
      className="flex pt-3 items-center gap-1
  "
    >
      <p className="w-[25px] h-[25px]"></p>
      <p className="w-[25px] h-[25px]">
        <LinkedinIcon height={"25px"} width={"25px"} color={"black"} />
      </p>
      <p className="w-[25px] h-[25px]">
        <InstagramIcon height={"25px"} width={"25px"} color={"black"} />
      </p>
      <p className="w-[25px] h-[25px]">
        <FacebookIcon height={"25px"} width={"25px"} color={"black"} />
      </p>
      <p className="w-[25px] h-[25px] flex items-center justify-center">
        <XIcon height={"20px"} width={"20px"} color={"black"} />
      </p>
    </div>
  );
}
