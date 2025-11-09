import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiGlobe,
  FiGithub,
  FiLinkedin,
  FiDownload,
  FiChevronRight,
  FiAward,
  FiCode,
  FiDatabase,
  FiCloud,
  FiShield,
} from "react-icons/fi";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaGitAlt,
  FaMicrosoft,
} from "react-icons/fa";
import {
  SiDotnet,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

const UltraModernResume = () => {
  const [activeSection, setActiveSection] = useState("summary");
  const resumeRef = useRef(null);

  const personalInfo = {
    name: "AKASH BHARATI",
    phone: "+91-9834335376",
    email: "akashbharati2335@gmail.com",
    website: "yourwebsite.com",
    github: "akash-bharati-23d35",
    linkedin: "Akash2335",
    location: "Mumbai Ghansole",
  };

  const skills = {
    programming: ["C#", "Node.js", "ASP.NET Core"],
    frameworks: ["Entity Framework", "LINQ"],
    web: [
      "JavaScript",
      "React",
      "Redux",
      "Tailwind CSS",
      "Express",
      "TypeScript",
      "jQuery",
    ],
    databases: ["SQL Server", "MySQL", "MongoDB"],
    cloud: ["AWS"],
    tools: ["Git", "VS Code", "Visual Studio", "Postman", "SSMS"],
  };

  const experiences = [
    {
      company: "31 Infotech",
      period: "02 2022 - Present",
      position: "Software Developer",
      location: "Remote | Mumbai, India",
      technologies: [
        "Fusion ERP",
        "REST APIs",
        "JWT",
        "SQL Server",
        ".NET Core",
        ".NET",
        "Oracle API (OIC)",
        "React",
        "Entity Framework",
        "LINQ",
        "Git",
      ],
      achievements: [
        "Integrated Fusion ERP via REST APIs for real-time invoice/shipment data synchronization",
        "Implemented secure JWT authentication and RBAC for enhanced system security",
        "Developed robust SQL Server solutions improving performance by 30%",
        "Led analysis of 100+ client issues, enhancing system reliability by 20%",
        "Integrated Oracle API, increasing data processing efficiency by 15%",
      ],
    },
    {
      company: "31 Infotech",
      period: "08 2021 - 02 2022",
      position: "Software Developer",
      location: "Mumbai, India",
      technologies: [".NET Core", "React", "SQL Server", "Git"],
      achievements: [
        "Developed Ticket Management Module using .NET Core",
        "Optimized SQL data management with stored procedures and views",
        "Improved system stability and user experience through proactive issue resolution",
      ],
    },
  ];

  const projects = [
    {
      name: "OKART - E-commerce Platform",
      tools: [
        "React",
        "Redux",
        "Axios",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "Jot Validation",
        "MongoDB",
      ],
      achievements: [
        "Improved user retention by 20% through enhanced UX",
        "Enhanced customer engagement by 15% with ML-based recommendations",
        "Improved load times by 30% through performance optimization",
        "Increased checkout conversion by 18% with multiple payment options",
      ],
    },
  ];

  const education = [
    { degree: "BE(EA-TC)", institution: "PVPIT Budhagaon", year: "02/2019" },
    {
      degree: "Diploma (EA-TC)",
      institution: "PVPIT Budhagaon",
      year: "01/2015",
    },
    {
      degree: "12th",
      institution: "Willingdon College of Sangli",
      year: "02/2013",
    },
    {
      degree: "10th",
      institution: "Ramchandra High school Shigaon",
      year: "02/2011",
    },
  ];

  const certifications = [
    { name: "Crio Do", year: "Aug 2024" },
    { name: "Cdac", year: "" },
    { name: "Git", year: "" },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const SkillIcon = ({ skill }) => {
    const icons = {
      "C#": <SiDotnet className="text-purple-500" />,
      "Node.js": <FaNodeJs className="text-green-500" />,
      "ASP.NET Core": <SiDotnet className="text-pink-500" />,
      React: <FaReact className="text-cyan-400" />,
      JavaScript: <SiJavascript className="text-yellow-400" />,
      TypeScript: <SiTypescript className="text-blue-500" />,
      AWS: <FaAws className="text-orange-500" />,
      Git: <FaGitAlt className="text-red-500" />,
      MongoDB: <SiMongodb className="text-green-500" />,
      MySQL: <SiMysql className="text-blue-400" />,
      "SQL Server": <FaMicrosoft className="text-red-400" />,
    };

    return icons[skill] || <FiCode className="text-gray-400" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900 to-slate-900" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl lg:text-7xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            {personalInfo.name}
          </h1>

          <div className="flex flex-wrap justify-center gap-6 text-sm lg:text-base text-gray-300 mb-6">
            <div className="flex items-center gap-2">
              <FiPhone className="text-cyan-400" />
              <span>{personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMail className="text-purple-400" />
              <span>{personalInfo.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiGlobe className="text-pink-400" />
              <span>{personalInfo.website}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiGithub className="text-gray-400" />
              <span>{personalInfo.github}</span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full font-semibold shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            onClick={() => window.print()}
          >
            <FiDownload />
            Download Resume
          </motion.button>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Navigation */}
            <motion.nav
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">
                Navigation
              </h3>
              <div className="space-y-2">
                {[
                  "summary",
                  "experience",
                  "skills",
                  "projects",
                  "education",
                ].map((section) => (
                  <button
                    key={section}
                    onClick={() => setActiveSection(section)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center justify-between ${
                      activeSection === section
                        ? "bg-cyan-500/20 text-cyan-400 border border-cyan-400/30"
                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span className="capitalize">{section}</span>
                    <FiChevronRight
                      className={`transition-transform ${
                        activeSection === section ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                ))}
              </div>
            </motion.nav>

            {/* Quick Stats */}
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-lg font-semibold text-purple-400 mb-4">
                At a Glance
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Experience</span>
                  <span className="text-cyan-400 font-bold">2+ Years</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Projects</span>
                  <span className="text-purple-400 font-bold">50+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Technologies</span>
                  <span className="text-pink-400 font-bold">15+</span>
                </div>
              </div>
            </motion.div>

            {/* Tech Stack Icons */}
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-lg font-semibold text-pink-400 mb-4">
                Tech Stack
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <SiDotnet className="text-5xl text-purple-500 mx-auto mb-2" />
                  <span className="text-xs text-gray-300">.NET Core</span>
                </div>
                <div className="text-center">
                  <FaReact className="text-5xl text-cyan-400 mx-auto mb-2" />
                  <span className="text-xs text-gray-300">React</span>
                </div>
                <div className="text-center">
                  <FaNodeJs className="text-5xl text-green-500 mx-auto mb-2" />
                  <span className="text-xs text-gray-300">Node.js</span>
                </div>
                <div className="text-center">
                  <SiMongodb className="text-5xl text-green-500 mx-auto mb-2" />
                  <span className="text-xs text-gray-300">MongoDB</span>
                </div>
                <div className="text-center">
                  <FaAws className="text-5xl text-orange-500 mx-auto mb-2" />
                  <span className="text-xs text-gray-300">AWS</span>
                </div>
                <div className="text-center">
                  <FaGitAlt className="text-5xl text-red-500 mx-auto mb-2" />
                  <span className="text-xs text-gray-300">Git</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {/* Summary Section */}
              {activeSection === "summary" && (
                <motion.section
                  key="summary"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
                >
                  <h2 className="text-3xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
                    <FiAward className="text-cyan-400" />
                    Professional Summary
                  </h2>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Accomplished and innovative .NET Core Developer with a
                    proven track record of designing and delivering
                    high-performance applications across diverse business
                    domains. Expertise in crafting scalable .NET Core APIs,
                    integrating external systems like Fusion ERP and Oracle API
                    via RESTful services. Skilled in optimizing system
                    performance using SQL Server, and driving security
                    initiatives through robust JWT authentication and role-based
                    access control (RBAC).
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center p-4 bg-cyan-500/10 rounded-xl border border-cyan-400/30">
                      <FiCode className="text-4xl text-cyan-400 mx-auto mb-3" />
                      <h4 className="font-semibold text-cyan-400">
                        Full Stack Development
                      </h4>
                      <p className="text-sm text-gray-300 mt-2">
                        .NET Core, React, Node.js
                      </p>
                    </div>
                    <div className="text-center p-4 bg-purple-500/10 rounded-xl border border-purple-400/30">
                      <FiDatabase className="text-4xl text-purple-400 mx-auto mb-3" />
                      <h4 className="font-semibold text-purple-400">
                        Database Optimization
                      </h4>
                      <p className="text-sm text-gray-300 mt-2">
                        SQL Server, MongoDB, MySQL
                      </p>
                    </div>
                    <div className="text-center p-4 bg-pink-500/10 rounded-xl border border-pink-400/30">
                      <FiShield className="text-4xl text-pink-400 mx-auto mb-3" />
                      <h4 className="font-semibold text-pink-400">
                        Security & API
                      </h4>
                      <p className="text-sm text-gray-300 mt-2">
                        JWT, RBAC, REST APIs
                      </p>
                    </div>
                  </div>
                </motion.section>
              )}

              {/* Experience Section */}
              {activeSection === "experience" && (
                <motion.section
                  key="experience"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      variants={sectionVariants}
                      className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-cyan-400">
                            {exp.position}
                          </h3>
                          <p className="text-lg text-purple-400 font-semibold">
                            {exp.company}
                          </p>
                        </div>
                        <div className="text-right mt-2 lg:mt-0">
                          <p className="text-pink-400 font-semibold">
                            {exp.period}
                          </p>
                          <p className="text-gray-400 text-sm">
                            {exp.location}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="flex items-start gap-3 text-gray-300"
                          >
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </motion.section>
              )}

              {/* Skills Section */}
              {activeSection === "skills" && (
                <motion.section
                  key="skills"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
                >
                  <h2 className="text-3xl font-bold text-purple-400 mb-8">
                    Technical Skills
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {Object.entries(skills).map(([category, skillList]) => (
                      <div key={category}>
                        <h3 className="text-xl font-semibold text-cyan-400 mb-4 capitalize">
                          {category.replace(/([A-Z])/g, " $1")}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {skillList.map((skill, index) => (
                            <motion.span
                              key={index}
                              whileHover={{ scale: 1.05 }}
                              className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-xl border border-white/10 text-gray-300"
                            >
                              <SkillIcon skill={skill} />
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.section>
              )}

              {/* Projects Section */}
              {activeSection === "projects" && (
                <motion.section
                  key="projects"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  {projects.map((project, index) => (
                    <motion.div
                      key={index}
                      variants={sectionVariants}
                      className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
                    >
                      <h3 className="text-2xl font-bold text-pink-400 mb-4">
                        {project.name}
                      </h3>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tools.map((tool, toolIndex) => (
                          <span
                            key={toolIndex}
                            className="px-3 py-1 bg-pink-500/20 rounded-full text-sm text-pink-300 border border-pink-400/30"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {project.achievements.map((achievement, achIndex) => (
                          <div
                            key={achIndex}
                            className="flex items-start gap-3 p-4 bg-white/5 rounded-xl"
                          >
                            <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-300">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </motion.section>
              )}

              {/* Education Section */}
              {activeSection === "education" && (
                <motion.section
                  key="education"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
                >
                  <h2 className="text-3xl font-bold text-cyan-400 mb-8">
                    Education
                  </h2>

                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center justify-between p-6 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                      >
                        <div>
                          <h3 className="text-xl font-semibold text-white">
                            {edu.degree}
                          </h3>
                          <p className="text-gray-400">{edu.institution}</p>
                        </div>
                        <span className="text-purple-400 font-semibold">
                          {edu.year}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <h3 className="text-2xl font-bold text-purple-400 mb-6">
                      Certifications
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {certifications.map((cert, index) => (
                        <div
                          key={index}
                          className="text-center p-4 bg-white/5 rounded-xl border border-white/10"
                        >
                          <FiAward className="text-3xl text-cyan-400 mx-auto mb-2" />
                          <h4 className="font-semibold text-white">
                            {cert.name}
                          </h4>
                          {cert.year && (
                            <p className="text-gray-400 text-sm">{cert.year}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.section>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltraModernResume;
