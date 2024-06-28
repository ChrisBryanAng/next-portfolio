"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/logo.svg";
import HamburgerIcon from "@/public/icons/hamburger.svg";
import CloseIcon from "@/public/icons/close.svg";
import NavDropdown from "./NavDropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { label: "Home", url: "/" },
    { label: "Portfolio", url: "/portfolio" },
    { label: "Contact Me", url: "/contact" },
  ];

  const handleNavOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex justify-between items-center md:mt-8">
      <Link href="/">
        <Image
          src={Logo}
          alt="logo"
          className="h-[44px] w-[80px] md:h-[42px] md:w-[80px] cursor-pointer"
        />
      </Link>
      <div className="hidden md:flex space-x-6 md:space-x-14">
        {links.map((link, idx) => (
          <Link
            key={idx}
            href={link.url}
            className={`font-Public-sans text-[12px] md:text-[14px] tracking-[2px] uppercase text-black`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="relative flex md:hidden cursor-pointer">
        {isOpen ? (
          <Image
            src={CloseIcon}
            alt="hamburger-icon"
            onClick={handleNavOpen}
            className="h-7 w-7"
          />
        ) : (
          <Image
            src={HamburgerIcon}
            alt="close-icon"
            onClick={handleNavOpen}
            className="h-5 w-9"
          />
        )}
      </div>

      {isOpen && <NavDropdown />}
    </div>
  );
};

export default Navbar;
