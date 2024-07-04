"use client";

import { useParams } from "next/navigation";
import projects from "@/utils/data.json";

import Footer from "@/components/Footer";
import Interested from "@/components/Interested";
import Navbar from "@/components/Navbar";
import ProjectDetail from "@/components/ProjectDetail";

const ProjectDetails = () => {
  const { projectId } = useParams();

  return (
    <div className="flex flex-col">
      <div className="flex flex-col p-9 lg:px-44">
        <Navbar />
        <div className="">
          {projects
            .filter((proj) => proj.title === projectId)
            .map((project, idx) => (
              <div key={project.title}>
                <ProjectDetail project={project} index={idx} />
              </div>
            ))}
        </div>
        <Interested />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetails;
