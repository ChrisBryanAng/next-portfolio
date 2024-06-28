import Image from "next/image";

import Logo from "@/public/logo.svg";
import GithubLogo from "@/public/icons/github.svg";
import TwitterLogo from "@/public/icons/twitter.svg";
import LinkedinLogo from "@/public/icons/linkedin.svg";

const Footer = () => {
  const links = ["Home", "Portfolio", "Contact Me"];

  return (
    <div className="flex flex-col md:flex-row bg-primary-grayishdarkblue justify-center items-center mt-24 space-y-16 py-16 text-white">
      <div className="flex justify-center items-center w-full invert">
        <Image src={Logo} alt="logo" className="h-11 w-20" />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {links.map((link, idx) => (
          <button
            key={idx}
            type="button"
            className="text-white uppercase tracking-[3px] text-center"
          >
            {link}
          </button>
        ))}
      </div>
      <div className="flex gap-6">
        <Image src={GithubLogo} alt="github-logo" className="h-8 w-8 invert" />
        <Image
          src={TwitterLogo}
          alt="twitter-logo"
          className="h-8 w-8 invert"
        />
        <Image
          src={LinkedinLogo}
          alt="linkedin-logo"
          className="h-8 w-8 invert"
        />
      </div>
    </div>
  );
};

export default Footer;
