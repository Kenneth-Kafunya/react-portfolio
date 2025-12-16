import React from "react";
import { Email } from "../data.js";
import { SocialIcons } from "./IconMap.jsx";
export default function Contact() {
  return (
    <section className="bg-gray-800 h-dvh">
      Heading
      <div className="contactBox flex h-1/2 items-center align-middle justify-center">
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
                  <span className=" border-l p-4 w-4 text-gray-300 ">
                    {SocialIcons.linkedin}
                  </span>
                  <a href="linkedin.com/in/kenneth-kafunya-903b77105">
                    LinkedIn
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
