import Image from "next/image";
import background from "../../../public/banner.png";
import about from "../../../public/homeAbout.jpeg";
import { Briefcase, Laptop, Tree } from "../Assets/icons";
import Link from "next/link";

export function Banner({ children }) {
  return (
    <>
      <div className="relative h-[400px] sm:h-[450px] md:h-[500px] ">
        <div className="w-full h-full absolute">
          <Image
            src={background}
            alt="start-background
          "
            fill
            className="absolute object-cover object-right-top"
          />
        </div>
        <div className="h-full w-full bg-gradient-to-b sm:bg-gradient-to-l from-white/0 to-white/100 absolute"></div>
        <div className="absolute h-full w-full sm:w-[40%] flex flex-col justify-end sm:justify-center pb-[50px] py-4 sm:pl-[70px] gap-4">
          <h1 className=" text-3xl text-center sm:text-start sm:text-5xl font-semibold text-gray-800">
            BeLegal
          </h1>
          <h2 className="text-lg text-center sm:text-start sm:text-2xl">
            {children}
          </h2>
        </div>
      </div>
    </>
  );
}
export function HomeSectionHeader({ children }) {
  return (
    <h3 className="flex justify-center text-3xl font-semibold">{children}</h3>
  );
}
export function HomeAbout({ children }) {
  return (
    <div className="py-10 mx-4 flex flex-col-reverse md:flex-row border-b-2">
      <div className="w-full h-[400px] md:w-[50%] lg:w-[40%] md:h-[600px] relative">
        <Image src={about} alt="about-image" fill className="object-cover" />
      </div>
      <div className="w-full md:w-[50%] lg:w-[60%] pb-4 md:pb-0 md:pl-4 flex flex-col justify-center gap-10">
        {children}
      </div>
    </div>
  );
}

function HomeCorePractice({ link, children }) {
  return (
    <Link
      href={link}
      className="py-10 flex flex-col justify-center items-center border-2 border-gray-500 hover:bg-primary/10 hover:border-primary transition ease-in-out duration-300"
    >
      {children}
    </Link>
  );
}

export function HomePractices({ corePractice, children }) {
  return (
    <div className="py-10 mx-4 flex flex-col-reverse md:flex-row pb-[70px]">
      <div className="md:w-[50%] lg:w-[60%] pb-4 md:pb-4 md:pr-4 flex flex-col justify-center gap-5">
        {children}
      </div>
      <div className="md:w-[50%] lg:w-[40%] ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <HomeCorePractice link={corePractice[0].link}>
            <Briefcase height={"25px"} width={"25px"} color={"#189CA7"} />
            {corePractice[0].name}
          </HomeCorePractice>
          <HomeCorePractice link={corePractice[1].link}>
            <Laptop height={"25px"} width={"25px"} color={"#189CA7"} />
            {corePractice[1].name}
          </HomeCorePractice>
          <HomeCorePractice link={corePractice[2].link}>
            <Tree height={"25px"} width={"25px"} color={"#189CA7"} />
            {corePractice[2].name}
          </HomeCorePractice>
          <HomeCorePractice link={corePractice[3].link}>
            {corePractice[3].name}
          </HomeCorePractice>
        </div>
      </div>
    </div>
  );
}
