import Image from "next/image";

import GithubLogo from "@/public/icons/github.svg";
import TwitterLogo from "@/public/icons/twitter.svg";
import LinkedinLogo from "@/public/icons/linkedin.svg";

const GetInTouch = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full border-t-[1px] border-b-[1px] border-solid border-black/20 mt-16 md:mt-24 pt-9 lg:pt-12 pb-16 space-y-6 lg:space-y-0 text-primary-grayishdarkblue">
      <p className="font-Ibarra font-bold text-[44px] md:text-[48px] lg:w-[50%] capitalize">
        Get in Touch
      </p>
      <div className="flex flex-col gap-4 lg:w-[58%] lg:pt-3">
        <p className="font-Public-sans text-[16px] md:text-[18px] leading-[37px] font-light pb-6">
          I&apos;d love to hear about what you&apos;re working on and how I
          could help. I&apos;m currently looking for a new role and am open to a
          wide range of opportunities. My preference would be to find a position
          in a company in London. But I&apos;m also happy to hear about
          opportunites that don&apos;t fit that description. I&apos;m a
          hard-working and positive person who will always approach each task
          with a sense of purpose and attention to detail. Please do feel free
          to check out my online profiles below and get in touch using the form.
        </p>
        <div className="flex gap-4 items-center justify-start">
          <Image src={GithubLogo} alt="github-logo" className="h-7 w-7 " />
          <Image src={TwitterLogo} alt="twitter-logo" className="h-7 w-7 " />
          <Image src={LinkedinLogo} alt="linkedin-logo" className="h-7 w-7 " />
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
