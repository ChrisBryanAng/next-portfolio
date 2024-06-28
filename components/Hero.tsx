import Image from "next/image";

import MobileHero from "@/public/homepage/mobile/image-homepage-hero@2x.jpg";
import PrimaryButton from "./PrimaryButton";

const Hero = () => {
  return (
    <div className="w-full flex flex-col space-y-8 mt-16">
      <div className="w-full h-[371px]">
        <Image
          src={MobileHero}
          alt="hero-image"
          className="h-full w-full"
          placeholder="blur"
        />
      </div>
      <div>
        <p className="font-Ibarra font-bold tracking-wide text-[50px] leading-tight">
          Hey, I&apos;m Alex Spencer and I love building beautiful websites.
        </p>
      </div>
      <div className="w-full">
        <PrimaryButton label="About Me" />
      </div>
    </div>
  );
};

export default Hero;
