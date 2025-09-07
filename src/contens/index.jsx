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
  { label: "Expertise", href: "#expertise" },
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

export const Skill = [
  { name: "React", id: 1 },
  { name: "HTML", id: 2 },
  { name: "TAIWINDCSS", id: 3 },
  { name: "JS", id: 4 },
  { name: ".NET CORE", id: 5 },
  { name: "LINQ", id: 6 },
  { name: "ENTITY FRAMWORK", id: 7 },
  { name: "GIT", id: 8 },
  { name: "REDUX", id: 9 },
];

export const SkillDetails = [
  {
    id: 1,
    EX: 2,
    message:
      "⚛️ 2 years of experience building responsive UIs using React and JSX. Strong understanding of component lifecycle and hooks.",
  },
  {
    id: 2,
    EX: 2,
    message:
      "🧱 2 years of solid experience with HTML5, building clean, semantic, and accessible web pages across modern browsers.",
  },
  {
    id: 3,
    EX: 2,
    message:
      "🎨 2 years working with Tailwind CSS to rapidly style modern, responsive designs with a mobile-first approach.",
  },
  {
    id: 4,
    EX: 2.5,
    message:
      "📜 Over 2.5 years of JavaScript experience, including ES6+ features. Skilled in DOM manipulation, async programming, and debugging.",
  },
  {
    id: 5,
    EX: 3,
    message:
      "🖥️ 3+ years of backend development using .NET Core to build RESTful APIs, microservices, and enterprise-grade web applications.",
  },
  {
    id: 6,
    EX: 2.5,
    message:
      "🔍 2.5 years working with LINQ for efficient data querying in .NET applications. Comfortable using it with both Entity Framework and collections.",
  },
  {
    id: 7,
    EX: 3,
    message:
      "🗂️ 3 years of hands-on experience with Entity Framework Core, handling migrations, code-first design, and complex database relationships.",
  },
  {
    id: 8,
    EX: 2.5,
    message:
      "🔧 3+ years using Git for version control. Comfortable with branching, merging, pull requests, and collaborating on large codebases.",
  },
  {
    id: 9,
    EX: 2.5,
    message:
      "🔁 Over 2.5 years of experience using Redux for state management in React apps. Well-versed in reducers, middleware, and dev tools.",
  },
];
