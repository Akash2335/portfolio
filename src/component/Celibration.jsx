import React, { useContext, useEffect, useRef, useMemo } from "react";
import { CommonContext } from "../contens";
import { motion, AnimatePresence } from "framer-motion";

const ConfettiBlast = () => {
  const { closeToster, setToster } = useContext(CommonContext);
  const { Message, variant, close } = closeToster || {};
  const confettiRef = useRef(null);

  // Memoized confetti configuration for better performance
  const confettiConfig = useMemo(
    () => ({
      count: 150, // Reduced for better performance
      colors: [
        "bg-gradient-to-b from-purple-500 to-purple-600",
        "bg-gradient-to-b from-cyan-400 to-cyan-500",
        "bg-gradient-to-b from-pink-500 to-pink-600",
        "bg-gradient-to-b from-yellow-400 to-yellow-500",
        "bg-gradient-to-b from-green-400 to-green-500",
        "bg-gradient-to-b from-blue-500 to-blue-600",
        "bg-gradient-to-b from-indigo-500 to-indigo-600",
        "bg-gradient-to-b from-teal-400 to-teal-500",
      ],
      shapes: ["■", "●", "▲", "♦", "★", "♥"],
    }),
    []
  );

  // Auto-close confetti after animation
  useEffect(() => {
    if (close) {
      const timer = setTimeout(() => {
        setToster((prev) => ({ ...prev, close: false }));
      }, 4000); // Match animation duration

      return () => clearTimeout(timer);
    }
  }, [close, setToster]);

  const confettiVariants = {
    hidden: {
      opacity: 0,
      y: -100,
      scale: 0,
    },
    visible: (i) => ({
      opacity: [0, 1, 1, 0],
      y: [0, Math.random() * 500 + 200],
      x: [0, (Math.random() - 0.5) * 200],
      scale: [0, 1, 1, 0],
      rotate: [0, Math.random() * 360],
      transition: {
        duration: 2 + Math.random() * 2,
        delay: i * 0.01,
        ease: [0.2, 0.8, 0.2, 1],
        opacity: {
          duration: 2 + Math.random() * 2,
          times: [0, 0.1, 0.8, 1],
        },
      },
    }),
  };

  // Generate confetti pieces with optimized performance
  const confettiPieces = useMemo(
    () =>
      Array.from({ length: confettiConfig.count }, (_, i) => {
        const color =
          confettiConfig.colors[
            Math.floor(Math.random() * confettiConfig.colors.length)
          ];
        const shape =
          confettiConfig.shapes[
            Math.floor(Math.random() * confettiConfig.shapes.length)
          ];
        const size = 8 + Math.random() * 12;

        return {
          id: i,
          color,
          shape,
          size,
          x: Math.random() * 100,
          delay: Math.random() * 1.5,
        };
      }),
    [confettiConfig]
  );

  if (!close) return null;

  return (
    <AnimatePresence>
      {close && (
        <motion.div
          ref={confettiRef}
          className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Background Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-cyan-500/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />

          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            {/* Floating Circles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`circle-${i}`}
                className="absolute w-4 h-4 border-2 border-purple-400/30 rounded-full"
                style={{
                  left: `${20 + i * 10}%`,
                  top: `${30 + (i % 3) * 20}%`,
                }}
                animate={{
                  scale: [0, 1.5, 0],
                  opacity: [0, 0.5, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Main Confetti Particles */}
          <div className="relative w-full h-full">
            {confettiPieces.map((piece) => (
              <motion.div
                key={piece.id}
                className={`absolute ${piece.color} rounded-sm flex items-center justify-center text-white text-xs font-bold shadow-lg`}
                style={{
                  left: `${piece.x}%`,
                  width: `${piece.size}px`,
                  height: `${piece.size}px`,
                  fontSize: `${piece.size * 0.6}px`,
                }}
                custom={piece.id}
                variants={confettiVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {piece.shape}
              </motion.div>
            ))}
          </div>

          {/* Center Celebration Effect */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.2,
            }}
          >
            <div className="relative">
              {/* Main Celebration Icon */}
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                🎉
              </motion.div>

              {/* Orbiting Elements */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`orbit-${i}`}
                  className="absolute w-6 h-6 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-full flex items-center justify-center text-white text-xs"
                  style={{
                    left: "50%",
                    top: "50%",
                  }}
                  animate={{
                    x: [0, Math.cos((i * 60 * Math.PI) / 180) * 60],
                    y: [0, Math.sin((i * 60 * Math.PI) / 180) * 60],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  ✨
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Success Message */}
          {Message && (
            <motion.div
              className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 text-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <div className="bg-white/10 backdrop-blur-2xl rounded-2xl px-6 py-4 border border-white/20 shadow-2xl">
                <motion.p
                  className="text-white text-lg font-semibold"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  {Message}
                </motion.p>
                <motion.p
                  className="text-white/60 text-sm mt-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  Congratulations! 🚀
                </motion.p>
              </div>
            </motion.div>
          )}

          {/* Close Button */}
          <motion.button
            className="absolute top-8 right-8 bg-white/10 backdrop-blur-2xl rounded-xl p-3 border border-white/20 text-white hover:bg-white/20 transition-colors duration-200 shadow-lg"
            onClick={() => setToster((prev) => ({ ...prev, close: false }))}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring" }}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConfettiBlast;
