import projects from "@/utils/data.json";
import PortfolioIndexCard from "./PortfolioIndexCard";

const PortfolioIndex = () => {
  return (
    <div>
      <div className="">
        {projects?.map((proj, idx) => (
          <div key={proj.title}>
            <PortfolioIndexCard project={proj} index={idx} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioIndex;
