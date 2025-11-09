import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import Logo from "./Logo";
import CLOSE from "./Close";

const MobileMenu = ({ menuOpen, setMenuOpen, menuItems }) => {
  const menuVariants = {
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 300,
        duration: 0.5,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 300,
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: {
      x: -50,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  const backdropVariants = {
    closed: {
      opacity: 0,
      pointerEvents: "none",
      transition: {
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      pointerEvents: "auto",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <AnimatePresence>
      {menuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            variants={backdropVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={() => setMenuOpen(false)}
          />

          {/* Menu Panel */}
          <motion.div
            className="fixed left-0 top-0 z-50 h-full w-80 max-w-[85vw] border-r border-white/10 bg-slate-900/95 backdrop-blur-2xl shadow-2xl"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Header */}
            <div className="relative p-6 border-b border-white/10">
              {/* Close Button */}
              <motion.button
                className="absolute right-4 top-4 text-white/70 hover:text-white transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <CLOSE size={24} variant="ghost" />
              </motion.button>

              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Logo />
              </motion.div>

              {/* Welcome Text */}
              <motion.p
                className="text-white/60 text-sm mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Welcome to my portfolio
              </motion.p>
            </div>

            {/* Navigation */}
            <nav className="p-6">
              <motion.ul className="space-y-2">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    variants={itemVariants}
                    whileHover={{
                      x: 10,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href={item.href}
                      className="flex items-center gap-4 px-4 py-3 text-white/80 hover:text-white rounded-xl hover:bg-white/5 transition-all duration-200 group"
                      onClick={() => setMenuOpen(false)}
                    >
                      {/* Animated Dot Indicator */}
                      <motion.div
                        className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                      />

                      <span className="font-medium text-lg group-hover:translate-x-1 transition-transform duration-200">
                        {item.label}
                      </span>

                      {/* Hover Arrow */}
                      <motion.span
                        className="ml-auto text-cyan-400 opacity-0 group-hover:opacity-100"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        →
                      </motion.span>
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </nav>

            {/* Contact Section */}
            <motion.div
              className="absolute bottom-6 left-6 right-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl p-4 border border-white/10">
                <p className="text-white/60 text-sm mb-3 text-center">
                  Ready to start a project?
                </p>
                <Button
                  variant="outline"
                  className="w-full py-3 border-2 border-purple-400 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 backdrop-blur-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="flex items-center justify-center gap-2">
                    💼 Contact Me
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                </Button>
              </div>

              {/* Social/Info Footer */}
              <motion.div
                className="text-center mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <p className="text-white/40 text-xs">
                  Let's build something amazing
                </p>
              </motion.div>
            </motion.div>

            {/* Background Effects */}
            <div className="absolute inset-0 -z-10 opacity-10">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-cyan-500 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
