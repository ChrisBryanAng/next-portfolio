import Image from "next/image";

import MobileHero from "@/public/homepage/mobile/image-homepage-hero@2x.jpg";
import TabletHero from "@/public/homepage/tablet/image-homepage-hero@2x.jpg";
import DesktopHero from "@/public/homepage/desktop/image-homepage-hero@2x.jpg";
import PrimaryButton from "./PrimaryButton";

const Hero = () => {
  return (
    <div className="relative w-full flex flex-col space-y-10 mt-16 md:mt-6">
      <div className="w-full h-full flex md:hidden lg:hidden">
        <Image
          src={MobileHero}
          alt="hero-image"
          className="h-full w-full"
          placeholder="blur"
        />
      </div>
      <div className="w-full h-full hidden md:flex lg:hidden">
        <Image
          src={TabletHero}
          alt="hero-image"
          className="h-full w-full"
          placeholder="blur"
        />
      </div>
      <div className="w-full h-full hidden md:hidden lg:flex">
        <Image
          src={DesktopHero}
          alt="hero-image"
          className="h-full w-full"
          placeholder="blur"
        />
      </div>
      <div className="flex flex-col gap-10 lg:items-end lg:justify-end md:absolute md:bottom-0 md:bg-white md:w-[75%] lg:w-[40%] lg:h-[57%]">
        <div className="flex">
          <p className="font-Ibarra font-bold text-[50px] md:text-[40px] lg:text-[54px] md:pt-14 text-balance tracking-[1px] leading-tight">
            Hey, I&apos;m Alex Spencer and I love building beautiful websites
          </p>
        </div>
        <div className="w-full flex">
          <PrimaryButton label="About Me" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
