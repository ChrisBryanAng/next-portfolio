import Image from "next/image";

import Logo from "@/public/logo.svg";
import HamburgerIcon from "@/public/icons/hamburger.svg";

const Navbar = () => {
  const links = ["Home", "Portfolio", "Contact Me"];

  return (
    <div className="flex justify-between items-center">
      <div>
        <Image
          src={Logo}
          alt="logo"
          className="h-[52px] w-[100px] cursor-pointer"
        />
      </div>
      <div className="hidden md:flex space-x-6">
        {links.map((link, idx) => (
          <div
            key={idx}
            className={`font-Public-sans text-[12px] tracking-[2px] uppercase text-black`}
          >
            {link}
          </div>
        ))}
      </div>

      <div className="flex md:hidden cursor-pointer">
        <Image src={HamburgerIcon} alt="hamburger-icon" className="h-5 w-9" />
      </div>
    </div>
  );
};

export default Navbar;
