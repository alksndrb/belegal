"use client";

import Image from "next/image";
import Link from "next/link";

import usePathLanguage from "@/utils/usePathLanguage";
import { EmailIcon, LinkedinIcon, PhoneIcon } from "../Assets/icons";
import usePath from "@/utils/usePath";

export function ProfileCard({ profile }) {
  console.log(profile.link);
  console.log(usePathLanguage(profile.link));
  return (
    <div className="flex justify-center group">
      <div
        className="w-[280px] border-b-2 border-x-2
        shadow-md group-hover:border-primary
        transition ease-in-out duration-300"
      >
        <Link href={usePathLanguage(profile.link)}>
          <Image
            src={`/${profile.image}`}
            alt="profile image"
            sizes="100vw"
            width={280}
            height={280}
          ></Image>
        </Link>
        <div
          className="text-center text-lg py-2 bg-light group-hover:bg-primary/10
          transition ease-in-out duration-300"
        >
          {profile.name}
          <div className="flex justify-center">
            <a href={`mailto:${profile.email}`} className="pr-6">
              <EmailIcon height={"25px"} width={"25px"} color={"#189CA7"} />
            </a>
            <a href={profile.linkedin}>
              <LinkedinIcon height={"25px"} width={"25px"} color={"#189CA7"} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TeamGrid({ children }) {
  return (
    <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center gap-6">
      {children}
    </div>
  );
}

export function ProfileGrid({ children }) {
  return (
    <div className="flex md:gap-5 flex-col md:flex-row mt-5">{children}</div>
  );
}
export function ProfileImage({ imgSrc }) {
  return (
    <div className="md:w-[50%] lg:w-[30%] m-auto">
      <Image
        alt="img"
        src={`/${imgSrc}`}
        style={{
          width: "100%",
          height: "auto",
        }}
        width={375}
        height={375}
      />
    </div>
  );
}

export function ProfileInfo({ children, phone, email }) {
  return (
    <div className="md:w-[50%] lg:w-[70%] ">
      {children}
      <br />
      <ContactInfo phone={phone} email={email} />
    </div>
  );
}
export function ContactInfo({ phone, email }) {
  const { lang, pagePath, pagePathSr } = usePath();
  return (
    <div>
      <p className="font-semibold">
        {lang === "en" ? "Contact Info:" : "Kontakt Informacije:"}
      </p>
      <br />
      <span className="flex">
        <PhoneIcon height={"25px"} width={"25px"} color={"#189CA7"} />
        <a className="pl-2" href={`tel:${phone}`}>
          {phone}
        </a>
      </span>
      <br />
      <span className="flex">
        <EmailIcon height={"25px"} width={"25px"} color={"#189CA7"} />
        <a className="pl-2" href={`mailto:${email}`}>
          {email}
        </a>
      </span>
    </div>
  );
}
