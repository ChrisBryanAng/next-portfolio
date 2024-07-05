"use client";

import { useRef } from "react";

import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import Interested from "@/components/Interested";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="flex flex-col h-dvh w-dvw overflow-x-hidden">
      <div className="flex flex-col p-9 lg:px-44">
        <Navbar />
        <Hero scrollTo={scrollToAbout} />
        <AboutMe aboutRef={aboutRef} />
        <Interested />
      </div>
      <Footer />
    </main>
  );
}
