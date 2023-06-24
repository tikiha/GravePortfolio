"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LogoPic from "@/Pics/next.svg";
import HamburgerButton from "./HamburgerButton";
import StableMenu from "./StableMenu";
import HamburgerMenu from "./HamburgerMenu";

const NavBar = () => {
  const ButtonRef = useRef<HTMLButtonElement>(null);
  const MenuRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // ハンバーガメニュー外で閉じる
  const handleClickOutside = (e) => {
    if (
      MenuRef.current?.contains(e.target) ||
      ButtonRef.current?.contains(e.target)
    ) {
      // inside click
      return;
    }
    // outside click
    setIsOpen(false);
  };
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header
      className="fixed z-50 top-0 w-full h-16 flex items-center justify-between px-10 bg-blue-100 
    max-md:h-12 max-md:px-6"
    >
      <Link href={"/"} className="h-full">
        <Image
          src={LogoPic}
          alt={"next image"}
          className="h-full w-auto py-2"
        />
      </Link>

      <StableMenu />

      <HamburgerButton
        ButtonRef={ButtonRef}
        handleClick={handleClick}
        isOpen={isOpen}
        className="md:hidden"
      />
      {isOpen && (
        <HamburgerMenu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          MenuRef={MenuRef}
        />
      )}
    </header>
  );
};

export default NavBar;
