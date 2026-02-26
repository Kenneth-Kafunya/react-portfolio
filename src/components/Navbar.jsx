import { useState, useEffect, React } from "react";
import { navLinks, MySocials } from "../data.js";
import { SocialIcons, LogoIcon } from "./IconMap.jsx";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import MenuBtn from "./MenuBtn.jsx";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [active, setActive] = useState("");

  const handleMenuToggle = () => {
    setToggle((t) => !t);
  };

  const handleMenuClose = () => {
    console.log("closing");
    setToggle(false);
  };

  let toggleBtn;
  if (toggle) {
    toggleBtn = (
      <button className="lg:hidden z-50 bg-gray-200 rounded-full w-11 h-11 flex items-center justify-center cursor-pointer transition ease-in-out duration-300">
        <HiX onClick={handleMenuToggle} className="fill-gray-700" />
      </button>
    );
  } else {
    toggleBtn = (
      <button
        onClick={handleMenuToggle}
        className="lg:hidden w-11 h-11 flex items-center justify-center cursor-pointer transition ease-in-out duration-300"
      >
        <HiMenuAlt4 className="flex items-center justify-center " />
      </button>
    );
  }

  // Change navbar color on scroll
  const changeNavbarColor = () => {
    window.scrollY >= 30 ? setScroll(true) : setScroll(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);

    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  // Scroll to section
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // Navbar styles and animation variants
  const navBarStyle =
    "bg-gray-50 transition ease-in-out relative w-full px-8 mx-auto flex justify-between items-center z-50 max-sm:py-2 max-lg:px-4 max-md:py-3 [@media(min-width:820px)_and_(max-width:840px)]:py-3";
  const navBarDefault =
    "relative flex justify-between w-full mx-auto items-center z-50 px-8 pb-4 max-lg:px-4 max-lg:my-4 [@media(min-width:820px)_and_(max-width:840px)]:py-3";

  const menuVariants = {
    hidden: { scale: 0 },
    visible: { scale: 100, transition: { type: "tween", duration: 0.5 } },
  };

  const navVariants = {
    hidden: { display: "none", opacity: 0 },
    visible: { opacity: 1, y: -30, transition: { delay: 0.5 } },
  };

  //Active Section
  const handleActive = (selected) => {
    setActive(selected);
  };

  const sectionIds = navLinks.map((Currentsection) => Currentsection.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-96px 0px -80% 0px",
        threshold: 0,
      },
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  //
  return (
    <>
      <div className=" w-full fixed flex top-0 z-50 left-0 ">
        <nav className={scroll ? navBarStyle : navBarDefault}>
          <div>
            <span>{LogoIcon.logoIcon}</span>
          </div>
          <div className="flex gap-11 h-full items-center max-lg:hidden max-sm:hidden">
            {navLinks.map((link) => {
              return (
                <MenuBtn
                  key={link.id}
                  isSelected={active === link.id}
                  onClick={() => {
                    scrollTo(link.id);
                    handleActive(link.id);
                    handleMenuClose();
                  }}
                >
                  {link.title}
                </MenuBtn>
              );
            })}
          </div>

          {/*  Hamburger Menu*/}
          {toggleBtn}

          {/* Social_Icons Class */}
          {/*  <div className="flex gap-4 max-lg:hidden max-sm:hidden">
            {MySocials.map((item) => {
              return (
                <div key={item.id}>
                  <a href={`${item.address}`} target="_blank" rel="noreferrer">
                    <span className=" text-gray-900 justify-center p-3 w-4 h-4  opacity-70  hover:fill-purple-800 hover:opacity-100 cursor-pointer transition ease-in-out duration-300 ">
                      {SocialIcons[item.iconClass]}
                    </span>
                  </a>
                </div>
              );
            })}
          </div> */}
        </nav>

        {/* Menu Class */}

        {/* mobileMenu Class */}
        <motion.div
          className="lg:hidden bg-gray-50 w-5 h-5 fixed top-0 left-0 rounded-full z-10"
          variants={menuVariants}
          initial="hidden"
          animate={toggle ? "visible" : "hidden"}
        ></motion.div>

        {/* MenuX Class */}
        <motion.div
          variants={navVariants}
          animate={toggle ? "visible" : "hidden"}
          className=" flex gap-3 items-center justify-center flex-col fixed w-dvw h- top-1/3 z-10 text-gray-900"
        >
          {navLinks.map((link) => {
            return (
              <div key={link.id}>
                <li
                  key={link.id}
                  className="flex justify-center w-full items-center list-none mt-1 "
                >
                  <a
                    href={`#${link.id}`}
                    className="text-gray-500 text-xl cursor-pointer uppercase hover:text-gray-700 transition ease-in-out"
                  >
                    {link.title}
                  </a>
                </li>
              </div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
}
