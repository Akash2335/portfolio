import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useMemo, useCallback, memo } from "react";
import useScrollDirection from "./useScrollDirection";

// Memoized animation variants to prevent recreation on every render
const ANIMATION_VARIANTS = {
  "fade-up": {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  "fade-down": {
    hidden: { opacity: 0, y: -50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  "slide-left": {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1 },
  },
  "slide-right": {
    hidden: { opacity: 0, x: -50, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1 },
  },
  "fade-in": {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  "zoom-in": {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  },
  "bounce-in": {
    hidden: { opacity: 0, y: 100, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  },
  "stagger-fade": {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  },
};

// Predefined easing functions
const EASING_FUNCTIONS = {
  easeOut: [0.25, 0.46, 0.45, 0.94],
  easeInOut: [0.42, 0, 0.58, 1],
  sharp: [0.4, 0, 0.6, 1],
  smooth: [0.65, 0, 0.35, 1],
};

const ScrollReveal = memo(function ScrollReveal({
  children,
  animation = "fade-up",
  threshold = 0.1, // Reduced threshold for better performance
  delay = 0,
  duration = 0.6, // Reduced default duration
  triggerOnce = true,
  staggerChildren = 0,
  scale = 1,
  distance = 50,
  easing = "easeOut",
  className = "",
  onReveal,
  reset = false,
  enableHover = false, // Added option to disable hover effects
}) {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce,
    threshold,
    rootMargin: "-30px 0px", // Reduced margin for better performance
  });

  const scrollDirection = useScrollDirection();
  const [hasAnimated, setHasAnimated] = useState(false);

  // Memoized variant with custom distance and scale
  const variant = useMemo(() => {
    const baseVariant =
      ANIMATION_VARIANTS[animation] || ANIMATION_VARIANTS["fade-up"];

    if (distance !== 50 || scale !== 1) {
      return {
        hidden: {
          ...baseVariant.hidden,
          ...(baseVariant.hidden.x !== undefined && {
            x: baseVariant.hidden.x > 0 ? distance : -distance,
          }),
          ...(baseVariant.hidden.y !== undefined && {
            y: baseVariant.hidden.y > 0 ? distance : -distance,
          }),
          scale: baseVariant.hidden.scale !== undefined ? scale - 0.05 : scale,
        },
        visible: {
          ...baseVariant.visible,
          scale: scale,
        },
      };
    }

    return baseVariant;
  }, [animation, distance, scale]);

  // Memoized transition configuration
  const transition = useMemo(() => {
    if (animation === "bounce-in") {
      return {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay,
      };
    }

    if (animation === "stagger-fade") {
      return {
        staggerChildren: staggerChildren || 0.1,
        delayChildren: delay,
      };
    }

    return {
      duration: Math.min(duration, 0.8), // Cap duration for performance
      ease: EASING_FUNCTIONS[easing] || EASING_FUNCTIONS.easeOut,
      delay,
    };
  }, [animation, duration, easing, delay, staggerChildren]);

  const handleReveal = useCallback(async () => {
    try {
      await controls.start("visible");
      onReveal?.();
      setHasAnimated(true);
    } catch (error) {
      // Silent fail for animation errors
      console.warn("ScrollReveal animation error:", error);
    }
  }, [controls, onReveal]);

  const handleReset = useCallback(async () => {
    try {
      await controls.start("hidden");
      setHasAnimated(false);
    } catch (error) {
      console.warn("ScrollReveal reset error:", error);
    }
  }, [controls]);

  // Optimized effect with reduced complexity
  useEffect(() => {
    if (inView && (!hasAnimated || !triggerOnce)) {
      handleReveal();
    }

    if (!inView && reset && hasAnimated) {
      handleReset();
    }
  }, [inView, hasAnimated, triggerOnce, reset, handleReveal, handleReset]);

  // Remove scroll direction and mobile detection for simplicity
  // These added significant complexity with minimal benefit

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variant}
      transition={transition}
      className={`scroll-reveal ${className}`}
      whileHover={
        enableHover
          ? {
              scale: 1.02,
              transition: { duration: 0.2 },
            }
          : undefined
      }
      // Reduce motion preference support
      onAnimationStart={(definition) => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          controls.stop();
          controls.set("visible");
        }
      }}
    >
      {children}
    </motion.div>
  );
});

// Memoized preset components
export const FadeUp = memo((props) => (
  <ScrollReveal animation="fade-up" {...props} />
));
FadeUp.displayName = "FadeUp";

export const SlideLeft = memo((props) => (
  <ScrollReveal animation="slide-left" {...props} />
));
SlideLeft.displayName = "SlideLeft";

export const SlideRight = memo((props) => (
  <ScrollReveal animation="slide-right" {...props} />
));
SlideRight.displayName = "SlideRight";

export const ZoomIn = memo((props) => (
  <ScrollReveal animation="zoom-in" {...props} />
));
ZoomIn.displayName = "ZoomIn";

export const BounceIn = memo((props) => (
  <ScrollReveal animation="bounce-in" {...props} />
));
BounceIn.displayName = "BounceIn";

export const StaggerReveal = memo(({ children, ...props }) => (
  <ScrollReveal animation="stagger-fade" {...props}>
    {children}
  </ScrollReveal>
));
StaggerReveal.displayName = "StaggerReveal";

export default ScrollReveal;
