import projects from "@/utils/data.json";
import PortfolioIndexCard from "./PortfolioIndexCard";

const PortfolioIndex = () => {
  return (
    <div className="flex flex-col gap-16 md:gap-32 md:mt-20 lg:mt-12">
      {projects?.map((proj, idx) => (
        <div key={proj.title}>
          <PortfolioIndexCard project={proj} index={idx} />
        </div>
      ))}
    </div>
  );
};

export default PortfolioIndex;
