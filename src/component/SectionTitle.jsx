import { motion, useMotionValue, useTransform } from "framer-motion";
import { memo, useRef } from "react";

const SectionTitle = memo(({ title, className = "", subtitle = "" }) => {
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-100, 100], [2, -2]);
  const rotateY = useTransform(mouseX, [-100, 100], [-2, 2]);

  const handleMouseMove = (event) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

  return (
    <motion.div
      className="text-center space-y-4"
      ref={ref}
      onMouseMove={handleMouseMove}
    >
      {/* Subtitle (optional) */}
      {subtitle && (
        <motion.p
          className="text-cyan-400/80 text-sm uppercase tracking-widest font-light"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Main Title */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="inline-block perspective-1000"
      >
        <motion.h1
          className={`${className} inline-block pb-4 font-serif font-bold text-white uppercase tracking-widest relative group cursor-default`}
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, type: "spring" }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 },
          }}
        >
          {/* Gradient Text */}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            {title}
          </span>

          {/* Animated Border */}
          <motion.div
            className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          {/* Floating Particles */}
          <motion.div
            className="absolute -inset-4 bg-gradient-to-r from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-500 -z-10"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-lg" />
        </motion.h1>
      </motion.div>

      {/* Decorative Line */}
      <motion.div
        className="w-20 h-0.5 bg-gradient-to-r from-cyan-400/50 to-purple-500/50 rounded-full mx-auto"
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 80, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      />
    </motion.div>
  );
});

SectionTitle.displayName = "SectionTitle";

export default SectionTitle;
