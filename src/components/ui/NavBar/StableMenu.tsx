import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ThemeSwitcher from "../ThemeSwitch/ThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`font-mont ${className} ${
        pathname === href
          ? "text-primary"
          : "hover:text-primary  ease duration-200"
      }`}
    >
      {title}
    </Link>
  );
};

const StableMenu = () => {
  return (
    <nav className="flex items-center max-md:hidden">
      <CustomLink href={"/"} title={"Home"} className="mr-4" />
      <CustomLink href={"/news"} title={"News"} className="mx-4" />
      <CustomLink href={"/works"} title={"Works"} className="mx-4" />
      <CustomLink href={"/contact"} title={"Contact"} className="mx-4" />
      <ThemeSwitcher className="ml-4" />
    </nav>
  );
};

export default StableMenu;
