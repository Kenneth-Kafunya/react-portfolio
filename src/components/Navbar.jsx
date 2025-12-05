import { useState } from "react";
import { navLinks } from "../data.js";
import Linkedin_Icon from "./Linkedin_Icon.jsx";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(true);
  };

  const handleCloseToggle = () => {
    setToggle(false);
  };

  let toggleBtn;
  if (toggle) {
    toggleBtn = (
      <button className="lg:hidden bg-gray-800 rounded-full w-11 h-11 flex items-center justify-center cursor-pointer transition ease-in-out duration-300">
        <HiX onClick={handleCloseToggle} className="fill-gray-50" />
      </button>
    );
  } else {
    toggleBtn = (
      <button
        onClick={handleToggle}
        className="lg:hidden w-11 h-11 flex items-center justify-center cursor-pointer transition ease-in-out duration-300"
      >
        <HiMenuAlt4 className="flex items-center justify-center " />
      </button>
    );
  }

  let logoCStyle =
    "Logo flex items-center w-10 h-10 mx-4 my-4 cursor-default align-middle rounded-4xl justify-center ";

  const menuVariants = {
    hidden: { scale: 0 },
    visible: { scale: 100, transition: { type: "tween", duration: 0.5 } },
  };

  const navVariants = {
    hidden: { display: "none", opacity: 0 },
    visible: { opacity: 1, y: -30, transition: { delay: 0.5 } },
  };
  return (
    <>
      <div className=" w-full fixed flex justify-center top-0 left-0 ">
        <nav className="relative w-full mx-auto flex justify-between items-center z-50 max-lg:px-4">
          <div
            className={
              toggle
                ? `${logoCStyle} text-gray-700`
                : `${logoCStyle} bg-amber-300 `
            }
          >
            <h1 className="text-xl font-bold opacity-50">K</h1>
          </div>
          <ul className="flex gap-8 items-center p-2 max-lg:hidden max-sm:hidden">
            {navLinks.map((link) => {
              return (
                <li
                  key={link.id}
                  className=" opacity-70 hover:opacity-100 transition ease-in-out duration-300 "
                >
                  <a href={`#${link.id}`} className="font-medium uppercase">
                    {link.title}
                  </a>
                </li>
              );
            })}
          </ul>
          {toggleBtn}
          {/* Social_Icons Class */}
          <button className="flex items-center mx-4 p-2  max-lg:hidden max-sm:hidden">
            <Linkedin_Icon className="w-4 h-4  opacity-70 hover:fill-blue-800 hover:opacity-100 cursor-pointer transition ease-in-out duration-300 " />
          </button>
        </nav>

        {/* Menu Class */}

        {/* closeMenu Class */}
        <motion.div
          className="lg:hidden bg-gray-700 w-5 h-5 fixed top-0 right-0 rounded-full z-10"
          variants={menuVariants}
          initial="hidden"
          animate={toggle ? "visible" : "hidden"}
        ></motion.div>

        {/* MenuX Class */}
        <motion.div
          variants={navVariants}
          animate={toggle ? "visible" : "hidden"}
          className="lg:block flex gap-2 items-center justify-center flex-col fixed top-2 left-0 w-full h-dvh z-10 text-gray-900"
        >
          {navLinks.map((link) => {
            return (
              <>
                <li key={link.id} className="list-none mt-1 ">
                  <a
                    href={`#${link.id}`}
                    className="text-gray-500 text-xl cursor-pointer uppercase hover:text-gray-50 transition ease-in-out"
                  >
                    {link.title}
                  </a>
                </li>
              </>
            );
          })}
          <button className="flex items-center mx-4 p-2">
            <Linkedin_Icon className="w-4 h-4 opacity-70 max-lg:hover:fill-gray-50 hover:fill-blue-800 hover:opacity-100 cursor-pointer transition ease-in-out duration-300 " />
          </button>
        </motion.div>
      </div>
    </>
  );
}
