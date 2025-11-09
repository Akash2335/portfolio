import React, { useState, useEffect } from "react";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { menuItems } from "../contens"; 
import Button from "../component/Button";
import MobileMenu from "../component/MobileMenu";
import Logo from "../component/Logo";
import { motion, AnimatePresence } from "framer-motion";

const Header = ({ menuOpen, setMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = menuItems.map((item) => item.href.replace("#", ""));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoVariants = {
    hidden: { scale: 0, opacity: 0, rotate: -180 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 120,
      },
    },
  };

  const menuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        ease: "easeOut",
      },
    },
  };

  const menuItemVariants = {
    hidden: {
      y: -30,
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
      x: 50,
    },
    visible: {
      scale: 1,
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  const menuButtonVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
      rotate: 90,
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 150,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const navVariants = {
    initial: { y: -100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    scrolled: {
      backdropFilter: "blur(20px)",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      borderColor: "rgba(255, 255, 255, 0.2)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const handleNavClick = (href, event) => {
    event.preventDefault();
    const targetId = href.replace("#", "");
    console.log("Navigating to:", targetId);

    const element = document.getElementById(targetId);
    console.log("Element found:", element);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      // Adjust for fixed header after a short delay
      setTimeout(() => {
        window.scrollBy(0, -80);
      }, 100);
    } else {
      console.log("Element not found for id:", targetId);
    }

    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className="fixed top-0 z-50 w-full px-4 py-3"
        initial="initial"
        animate={[isScrolled ? "scrolled" : "animate", "animate"]}
        variants={navVariants}
      >
        <motion.nav
          className="container mx-auto flex items-center justify-between rounded-2xl border-2 border-white/10 bg-white/5 p-3 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/10"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          {/* Logo */}
          <motion.div
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Logo />
          </motion.div>

          {/* Desktop Menu */}
          <motion.ul
            className="hidden md:flex items-center space-x-1 lg:space-x-6"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
          >
            {menuItems.map((item) => (
              <motion.li key={item.href} variants={menuItemVariants}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(item.href, e)}
                  className={`nav-item relative px-4 py-2 rounded-xl transition-all duration-300 ${
                    activeSection === item.href.replace("#", "")
                      ? "text-white bg-white/10 shadow-lg shadow-white/10"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {item.label}
                  {activeSection === item.href.replace("#", "") && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              </motion.li>
            ))}
          </motion.ul>

          {/* Contact Button */}
          <motion.div
            className="hidden md:block"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          >
            <Button variant="outline" whileHover="hover">
              Contact Me
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            variants={menuButtonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            className="relative p-3 text-3xl text-white md:hidden transition-all duration-300 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/20 hover:border-white/20"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={menuOpen}
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <BiX />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <BiMenuAltRight />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.nav>
      </motion.header>

      {/* Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={() => setMenuOpen(false)}
            aria-label="Close Menu"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <MobileMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        menuItems={menuItems}
        activeSection={activeSection}
        onNavClick={handleNavClick}
      />
    </>
  );
};

export default Header;
