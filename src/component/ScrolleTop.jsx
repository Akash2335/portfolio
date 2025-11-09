import { useEffect, useState, useCallback, memo } from "react";
import { FaArrowUp } from "react-icons/fa";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const ScrollToTopButton = memo(() => {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  // Smooth progress value
  const smoothProgress = useSpring(progress, {
    damping: 20,
    stiffness: 100,
  });

  // Rotate based on progress
  const rotate = useTransform(smoothProgress, [0, 100], [0, 360]);

  const toggleVisible = useCallback(() => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = (scrollTop / docHeight) * 100;

    setVisible(scrollTop > 300);
    setProgress(scrollProgress);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      toggleVisible();
    };

    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [toggleVisible]);

  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      y: 50,
      rotate: -180,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
    hover: {
      // ✅ ADDED MISSING HOVER VARIANT
      scale: 1.1,
      y: -2,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      // ✅ ADDED MISSING TAP VARIANT
      scale: 0.9,
      transition: {
        duration: 0.1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
      y: 50,
      rotate: 180,
      transition: {
        duration: 0.3,
      },
    },
  };

  const pulseVariants = {
    initial: { scale: 1 },
    pulse: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl shadow-2xl bg-gradient-to-br from-cyan-500 via-purple-500 to-fuchsia-500 text-white backdrop-blur-xl border border-white/20 hover:shadow-cyan-500/25 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 group"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          whileHover="hover" // ✅ NOW THIS WILL WORK
          whileTap="tap" // ✅ NOW THIS WILL WORK
          aria-label="Scroll to top"
          style={{ rotate }}
        >
          {/* Progress Ring */}
          <motion.div
            className="absolute -inset-1 rounded-2xl border-2 border-cyan-400/30"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Main Icon */}
          <motion.div
            variants={pulseVariants}
            initial="initial"
            animate="pulse"
            className="relative z-10"
          >
            <FaArrowUp className="text-sm" />
          </motion.div>

          {/* Tooltip */}
          <motion.div
            className="absolute right-full mr-3 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
            initial={{ opacity: 0, x: 10 }}
            whileHover={{ opacity: 1, x: 0 }}
          >
            Scroll to Top
            <div className="absolute top-1/2 left-full -mt-1 border-4 border-transparent border-l-gray-900" />
          </motion.div>

          {/* Progress Indicator */}
          <motion.div
            className="absolute -bottom-1 left-1/2 w-16 h-1 bg-gray-700/30 rounded-full overflow-hidden -translate-x-1/2"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 rounded-full"
              style={{ scaleX: smoothProgress }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
});

ScrollToTopButton.displayName = "ScrollToTopButton";

export default ScrollToTopButton;
