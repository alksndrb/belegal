import Image from "next/image";
import logoAndNameSvg from "../../../public/svg.svg";

export function LogoAndNameSvg() {
  return (
    <Image
      src={logoAndNameSvg}
      alt="be-legal-logo"
      className="w-[200px]"
    ></Image>
  );
}
