import React from "react";
import { Email } from "../data.js";
import { SocialIcons } from "./IconMap.jsx";
import Heading from "../components/Heading.jsx";
export default function Contact() {
  return (
    <section id="contact" className="bg-gray-800 h-auto p-8">
      <Heading
        sub={"Reach out"}
        heading={"Contact"}
        smallTextColor={"text-gray-100"}
        textColor={"text-gray-100"}
      />
      <div className="contactBox flex h-1/2 items-center p-8 align-middle justify-center">
        {Email.map((item) => {
          return (
            <React.Fragment key={item.id}>
              {" "}
              <div
                key={item.id}
                className="contactType flex justify-between gap-4 bg-gray-700 p-4 mx-4 h-[60px] w-[460px] items-center border-2 border-solid border-amber-400 rounded-2xl text-gray-300"
              >
                <span className="flex items-center gap-2 ">
                  {" "}
                  {SocialIcons[item.icon]}
                  <span>
                    <a href={`mailto:${item.add}`}>{item.title}</a>
                  </span>
                </span>
                <div className="socialContainer flex items-center gap-2">
                  <a href="linkedin.com/in/kenneth-kafunya-903b77105">
                    <span className="flex items-center gap-2">
                      {SocialIcons.linkedin} LinkedIn
                    </span>{" "}
                  </a>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}
