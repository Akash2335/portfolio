import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";

const CLOSE = ({ className = "", size = 24, onClick, variant = "default" }) => {
  // Variant styles
  const variants = {
    default: {
      icon: "text-white/70 hover:text-white",
      background: "hover:bg-white/10",
      border: "border-white/10 hover:border-white/20",
    },
    ghost: {
      icon: "text-white/50 hover:text-white",
      background: "hover:bg-white/5",
      border: "border-transparent",
    },
    solid: {
      icon: "text-white",
      background: "bg-white/10 hover:bg-white/20",
      border: "border-white/20",
    },
    gradient: {
      icon: "text-white",
      background:
        "bg-gradient-to-r from-purple-500/20 to-cyan-500/20 hover:from-purple-500/30 hover:to-cyan-500/30",
      border: "border-purple-500/30 hover:border-cyan-500/50",
    },
  };

  const currentVariant = variants[variant] || variants.default;

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { scale: 1.1, rotate: 90 },
    tap: { scale: 0.9, rotate: 180 },
  };

  const containerVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <motion.button
      className={`
        relative group p-2 rounded-xl border backdrop-blur-sm
        transition-all duration-200 ease-out
        ${currentVariant.background}
        ${currentVariant.border}
        ${className}
      `}
      variants={containerVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
      aria-label="Close"
    >
      {/* Background Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-cyan-500/0 rounded-xl blur-sm group-hover:from-purple-500/20 group-hover:to-cyan-500/20 transition-all duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />

      {/* Animated Icon */}
      <motion.div
        className={`relative z-10 ${currentVariant.icon}`}
        variants={iconVariants}
        transition={{
          rotate: { type: "spring", stiffness: 200, damping: 10 },
          scale: { type: "spring", stiffness: 400, damping: 10 },
        }}
      >
        <RxCross2 size={size} />

        {/* Ripple Effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-white/20"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Tooltip */}
      <motion.div
        className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-900/90 backdrop-blur-md text-white text-xs px-2 py-1 rounded-md border border-white/10 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200"
        initial={{ y: 5 }}
        whileHover={{ y: 0 }}
      >
        Close
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-900/90 rotate-45 border-b border-r border-white/10" />
      </motion.div>
    </motion.button>
  );
};

// Enhanced CLOSE component with additional features
export const CLOSE_ENHANCED = ({
  className = "",
  size = 24,
  onClick,
  variant = "default",
  withPulse = false,
  withOrbital = false,
  label = "Close",
}) => {
  return (
    <motion.div className="relative inline-block">
      {/* Orbital Rings */}
      {withOrbital && (
        <>
          <motion.div
            className="absolute inset-0 border border-purple-500/30 rounded-xl"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute inset-0 border border-cyan-500/20 rounded-xl"
            animate={{
              rotate: -360,
              scale: [1.1, 1, 1.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              delay: 1,
            }}
          />
        </>
      )}

      {/* Pulsing Effect */}
      {withPulse && (
        <motion.div
          className="absolute inset-0 bg-cyan-500/20 rounded-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      <CLOSE
        className={className}
        size={size}
        onClick={onClick}
        variant={variant}
      />
    </motion.div>
  );
};

export default CLOSE;
