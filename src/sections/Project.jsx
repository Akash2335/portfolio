import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useMemo, memo } from "react";
import ProjectCard from "../component/ProjectCard";
import SectionTitle from "../component/SectionTitle";

// ULTRA-SAFE projects data with multiple fallbacks
const getSafeProjects = () => {
  try {
    let importedProjects = [];

    try {
      const contents = require("../contens");
      importedProjects = contents?.projects || [];
    } catch (e) {
      console.warn("First import attempt failed:", e);
    }

    if (!importedProjects || importedProjects.length === 0) {
      try {
        const { projects } = require("../contens");
        importedProjects = projects || [];
      } catch (e) {
        console.warn("Second import attempt failed:", e);
      }
    }

    return importedProjects.length > 0
      ? importedProjects
      : getDefaultProjects();
  } catch (error) {
    console.error("All import attempts failed, using defaults:", error);
    return getDefaultProjects();
  }
};

const getDefaultProjects = () => [
 {
  "id": 1,
  "title": "Offline AI Interview Assistant",
  "description": "Developed a voice-driven offline AI interview assistant capable of conducting realistic interview simulations using local AI models. Includes automated questioning, response analysis, and performance scoring without any cloud dependency.",
  "technologies": [
    "React",
    "TypeScript",
    "TensorFlow.js",
    "Node.js",
    "Python",
    "Web Speech API",
    "Audio Processing",
    "MongoDB",
    "AWS Lambda"
  ],
  "image": "/api/placeholder/400/250",
  "githubUrl": "https://github.com/Akash2335/aiInterView",
  "liveUrl": "https://ai-inter-view-xi.vercel.app/login",
  "featured": true,
  "category": "ai-ml",
  "duration": "9 months",
  "impact": "Enabled realistic, private, and low-latency interview preparation through fully offline AI-driven simulations.",
  "achievements": [
    "Voice-driven interview interaction",
    "Offline AI model inference",
    "Role-based interview simulation flows",
    "Real-time performance analysis and scoring"
  ]
},
  {
    id: 2,
    title: "AWS Cloud Deployment",
    description:
      "Deployed applications on AWS EC2 and utilized S3 for storing exported data, ensuring scalable and reliable cloud infrastructure.",
    technologies: ["AWS EC2", "AWS S3", ".NET Core", "React", "SQL Server"],
    image: "/api/placeholder/400/250",
    githubUrl: "#",
    liveUrl: "#",
    featured: false,
    category: "cloud",
    duration: "4 months",
    impact: "Scalable cloud deployment with reliable data storage",
    achievements: [
      "AWS EC2 deployment",
      "S3 storage implementation",
      "Cloud infrastructure setup",
      "Application scaling",
    ],
  },
  {
    id: 3,
    title: "React Redux Frontend Applications",
    description:
      "Built dynamic frontend components with React and Redux for various enterprise applications, creating responsive and interactive user interfaces.",
    technologies: [
      "React",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      ".NET Core API",
    ],
    image: "/api/placeholder/400/250",
    githubUrl: "https://github.com/Akash2335/Spotyfiy",
    liveUrl: "#",
    featured: false,
    category: "frontend",
    duration: "12 months",
    impact: "Dynamic and responsive user interfaces across multiple projects",
    achievements: [
      "React component development",
      "Redux state management",
      "Responsive UI design",
      "API integration",
    ],
  },
  {
    id: 4,
    title: "Excel Export Reporting System",
    description:
      "Implemented export report feature using ClosedXML NuGet package, enabling users to view item counts in Excel and optimizing report generation for improved search and data retrieval.",
    technologies: [
      ".NET Core",
      "ClosedXML",
      "SQL Server",
      "REST APIs",
      "React",
    ],
    image: "/api/placeholder/400/250",
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
    category: "reporting",
    duration: "2 months",
    impact: "Streamlined reporting with Excel export functionality",
    achievements: [
      "ClosedXML implementation",
      "Excel report generation",
      "Data retrieval optimization",
      "User-friendly reporting",
    ],
  },
  {
    id: 5,
    title: "Secure Authentication System",
    description:
      "Implemented JWT authentication and role-based access control (RBAC) for secure API access and user management across enterprise applications.",
    technologies: [".NET Core", "JWT", "RBAC", "SQL Server", "React"],
    image: "/api/placeholder/400/250",
    githubUrl: "https://github.com/Akash2335/JwTAuthontication",
    liveUrl: "#",
    featured: false,
    category: "security",
    duration: "3 months",
    impact: "Secure API access with proper user role management",
    achievements: [
      "JWT token implementation",
      "Role-based access control",
      "Secure API endpoints",
      "User management system",
    ],
  },
];
// Get projects once at module level
const SAFE_PROJECTS = getSafeProjects();

