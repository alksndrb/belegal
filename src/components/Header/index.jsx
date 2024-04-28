"use client";
import usePath from "@/utils/usePath";
import {
  Navbar,
  NavbarLinks,
  NavbarLangSelector,
  LogoAndNameSvg,
  LogoSvg,
  DropdownButton,
  DropDownMenu,
} from "./headerComponents";
import { useState } from "react";
import getCurrentPage from "@/utils/getCurrentPage";

export default function Header() {
  const [click, setClick] = useState(false);
  function toggle() {
    setClick(!click);
  }
  function handlePageChange() {
    setClick(false);
  }
  const links = {
    en: [
      { id: 0, name: "Home", src: "/" },
      { id: 1, name: "About", src: "/about" },
      { id: 2, name: "Contact", src: "/contact" },
      { id: 3, name: "Core Practice", src: "/core-practice" },
      { id: 4, name: "Team", src: "/team" },
    ],
    sr: [
      { id: 0, name: "Početna", src: "/sr" },
      { id: 1, name: "O nama", src: "/about/sr" },
      { id: 2, name: "Kontakt", src: "/contact/sr" },
      { id: 3, name: "Pravne Oblasti", src: "/core-practice/sr" },
      { id: 4, name: "Tim", src: "/team/sr" },
    ],
  };
  const { lang, pagePath, pagePathSr } = usePath();
  const currentPageId = getCurrentPage(links, pagePath);
  return (
    <header>
      <Navbar>
        <LogoAndNameSvg />
        <LogoSvg />
        <NavbarLinks links={links} lang={lang} currentPageId={currentPageId} />
        <NavbarLangSelector
          lang={lang}
          pagePath={pagePath}
          pagePathSr={pagePathSr}
        />
        <DropdownButton click={click} toggle={toggle} />
      </Navbar>
      <DropDownMenu
        click={click}
        handlePageChange={handlePageChange}
        links={links}
        lang={lang}
        currentPageId={currentPageId}
        pagePath={pagePath}
        pagePathSr={pagePathSr}
      />
    </header>
  );
}
