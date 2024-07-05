"use client";

import { useParams } from "next/navigation";
import Image from "next/image";

import ArrowLeft from "@/public/icons/arrow-left.svg";
import ArrowRight from "@/public/icons/arrow-right.svg";
import Link from "next/link";

interface IProjects {
  projects: {
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
  }[];
}

const ProjectNavigation = ({ projects }: IProjects) => {
  const { projectId } = useParams();

  // Find current project based on id
  const currentProject = projects.find(
    (project) => project.title === projectId
  );
  const currentIndex = projects.findIndex(
    (project) => project.title === projectId
  );

  // Calculate previous and next indexes
  const previousIndex = (currentIndex - 1 + projects.length) % projects.length;
  const nextIndex = (currentIndex + 1) % projects.length;

  return (
    <div className="grid grid-cols-2 mt-24 border-y-[1px] border-solid border-primary-grayishdarkblue/20">
      <Link
        href={`/portfolio/${projects[previousIndex].title}`}
        className="cursor-pointer py-8 gap-1 flex flex-col md:flex-row md:gap-8 md:items-center border-r-[1px] border-solid border-primary-grayishdarkblue/20"
      >
        <Image src={ArrowLeft} alt="arrow-left" className="h-4 w-3" />
        <div>
          <p className="font-Ibarra text-[38px]">
            {projects[previousIndex].title}
          </p>
          <p className="text-[18px] mt-1 text-gray-400 leading-none font-Public-sans font-light">
            Previous Project
          </p>
        </div>
      </Link>
      <Link
        href={`/portfolio/${projects[nextIndex].title}`}
        className="font-Ibarra text-[40px] cursor-pointer flex flex-col md:flex-row-reverse gap-1 items-end md:items-center md:gap-8 place-content-center md:place-content-end"
      >
        <Image src={ArrowRight} alt="arrow-right" className="h-4 w-3" />
        <div>
          <p className="font-Ibarra text-[38px]">{projects[nextIndex].title}</p>
          <p className="text-[18px] mt-1 text-gray-400 leading-none font-Public-sans font-light text-end">
            Next Project
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectNavigation;
