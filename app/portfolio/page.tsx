import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col p-9 lg:px-44">
        <Navbar />
        <Link href="">Manage</Link>
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;
