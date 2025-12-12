import { Expertise, SkillsArray } from "../data.js";
import { skillsIcons } from "./iconMap.jsx";
export default function Skills() {
  return (
    <section className="min-h-dvh bg-bgGreen-100 p-8">
      <div className="heading flex flex-col text-gray-50 items-center p-8">
        <small className="text-xl block">My expertise</small>
        <h2 className="text-6xl font-bold">Experience & Skills</h2>
      </div>
      <div className="expertise-Container flex justify-center gap-28 items-center py-6 w-auto ">
        <div className="experienceContainer flex flex-col gap-11 ">
          {Expertise.map((item) => {
            return (
              <div
                key={item.id}
                id={`${item.id}`}
                className="experience text-right flex flex-col"
              >
                <h3 className="font-bold text-[1.5rem] text-gray-50 ">
                  {item.start} - {item.end}
                </h3>

                <h4 className="font-medium text-gray-50 text-[1.1rem] ">
                  {item.title}
                </h4>
                <small className="text-gray-50 text-[0.8rem] mt-0">
                  {item.company}
                </small>
              </div>
            );
          })}
        </div>

        <div className="skillsContainer grid grid-cols-2 justify-end gap-6">
          {SkillsArray.map((item, index) => {
            const styleMap = {
              design: "bg-bgGreen-500",
              frontend: "bg-bgGreen-400",
              backend: "bg-bgGreen-300",
              communication: "bg-bgGreen-200",
            };
            const boxStyle = styleMap[item.id];

            return (
              <div
                key={item.id}
                className={`skillBox grid grid-cols-2 ${boxStyle} rounded-4xl border-solid w-[300px] px-6 py-3`}
              >
                <h3 className="text-gray-50 font-medium col-span-2 text-2xl py-2">
                  {item.title}
                </h3>

                {item.tool.map((tool) => {
                  return (
                    <div
                      key={tool.name}
                      className="innerContainer grid grid-cols-2 py-3 items-center "
                    >
                      <div className="flex items-center col-span-2 gap-3">
                        <span className="text-gray-50 opacity-80 w-4 h-4">
                          {skillsIcons[tool.icon]}
                        </span>
                        <span className="flex flex-col text-gray-50">
                          {tool.name}{" "}
                          <small className="text-gray-50 opacity-55">
                            {tool.expertise}
                          </small>
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
