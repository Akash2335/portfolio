import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, memo } from "react";
import { menuItems } from "../contens";

const AsideVertical = memo(() => {
  const [activeSection, setActiveSection] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  // Memoized scroll handler
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY + 100;

    for (const item of menuItems) {
      const sectionId = item.href.substring(1);
      const section = document.getElementById(sectionId);

      if (section) {
        const { offsetTop, offsetHeight } = section;
        if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
          setActiveSection(sectionId);
          break;
        }
      }
    }
  }, []);

  // Track active section based on scroll
  useEffect(() => {
    // Throttled scroll handler
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
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", throttledScroll);
  }, [handleScroll]);

  // Memoized click handler
  const handleNavClick = useCallback((href) => {
    const target = document.getElementById(href.substring(1));
    target?.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Memoized animation variants
  const containerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        type: "spring",
        stiffness: 200,
      },
    }),
    hover: { scale: 1.2 },
    active: { scale: 1.3 },
  };

  // Memoized event handlers
  const handleHoverStart = useCallback(() => setIsHovered(true), []);
  const handleHoverEnd = useCallback(() => setIsHovered(false), []);

  return (
    <motion.div
      className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      {/* Main Navigation Container */}
      <div className="relative">
        {/* Background Glass Morphism */}
        <motion.div
          className="absolute -inset-4 bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl"
          animate={{
            opacity: isHovered ? 1 : 0.7,
            scale: isHovered ? 1.02 : 1,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Connection Line */}
        <motion.div
          className="absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-purple-500/50 via-cyan-500/50 to-transparent"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Navigation Items */}
        <div className="relative py-6 flex flex-col items-center gap-6">
          {menuItems.map((item, index) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;

            return (
              <motion.a
                key={item.label}
                href={item.href}
                custom={index}
                variants={itemVariants}
                initial="hidden"
                animate={isActive ? "active" : "visible"}
                whileHover="hover"
                className="relative group cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {/* Active Indicator Pulse */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      className="absolute -inset-2 bg-purple-500/20 rounded-full"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>

                {/* Navigation Dot */}
                <motion.div
                  className={`w-2.5 h-2.5 rounded-full border-2 relative z-10 ${
                    isActive
                      ? "bg-gradient-to-br from-purple-500 to-cyan-500 border-transparent"
                      : "bg-white/30 border-white/50 hover:border-white/80"
                  } transition-all duration-300`}
                  whileHover={{
                    backgroundColor: "rgba(139, 92, 246, 0.8)",
                    borderColor: "transparent",
                  }}
                />

                {/* Tooltip Label */}
                <motion.div
                  className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200"
                  initial={{ x: 8 }}
                  whileHover={{ x: 0 }}
                >
                  <div className="bg-slate-900/90 backdrop-blur-sm text-white text-xs px-2 py-1.5 rounded-lg border border-white/10 shadow-xl whitespace-nowrap">
                    {item.label}
                    {/* Tooltip Arrow */}
                    <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-slate-900/90" />
                  </div>
                </motion.div>

                {/* Connection Node - Only show when active */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full border border-purple-500/30"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  )}
                </AnimatePresence>
              </motion.a>
            );
          })}
        </div>

        {/* Scroll Progress Indicator */}
        <motion.div
          className="absolute -left-10 top-1/2 transform -translate-y-1/2 hidden xl:flex flex-col items-center gap-3"
          animate={{
            opacity: isHovered ? 1 : 0.3,
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div className="w-1 h-24 bg-gradient-to-b from-purple-500/60 to-cyan-500/60 rounded-full relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-white/20 rounded-full"
              animate={{
                y: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
          <motion.span
            className="text-white/60 text-[10px] uppercase tracking-widest rotate-180 whitespace-nowrap [writing-mode:vertical-rl]"
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Navigate
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
});

AsideVertical.displayName = "AsideVertical";

export default AsideVertical;