// Memoized geometric shapes
const GeometricShapes = memo(() => (
  <div className="absolute inset-0 opacity-10 pointer-events-none">
    <motion.div
      className="absolute top-1/4 left-1/4 w-64 h-64 border border-purple-500/20 rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    />
    <motion.div
      className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-cyan-500/20"
      animate={{ rotate: -360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    />
  </div>
));

// Memoized particles
const Particles = memo(() => (
  <>
    {[...Array(4)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-white/20 rounded-full"
        style={{
          left: `${20 + i * 20}%`,
          top: `${30 + i * 15}%`,
        }}
        animate={{
          y: [0, -20, 0],
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration: 4 + i,
          repeat: Infinity,
          delay: i * 0.5,
        }}
      />
    ))}
  </>
));

// Memoized timeline nodes
const TimelineNodes = memo(({ projects = [] }) => {
  if (!projects || projects.length <= 1) return null;

  return (
    <>
      {projects.map((_, index) => (
        <motion.div
          key={index}
          className="hidden lg:block absolute left-1/2 w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg z-20"
          style={{
            top: `${(index * 100) / (projects.length - 1)}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            delay: index * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
});

// Connection lines component
const ConnectionLine = memo(({ index, isEven }) => (
  <motion.div
    className={`hidden lg:block absolute top-1/2 w-4 h-0.5 ${
      isEven
        ? "left-full bg-gradient-to-r from-cyan-500/40 to-transparent"
        : "right-full bg-gradient-to-l from-purple-500/40 to-transparent"
    }`}
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
  />
));

// Scroll progress indicator
const ScrollProgressIndicator = memo(({ opacity }) => (
  <motion.div
    className="fixed right-4 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col items-center gap-2"
    style={{ opacity }}
  >
    <div className="w-1 h-20 bg-gradient-to-b from-purple-500/50 to-cyan-500/50 rounded-full overflow-hidden">
      <motion.div
        className="w-full h-full bg-white/20"
        animate={{
          y: ["-100%", "100%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
    <span className="text-white/40 text-xs uppercase tracking-widest rotate-90 whitespace-nowrap mt-3">
      Scroll
    </span>
  </motion.div>
));

const Project = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  // Memoized container variants
  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.05,
        },
      },
    }),
    []
  );

  // Show empty state if no projects
  if (!SAFE_PROJECTS || SAFE_PROJECTS.length === 0) {
    return (
      <section
        className="min-h-screen py-16 lg:py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/10 to-blue-900"
        id="projects"
      >
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Personal Projects" />
          <div className="text-center py-16">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8 max-w-md mx-auto">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Projects Coming Soon
              </h3>
              <p className="text-white/60 mb-4">
                We're working on amazing projects. Check back later!
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      className="min-h-screen py-20 lg:py-32 relative overflow-hidden"
      id="projects"
      ref={containerRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={containerVariants}
    >
      {/* Enhanced Background with Animations */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-blue-900"
        style={{ y: backgroundY }}
      >
        <GeometricShapes />
        <Particles />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle title="Personal Projects" />
          <motion.p
            className="text-lg text-white/60 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            A collection of innovative solutions and creative endeavors
          </motion.p>
        </motion.div>

        {/* CTA Section - MOVED ABOVE PROJECTS */}
        <motion.div
          className="flex justify-center mb-16 px-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 max-w-md w-full text-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold   text-yellow-500 ">
                Ready to collaborate?
              </h3>
              <p className="text-orange-500 text-lg leading-relaxed">
                Let's discuss how we can bring your next project to life
              </p>
              <motion.a
                href="#contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl text-white font-semibold text-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Project
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Projects Container with Timeline */}
        <div className="relative">
          {/* Vertical Timeline */}
          {SAFE_PROJECTS.length > 1 && (
            <motion.div
              className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/40 via-cyan-500/40 to-transparent"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          )}

          {/* Timeline Nodes */}
          {SAFE_PROJECTS.length > 0 && (
            <TimelineNodes projects={SAFE_PROJECTS} />
          )}

          {/* Projects List with Enhanced Layout */}
          <div className="space-y-16 lg:space-y-24">
            {(SAFE_PROJECTS || []).map((project, index) => (
              <motion.div
                key={project?.id || `project-${index}`}
                className={`relative ${
                  index % 2 === 0
                    ? "lg:pr-[calc(50%+2rem)] lg:pl-4"
                    : "lg:pl-[calc(50%+2rem)] lg:pr-4"
                }`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
              >
                {/* Connection Lines */}
                <ConnectionLine index={index} isEven={index % 2 === 0} />

                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Progress Indicator */}
      {SAFE_PROJECTS.length > 3 && (
        <ScrollProgressIndicator opacity={opacity} />
      )}
    </motion.section>
  );
};

export default memo(Project);
