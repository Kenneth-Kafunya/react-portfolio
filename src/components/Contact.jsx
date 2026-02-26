import React from "react";
import { Email, MySocials } from "../data.js";
import { SocialIcons } from "./IconMap.jsx";
import Heading from "../components/Heading.jsx";
import { Link } from "react-router-dom";
export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-800 min-h-[70dvh] p-8 [@media(min-width:768px)_and_(max-width:1024px)]:min-h-[50dvh]"
    >
      <Heading
        sub={"Reach out"}
        heading={"Contact"}
        smallTextColor={"text-gray-100"}
        textColor={"text-gray-100"}
      />

      <div className="contactBox flex h-1/2 items-center p-8 align-middle justify-center">
        {Email.map((item) => {
          const href =
            item.icon === "email" ? `mailto:${item.addr}` : item.addr;
          // find GitHub url from socials
          const github = MySocials.find((s) => s.id === "github");
          return (
            <React.Fragment key={item.id}>
              <div
                key={item.id}
                className="contactType flex justify-center gap-4 bg-gray-700 p-4 mx-4 h-[60px] w-[460px] items-center border-2 border-solid border-gray-400 rounded-2xl text-gray-300"
              >
                <span className="flex items-center gap-2 ">
                  {SocialIcons[item.icon]}
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 transition ease-in-out duration-300"
                  >
                    {item.title}
                  </a>
                  {github && (
                    <a
                      href={github.address}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-amber-400 transition ease-in-out duration-300 px-2 py-2 border-l-2 border-gray-400 align-middle"
                    >
                      {SocialIcons.github}
                    </a>
                  )}
                </span>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}
