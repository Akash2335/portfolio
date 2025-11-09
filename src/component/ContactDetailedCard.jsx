import { motion } from "framer-motion";
import { useState } from "react";

const ContactDetailedCard = ({ contact, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    initial: {
      scale: 1,
      y: 0,
      backgroundColor: "rgba(255, 255, 255, 0.03)",
      borderColor: "rgba(255, 255, 255, 0.1)",
    },
    hover: {
      scale: 1.05,
      y: -8,
      backgroundColor: "rgba(139, 92, 246, 0.15)",
      borderColor: "rgba(139, 92, 246, 0.4)",
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const iconVariants = {
    initial: {
      scale: 1,
      rotate: 0,
      y: 0,
    },
    hover: {
      scale: 1.3,
      rotate: 360,
      y: -5,
      transition: {
        duration: 0.6,
        ease: "backOut",
      },
    },
  };

  const textVariants = {
    initial: {
      color: "rgba(255, 255, 255, 0.7)",
      x: 0,
    },
    hover: {
      color: "rgba(255, 255, 255, 1)",
      x: 3,
      transition: {
        duration: 0.3,
      },
    },
  };

  const glowVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
    },
    hover: {
      opacity: 1,
      scale: 1.2,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="relative group"
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      animate="initial"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          delay: index * 0.1,
          ease: "easeOut",
        },
      }}
      viewport={{ once: true, amount: 0.3 }}
      initial={{ opacity: 0, y: 30 }}
    >
      {/* Enhanced Background Glow Effect */}
      <motion.div
        className="absolute -inset-3 bg-gradient-to-r from-purple-500/30 via-cyan-500/20 to-pink-500/30 rounded-2xl blur-xl"
        variants={glowVariants}
        initial="initial"
        whileHover="hover"
      />

      {/* Animated Border Glow */}
      <motion.div
        className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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
          padding: "1px",
        }}
      />

      {/* Main Card */}
      <div className="relative bg-gradient-to-br from-white/5 via-purple-500/5 to-cyan-500/5 backdrop-blur-2xl rounded-2xl border-2 border-white/10 p-6 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 overflow-hidden">
        {/* Animated Background Pattern */}
        <motion.div
          className="absolute inset-0 opacity-10"
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
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 flex items-center gap-6">
          {/* Enhanced Animated Icon Container */}
          <motion.div className="relative" variants={iconVariants}>
            {/* Icon Background with Gradient */}
            <motion.div
              className="w-16 h-16 rounded-2xl border-2 border-white/20 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center relative overflow-hidden shadow-2xl"
              animate={{
                boxShadow: isHovered
                  ? "0 0 30px rgba(139, 92, 246, 0.4), 0 0 60px rgba(34, 211, 238, 0.2)"
                  : "0 0 20px rgba(139, 92, 246, 0.2)",
              }}
            >
              {/* Icon Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                animate={{
                  x: isHovered ? ["-100%", "200%"] : "0%",
                }}
                transition={{
                  duration: 1.5,
                  delay: isHovered ? 0.2 : 0,
                }}
              />

              {/* Main Icon */}
              <motion.span
                className="text-2xl relative z-10"
                animate={{
                  scale: isHovered ? [1, 1.2, 1] : 1,
                  filter: isHovered
                    ? "drop-shadow(0 0 10px rgba(255,255,255,0.5))"
                    : "none",
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
              >
                {contact.icon}
              </motion.span>
            </motion.div>

            {/* Enhanced Pulsing Dot */}
            <motion.div
              className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full border-2 border-slate-900 shadow-lg"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.8, 1],
                boxShadow: [
                  "0 0 10px rgba(34, 211, 238, 0.5)",
                  "0 0 20px rgba(34, 211, 238, 0.8)",
                  "0 0 10px rgba(34, 211, 238, 0.5)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Floating Particles */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-1 h-1 rounded-full ${
                  i % 2 === 0 ? "bg-cyan-400" : "bg-purple-400"
                }`}
                style={{
                  left: `${15 + i * 10}%`,
                  top: `${5 + i * 15}%`,
                }}
                animate={{
                  y: [0, -15, 0],
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

          {/* Enhanced Content */}
          <div className="flex-1 min-w-0 space-y-3">
            {/* Type Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-white/60 text-xs font-medium uppercase tracking-wider border border-white/10 backdrop-blur-sm"
              variants={textVariants}
            >
              <motion.span
                animate={{ rotate: isHovered ? [0, 360] : 0 }}
                transition={{ duration: 0.5 }}
              >
                {contact.icon}
              </motion.span>
              {contact.type || "Contact"}
            </motion.div>

            {/* Value with Enhanced Link Effects */}
            {contact.link ? (
              <motion.a
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group/link"
                variants={textVariants}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3">
                  <motion.span
                    className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-purple-300 via-cyan-300 to-pink-300 bg-clip-text text-transparent group-hover/link:from-purple-200 group-hover/link:via-cyan-200 group-hover/link:to-pink-200 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    {contact.value}
                  </motion.span>

                  {/* Enhanced Arrow Indicator */}
                  <motion.div
                    className="flex items-center gap-1 text-cyan-400"
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.span
                      animate={{ x: isHovered ? [0, 5, 0] : 0 }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                    >
                      ↗
                    </motion.span>
                  </motion.div>
                </div>

                {/* Enhanced Underline Effect */}
                <motion.div
                  className="h-0.5 bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 mt-2 rounded-full"
                  initial={{ width: 0, opacity: 0 }}
                  whileHover={{ width: "100%", opacity: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </motion.a>
            ) : (
              <motion.span
                className="text-xl lg:text-2xl font-bold text-white/90"
                variants={textVariants}
              >
                {contact.value}
              </motion.span>
            )}

            {/* Description */}
            {contact.description && (
              <motion.p
                className="text-white/50 text-sm leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {contact.description}
              </motion.p>
            )}
          </div>

          {/* Enhanced Interactive Arrow */}
          {contact.link && (
            <motion.div
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{
                x: isHovered ? [0, 8, 0] : 0,
                scale: isHovered ? [1, 1.2, 1] : 1,
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="text-2xl text-cyan-400 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                →
              </span>
            </motion.div>
          )}
        </div>

        {/* Enhanced Connection Line */}
        <motion.div
          className="absolute -left-6 top-1/2 w-6 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-cyan-500 rounded-full"
          initial={{ width: 0, opacity: 0 }}
          whileHover={{ width: 24, opacity: 1 }}
          transition={{ duration: 0.4 }}
        />

        {/* Corner Accents */}
        <motion.div
          className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-2xl"
          animate={{
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-purple-400/50 rounded-br-2xl"
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

      {/* Enhanced Hover Tooltip */}
      {contact.description && (
        <motion.div
          className="absolute left-full ml-6 top-1/2 transform -translate-y-1/2 bg-slate-900/95 backdrop-blur-xl text-white text-sm px-4 py-3 rounded-2xl border border-white/10 shadow-2xl z-20 min-w-[200px]"
          initial={{ opacity: 0, x: -20, scale: 0.9 }}
          whileHover={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-cyan-400">{contact.icon}</span>
            <span className="font-semibold text-cyan-300">{contact.type}</span>
          </div>
          <p className="text-white/80 leading-relaxed">{contact.description}</p>

          {/* Tooltip Arrow */}
          <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-t-transparent border-b-transparent border-r-slate-900/95" />

          {/* Tooltip Glow */}
          <div className="absolute -inset-2 bg-cyan-500/10 rounded-2xl blur-xl -z-10" />
        </motion.div>
      )}
    </motion.div>
  );
};

export default ContactDetailedCard;
