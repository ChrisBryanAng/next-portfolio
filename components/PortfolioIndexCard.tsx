import Image from "next/image";

import PrimaryButtonClean from "./PrimaryButtonClean";

interface IProject {
  project: {
    title: string;
    description: string;
    images: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
  index: number;
}

const PortfolioIndexCard = ({ project, index }: IProject) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        index % 2 && "md:flex-row-reverse"
      } mt-12 gap-12 md:gap-24 items-center justify-between`}
    >
      <div className="relative w-full h-full block md:hidden lg:hidden">
        <Image
          src={project?.images.mobile}
          alt={`${project.title}-image`}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="relative w-full h-full hidden md:block lg:hidden">
        <Image
          src={project?.images.tablet}
          alt={`${project.title}-image`}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="relative w-full lg:w-[50%] h-full hidden md:hidden lg:block">
        <Image
          src={project?.images.desktop}
          alt={`${project.title}-image`}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <div className="flex flex-col lg:mx-20 w-full md:w-[800px] lg:w-[390px] border-t-[1px] border-b-[1px] border-solid border-black/20 md:mt-0 pt-4 lg:pt-12 pb-12 space-y-4 text-primary-grayishdarkblue">
        <p className="font-Ibarra font-bold text-[44px] md:text-[46px] capitalize">
          {project?.title}
        </p>
        <p className="font-Public-sans text-[16px] text-balance md:text-[17px] leading-[37px] font-light pb-6">
          {project?.description}
        </p>
        <PrimaryButtonClean
          label="View Project"
          url={`/portfolio/${project?.title}`}
        />
      </div>
    </div>
  );
};

export default PortfolioIndexCard;
