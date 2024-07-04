import Image from "next/image";

import PrimaryButtonClean from "./PrimaryButtonClean";

interface IDetails {
  project: {
    title: string;
    description: string;
    images: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    skills: string[];
    technologies: string[];
    staticImgs: {
      mobile1: string;
      mobile2: string;
      mobile3: string;
      tablet1: string;
      tablet2: string;
      tablet3: string;
      desktop1: string;
      desktop2: string;
      desktop3: string;
    };
    background: string;
  };
  index: number;
}

const ProjectDetail = ({ project }: IDetails) => {
  return (
    <div className={`flex flex-col mt-20 gap-12 items-center justify-between`}>
      <div className="relative w-full h-full block md:hidden lg:hidden">
        <Image
          src={project?.staticImgs.mobile1}
          alt={`${project.title}-image`}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="relative w-full h-full hidden md:block lg:hidden">
        <Image
          src={project?.staticImgs.tablet1}
          alt={`${project.title}-image`}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="relative w-full h-full hidden md:hidden lg:block">
        <Image
          src={project?.staticImgs.desktop1}
          alt={`${project.title}-image`}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <div className="flex flex-col lg:flex-row w-full lg:mt-20 lg:gap-36">
        <div className="flex flex-col md:flex-row md:justify-between w-full lg:w-[80%] h-max border-t-[1px] border-b-[1px] border-solid border-black/20 md:mt-0 pt-4 lg:pt-12 pb-12 space-y-4 md:space-y-0 md:gap-16 text-primary-grayishdarkblue">
          <div className="flex flex-col md:gap-4">
            <p className="font-Ibarra font-bold text-[46px] md:text-[48px] capitalize">
              {project?.title}
            </p>
            <p className="md:hidden lg:flex font-Public-sans text-[16px] mt-4 text-pretty md:text-[18px] leading-[37px] font-light pb-6">
              {project?.description}
            </p>
            <div className="flex flex-col">
              <div className="text-primary-cyan text-[15px] leading-[3]">
                {project.skills.join(" / ")}
              </div>
              <div className="text-primary-cyan text-[15px] leading-[3]">
                {project.technologies.join(" / ")}
              </div>
            </div>
            <div className="pt-6">
              <PrimaryButtonClean
                label="Visit Website"
                url={`/portfolio/${project?.title}`}
              />
            </div>
          </div>
          <p className="hidden md:flex lg:hidden font-Public-sans md:w-[50%] text-[19px] md:pt-2 text-balance md:text-[18px] leading-[37px] font-light pb-6">
            {project?.description}
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col w-full pt-14 md:mt-0 space-y-4 text-primary-grayishdarkblue">
            <p className="font-Ibarra font-thin text-[36px] lg:text-[40px] capitalize">
              Project Background
            </p>
            <p className="font-Public-sans text-[16px] pt-4 text-pretty md:text-[18px] leading-[37px] font-light pb-6">
              {project?.background}
            </p>
          </div>

          <div className="flex flex-col w-full md:mt-0 lg:pt-12 pb-12 space-y-8 text-primary-grayishdarkblue">
            <p className="font-Ibarra font-thin text-[36px] lg:text-[40px] capitalize">
              Static Previews
            </p>
            <div className="relative w-full h-full block md:hidden lg:hidden">
              <Image
                src={project?.staticImgs.mobile2}
                alt={`${project.title}-image`}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="relative w-full h-full hidden md:block lg:hidden">
              <Image
                src={project?.staticImgs.tablet2}
                alt={`${project.title}-image`}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="relative w-full h-full hidden md:hidden lg:block">
              <Image
                src={project?.staticImgs.desktop2}
                alt={`${project.title}-image`}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>

            <div className="relative w-full h-full block md:hidden lg:hidden">
              <Image
                src={project?.staticImgs.mobile3}
                alt={`${project.title}-image`}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="relative w-full h-full hidden md:block lg:hidden">
              <Image
                src={project?.staticImgs.tablet3}
                alt={`${project.title}-image`}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="relative w-full h-full hidden md:hidden lg:block">
              <Image
                src={project?.staticImgs.desktop3}
                alt={`${project.title}-image`}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
