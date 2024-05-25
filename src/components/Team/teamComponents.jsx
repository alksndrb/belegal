"use client";

import Image from "next/image";
import Link from "next/link";
import { Background } from "../Global/globalComponents";
import usePathLanguage from "@/utils/usePathLanguage";

export function TeamPageLayout({ children }) {
  return (
    <Background>
      <div className="pt-10 max-w-[1280px] min-h-[calc(100vh-280px)] m-auto bg-light/75 shadow-md px-4">
        {children}
      </div>
    </Background>
  );
}

export function ProfileCard({ profile }) {
  return (
    <Link href={usePathLanguage(profile.link)}>
      <div className="flex justify-center">
        <div className="w-[280px] border-b-2 border-x-2 border-primary shadow-md">
          <Image
            src={`/${profile.image}`}
            alt="profile image"
            sizes="100vw"
            width={280}
            height={280}
          ></Image>
          <div className="text-center text-lg py-2 bg-light">
            {profile.name}
          </div>
        </div>
      </div>
    </Link>
  );
}

export function TeamGrid({ children }) {
  return (
    <div className="pt-10 grid grid-cols-4 justify-center gap-6">
      {children}
    </div>
  );
}
