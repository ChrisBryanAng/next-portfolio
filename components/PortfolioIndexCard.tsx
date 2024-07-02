import Image from "next/image";

import PrimaryButtonClean from "./PrimaryButtonClean";

type IProject = {
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
};
const PortfolioIndexCard = ({ project, index }: IProject) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        index % 2 && "md:flex-row-reverse"
      } mt-12 gap-12 items-center justify-between`}
    >
      <div className="relative w-full h-full block md:hidden lg:hidden">
        <Image
          src={project?.images.mobile}
          alt={`${project.title}-image`}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          layout="responsive"
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
          layout="responsive"
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
          layout="responsive"
        />
      </div>

      <div className="flex flex-col lg:mx-20 w-full lg:w-[390px] border-t-[1px] border-b-[1px] border-solid border-black/20 md:mt-0 pt-4 lg:pt-12 pb-12 space-y-4 text-primary-grayishdarkblue">
        <p className="font-Ibarra font-bold text-[52px] md:text-[48px] capitalize">
          {project?.title}
        </p>
        <p className="font-Public-sans text-[20px] md:text-[18px] leading-[37px] font-light pb-6">
          {project?.description}
        </p>
        <PrimaryButtonClean label="View Project" />
      </div>
    </div>
  );
};

export default PortfolioIndexCard;
