import Image from "next/image";

import Logo from "@/public/logo.svg";
import GithubLogo from "@/public/icons/github.svg";
import TwitterLogo from "@/public/icons/twitter.svg";
import LinkedinLogo from "@/public/icons/linkedin.svg";

const Footer = () => {
  const links = ["Home", "Portfolio", "Contact Me"];

  return (
    <div className="flex flex-col md:flex-row bg-primary-grayishdarkblue justify-center md:justify-between md:px-9 lg:px-44 items-center mt-24 space-y-16 md:space-y-0 py-16 md:py-8 text-white">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex justify-center items-center w-full md:w-max invert">
          <Image src={Logo} alt="logo" className="h-11 md:h-9 w-20 md:w-16" />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {links.map((link, idx) => (
            <button
              key={idx}
              type="button"
              className="text-white uppercase tracking-[3px] md:text-[12px] text-center"
            >
              {link}
            </button>
          ))}
        </div>
      </div>
      <div className="flex gap-6 items-center justify-center">
        <Image
          src={GithubLogo}
          alt="github-logo"
          className="h-8 md:h-7 w-8 md:w-7 invert"
        />
        <Image
          src={TwitterLogo}
          alt="twitter-logo"
          className="h-8 md:h-7 w-8 md:w-7 invert"
        />
        <Image
          src={LinkedinLogo}
          alt="linkedin-logo"
          className="h-8 md:h-7 w-8 md:w-7 invert"
        />
      </div>
    </div>
  );
};

export default Footer;
