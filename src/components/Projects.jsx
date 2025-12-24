import { projectsData } from "../data";
import Heading from "./Heading.jsx";

import { Link } from "react-router-dom";
export default function Projects() {
  return (
    <section id="projects" className="h-auto p-8 relative">
      <Heading
        sub={"Case studies and live demos"}
        smallTextColor={"text-gray-500"}
        heading={"My Projects"}
        textColor={"text-gray-700"}
      />

      <div className="projectTilesContainer grid grid-cols-[360px_360px] h-auto p-11 grid-rows-1fr gap-11 justify-center">
        {projectsData.map((project) => {
          return (
            <div key={project.id} className={`projectTile ${project.id}`}>
              {" "}
              <div className="imgTile relative w-auto h-[232px] cursor-pointer ">
                <div className="projectTag absolute py-2 px-4 left-4 top-35 text-sm opacity-80 bg-gray-50 rounded-3xl">
                  <p className="opacity-100 text-gray-900 ">Case study</p>
                </div>
                <h4 className="projectTitle absolute left-4 top-45 text-2xl text-gray-50 font-medium ">
                  {project.name}
                </h4>
                <img
                  src={project.thumbnail}
                  alt={project.alt}
                  className="rounded-3xl w-full h-full object-cover"
                />
              </div>
              <p className="text-center flex items-center justify-center h-[60px] p-2 mt-4 w-auto border-2 border-solid border-gray-200 rounded-2xl text-gray-500">
                {project.description.length > 90
                  ? project.description.slice(0, 80) + "..."
                  : project.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
