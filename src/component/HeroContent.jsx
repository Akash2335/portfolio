import { Typewriter } from "react-simple-typewriter";
import Button from "./Button";
import { motion, AnimatePresence } from "framer-motion";
import { CommonContext, downloadLink } from "../contens";
import { useContext, useState } from "react";
import HIREME from "./HireMe";

const HeroContent = ({ variants }) => {
  const { isHireMe, setIsHireMe, setToster } = useContext(CommonContext);
  const [isHovered, setIsHovered] = useState(false);

  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const pulseAnimation = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      className="relative text-left w-full px-4 sm:px-6 lg:max-w-2xl"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Background Glow Effect */}
      <motion.div
        className="absolute -inset-8 bg-gradient-to-r from-purple-500/10 via-blue-500/5 to-cyan-500/10 rounded-3xl blur-3xl"
        animate={{
          opacity: isHovered ? [0.3, 0.5, 0.3] : 0.2,
          scale: isHovered ? [1, 1.02, 1] : 1,
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Main Content Container */}
      <div className="relative z-10">
        {/* Name with Advanced Typography */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-3">
            Welcome, I'm
          </p>
          <div className="text-4xl lg:text-5xl font-bold">
            <motion.span
              className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 100%",
              }}
            >
              <Typewriter
                words={["Akash Bharati"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={150}
                deleteSpeed={100}
                delaySpeed={2000}
                cursorClassName="text-cyan-400"
                cursorBlinking
              />
            </motion.span>
          </div>
        </motion.div>

        {/* Title with Enhanced Typewriter */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-2xl lg:text-4xl font-light text-white/90 leading-tight">
            <span className="text-white/60">I'm a </span>
            <span className="font-semibold text-white">
              <Typewriter
                words={[
                  "Software Engineer",
                  "Full Stack Developer",
                  ".NET Core Specialist",
                  "Problem Solver",
                  "Innovation Enthusiast",
                ]}
                loop={true}
                cursor
                cursorStyle="▊"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
                cursorClassName="text-blue-400"
                cursorBlinking
              />
            </span>
          </h2>
          <motion.div
            className="h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-4"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 1 }}
          />
        </motion.div>

        {/* Description with Interactive Elements */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6 shadow-2xl">
            {/* Floating Tech Icons */}
            <motion.div
              className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm shadow-lg"
              variants={floatingAnimation}
              animate="animate"
            >
              💻
            </motion.div>

            <p className="text-white/80 leading-relaxed text-lg">
              Passionate{" "}
              <span className="text-cyan-300 font-semibold">
                .NET Core Developer
              </span>{" "}
              with expertise in building high-performance applications across
              domains like{" "}
              <span className="text-purple-300">Order Management</span> and{" "}
              <span className="text-blue-300">Ticketing systems</span>.
              Specialized in scalable APIs, ERP integrations (Fusion, Oracle),
              and performance optimization with{" "}
              <span className="text-green-300">SQL Server</span>.
            </p>

            <div className="flex flex-wrap gap-3 mt-4">
              {["🔐 JWT", "⚡ RBAC", "🚀 Scalable", "🎯 Efficient"].map(
                (tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 bg-white/10 rounded-full text-white/70 text-sm border border-white/10"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(139, 92, 246, 0.2)",
                      borderColor: "rgba(139, 92, 246, 0.5)",
                    }}
                  >
                    {tech}
                  </motion.span>
                )
              )}
            </div>
          </div>
        </motion.div>

        {/* Action Buttons with Enhanced Interactions */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {/* Hire Me Button */}
          <motion.div
            onClick={() => setIsHireMe(!isHireMe)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Button className="relative z-10 px-8 py-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-cyan-600 border-0 shadow-2xl">
              <span className="flex items-center gap-2">
                💼 Hire Me
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </Button>
          </motion.div>

          {/* Download Resume Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <Button
              variant="outline"
              isDownload={true}
              href={downloadLink[0].Resume}
              target="self"
              className="relative z-10 px-8 py-4 text-lg font-semibold border-2 border-purple-400 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 backdrop-blur-sm"
            >
              <span className="flex items-center gap-2">
                📄 My Resume
                <motion.span variants={pulseAnimation} animate="animate">
                  ⬇️
                </motion.span>
              </span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          className="mt-12 grid grid-cols-3 gap-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {[
            { value: "2+", label: "Years Experience" },
            { value: "50+", label: "Projects Completed" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
              whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-2xl font-bold text-cyan-400">
                {stat.value}
              </div>
              <div className="text-white/60 text-sm mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Hire Me Modal */}
      <AnimatePresence>
        {isHireMe && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
              onClick={() => setIsHireMe(false)}
            />
            <motion.div
              className="relative z-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
            >
              <HIREME />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default HeroContent;
