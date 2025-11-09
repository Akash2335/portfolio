import { Typewriter } from "react-simple-typewriter";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { CommonContext, downloadLink } from "../contens";
import { useContext, useState, useRef } from "react";
import HIREME from "../component/HireMe";

// Simple Button Component
const Button = ({
  children,
  variant = "primary",
  className = "",
  href,
  isDownload = false,
  target = "_self",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500";

  const variants = {
    primary:
      "bg-gradient-to-r from-cyan-600 to-purple-600 text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95",
    outline:
      "border-2 border-cyan-400 text-cyan-400 bg-cyan-400/10 hover:bg-cyan-400/20 hover:border-cyan-300 backdrop-blur-sm",
  };

  const buttonClass = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        download={isDownload}
        target={target}
        className={buttonClass}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

const Hero = ({ menuOpen }) => {
  const { isHireMe, setIsHireMe, setToster } = useContext(CommonContext);
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 3D transform values
  const rotateX = useTransform(mouseY, [-300, 300], [3, -3]);
  const rotateY = useTransform(mouseX, [-300, 300], [-3, 3]);

  const handleMouseMove = (event) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

  // Floating animation for elements
  const floatingAnimation = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      {/* Hire Me Modal - Moved outside and fixed positioning */}
      <AnimatePresence>
        {isHireMe && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Enhanced Backdrop */}
            <motion.div
              className="absolute inset-0 bg-slate-900/90 backdrop-blur-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsHireMe(false)}
            />

            {/* Modal Container */}
            <motion.div
              className="relative z-[101] w-full max-w-md mx-auto"
              initial={{ scale: 0.8, opacity: 0, y: -50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <HIREME />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <motion.section
        ref={containerRef}
        onMouseMove={handleMouseMove}
        id="hero"
        className="min-h-screen w-full relative overflow-hidden bg-neutral-950"
        style={{
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Advanced Background System */}
        <div className="absolute inset-0">
          {/* Animated Grid Base */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.1)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_40%,transparent_100%)]" />
          </div>

          {/* Dynamic Gradient Orbs */}
          <motion.div
            className="absolute top-0 left-0 w-[800px] h-[800px] bg-cyan-500/20 rounded-full blur-3xl"
            animate={{
              x: [-400, 400, -400],
              y: [-200, 200, -200],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl"
            animate={{
              x: [400, -400, 400],
              y: [200, -200, 200],
              scale: [1.2, 1, 1.2],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Floating Geometric Shapes */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 border border-cyan-400/30 rounded-lg rotate-45"
            animate={{
              rotate: [45, 405, 45],
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/3 w-24 h-24 border border-purple-400/30 rounded-full"
            animate={{
              rotate: [0, 360, 0],
              scale: [1.2, 0.8, 1.2],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Main Content Container */}
        <motion.div
          className={`relative w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
            menuOpen ? "blur-sm" : ""
          }`}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
        >
          <div className="w-full max-w-6xl mx-auto">
            {/* Premium Status Bar */}
            <motion.div
              className="flex items-center justify-between mb-16"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="flex items-center gap-3 px-6 py-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
                <span className="text-cyan-400 text-sm font-semibold tracking-widest">
                  OPEN FOR INNOVATION PROJECTS
                </span>
              </motion.div>

              <motion.div
                className="text-white/40 text-sm font-light tracking-widest"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                EST. 2023
              </motion.div>
            </motion.div>

            {/* Hero Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-36 items-center">
              {/* Left Column - Main Content */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                {/* Name with Holographic Effect */}
                <div className="space-y-4">
                  <motion.p
                    className="text-lg font-semibold text-cyan-400 uppercase tracking-widest"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Digital Architect & Developer
                  </motion.p>

                  <motion.h1
                    className="text-7xl lg:text-8xl xl:text-9xl font-black leading-none"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
                      AKASH
                    </span>
                    <br />
                    <motion.span
                      className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{
                        backgroundSize: "200% 200%",
                      }}
                    >
                      BHARATI
                    </motion.span>
                  </motion.h1>
                </div>

                {/* Dynamic Title */}
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="text-2xl lg:text-3xl font-light text-white/80">
                    <span className="text-white/60">CREATING </span>
                    <motion.span
                      className="font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                      animate={{
                        textShadow: [
                          "0 0 30px rgba(34, 211, 238, 0.5)",
                          "0 0 40px rgba(192, 132, 252, 0.5)",
                          "0 0 30px rgba(34, 211, 238, 0.5)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Typewriter
                        words={[
                          "DIGITAL ECOSYSTEMS",
                          "ENTERPRISE SOLUTIONS",
                          "AI-POWERED PLATFORMS",
                          "CLOUD NATIVE APPS",
                          "SCALABLE ARCHITECTURE",
                        ]}
                        loop={true}
                        cursor
                        cursorStyle="▊"
                        typeSpeed={70}
                        deleteSpeed={40}
                        delaySpeed={2000}
                      />
                    </motion.span>
                  </div>

                  {/* Animated Progress Indicator */}
                  <motion.div
                    className="w-full h-1 bg-white/20 rounded-full overflow-hidden"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, delay: 1.2 }}
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                </motion.div>

                {/* Tech Stack Visualization */}
                <motion.div
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  { [
                    "C#",
                    ".NET Core",
                    "React",
                    "Aws",
                    "SQL Server",
                    "Node.js",
                    "Entity Framwork",
                    "Linq",
                    "Git",
                    "Rest",
                    "Web Api",
                  ].map((tech, index) => (
                    <motion.div
                      key={tech}
                      className="px-5 py-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 text-white/80 text-base font-medium"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2 + index * 0.1 }}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        borderColor: "rgba(34, 211, 238, 0.5)",
                      }}
                    >
                      {tech}
                    </motion.div>
                  ))}
                </motion.div>

                {/* Description */}
                <motion.div
                  className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 p-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                >
                  <motion.div
                    className="absolute -top-3 -right-3 w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center text-white shadow-lg"
                    variants={floatingAnimation}
                    animate="animate"
                  >
                    ⚡
                  </motion.div>

                  <p className="text-white/90 leading-relaxed text-lg font-light">
                    Accomplished and innovative{" "}
                    <span className="text-cyan-300 font-semibold">
                      Full Stack .NET Core Developer
                    </span>{" "}
                    with extensive expertise in modern web technologies
                    including <span className="text-blue-300">React</span>,{" "}
                    <span className="text-typescript">TypeScript</span>, and
                    cloud platforms. Proven track record of designing and
                    delivering high-performance{" "}
                    <span className="text-purple-300">.NET Core Web APIs</span>{" "}
                    and <span className="text-green-300">RESTful services</span>{" "}
                    for enterprise applications. Skilled in seamless integration
                    with external systems like Fusion ERP and Oracle API, with
                    strong proficiency in{" "}
                    <span className="text-aws">AWS cloud services</span> for
                    scalable deployments. Experienced in version control with{" "}
                    <span className="text-git">Git</span>, performance
                    optimization using SQL Server, and implementing secure
                    authentication with JWT and RBAC. Adept at building
                    responsive front-end solutions with{" "}
                    <span className="text-react">React</span> and{" "}
                    <span className="text-typescript">TypeScript</span> while
                    ensuring robust back-end architecture and efficient CI/CD
                    pipelines.
                  </p>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 }}
                >
                  <motion.div
                    onClick={() => setIsHireMe(true)}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative group"
                  >
                    <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-70 transition-all duration-500" />
                    <Button className="relative z-10 px-12 py-6 text-xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 border-0 shadow-2xl rounded-2xl w-full sm:w-auto">
                      <span className="flex items-center gap-4">
                        <motion.span
                          animate={{ rotate: [0, 360] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          🚀
                        </motion.span>
                        INITIATE PROJECT
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </span>
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative group"
                  >
                    <Button
                      variant="outline"
                      isDownload={true}
                      href={downloadLink[0]?.Resume}
                      target="self"
                      className="relative z-10 px-12 py-6 text-xl font-bold border-2 border-cyan-400/50 text-cyan-400 bg-cyan-400/10 backdrop-blur-sm rounded-2xl w-full sm:w-auto hover:bg-cyan-400/20 transition-all duration-300"
                    >
                      <span className="flex items-center gap-4">
                        📄 EXPLORE PORTFOLIO
                        <motion.span
                          animate={{ y: [0, 5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          ⬇️
                        </motion.span>
                      </span>
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Right Column - Visual Space */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 90 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              >
                {/* Main Visual Container */}
                <motion.div
                  className="relative h-[600px] bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl border border-white/20 backdrop-blur-2xl overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.3)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(192,132,252,0.3)_0%,transparent_50%)]" />
                  </div>

                  {/* Floating Code Elements */}
                  <motion.div
                    className="absolute top-8 left-8 px-4 py-2 bg-cyan-500/20 backdrop-blur-sm rounded-lg border border-cyan-400/30"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [-2, 2, -2],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <code className="text-cyan-300 font-mono text-sm">
                      {"<Innovation />"}
                    </code>
                  </motion.div>

                  <motion.div
                    className="absolute top-24 right-12 px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-lg border border-purple-400/30"
                    animate={{
                      y: [0, 15, 0],
                      rotate: [2, -2, 2],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  >
                    <code className="text-purple-300 font-mono text-sm">
                      {"AI_Engine()"}
                    </code>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-20 left-12 px-4 py-2 bg-pink-500/20 backdrop-blur-sm rounded-lg border border-pink-400/30"
                    animate={{
                      y: [0, -15, 0],
                      rotate: [1, -1, 1],
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2,
                    }}
                  >
                    <code className="text-pink-300 font-mono text-sm">
                      {"Cloud.Native"}
                    </code>
                  </motion.div>

                  {/* Central Visual Element */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div className="w-32 h-32 border-4 border-cyan-400/50 rounded-full" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-4 border-purple-400/50 rounded-full" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-4 border-pink-400/50 rounded-full" />
                  </motion.div>

                  {/* Interactive Hover Text */}
                  <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/40 text-lg font-light"
                    animate={{ opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    HOVER TO INTERACT
                  </motion.div>
                </motion.div>

                {/* Achievement Metrics */}
                <motion.div
                  className="grid grid-cols-3 gap-6 mt-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  {[
                    { value: "4+", label: "Years Excellence", icon: "🎯" },
                    { value: "3+", label: "Projects Delivered", icon: "💡" },
                    { value: "80%", label: "Client Success", icon: "⭐" },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="text-center group cursor-pointer p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
                      whileHover={{
                        y: -5,
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{
                          duration: 2,
                          delay: index * 0.5,
                          repeat: Infinity,
                        }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-white/60 text-sm flex items-center justify-center gap-2">
                        <span>{stat.icon}</span>
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              <div className="flex flex-col items-center space-y-4">
                <motion.div
                  className="w-px h-20 bg-gradient-to-b from-cyan-400 to-transparent relative"
                  animate={{
                    height: [20, 40, 20],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <motion.div
                    className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"
                    animate={{
                      y: [0, 14, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
                <motion.span
                  className="text-white/40 text-xs uppercase tracking-widest font-light"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  SCROLL TO DISCOVER
                </motion.span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, 50, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default Hero;
