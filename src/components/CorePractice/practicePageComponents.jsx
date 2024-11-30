"use client";
import { corePractices } from "@/app/core-practice/page";
import { corePracticesSr } from "@/app/core-practice/sr/page";
import getCurrentPractice from "@/utils/getCurrentPractice";
import usePath from "@/utils/usePath";
import Link from "next/link";

export function CorePracticeLayout({ children }) {
  return <div className="flex flex-col sm:flex-row">{children}</div>;
}
export function CorePracticeContent({ children }) {
  return <div className="flex-1 pr-4">{children}</div>;
}
export function CorePracticeHeader2({ children }) {
  return <div className="text-lg font-semibold py-2">{children}</div>;
}

export function CorePracticeSidebar() {
  const { pagePath } = usePath();

  const currentPageId = getCurrentPractice(corePractices, pagePath);

  return (
    <div className="flex flex-col sm:w-[280px] h-fit sm:border-l-2 sm:pl-4 sm:pr-0 mt-5">
      {corePractices.map((practice, index) => (
        <Link
          href={practice.link}
          key={index}
          className={`py-1${
            (index !== corePractices.length - 1 ? " border-b-2" : "") +
            (practice.id === currentPageId ? " text-primary font-bold" : "")
          }`}
        >
          {practice.name}
        </Link>
      ))}
    </div>
  );
}
export function CorePracticeSidebarSr() {
  const { pagePathSr } = usePath();
  console.log(pagePathSr);
  const currentPageId = getCurrentPractice(corePracticesSr, pagePathSr);
  console.log(currentPageId);
  return (
    <div className="flex flex-col sm:w-[280px] h-fit sm:border-l-2 sm:pl-4 mt-5">
      {corePracticesSr.map((practice, index) => (
        <Link
          href={practice.link}
          key={index}
          className={`py-1${
            (index !== corePracticesSr.length - 1 ? " border-b-2" : "") +
            (practice.id === currentPageId ? " text-primary font-bold" : "")
          }`}
        >
          {practice.name}
        </Link>
      ))}
    </div>
  );
}
