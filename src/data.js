import imageI from "../src/assets/dummy_images/image1.jpg";
import imageII from "../src/assets/dummy_images/image2.avif";
import imageIII from "../src/assets/dummy_images/image3.webp";
import imageIV from "../src/assets/dummy_images/image4.avif";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "expertise",
    title: "Expertise",
  },
  {
    id: "projects",
    title: "Projects",
  },
];

export const Expertise = [
  {
    id: 1,
    title: "Product Designer",
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
    id: "design",
    title: "Design",
    tool: [
      {
        name: "Figma",
        expertise: "Experienced",
        icon: "figmaIcon",
      },
      {
        name: "Zeplin",
        expertise: "Basic",
        icon: "zeplinIcon",
      },
      {
        name: "Protopie",
        expertise: "Basic",
        icon: "protopieIcon",
      },
      {
        name: "Suite",
        expertise: "Intermediate",
        icon: "adobeIcon",
      },
    ],
  },

  {
    id: "frontend",
    title: "Frontend",
    tool: [
      {
        name: "Html/Css",
        expertise: "intermediate",
        icon: "htmlIcon",
      },
      {
        name: "React",
        expertise: "Basic",
        icon: "reactIcon",
      },
      {
        name: "JavaScript",
        expertise: "Basic",
        icon: "javascriptIcon",
      },
      {
        name: "Tailwind",
        expertise: "Basic",
        icon: "tailwindIcon",
      },
    ],
  },

  {
    id: "backend",
    title: "Backend",
    tool: [
      {
        name: "Postgres",
        expertise: "Basic",
        icon: "postgresIcon",
      },
      {
        name: "Express Js",
        expertise: "Basic",
        icon: "expressIcon",
      },
      {
        name: "Next Js",
        expertise: "Basic",
        icon: "nextIcon",
      },
      {
        name: "Git",
        expertise: "Basic",
        icon: "gitIcon",
      },
    ],
  },

  {
    id: "communication",
    title: "Communication",
    tool: [
      {
        name: "Slack",
        expertise: "Basic",
        icon: "slackIcon",
      },
      {
        name: "Asana",
        expertise: "Basic",
        icon: "asanaIcon",
      },
      {
        name: "Zoom",
        expertise: "Basic",
        icon: "zoomIcon",
      },
      {
        name: "G-suite",
        expertise: "Basic",
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
