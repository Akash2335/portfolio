import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { useState, useMemo, useCallback, memo } from "react";

const AnimatedIcon = memo(
  ({
    Icon,
    className,
    size = 24,
    variant = "default",
    color = "default",
    pulse = true,
    floating = true,
    hoverEffect = true,
    onClick,
    tooltip,
    delay = 0,
  }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    // Memoized color schemes
    const colorSchemes = useMemo(
      () => ({
        default: "text-white/80",
        primary: "text-purple-400",
        secondary: "text-cyan-400",
        accent: "text-pink-400",
        success: "text-green-400",
        warning: "text-yellow-400",
        gradient:
          "text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text",
      }),
      []
    );

    // Memoized size classes
    const sizeClasses = useMemo(
      () => ({
        sm: "text-2xl",
        md: "text-3xl",
        lg: "text-4xl",
        xl: "text-5xl",
      }),
      []
    );

    // Memoized animation variants
    const containerVariants = useMemo(
      () => ({
        initial: {
          scale: 0,
          opacity: 0,
          rotate: -180,
        },
        animate: (delay) => ({
          scale: 1,
          opacity: 1,
          rotate: 0,
          transition: {
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: delay * 0.1,
          },
        }),
        hover: {
          scale: 1.15, // Reduced from 1.2 for better performance
          rotate: 360,
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 10,
          },
        },
        tap: {
          scale: 0.9,
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 10,
          },
        },
      }),
      []
    );

    const floatVariants = useMemo(
      () => ({
        animate: {
          y: [0, -8, 0], // Reduced movement for better performance
          transition: {
            duration: 4, // Slower for better performance
            repeat: Infinity,
            ease: "easeInOut",
          },
        },
      }),
      []
    );

    const pulseVariants = useMemo(
      () => ({
        animate: {
          scale: [1, 1.05, 1], // Reduced scale for better performance
          opacity: [0.8, 1, 0.8],
          transition: {
            duration: 3, // Slower for better performance
            repeat: Infinity,
            ease: "easeInOut",
          },
        },
      }),
      []
    );

    const glowVariants = useMemo(
      () => ({
        initial: {
          opacity: 0,
          scale: 0.8,
        },
        hover: {
          opacity: 0.8, // Reduced opacity for better performance
          scale: 1.1, // Reduced scale for better performance
          transition: {
            duration: 0.3,
          },
        },
      }),
      []
    );

    // Memoized event handlers
    const handleHoverStart = useCallback(() => setIsHovered(true), []);
    const handleHoverEnd = useCallback(() => setIsHovered(false), []);
    const handleMouseDown = useCallback(() => setIsPressed(true), []);
    const handleMouseUp = useCallback(() => setIsPressed(false), []);
    const handleMouseLeave = useCallback(() => setIsPressed(false), []);

    // Memoized particles
    const particles = useMemo(
      () =>
        Array.from({ length: 2 }, (_, i) => ({
          // Reduced from 3 to 2 particles
          id: i,
          delay: i * 0.1,
          x: 50 + (Math.random() - 0.5) * 80,
          y: 50 + (Math.random() - 0.5) * 80,
        })),
      []
    );

    const sizeValue = useMemo(
      () => (typeof size === "string" ? sizeClasses[size] || "text-3xl" : ""),
      [size, sizeClasses]
    );

    const iconClasses = useMemo(
      () =>
        twMerge(
          "transition-all duration-300",
          sizeValue,
          colorSchemes[color],
          isHovered && "drop-shadow-lg",
          isPressed && "scale-90"
        ),
      [sizeValue, colorSchemes, color, isHovered, isPressed]
    );

    return (
      <motion.div
        className={twMerge("relative group cursor-pointer", className)}
        variants={containerVariants}
        initial="initial"
        animate="animate"
        whileHover={hoverEffect ? "hover" : undefined}
        whileTap={onClick ? "tap" : undefined}
        custom={delay}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
      >
        {/* Background Glow Effect */}
        <motion.div
          className="absolute -inset-2 bg-gradient-to-r from-purple-500/15 to-cyan-500/15 rounded-full blur-sm" // Reduced blur and opacity
          variants={glowVariants}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
        />

        {/* Main Icon Container */}
        <div className="relative z-10">
          {/* Floating Animation */}
          <motion.div
            variants={floating ? floatVariants : {}}
            animate={floating ? "animate" : undefined}
          >
            {/* Pulse Animation */}
            <motion.div
              variants={pulse ? pulseVariants : {}}
              animate={pulse ? "animate" : undefined}
            >
              <Icon
                className={iconClasses}
                size={typeof size === "number" ? size : undefined}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Ripple Effect on Click */}
        {onClick && (
          <motion.div
            className="absolute inset-0 rounded-full bg-white/20"
            initial={{ scale: 0, opacity: 0 }}
            animate={isPressed ? { scale: 1.5, opacity: 0 } : {}}
            transition={{ duration: 0.4 }}
          />
        )}

        {/* Tooltip */}
        {tooltip && (
          <motion.div
            className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-20"
            initial={{ y: 8 }}
            whileHover={{ y: 0 }}
          >
            <div className="bg-slate-900/90 backdrop-blur-sm text-white text-xs px-2 py-1 rounded border border-white/10 shadow-lg whitespace-nowrap">
              {tooltip}
              {/* Tooltip Arrow */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-900/90" />
            </div>
          </motion.div>
        )}

        {/* Connection Lines - Only render when needed */}
        {isHovered && (
          <motion.svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 0.3 }}
          >
            <motion.path
              d="M50%,50% L70%,30%"
              stroke="url(#connectionGradient)"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5 }}
            />
            <defs>
              <linearGradient
                id="connectionGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
          </motion.svg>
        )}

        {/* Particle Effects - Only render when hovered */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                initial={{
                  scale: 0,
                  opacity: 1,
                  x: "50%",
                  y: "50%",
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [1, 0.5, 0],
                  x: ["50%", `${particle.x}%`],
                  y: ["50%", `${particle.y}%`],
                }}
                transition={{
                  duration: 1,
                  delay: particle.delay,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>
        )}
      </motion.div>
    );
  }
);

// Enhanced version with preset configurations
export const TechIcon = memo(({ technology, ...props }) => {
  const techConfigs = useMemo(
    () => ({
      react: {
        color: "primary",
        tooltip: "React.js",
        floating: true,
      },
      node: {
        color: "success",
        tooltip: "Node.js",
        pulse: true,
      },
      python: {
        color: "secondary",
        tooltip: "Python",
        hoverEffect: true,
      },
      aws: {
        color: "warning",
        tooltip: "AWS Cloud",
      },
      javascript: {
        color: "warning",
        tooltip: "JavaScript",
        pulse: true,
      },
      typescript: {
        color: "primary",
        tooltip: "TypeScript",
        floating: true,
      },
      html: {
        color: "accent",
        tooltip: "HTML5",
      },
      css: {
        color: "secondary",
        tooltip: "CSS3",
      },
      git: {
        color: "accent",
        tooltip: "Git",
      },
    }),
    []
  );

  const config = techConfigs[technology] || {};

  return <AnimatedIcon {...config} {...props} />;
});

TechIcon.displayName = "TechIcon";
AnimatedIcon.displayName = "AnimatedIcon";

export default AnimatedIcon;
