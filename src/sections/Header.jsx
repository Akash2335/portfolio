import React from "react";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { menuItems } from "../contens";
import Button from "../component/Button";
import MobileMenu from "../component/MobileMenu";
import Logo from "../component/Logo";
import { motion, scale } from "framer-motion";

const Header = ( { menuOpen, setMenuOpen } ) => {
  const logoVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease:"easeOut",
      }
    }
  };
  const menuVarients = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        ease: "easeOut",
      }
    }
  };
  const menuItemVariants = {
    hidden: {
      y: -20,
      opacity:0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration:0.5,
      },
    },
  };
  return (
    <>
      <motion.header className="fixed top-0 z-10 w-full px-4 py-4" initial="hidden" animate="visible">
        <nav className="container text-white flex items-center justify-between rounded-full border-2 border-white/10 bg-white/5 p-2 backdrop-blur ">
          <motion.div className="flex items-center" variants={logoVariants} initial='hidden' animate='visible'>
            <Logo />
          </motion.div> 

          <motion.ul className="hidden space-x-4 md:flex" initial='hidden' animate='visible' variants={menuVarients}>
            {menuItems.map((item) => (
              <motion.li key={item.href} variants={menuItemVariants}>
                <a href={item.href} className="nav-item text-white/25">{item.label}</a>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div className="hidden md:block" variants={logoVariants} initial='hidden' animate='visible'>
            <Button variant="outline">Contact Me</Button>
          </motion.div>

          {/* Menu Toggle Button for Mobile */}
          <motion.button
            className="text-4xl text-white  md:hidden transition-all ease-in-out duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={ menuOpen }
            initial='hidden'
            animate='visible'
            variants={logoVariants}
          >
            {menuOpen ? <BiX  className="cursor-pointer"/> : <BiMenuAltRight />}
          </motion.button>
        </nav>
      </motion.header>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-20 bg-black opacity-50 transition-all ease-in-out duration-700 cursor-pointer"
          onClick={() => setMenuOpen(false)}
          aria-label="Close Menu"
        />
      )}

      {/* Mobile Menu */}
      <MobileMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        menuItems={menuItems}
      />
    </>
  );
};

export default Header;
