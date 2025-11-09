import SectionTitle from "../component/SectionTitle";
import userImage1 from "../../src/assets/Akash.png";
import Button from "../component/Button";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { CommonContext, downloadLink } from "../contens";
import { useContext, useRef, useMemo, useCallback } from "react";

const About = () => {
  const { isHireMe, setIsHireMe } = useContext(CommonContext);
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [8, -8]);
  const rotateY = useTransform(mouseX, [-300, 300], [-8, 8]);
  const shadowX = useTransform(mouseX, [-300, 300], [-20, 20]);
  const shadowY = useTransform(mouseY, [-300, 300], [-20, 20]);

  const handleMouseMove = useCallback(
    (event) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      mouseX.set(event.clientX - centerX);
      mouseY.set(event.clientY - centerY);
    },
    [mouseX, mouseY]
  );

  // Enhanced floating animation
  const floatingVariants = useMemo(
    () => ({
      floating: {
        y: [-15, 15, -15],
        rotate: [-2, 2, -2],
        transition: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        },
      },
    }),
    []
  );

  // Enhanced tech stack with better icons
  const techStack = useMemo(
    () => [
      { name: "C#", icon: "💠", color: "from-purple-500 to-purple-600" },
      { name: ".NET Core", icon: "⚡", color: "from-cyan-500 to-blue-600" },
      { name: "React", icon: "⚛️", color: "from-cyan-400 to-blue-500" },
      { name: "AWS", icon: "☁️", color: "from-orange-500 to-yellow-500" },
      { name: "SQL Server", icon: "🗃️", color: "from-red-500 to-pink-500" },
      {
        name: "JavaScript",
        icon: "🟨",
        color: "from-yellow-400 to-yellow-500",
      },
      { name: "TypeScript", icon: "🔷", color: "from-blue-500 to-blue-600" },
      {
        name: "Entity Framework",
        icon: "🔗",
        color: "from-green-500 to-emerald-500",
      },
      { name: "LINQ", icon: "📊", color: "from-purple-500 to-pink-500" },
      { name: "REST APIs", icon: "🌐", color: "from-green-400 to-cyan-400" },
      { name: "Git", icon: "📦", color: "from-orange-500 to-red-500" },
      { name: "Upcomming...", icon: "🐳", color: "from-blue-400 to-cyan-400" },
    ],
    []
  );

  // Enhanced particles with different colors and behaviors
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: 4 + Math.random() * 4,
        delay: Math.random() * 8,
        size: Math.random() * 4 + 1,
        color:
          i % 3 === 0
            ? "rgba(34, 211, 238, 0.4)"
            : i % 3 === 1
            ? "rgba(168, 85, 247, 0.4)"
            : "rgba(236, 72, 153, 0.4)",
        type: i % 4,
      })),
    []
  );

  return (
    <motion.section
      className="min-h-screen py-20 lg:py-32 w-full relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/30 to-blue-900"
      id="about"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Tech Icons */}
        {[
          "⚡",
          "🚀",
          "💻",
          "🔧",
          "📱",
          "☁️",
          "🔒",
          "📊",
          "🎯",
          "🌟",
          "⚛️",
          "💠",
        ].map((icon, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {icon}
          </motion.div>
        ))}

        {/* Enhanced Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
            }}
            animate={{
              y:
                particle.type === 0
                  ? [0, -60, 0]
                  : particle.type === 1
                  ? [0, -40, 0]
                  : particle.type === 2
                  ? [0, -80, 0]
                  : [0, -30, 0],
              x:
                particle.type === 0
                  ? [0, 20, 0]
                  : particle.type === 1
                  ? [0, -20, 0]
                  : [0, 0, 0],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Animated Grid */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "50px 50px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <SectionTitle title="About Me" />
          <motion.p
            className="text-xl text-white/60 max-w-2xl mx-auto mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Crafting digital experiences with cutting-edge technologies
          </motion.p>

          {/* Animated Divider */}
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full mx-auto mt-6"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ delay: 0.5, duration: 1.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          className="grid lg:grid-cols-2 gap-20 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Premium Image Section */}
          <motion.div
            className="relative group flex justify-center"
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
          >
            {/* Dynamic Shadow */}
            <motion.div
              className="absolute inset-0 rounded-3xl opacity-60"
              style={{
                x: shadowX,
                y: shadowY,
                background: "linear-gradient(45deg, #8b5cf6, #06b6d4, #ec4899)",
                filter: "blur(50px)",
              }}
            />

            {/* Premium Glass Morphism Container */}
            <div className="relative bg-gradient-to-br from-white/10 via-purple-500/5 to-cyan-500/10 backdrop-blur-2xl rounded-3xl border-2 border-white/20 p-8 shadow-2xl hover:shadow-cyan-500/30 hover:border-cyan-400/40 transition-all duration-500 overflow-hidden">
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                style={{
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "subtract",
                  padding: "2px",
                }}
              />

              {/* Main Image with Enhanced Effects */}
              <motion.div
                className="relative"
                variants={floatingVariants}
                animate="floating"
              >
                <motion.img
                  src={userImage1}
                  alt="Akash Bharati"
                  className="w-full max-w-md mx-auto rounded-2xl object-cover shadow-2xl border-2 border-white/10"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                  loading="lazy"
                />

                {/* Enhanced Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform"
                  animate={{
                    x: ["-150%", "150%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 1,
                  }}
                />
              </motion.div>

              {/* Premium Floating Tech Badges */}
              <motion.div
                className="absolute -top-3 -left-3 px-5 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-white font-bold shadow-2xl shadow-purple-500/40"
                initial={{ scale: 0, rotate: -45, y: 20 }}
                whileInView={{ scale: 1, rotate: -5, y: 0 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 300 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 0, y: -5 }}
              >
                <span className="flex items-center gap-2 text-sm">
                  <motion.span
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ⚡
                  </motion.span>
                  .NET Core Expert
                </span>
              </motion.div>

              <motion.div
                className="absolute -bottom-3 -right-3 px-5 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl text-white font-bold shadow-2xl shadow-cyan-500/40"
                initial={{ scale: 0, rotate: 45, y: 20 }}
                whileInView={{ scale: 1, rotate: 5, y: 0 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 300 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 0, y: -5 }}
              >
                <span className="flex items-center gap-2 text-sm">
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    🌐
                  </motion.span>
                  Full Stack Dev
                </span>
              </motion.div>

              {/* Floating Elements */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-2 h-2 bg-cyan-400 rounded-full ${
                    i % 2 === 0 ? "bg-cyan-400" : "bg-purple-400"
                  }`}
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${10 + i * 10}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    delay: i * 0.8,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Premium Content Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Enhanced Header */}
            <div className="space-y-6">
              <motion.h1
                className="text-5xl lg:text-7xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                  Akash Bharati
                </span>
              </motion.h1>

              <motion.p
                className="text-2xl text-cyan-200 font-semibold bg-cyan-500/10 rounded-2xl px-6 py-3 border border-cyan-500/20 inline-block"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                viewport={{ once: true }}
              >
                💻 Full Stack .NET Developer
              </motion.p>
            </div>

            {/* Enhanced Description */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4 bg-white/5 rounded-3xl p-6 border border-white/10 backdrop-blur-sm">
                <p className="text-white/80 leading-relaxed text-lg">
                  🚀 Passionate Full Stack .NET Core developer with expertise in{" "}
                  <span className="text-cyan-300 font-semibold">React</span>,{" "}
                  <span className="text-blue-400 font-semibold">
                    TypeScript
                  </span>
                  , and{" "}
                  <span className="text-orange-300 font-semibold">
                    AWS cloud services
                  </span>
                  . Committed to building impactful, secure, and scalable
                  solutions through robust{" "}
                  <span className="text-purple-300 font-semibold">
                    RESTful APIs
                  </span>{" "}
                  and modern web applications.
                </p>

                <p className="text-white/80 leading-relaxed text-lg">
                  💡 I believe in clean code, best practices, and continuous
                  learning. Whether it's backend{" "}
                  <span className="text-green-300 font-semibold">
                    .NET Core Web APIs
                  </span>
                  , frontend interfaces with{" "}
                  <span className="text-cyan-300 font-semibold">React</span>,
                  cloud deployment on{" "}
                  <span className="text-yellow-300 font-semibold">AWS</span>, or
                  version control with{" "}
                  <span className="text-red-300 font-semibold">Git</span>, I
                  approach each project with enthusiasm and attention to detail.
                </p>
              </div>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-2 gap-6 pt-4">
                {[
                  { value: "4+", label: "Years Experience", color: "cyan" },
                  {
                    value: "4+",
                    label: "Projects Completed",
                    color: "purple",
                  },
                  { value: "10+", label: "Technologies", color: "pink" },
                  {
                    value: "80%",
                    label: "Client Satisfaction",
                    color: "green",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div
                      className={`text-3xl font-bold text-${stat.color}-400 mb-2`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-white/60 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Premium Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 pt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                onClick={() => setIsHireMe(!isHireMe)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden rounded-2xl"
              >
                <Button
                  variant="outline"
                  className="px-10 py-5 text-lg font-semibold border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 rounded-2xl shadow-2xl hover:shadow-purple-500/40 relative z-10"
                >
                  <span className="flex items-center gap-3">
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      💼
                    </motion.span>
                    Hire Me
                  </span>
                </Button>
              </motion.div>

              <motion.a
                href={downloadLink?.[0]?.Resume || "#"}
                download
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-purple-600 via-cyan-600 to-blue-600 rounded-2xl text-white font-semibold text-lg shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 relative overflow-hidden group"
              >
                {/* Button Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 1,
                  }}
                />
                <span className="flex items-center gap-3 relative z-10">
                  <motion.span
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    📄
                  </motion.span>
                  Download Resume
                </span>
                <motion.span
                  className="relative z-10"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Premium Tech Stack Section */}
        <motion.div
          className="mt-28 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-4 mb-8 px-6 py-3 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="text-2xl"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              ⚡
            </motion.span>
            <p className="text-white font-semibold text-lg">
              Technologies I Master
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="group relative cursor-default"
                initial={{ opacity: 0, scale: 0, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  delay: 1.4 + index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.1,
                  y: -8,
                  transition: { duration: 0.2 },
                }}
              >
                {/* Tech Card */}
                <div
                  className={`p-4 rounded-2xl bg-gradient-to-br ${tech.color} shadow-2xl text-white text-center backdrop-blur-sm border border-white/20 group-hover:border-white/40 transition-all duration-300`}
                >
                  <div className="text-2xl mb-2">{tech.icon}</div>
                  <div className="text-sm font-semibold">{tech.name}</div>
                </div>

                {/* Hover Glow */}
                <div
                  className={`absolute -inset-2 bg-gradient-to-br ${tech.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
