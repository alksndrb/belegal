"use client";

import Image from "next/image";
import Link from "next/link";

import usePathLanguage from "@/utils/usePathLanguage";
import { EmailIcon, LinkedinIcon, PhoneIcon } from "../Assets/icons";

export function ProfileCard({ profile }) {
  return (
    <Link href={usePathLanguage(profile.link)} className="w-[280px] m-auto">
      <div className="flex justify-center group">
        <div
          className="w-[280px] border-b-2 border-x-2
        shadow-md group-hover:border-primary
        transition ease-in-out duration-300"
        >
          <Image
            src={`/${profile.image}`}
            alt="profile image"
            sizes="100vw"
            width={280}
            height={280}
          ></Image>
          <div
            className="text-center text-lg py-2 bg-light group-hover:bg-primary/10
          transition ease-in-out duration-300"
          >
            {profile.name}
            <div className="flex justify-center">
              <span className="pr-6">
                <EmailIcon height={"25px"} width={"25px"} color={"#189CA7"} />
              </span>
              <span>
                <LinkedinIcon
                  height={"25px"}
                  width={"25px"}
                  color={"#189CA7"}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
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
export function ProfileImage() {
  return (
    <div className="md:w-[50%] lg:w-[30%] m-auto">
      <Image
        alt="img"
        src={`/Gagic.jpeg`}
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

export function ProfileInfo({ children }) {
  return (
    <div className="md:w-[50%] lg:w-[70%] ">
      {children}
      <br />
      <ContactInfo />
    </div>
  );
}
export function ContactInfo() {
  return (
    <div>
      <p className="font-semibold">Contact Info</p>
      <br />
      <span className="flex">
        <PhoneIcon height={"25px"} width={"25px"} color={"#189CA7"} />
        <a className="pl-2" href="tel:+381 64 474 00 08">
          +381 64 474 00 08
        </a>
      </span>
      <br />
      <span className="flex">
        <EmailIcon height={"25px"} width={"25px"} color={"#189CA7"} />
        <a className="pl-2" href="mailto:office@gagiclaw.com">
          office@gagiclaw.com
        </a>
      </span>
    </div>
  );
}
