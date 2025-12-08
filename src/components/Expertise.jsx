import { Expertise, SkillsArray } from "../data.js";
export default function Skills() {
  return (
    <section className="h-dvh bg-bgGreen">
      <div className="heading flex flex-col text-gray-50 items-center p-8">
        <small className="text-xl block">My expertise</small>
        <h2 className="text-6xl font-bold">Experience & Skills</h2>
      </div>
      <div className="experience">
        {Expertise.map((item) => {
          return (
            <div key={item.id} id={`${item.id}`} className="mt-6">
              <h3 className="font-bold text-[1.5rem] text-gray-50">
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

      <div className="skills">
        {SkillsArray.map((item) => {
          return (
            <div className="toolbox border border-solid border-amber-400 w-[500px] mt-4">
              <h3>{item.title}</h3>

              {item.tool.map((tool) => {
                return (
                  <div>
                    <span>{tool.icon}</span> <span>{tool.name}</span>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
}
