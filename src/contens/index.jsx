import { DiMsqlServer } from "react-icons/di";
import projectImage from "../assets/project.png";
import { BiCodeAlt, BiMobileAlt, BiPalette, BiSearchAlt } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import {
  MdAddIcCall,
  MdLocationPin,
  MdOutlineAlternateEmail,
} from "react-icons/md";

import {
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGraphql,
  SiApollographql,
  SiPostman,
  SiGit,
  SiGithub,
  SiJest,
} from "react-icons/si";
import { PiFileCSharpDuotone } from "react-icons/pi";
import { AiOutlineDotNet } from "react-icons/ai";
import { TbBrandLinqpad } from "react-icons/tb";
import { createContext } from "react";

export const CommonContext = createContext();

export const menuItems = [
  { label: "Home", href: "#" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const projects = [
  {
    id: 1,
    title: "Responsive Portfolio Website",
    image: projectImage,
    description:
      "A sleek and fully responsive portfolio website to showcase skills, projects, and experience. Built using HTML, CSS, and JavaScript with modern design practices.",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    image: projectImage,
    description:
      "An e-commerce platform with features like product listings, cart functionality, and user authentication. Developed using React, Node.js, Express, and MongoDB.",
  },
  {
    id: 3,
    title: "Dashboard Design",
    image: projectImage,
    description:
      "A highly customizable and interactive admin dashboard built with Tailwind CSS, React, and Chart.js to visualize complex data effectively.",
  },
];

export const services = [
  {
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    icon: BiCodeAlt,
  },
  {
    title: "Mobile App Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    icon: BiMobileAlt,
  },
  {
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    icon: BiPalette,
  },
  {
    title: "SEO",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    icon: BiSearchAlt,
  },
];

export const contactDetails = [
  {
    id: 1,
    type: "Email",
    value: "akashbharati2335@gmail.com",
    link: "akashbharati2335@gmail.com",
    icon: (
      <MdOutlineAlternateEmail
        className="text-blue-300 font-semibold"
        size={20}
      />
    ),
  },
  {
    id: 2,
    type: "Phone",
    value: "+91-9834335376",
    link: "tel:+91-9834335376",
    icon: <MdAddIcCall size={20} />,
  },
  {
    id: 3,
    type: "LinkedIn",
    value: "linkedin.com",
    link: "https://www.linkedin.com/in/akash-bharati-23d35",
    icon: <FaLinkedin size={20} className="hover:text-blue-700" />,
  },
  {
    id: 4,
    type: "Location",
    value: "Mumbai ghansoli navi mumbai.",
    link: null,
    icon: <MdLocationPin size={20} className="hover:text-blue-900" />,
  },
];

// Exported array of objects with label and icon component
export const words = [
  { label: "React", icon: SiReact, ClassName: "" },
  { label: "Tailwind", icon: SiTailwindcss, ClassName: "text-sky-500" },
  { label: "TypeScript", icon: SiTypescript, ClassName: "text-blue-500" },
  { label: "JavaScript", icon: SiJavascript, ClassName: "text-yellow-600" },
  { label: "Jest", icon: SiJest, ClassName: "text-red-500" },
  { label: "HTML", icon: SiHtml5, ClassName: "text-blue-700" },
  { label: "CSS", icon: SiCss3, ClassName: "text-blue-400" },
  { label: "GraphQL", icon: SiGraphql, ClassName: "text-" },
  { label: "SQL", icon: DiMsqlServer, ClassName: "text-4xl text-yellow-500" },
  {
    label: "C#",
    icon: PiFileCSharpDuotone,
    ClassName: "text-fuchsia-400 text-2xl",
  },
  {
    label: ".Net Core",
    icon: AiOutlineDotNet,
    ClassName: "text-indigo-400 text-[50px]",
  },
  { label: "Linq", icon: TbBrandLinqpad, ClassName: "text-2xl text-cyan-400" },
  { label: "Entity Framwork", icon: SiGraphql, ClassName: "text-" },
  { label: "Rest", icon: SiApollographql, ClassName: "text-" },
  { label: "APIs", icon: SiPostman, ClassName: "text-" }, // Using Postman icon to represent APIs
  { label: "Git", icon: SiGit, ClassName: "text-" },
  { label: "GitHub", icon: SiGithub, ClassName: "text-" },
];
//Live Download Resume
export const downloadLink = [
  {
    Resume:
      "https://drive.google.com/uc?export=download&id=1uBpn2E2By-1-8s4nwiwvQsVZu2_6xAqs",
  },
];

export const emailConfig = {
  SERVICE_ID: "service_rjeqjx8",
  TEMPLATE_ID: "template_aywext2",
  PUBLIC_KEY: "E83_tzUmONvd8IDEB",
};
