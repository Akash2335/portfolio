import { motion } from "framer-motion";
import { useState } from "react";

const ServiceCard = ({ services, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 25 },
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Background Glow Effect */}
      <motion.div
        className="absolute -inset-3 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{
          scale: isHovered ? 1.05 : 1,
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Main Card */}
      <div className="relative bg-gradient-to-br from-white/5 via-purple-500/5 to-cyan-500/5 backdrop-blur-xl rounded-2xl border-2 border-white/10 p-6 shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-400/30 transition-all duration-500 overflow-hidden">
        {/* Animated Background Pattern */}
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 45%, rgba(34, 211, 238, 0.3) 50%, transparent 55%),
              linear-gradient(-45deg, transparent 45%, rgba(168, 85, 247, 0.3) 50%, transparent 55%)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Header Section */}
        <div className="relative z-10 flex items-start gap-4 mb-6">
          {/* Animated Icon */}
          <motion.div
            className="relative"
            whileHover={{
              rotate: 360,
              scale: 1.1,
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="rounded-2xl border-2 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border-cyan-400/30 p-4 text-4xl text-cyan-400 shadow-lg shadow-cyan-500/20 relative overflow-hidden"
              animate={{
                boxShadow: isHovered
                  ? "0 0 30px rgba(34, 211, 238, 0.4), 0 0 60px rgba(168, 85, 247, 0.2)"
                  : "0 0 20px rgba(34, 211, 238, 0.2)",
              }}
            >
              <services.icon />

              {/* Icon Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: isHovered ? ["-100%", "200%"] : "0%",
                }}
                transition={{
                  duration: 1.5,
                  delay: isHovered ? 0.2 : 0,
                }}
              />
            </motion.div>

            {/* Floating Particles */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${10 + i * 20}%`,
                }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
          </motion.div>

          {/* Title */}
          <div className="flex-1">
            <motion.h3
              className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent mb-2"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              {services.title}
            </motion.h3>

            {/* Animated Underline */}
            <motion.div
              className="h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
              viewport={{ once: true }}
            />
          </div>
        </div>

        {/* Description */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-white/80 leading-relaxed text-lg hover:text-white transition-colors duration-300"
            whileHover={{ x: 2 }}
          >
            {services.description}
          </motion.p>
        </motion.div>

        {/* Hover Indicator */}
        <motion.div
          className="absolute bottom-4 right-4 flex items-center gap-2 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={{
            x: isHovered ? [0, 5, 0] : 0,
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
        >
          <span className="text-sm font-semibold">Learn More</span>
          <motion.span
            animate={{ x: [0, 3, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            →
          </motion.span>
        </motion.div>

        {/* Corner Accents */}
        <motion.div
          className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-2xl"
          animate={{
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-purple-400/50 rounded-br-2xl"
          animate={{
            opacity: [0.8, 0.3, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 1,
          }}
        />
      </div>

      {/* Floating Tech Tags */}
      <motion.div
        className="absolute -top-2 -right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
      >
        {services.technologies?.slice(0, 2).map((tech, techIndex) => (
          <motion.span
            key={tech}
            className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1 + techIndex * 0.1 + 0.5,
            }}
            viewport={{ once: true }}
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
