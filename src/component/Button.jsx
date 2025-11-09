import React, { useContext, useState } from "react";
import { twMerge } from "tailwind-merge";
import { CommonContext } from "../contens";
import { motion, AnimatePresence } from "framer-motion";

const Button = ({
  children,
  variant = "primary",
  className,
  isDownload = false,
  href = "#",
  target = "_blank",
  event,
  disabled = false,
  loading = false,
  size = "medium",
  icon,
  iconPosition = "left",
}) => {
  const { setToster } = useContext(CommonContext);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const sizes = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
  };

  const variants = {
    primary: `
      bg-gradient-to-r from-purple-600 to-cyan-600 
      hover:from-purple-700 hover:to-cyan-700
      text-white border-0
      shadow-lg hover:shadow-purple-500/25
    `,
    outline: `
      bg-transparent text-purple-400 
      border-2 border-purple-400 
      hover:bg-purple-500 hover:text-white
      hover:border-purple-500
      backdrop-blur-sm
    `,
    ghost: `
      bg-white/10 text-white/90 
      border border-white/20
      hover:bg-white/20 hover:border-white/30
      backdrop-blur-sm
    `,
    success: `
      bg-gradient-to-r from-green-600 to-emerald-600 
      hover:from-green-700 hover:to-emerald-700
      text-white border-0
      shadow-lg hover:shadow-green-500/25
    `,
  };

  const mergedClasses = twMerge(
    `relative rounded-2xl font-semibold transition-all duration-300 
     overflow-hidden group flex items-center justify-center gap-3
     disabled:opacity-50 disabled:cursor-not-allowed
     focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900
     ${sizes[size]} ${variants[variant]}`,
    className
  );

  const handleDownloadClick = async (e) => {
    if (disabled || loading) return;

    e.preventDefault();

    // Show success message
    setToster({
      Message:
        "📄 Resume downloaded successfully! Please check your downloads.",
      close: true,
      variant: "success",
    });

    // Start download with delay for better UX
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = href;
      link.download = true;
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 500);
  };

  const buttonContent = (
    <>
      {/* Background Glow Effect */}
      <motion.div
        className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        animate={{
          scale: isHovered ? [1, 1.1, 1] : 1,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Shine Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
        initial={false}
        animate={{ x: isHovered ? "200%" : "-100%" }}
      />

      {/* Loading Spinner */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="absolute inset-0 bg-inherit rounded-2xl flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button Content */}
      <motion.span
        className={`relative z-10 flex items-center gap-2 transition-all duration-200 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
        animate={{
          x: isPressed ? [0, 2, 0] : 0,
        }}
        transition={{ duration: 0.1 }}
      >
        {/* Icon */}
        {icon && iconPosition === "left" && (
          <motion.span
            animate={{
              scale: isHovered ? [1, 1.2, 1] : 1,
              rotate: isHovered ? [0, -10, 0] : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            {icon}
          </motion.span>
        )}

        {/* Text */}
        {children}

        {/* Icon */}
        {icon && iconPosition === "right" && (
          <motion.span
            animate={{
              scale: isHovered ? [1, 1.2, 1] : 1,
              rotate: isHovered ? [0, 10, 0] : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            {icon}
          </motion.span>
        )}

        {/* Download Icon Animation */}
        {isDownload && !loading && (
          <motion.span
            animate={{
              y: isHovered ? [0, -2, 0] : 0,
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ⬇️
          </motion.span>
        )}
      </motion.span>

      {/* Ripple Effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100"
        initial={false}
        animate={{ scale: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </>
  );

  // Common button props
  const commonProps = {
    className: mergedClasses,
    disabled: disabled || loading,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => {
      setIsHovered(false);
      setIsPressed(false);
    },
    onMouseDown: () => setIsPressed(true),
    onMouseUp: () => setIsPressed(false),
    whileHover: { scale: disabled ? 1 : 1.02 },
    whileTap: { scale: disabled ? 1 : 0.98 },
  };

  if (isDownload) {
    return (
      <motion.a
        href={disabled ? undefined : href}
        target={target}
        rel="noopener noreferrer"
        onClick={handleDownloadClick}
        {...commonProps}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={event} {...commonProps}>
      {buttonContent}
    </motion.button>
  );
};

export default Button;
