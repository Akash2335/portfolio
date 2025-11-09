import SectionTitle from "../component/SectionTitle";
import ServiceCard from "../component/ServiceCard";
import { services } from "../contens";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

const Services = () => {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [3, -3]);
  const rotateY = useTransform(mouseX, [-300, 300], [-3, 3]);

  const handleMouseMove = (event) => {
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 100,
      rotateX: 45,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const orbitVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <motion.section
      className="min-h-screen py-20 lg:py-32 relative overflow-hidden"
      id="services"
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-blue-900">
        {/* Orbiting Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 border border-purple-500/10 rounded-full"
          variants={orbitVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-64 h-64 border border-cyan-500/10 rounded-full"
          variants={orbitVariants}
          animate="animate"
          style={{ rotate: -360 }}
        />

        {/* Floating Particles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
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

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <SectionTitle title="My Services" />
          <motion.p
            className="text-lg text-white/60 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Comprehensive solutions tailored to bring your digital vision to
            life
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="relative"
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Central Orbital System */}
          <div className="relative">
            {/* Center Connection Point */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full z-20"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {services.map((_, index) => {
                const angle = (index * 360) / services.length;
                const rad = (angle * Math.PI) / 180;
                const x1 = 50;
                const y1 = 50;
                const x2 = 50 + 40 * Math.cos(rad);
                const y2 = 50 + 40 * Math.sin(rad);

                return (
                  <motion.line
                    key={index}
                    x1={`${x1}%`}
                    y1={`${y1}%`}
                    x2={`${x2}%`}
                    y2={`${y2}%`}
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    strokeDasharray="4 2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.3 }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                  />
                );
              })}
              <defs>
                <linearGradient
                  id="lineGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
            </svg>

            {/* Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 relative z-10">
              {services.map((service, index) => {
                const angle = (index * 360) / services.length;
                const distance = 150; // Distance from center

                return (
                  <motion.div
                    key={index}
                    className="relative group"
                    variants={cardVariants}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -10,
                      rotateY: 10,
                      transition: { duration: 0.3 },
                    }}
                  >
                    {/* Orbital Position Effect */}
                    <motion.div
                      className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                      animate={{
                        rotateZ: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    {/* Service Card */}
                    <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 p-6 shadow-2xl h-full">
                      <ServiceCard services={service} />

                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Corner Accents */}
                      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-purple-500/50 rounded-tl-2xl" />
                      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-500/50 rounded-tr-2xl" />
                    </div>

                    {/* Orbiting Indicator */}
                    <motion.div
                      className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center text-white text-xs"
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 0.5,
                      }}
                    >
                      {index + 1}
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.p
            className="text-white/60 text-lg mb-6"
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Ready to start your project?
          </motion.p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl text-white font-semibold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Collaborate 🚀
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
