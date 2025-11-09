import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { DiMsqlServer } from "react-icons/di";
import {
  SiDotnet,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiAmazon,
  SiDocker,
  SiKubernetes,
  SiJavascript,
  SiTypescript,
  SiGit,
} from "react-icons/si";
import { FaMicrosoft, FaDatabase, FaCode, FaShieldAlt } from "react-icons/fa";

const IndustrialProject = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  // Real projects based on your resume
  const realProjects = [
    {
      id: 1,
      title: "Fusion ERP Integration System",
      description:
        "Seamlessly integrated Fusion ERP via REST APIs for real-time invoice and shipment data synchronization. Implemented secure JWT authentication and role-based access control.",
      technologies: [
        ".NET Core",
        "REST APIs",
        "JWT",
        "SQL Server",
        "Entity Framework",
      ],
      category: "enterprise",
      status: "Completed",
      impact: "30% performance improvement",
      duration: "8 months",
      clients: "Multiple enterprise clients",
      icon: "🏭",
      features: [
        "Real-time data sync",
        "Secure authentication",
        "RBAC implementation",
        "API integration",
      ],
      highlight: true, // Added highlight property
      achievement: "Enterprise Integration Excellence",
    },
    {
      id: 2,
      title: "OKART E-commerce Platform",
      description:
        "Full-stack eCommerce platform with product recommendations, real-time order tracking, and multiple payment gateway integrations.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      category: "web",
      status: "Completed",
      impact: "20% user retention boost",
      duration: "6 months",
      clients: "E-commerce businesses",
      icon: "🛒",
      features: [
        "ML recommendations",
        "Real-time tracking",
        "Payment integration",
        "Inventory management",
      ],
      highlight: true, // Added highlight property
      achievement: "Full-Stack E-commerce Solution",
    },
    {
      id: 3,
      title: "Ticket Management Module",
      description:
        "Comprehensive ticket management system for land investigation requests with advanced tracking and reporting capabilities.",
      technologies: [".NET Core", "React", "SQL Server", "LINQ"],
      category: "enterprise",
      status: "Completed",
      impact: "25% process efficiency",
      duration: "5 months",
      clients: "Internal teams",
      icon: "🎫",
      features: [
        "Request tracking",
        "Reporting dashboard",
        "Workflow automation",
        "Data management",
      ],
      highlight: false,
    },
    {
      id: 4,
      title: "Cloud Native Microservices",
      description:
        "Scalable microservices architecture deployed on AWS with containerization and orchestration for high availability.",
      technologies: [".NET Core", "Docker", "Kubernetes", "AWS", "React"],
      category: "cloud",
      status: "In Progress",
      impact: "40% scalability improvement",
      duration: "12 months",
      clients: "Enterprise applications",
      icon: "☁️",
      features: [
        "Containerization",
        "Auto-scaling",
        "Load balancing",
        "CI/CD pipeline",
      ],
      highlight: true, // Added highlight property
      achievement: "Cloud Architecture Innovation",
    },
    {
      id: 5,
      title: "Real-time Analytics Dashboard",
      description:
        "Interactive dashboard for monitoring system performance and business metrics with real-time data visualization.",
      technologies: ["React", "TypeScript", ".NET Core API", "SQL Server"],
      category: "web",
      status: "Completed",
      impact: "35% faster insights",
      duration: "4 months",
      clients: "Business analysts",
      icon: "📊",
      features: [
        "Real-time updates",
        "Interactive charts",
        "Custom reports",
        "Data export",
      ],
      highlight: false,
    },
    {
      id: 6,
      title: "Mobile Workforce App",
      description:
        "Cross-platform mobile application for field workforce management with offline capabilities and real-time sync.",
      technologies: ["React Native", ".NET Core", "SQL Server", "AWS"],
      category: "mobile",
      status: "Planning",
      impact: "50% field efficiency",
      duration: "9 months",
      clients: "Field teams",
      icon: "📱",
      features: [
        "Offline mode",
        "Real-time sync",
        "GPS tracking",
        "Photo capture",
      ],
      highlight: false,
    },
  ];

  const categories = [
    { id: "all", name: "All Projects", icon: "💼", count: realProjects.length },
    {
      id: "enterprise",
      name: "Enterprise Systems",
      icon: "🏢",
      count: realProjects.filter((p) => p.category === "enterprise").length,
    },
    {
      id: "web",
      name: "Web Applications",
      icon: "🌐",
      count: realProjects.filter((p) => p.category === "web").length,
    },
    {
      id: "cloud",
      name: "Cloud Solutions",
      icon: "☁️",
      count: realProjects.filter((p) => p.category === "cloud").length,
    },
    {
      id: "mobile",
      name: "Mobile Apps",
      icon: "📱",
      count: realProjects.filter((p) => p.category === "mobile").length,
    },
    {
      id: "featured",
      name: "Featured",
      icon: "⭐",
      count: realProjects.filter((p) => p.highlight).length,
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? realProjects
      : activeCategory === "featured"
      ? realProjects.filter((project) => project.highlight)
      : realProjects.filter((project) => project.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "backOut",
      },
    },
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "from-green-500 to-emerald-500";
      case "In Progress":
        return "from-blue-500 to-cyan-500";
      case "Planning":
        return "from-purple-500 to-pink-500";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  const getTechIcon = (tech) => {
    const icons = {
      ".NET Core": <SiDotnet className="text-purple-500" />,
      React: <SiReact className="text-cyan-400" />,
      "Node.js": <SiNodedotjs className="text-green-500" />,
      "SQL Server": <DiMsqlServer className="text-red-500" />,
      MongoDB: <SiMongodb className="text-green-500" />,
      AWS: <SiAmazon className="text-orange-500" />,
      TypeScript: <SiTypescript className="text-blue-600" />,
      "REST APIs": <FaCode className="text-green-400" />,
      "Entity Framework": <FaDatabase className="text-yellow-500" />,
      Express: <SiNodedotjs className="text-gray-400" />,
      "Tailwind CSS": <FaCode className="text-cyan-300" />,
      LINQ: <SiDotnet className="text-pink-500" />,
      "React Native": <SiReact className="text-blue-400" />,
      JWT: <FaShieldAlt className="text-orange-500" />,
      Docker: <SiDocker className="text-blue-500" />,
      Kubernetes: <SiKubernetes className="text-blue-400" />,
    };
    return icons[tech] || <FaCode className="text-gray-400" />;
  };

  return (
    <motion.section
      className="min-h-screen py-20 lg:py-32 relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black"
      id="software"
      ref={containerRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "40px 40px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Enhanced Floating Tech Icons */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl opacity-15"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {
              ["⚡", "🚀", "💻", "🔧", "📱", "☁️", "🔒", "📊", "⭐", "🎯"][
                i % 10
              ]
            }
          </motion.div>
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h2
            className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Software Portfolio
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Enterprise-grade solutions built with modern technologies and best
            practices
          </motion.p>

          {/* Achievement Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-cyan-400/30 rounded-full px-6 py-3"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="text-cyan-400">🏆</span>
            <span className="text-cyan-300 font-semibold">
              {realProjects.filter((p) => p.highlight).length} Featured Projects
            </span>
          </motion.div>
        </motion.div>

        {/* Enhanced Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          variants={itemVariants}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 border-2 ${
                activeCategory === category.id
                  ? category.id === "featured"
                    ? "bg-gradient-to-r from-yellow-600 to-orange-600 text-white shadow-2xl scale-105 border-yellow-400"
                    : "bg-gradient-to-r from-cyan-600 to-purple-600 text-white shadow-2xl scale-105 border-cyan-400"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:scale-102 border-transparent"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg">{category.icon}</span>
              {category.name}
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  activeCategory === category.id ? "bg-white/30" : "bg-white/20"
                }`}
              >
                {category.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`group relative rounded-2xl p-6 transition-all duration-500 overflow-hidden ${
                project.highlight
                  ? "bg-gradient-to-br from-yellow-500/10 via-gray-800/60 to-orange-500/10 border-2 border-yellow-400/30 shadow-2xl shadow-yellow-500/20"
                  : "bg-gradient-to-br from-gray-800/60 to-gray-900/80 border border-gray-700/50 hover:border-cyan-400/30"
              }`}
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              {/* Enhanced Animated Background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${
                  project.highlight
                    ? "from-yellow-500/5 via-transparent to-orange-500/5"
                    : getStatusColor(project.status) + "/5"
                } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />

              {/* Featured Project Badge */}
              {project.highlight && (
                <motion.div
                  className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold z-20 flex items-center gap-1"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  ⭐ Featured
                </motion.div>
              )}

              {/* Project Header */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <motion.span
                      className={`text-2xl ${
                        project.highlight ? "text-yellow-400" : ""
                      }`}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.icon}
                    </motion.span>
                    <div>
                      <motion.h3
                        className={`text-lg font-bold transition-colors duration-300 ${
                          project.highlight
                            ? "text-yellow-300 group-hover:text-yellow-200"
                            : "text-white group-hover:text-cyan-400"
                        }`}
                        whileHover={{ x: 3 }}
                      >
                        {project.title}
                      </motion.h3>
                      <p className="text-sm text-gray-400 capitalize">
                        {project.category} • {project.duration}
                      </p>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <motion.span
                    className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${
                      project.highlight
                        ? "from-yellow-500/20 to-orange-500/20 text-yellow-300 border-yellow-400/30"
                        : getStatusColor(project.status) +
                          "/20 text-white border-current/30"
                    } border`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {project.status}
                  </motion.span>
                </div>

                {/* Achievement for Featured Projects */}
                {project.highlight && project.achievement && (
                  <motion.div
                    className="mb-3 p-2 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg border border-yellow-400/20"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                  >
                    <p className="text-yellow-300 text-sm font-semibold text-center">
                      🏆 {project.achievement}
                    </p>
                  </motion.div>
                )}

                {/* Description */}
                <motion.p
                  className="text-gray-300 text-sm mb-4 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                >
                  {project.description}
                </motion.p>

                {/* Key Features */}
                <motion.div
                  className="mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                  <h4
                    className={`font-semibold text-sm mb-2 ${
                      project.highlight ? "text-yellow-400" : "text-cyan-400"
                    }`}
                  >
                    Key Features:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {project.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className={`px-2 py-1 rounded text-xs border ${
                          project.highlight
                            ? "bg-yellow-500/10 text-yellow-300 border-yellow-500/20"
                            : "bg-cyan-500/10 text-cyan-300 border-cyan-500/20"
                        }`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Impact & Metrics */}
                <motion.div
                  className="grid grid-cols-2 gap-3 mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  <div
                    className={`rounded-lg p-2 text-center ${
                      project.highlight ? "bg-yellow-500/10" : "bg-gray-800/50"
                    }`}
                  >
                    <div
                      className={`font-bold text-sm ${
                        project.highlight ? "text-yellow-400" : "text-cyan-400"
                      }`}
                    >
                      ⚡ Impact
                    </div>
                    <div className="text-white text-xs">{project.impact}</div>
                  </div>
                  <div
                    className={`rounded-lg p-2 text-center ${
                      project.highlight ? "bg-orange-500/10" : "bg-gray-800/50"
                    }`}
                  >
                    <div
                      className={`font-bold text-sm ${
                        project.highlight
                          ? "text-orange-400"
                          : "text-purple-400"
                      }`}
                    >
                      👥 Clients
                    </div>
                    <div className="text-white text-xs">{project.clients}</div>
                  </div>
                </motion.div>

                {/* Technologies */}
                <motion.div
                  className="flex flex-wrap gap-1.5"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className={`px-2 py-1 rounded-md text-xs border flex items-center gap-1 ${
                        project.highlight
                          ? "bg-yellow-500/10 text-yellow-300 border-yellow-500/30"
                          : "bg-gray-700/50 text-gray-300 border-gray-600/50"
                      }`}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: index * 0.1 + techIndex * 0.05 + 0.5,
                      }}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: project.highlight
                          ? "rgba(234, 179, 8, 0.3)"
                          : "rgba(34, 211, 238, 0.2)",
                        borderColor: project.highlight
                          ? "rgba(234, 179, 8, 0.5)"
                          : "rgba(34, 211, 238, 0.5)",
                      }}
                    >
                      {getTechIcon(tech)}
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              {/* Enhanced Hover Effect */}
              <div
                className={`absolute inset-0 rounded-2xl border-2 border-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ${
                  project.highlight
                    ? "bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-red-500/20"
                    : "bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"
                }`}
              />
            </motion.div>
          ))}
        </div>

        {/* Enhanced Tech Stack Summary */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center text-cyan-400 mb-8">
            Technology Expertise
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              {
                name: ".NET Core",
                icon: <SiDotnet className="text-4xl text-purple-500" />,
                proficiency: "Expert",
              },
              {
                name: "React",
                icon: <SiReact className="text-4xl text-cyan-400" />,
                proficiency: "Expert",
              },
              {
                name: "Node.js",
                icon: <SiNodedotjs className="text-4xl text-green-500" />,
                proficiency: "Advanced",
              },
              {
                name: "SQL Server",
                icon: <DiMsqlServer className="text-4xl text-red-500" />,
                proficiency: "Expert",
              },
              {
                name: "AWS",
                icon: <SiAmazon className="text-4xl text-orange-500" />,
                proficiency: "Advanced",
              },
              {
                name: "Docker",
                icon: <SiDocker className="text-4xl text-blue-500" />,
                proficiency: "Intermediate",
              },
              {
                name: "MongoDB",
                icon: <SiMongodb className="text-4xl text-green-500" />,
                proficiency: "Advanced",
              },
              {
                name: "TypeScript",
                icon: <SiTypescript className="text-4xl text-blue-600" />,
                proficiency: "Expert",
              },
              {
                name: "Kubernetes",
                icon: <SiKubernetes className="text-4xl text-blue-400" />,
                proficiency: "Intermediate",
              },
              {
                name: "Git",
                icon: <SiGit className="text-4xl text-red-400" />,
                proficiency: "Expert",
              },
              {
                name: "Azure",
                icon: <FaMicrosoft className="text-4xl text-blue-500" />,
                proficiency: "Intermediate",
              },
              {
                name: "JavaScript",
                icon: <SiJavascript className="text-4xl text-yellow-400" />,
                proficiency: "Expert",
              },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                className="text-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300 group relative"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {tech.icon}
                <p className="text-gray-300 text-sm mt-2">{tech.name}</p>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      tech.proficiency === "Expert"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : tech.proficiency === "Advanced"
                        ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                        : "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                    }`}
                  >
                    {tech.proficiency}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default IndustrialProject;
