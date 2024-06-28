import Image from "next/image";

import AboutMeImage from "@/public/homepage/mobile/image-homepage-profile@2x.jpg";
import PrimaryButtonClean from "./PrimaryButtonClean";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row mt-28">
      <div className="w-full h-[500px]">
        <Image src={AboutMeImage} alt="about-me" placeholder="blur" />
      </div>
      <div className="flex flex-col border-t-[1px] border-b-[1px] border-solid border-black/20 mt-6 py-8 space-y-6 text-primary-grayishdarkblue">
        <p className="font-Ibarra font-bold text-[52px] capitalize">About Me</p>
        <p className="font-Public-sans text-[20px] leading-[36px] font-light">
          I&apos;m a junior front-end developer looking for a new role in an
          exciting company. I focus on writing accessible HTML, using modern CSS
          practices and writing clean JavaScript. When writing JavaScript code,
          I mostly use React, but I can adapt to whatever tools are required.
          I&apos;m based in London, UK, but I&apos;m happy working remotely and
          have experience in remote teams. When I&apos;m not coding, you&apos;ll
          find me outdoors. I love being out in nature whether that&apos;s going
          for a walk, run or cycling. I&apos;d love you to check out my work.
        </p>
        <PrimaryButtonClean label="Go to portfolio" />
      </div>
    </div>
  );
};

export default AboutMe;
