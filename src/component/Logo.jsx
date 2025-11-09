import { motion } from "framer-motion";
import { BiLogoGraphql } from "react-icons/bi";
import { useState } from "react";

const Logo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Main Logo with Simple Animation */}
      <motion.div
        animate={{
          rotate: isHovered ? 360 : 0,
          color: isHovered ? "#8B5CF6" : "#FFFFFF",
        }}
        transition={{
          rotate: { duration: 0.8, ease: "easeInOut" },
          color: { duration: 0.3 },
        }}
      >
        <BiLogoGraphql
          className="text-4xl md:text-5xl transition-all duration-300"
          style={{
            filter: isHovered
              ? "drop-shadow(0 0 10px rgba(139, 92, 246, 0.5))"
              : "none",
          }}
        />
      </motion.div>

      {/* Simple Tooltip */}
      {isHovered && (
        <motion.div
          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Back to Top
        </motion.div>
      )}
    </motion.div>
  );
};

export default Logo;
