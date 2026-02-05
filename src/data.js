import { title } from "framer-motion/client";
import imageI from "./assets/dummy_images/image1.jpg";
import imageII from "./assets/dummy_images/image2.avif";
import imageIII from "./assets/dummy_images/image3.webp";
import imageIV from "./assets/dummy_images/image4.avif";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "expertise",
    title: "Expertise",
  },
  {
    id: "projects",
    title: "Projects",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

export const Expertise = [
  {
    id: 1,
    title: "Product Designer(Remote)",
    company: "Locumator Health and Human Services",
    start: "2022",
    end: "2024",
  },
  {
    id: 2,
    title: "Conceptual projects",
    company: "Freelance",
    start: "2024",
    end: "Present",
  },
];

export const SkillsArray = [
  {
    id: "skills",
    title: "Skills",
    tool: [
      {
        name: "UX research",
        expertise: "Experienced",
        icon: "figmaIcon",
      },
      {
        name: "Wireframing",
        expertise: "Experienced",
        icon: "zeplinIcon",
      },
      {
        name: "Prototyping",
        expertise: "Experienced",
        icon: "protopieIcon",
      },
      {
        name: "UI Design",
        expertise: "Intermediate",
        icon: "adobeIcon",
      },
    ],
  },

  {
    id: "tools",
    title: "Tools",
    tool: [
      {
        name: "Figma",
        expertise: "Intermediate",
        icon: "htmlIcon",
      },
      {
        name: "Protopie",
        expertise: "Basic",
        icon: "reactIcon",
      },
      {
        name: "Adobe Suite",
        expertise: "Intermediate",
        icon: "tailwindIcon",
      },
      {
        name: "Zeplin",
        expertise: "Intermediate",
        icon: "tailwindIcon",
      },
    ],
  },

  {
    id: "technologies",
    title: "Technologies",
    tool: [
      {
        name: "Html/Css",
        expertise: "Basic",
        icon: "postgresIcon",
      },
      {
        name: "React Js",
        expertise: "Basic",
        icon: "expressIcon",
      },
      {
        name: "TailwindCss",
        expertise: "Basic",
        icon: "tailwindIcon",
      },
      {
        name: "PostgreSQL",
        expertise: "Basic",
        icon: "gitIcon",
      },
    ],
  },

  {
    id: "collaboration",
    title: "Collaboration",
    tool: [
      {
        name: "Slack",
        expertise: "Experienced",
        icon: "slackIcon",
      },
      {
        name: "Asana",
        expertise: "Experienced",
        icon: "asanaIcon",
      },
      {
        name: "Zoom",
        expertise: "Experienced",
        icon: "zoomIcon",
      },
      {
        name: "G-suite",
        expertise: "Experienced",
        icon: "googleIcon",
      },
    ],
  },
];

export const projectsData = [
  {
    id: "agripredict",
    thumbnail: imageIII,
    name: "Agripredict",
    description:
      "A technology platform focused on agriculture to reduce risk and improve productivity.",
    alt: "Agripredict mobile app mockup image",
  },
  {
    id: "fnbApp",
    thumbnail: imageII,
    name: "FNB App",
    description: "A banking app for the youth.",
    alt: "FNB mobile app mockup image",
  },
  {
    id: "travelGuide",
    thumbnail: imageIV,
    name: "Sample App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod aliqua adipiscing elit, sed do eiusmod aliqua.",
    alt: "FNB mobile app mockup image",
  },
];

export const Email = [
  {
    id: 1,
    title: "KennethKafunya@gmail.com",
    add: "kennethkafunya@gmail.com",
    icon: "email",
  },
];

export const Logo = [
  {
    id: 1,
    title: "",
    icon: "logoIcon",
  },
];

export const MySocials = [
  {
    id: "linkedin",
    iconClass: "linkedin",
    address: "https://www.linkedin.com/in/kenneth-kafunya-903b77105",
  },
  ,
  {
    id: "github",
    iconClass: "github",
    address: "https://github.com/Kenneth-Kafunya",
  },
];
