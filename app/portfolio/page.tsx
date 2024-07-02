import Footer from "@/components/Footer";
import Interested from "@/components/Interested";
import Navbar from "@/components/Navbar";
import PortfolioIndex from "@/components/PortfolioIndex";

const Portfolio = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col p-9 lg:px-44">
        <Navbar />
        <PortfolioIndex />
        <Interested />
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
