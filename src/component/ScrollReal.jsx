import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import useScrollDirection from "./useScrollDirection"; // adjust path if needed

export default function ScrollReveal({
  children,
  animation = "fade-up",
  threshold = 0.3,
  delay = 0,
}) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false, threshold });
  const scrollDirection = useScrollDirection();
  const [hasAnimated, setHasAnimated] = useState(false);

  const variants = {
    "fade-up": {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    "fade-down": {
      hidden: { opacity: 0, y: -40 },
      visible: { opacity: 1, y: 0 },
    },
    "slide-left": {
      hidden: { opacity: 0, x: 100 },
      visible: { opacity: 1, x: 0 },
    },
    "slide-right": {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 },
    },
    "fade-in": {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
  };

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start("visible");
      setHasAnimated(true);
    }

    // Optionally re-animate on reverse scroll
    if (inView && scrollDirection === "up" && !hasAnimated) {
      controls.start("visible");
      setHasAnimated(true);
    }

    // Optional: Reset animation when not in view
    // if (!inView) {
    //   controls.start("hidden");
    //   setHasAnimated(false);
    // }
  }, [inView, scrollDirection, controls, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.8, ease: "easeInOut", delay }}
      variants={variants[animation]}
    >
      {children}
    </motion.div>
  );
}
