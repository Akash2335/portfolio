import { motion } from "framer-motion";
import { useState, useMemo, useCallback } from "react";
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
  SiTailwindcss,
} from "react-icons/si";
import {
  FaMicrosoft,
  FaDatabase,
  FaCode,
  FaShieldAlt,
  FaAws,
} from "react-icons/fa";

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  console.log(project);

  // Tech icon mapping function
  const getTechIcon = (tech) => {
    const icons = {
      ".NET Core": <SiDotnet className="text-purple-500" />,
      React: <SiReact className="text-cyan-400" />,
      "Node.js": <SiNodedotjs className="text-green-500" />,
      "SQL Server": <FaDatabase className="text-red-500" />,
      MongoDB: <SiMongodb className="text-green-500" />,
      AWS: <SiAmazon className="text-orange-500" />,
      TypeScript: <SiTypescript className="text-blue-600" />,
      "REST APIs": <FaCode className="text-green-400" />,
      "Entity Framework": <FaDatabase className="text-yellow-500" />,
      Express: <SiNodedotjs className="text-gray-400" />,
      "Tailwind CSS": <SiTailwindcss className="text-cyan-300" />,
      LINQ: <SiDotnet className="text-pink-500" />,
      "React Native": <SiReact className="text-blue-400" />,
      JWT: <FaShieldAlt className="text-orange-500" />,
      Docker: <SiDocker className="text-blue-500" />,
      Kubernetes: <SiKubernetes className="text-blue-400" />,
      Git: <SiGit className="text-red-400" />,
      JavaScript: <SiJavascript className="text-yellow-400" />,
      "Fusion ERP": <FaCode className="text-purple-400" />,
      "Oracle OIC": <FaDatabase className="text-red-400" />,
      ClosedXML: <FaCode className="text-green-500" />,
      "TensorFlow.js": <FaCode className="text-orange-500" />,
      "Computer Vision": <FaCode className="text-blue-400" />,
      Python: <FaCode className="text-yellow-500" />,
      OpenCV: <FaCode className="text-green-600" />,
    };
    return icons[tech] || <FaCode className="text-gray-400" />;
  };

  // Memoized safe project data
  const safeProject = useMemo(
    () => ({
      title: project?.title || "Untitled Project",
      description: project?.description || "No description available",
      technologies: project?.technologies || [],
      image: project?.image || "/api/placeholder/400/250",
      githubUrl: project?.githubUrl || "#",
      liveUrl: project?.liveUrl || "#",
      featured: project?.featured || false,
      category: project?.category || "general",
      duration: project?.duration || "",
      achievements: project?.achievements || [],
    }),
    [project]
  );

  // Memoized animation variants
  const variants = useMemo(
    () => ({
      card: {
        hidden: { opacity: 0, y: 60, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            type: "spring",
            damping: 25,
            stiffness: 100,
            duration: 0.6,
            delay: index * 0.15,
          },
        },
        hover: {
          y: -8,
          scale: 1.01,
          transition: { type: "spring", damping: 25, stiffness: 400 },
        },
      },
      image: {
        hidden: { scale: 1.1, opacity: 0.8 },
        visible: {
          scale: 1,
          opacity: 1,
          transition: { duration: 0.5, delay: index * 0.15 + 0.2 },
        },
        hover: { scale: 1.03, transition: { duration: 0.2 } },
      },
      content: {
        hidden: { opacity: 0, x: -30 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.4, delay: index * 0.15 + 0.3 },
        },
      },
    }),
    [index]
  );

  // Memoized event handlers
  const handleHoverStart = useCallback(() => setIsHovered(true), []);
  const handleHoverEnd = useCallback(() => setIsHovered(false), []);

  // Handle view click
  const handleViewClick = useCallback((url) => {
    if (url && url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  }, []);

  // Memoized tech stack render
  const techStack = useMemo(
    () =>
      safeProject.technologies.length > 0 ? (
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.15 + 0.8 }}
          viewport={{ once: true }}
        >
          <h4
            className={`font-semibold text-sm flex items-center gap-2 ${
              safeProject.featured ? "text-yellow-400" : "text-cyan-400"
            }`}
          >
            <span>🛠️</span>
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {safeProject.technologies.slice(0, 8).map((tech, techIndex) => (
              <motion.span
                key={tech}
                className={`px-3 py-2 rounded-lg text-sm font-medium border backdrop-blur-sm flex items-center gap-2 ${
                  safeProject.featured
                    ? "bg-yellow-500/15 text-yellow-300 border-yellow-500/30 hover:bg-yellow-500/25"
                    : "bg-cyan-500/15 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/25"
                }`}
                initial={{ opacity: 0, scale: 0, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: index * 0.15 + techIndex * 0.08 + 0.8,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  transition: { duration: 0.2 },
                }}
              >
                {getTechIcon(tech)}
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ) : null,
    [safeProject.technologies, safeProject.featured, index]
  );

  // Memoized project links
  const projectLinks = useMemo(() => {
    const hasLiveUrl = safeProject.liveUrl && safeProject.liveUrl !== "#";
    const hasGithubUrl = safeProject.githubUrl && safeProject.githubUrl !== "#";

    if (!hasLiveUrl && !hasGithubUrl) return null;

    return (
      <motion.div
        className="flex gap-4 pt-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.15 + 1.0 }}
        viewport={{ once: true }}
      >
        {hasLiveUrl && (
          <motion.button
            onClick={() => handleViewClick(safeProject.liveUrl)}
            className={`px-6 py-3 rounded-xl font-semibold shadow-lg flex items-center gap-3 cursor-pointer transition-all duration-200 ${
              safeProject.featured
                ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-black hover:from-yellow-600 hover:to-orange-600 hover:shadow-2xl hover:shadow-yellow-500/25"
                : "bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 hover:shadow-2xl hover:shadow-cyan-500/25"
            }`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              🌐
            </motion.span>
            <span>Live Demo</span>
          </motion.button>
        )}

        {hasGithubUrl && (
          <motion.button
            onClick={() => handleViewClick(safeProject.githubUrl)}
            className={`px-6 py-3 rounded-xl font-semibold border backdrop-blur-sm flex items-center gap-3 cursor-pointer transition-all duration-200 ${
              safeProject.featured
                ? "bg-yellow-500/20 text-yellow-300 border-yellow-500/30 hover:bg-yellow-500/30 hover:border-yellow-400/50"
                : "bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-white/30"
            }`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              💻
            </motion.span>
            <span>View Code</span>
          </motion.button>
        )}
      </motion.div>
    );
  }, [
    safeProject.liveUrl,
    safeProject.githubUrl,
    safeProject.featured,
    index,
    handleViewClick,
  ]);

  // Featured project badge
  const featuredBadge = useMemo(() => {
    if (!safeProject.featured) return null;

    return (
      <motion.div
        className="absolute top-1 left-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold z-20 flex items-center gap-1 shadow-lg"
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        viewport={{ once: true }}
      >
        ⭐ Featured
      </motion.div>
    );
  }, [safeProject.featured, index]);

  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl group"
      variants={variants.card}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.1 }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      {/* Featured Badge */}
      {featuredBadge}

      {/* Background Glow */}
      <div
        className={`absolute -inset-2 bg-gradient-to-r rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
          safeProject.featured
            ? "from-yellow-500/10 to-orange-500/10"
            : "from-purple-500/10 to-cyan-500/10"
        }`}
      />

      {/* Main Card Container */}
      <div
        className={`relative backdrop-blur-xl rounded-xl border p-6 shadow-xl md:flex md:items-center md:gap-6 ${
          safeProject.featured
            ? "bg-gradient-to-br from-yellow-500/5 via-white/5 to-orange-500/5 border-yellow-400/30"
            : "bg-white/5 border-white/10"
        }`}
      >
        {/* Project Content */}
        <motion.div
          className="flex flex-1 flex-col gap-6 relative z-10"
          variants={variants.content}
        >
          {/* Project Header */}
          <div className="space-y-4">
            {/* Title with Enhanced Highlight */}
            <motion.div
              className="relative"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.15 }}
            >
              <motion.h2
                className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent relative z-10 ${
                  safeProject.featured
                    ? "from-yellow-300 via-orange-300 to-amber-300"
                    : "from-cyan-300 via-purple-300 to-pink-300"
                }`}
              >
                {safeProject.title}
              </motion.h2>

              {/* Title Background Glow */}
              <motion.div
                className={`absolute -inset-4 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  safeProject.featured
                    ? "bg-gradient-to-r from-yellow-500/20 to-orange-500/20"
                    : "bg-gradient-to-r from-cyan-500/20 to-purple-500/20"
                }`}
                initial={false}
                animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
              />
            </motion.div>

            {/* Enhanced Category Badge */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border backdrop-blur-sm ${
                  safeProject.featured
                    ? "bg-yellow-500/20 text-yellow-300 border-yellow-500/30 shadow-lg shadow-yellow-500/10"
                    : "bg-purple-500/20 text-purple-300 border-purple-500/30"
                }`}
                whileHover={{ scale: 1.05, y: -1 }}
                transition={{ duration: 0.2 }}
              >
                <motion.span
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  {safeProject.featured ? "⭐" : "📁"}
                </motion.span>
                <span className="capitalize">{safeProject.category}</span>
                {safeProject.featured && (
                  <motion.span
                    className="w-2 h-2 bg-yellow-400 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                )}
              </motion.div>

              {/* Project Duration */}
              {safeProject.duration && (
                <motion.div
                  className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full text-white/60 text-xs border border-white/10"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <span>⏱️</span>
                  <span>{safeProject.duration}</span>
                </motion.div>
              )}
            </motion.div>

            {/* Enhanced Divider */}
            <motion.div
              className="relative h-1 overflow-hidden rounded-full bg-white/5"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: index * 0.15 + 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div
                className={`h-full bg-gradient-to-r rounded-full ${
                  safeProject.featured
                    ? "from-yellow-500 via-orange-500 to-amber-500"
                    : "from-cyan-500 via-purple-500 to-pink-500"
                }`}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>

          {/* Enhanced Project Description */}
          <motion.div
            className="relative"
            whileHover={{ x: 2 }}
            transition={{ duration: 0.15 }}
          >
            <motion.p
              className={`text-lg leading-relaxed relative z-10 ${
                safeProject.featured ? "text-white/90" : "text-white/80"
              }`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
              viewport={{ once: true }}
            >
              {safeProject.description}
            </motion.p>

            {/* Description Background Highlight */}
            {safeProject.featured && (
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
                animate={isHovered ? { scale: 1.02 } : { scale: 1 }}
              />
            )}
          </motion.div>

          {/* Key Achievements for Featured Projects */}
          {safeProject.featured &&
            safeProject.achievements &&
            safeProject.achievements.length > 0 && (
              <motion.div
                className="space-y-3"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="text-yellow-300 font-semibold text-sm flex items-center gap-2">
                  <span>🏆</span>
                  Key Achievements
                </h4>
                <div className="grid gap-2">
                  {safeProject.achievements
                    .slice(0, 3)
                    .map((achievement, achievementIndex) => (
                      <motion.div
                        key={achievement}
                        className="flex items-center gap-3 px-3 py-2 bg-yellow-500/10 rounded-lg border border-yellow-500/20"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.15 + achievementIndex * 0.1 + 0.7,
                        }}
                        viewport={{ once: true }}
                        whileHover={{
                          x: 5,
                          backgroundColor: "rgba(234, 179, 8, 0.15)",
                        }}
                      >
                        <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0" />
                        <span className="text-yellow-200 text-sm">
                          {achievement}
                        </span>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            )}

          {/* Tech Stack */}
          {techStack}

          {/* Project Links */}
          {projectLinks}
        </motion.div>

        {/* Project Image */}
        <motion.div
          className="mt-6 md:mt-0 md:flex-1 relative"
          variants={variants.image}
        >
          <div className="relative group/image">
            {/* Image */}
            <motion.img
              src={safeProject.image}
              alt={safeProject.title}
              className="relative rounded-lg object-cover w-full h-48 md:h-56 lg:h-64 shadow-lg border border-white/10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              loading="lazy"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg opacity-0 group-hover/image:opacity-100 transition-opacity duration-200" />

            {/* Clickable View Indicators */}
            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover/image:opacity-100 transition-opacity duration-200">
              {safeProject.liveUrl && safeProject.liveUrl !== "#" && (
                <motion.button
                  onClick={() => handleViewClick(safeProject.liveUrl)}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 backdrop-blur-md rounded-lg text-white font-medium text-sm border border-white/30 shadow-lg flex items-center gap-2 cursor-pointer hover:from-purple-700 hover:to-cyan-700 transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>🌐</span>
                  <span>Live Demo</span>
                </motion.button>
              )}

              {safeProject.githubUrl && safeProject.githubUrl !== "#" && (
                <motion.button
                  onClick={() => handleViewClick(safeProject.githubUrl)}
                  className="px-6 py-3 bg-white/20 backdrop-blur-md rounded-lg text-white font-medium text-sm border border-white/30 flex items-center gap-2 cursor-pointer hover:bg-white/30 transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>💻</span>
                  <span>View Code</span>
                </motion.button>
              )}
            </div>
          </div>

          {/* Project Index */}
          <motion.div
            className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs shadow-lg ${
              safeProject.featured
                ? "bg-gradient-to-br from-yellow-500 to-orange-500"
                : "bg-gradient-to-br from-purple-500 to-cyan-500"
            }`}
            animate={{
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {index + 1}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
