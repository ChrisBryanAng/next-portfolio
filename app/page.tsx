import Image from "next/image";

import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import Interested from "@/components/Interested";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col h-dvh w-dvw overflow-x-hidden">
      <div className="flex flex-col p-9 lg:px-44">
        <Navbar />
        <Hero />
        <AboutMe />
        <Interested />
      </div>
      <Footer />
    </main>
  );
}
