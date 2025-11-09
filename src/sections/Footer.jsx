import React, { memo, useMemo } from "react";
import { motion } from "framer-motion";

const Footer = memo(() => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  // Enhanced navigation items
  const navItems = useMemo(
    () =>
      ["Home", "Projects", "About", "Experience", "Services", "Contact"].map(
        (item) => ({
          name: item,
          href: `#${item.toLowerCase()}`,
          icon: getNavIcon(item),
        })
      ),
    []
  );

  // Enhanced social links
  const socialLinks = useMemo(
    () => [
      {
        name: "LinkedIn",
        icon: "💼",
        color: "hover:text-blue-400",
        href: "https://www.linkedin.com/in/akash-bharati-23d35",
        bgColor: "hover:bg-blue-500/20 hover:border-blue-400/50",
      },
      {
        name: "GitHub",
        icon: "🐙",
        color: "hover:text-purple-400",
        href: "https://github.com",
        bgColor: "hover:bg-purple-500/20 hover:border-purple-400/50",
      },
      {
        name: "Twitter",
        icon: "🐦",
        color: "hover:text-cyan-400",
        href: "https://twitter.com",
        bgColor: "hover:bg-cyan-500/20 hover:border-cyan-400/50",
      },
      {
        name: "Email",
        icon: "✉️",
        color: "hover:text-pink-400",
        href: "mailto:your-email@example.com",
        bgColor: "hover:bg-pink-500/20 hover:border-pink-400/50",
      },
    ],
    []
  );

  // Helper function for navigation icons
  function getNavIcon(name) {
    const icons = {
      Home: "🏠",
      Projects: "💼",
      About: "👨‍💻",
      Experience: "⚡",
      Services: "🛠️",
      Contact: "📞",
    };
    return icons[name] || "🔗";
  }

  const handleNavClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer
      className="relative bg-gradient-to-br from-gray-900 via-purple-900/20 to-black border-t border-white/10 overflow-hidden"
      id="footer"
      role="contentinfo"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute bottom-10 left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-10 right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 50}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 py-12">
        {/* Main Footer Content */}
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Enhanced Brand Section */}
          <motion.div
            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 group cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 via-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/30 transition-all duration-300 group-hover:shadow-cyan-500/40">
                <span className="text-white font-bold text-xl">AB</span>

                {/* Logo Shine */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 rounded-2xl" />
              </div>

              {/* Pulsing Dot */}
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full border-2 border-gray-900"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.7, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            <div className="text-center sm:text-left">
              <motion.h3
                className="text-white font-bold text-2xl tracking-tight bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                Akash Bharati
              </motion.h3>
              <motion.p
                className="text-white/60 text-sm font-light mt-2"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                Full Stack .NET Developer
              </motion.p>
            </div>
          </motion.div>

          {/* Enhanced Navigation Links */}
          <motion.nav
            aria-label="Footer navigation"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ul className="flex flex-wrap items-center justify-center gap-4 lg:gap-8">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <motion.a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300 font-medium text-sm relative group py-2 px-3 rounded-lg hover:bg-white/5"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-base">{item.icon}</span>
                    {item.name}
                    <motion.span
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>

          {/* Enhanced Social Links */}
          <motion.nav
            aria-label="Social media links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ul className="flex items-center space-x-3">
              {socialLinks.map((social, index) => (
                <motion.li
                  key={social.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                >
                  <motion.a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 flex items-center justify-center text-white/60 ${social.color} ${social.bgColor} transition-all duration-300 relative overflow-hidden group`}
                    aria-label={`Visit my ${social.name} profile`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {/* Social Icon Shine */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 rounded-2xl" />

                    <motion.span
                      className="font-bold text-lg relative z-10"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {social.icon}
                    </motion.span>

                    {/* Hover Tooltip */}
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-900/90 backdrop-blur-md text-white text-xs px-2 py-1 rounded border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {social.name}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-0 h-0 border-l-2 border-r-2 border-t-2 border-l-transparent border-r-transparent border-t-slate-900/90" />
                    </div>
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        </motion.div>

        {/* Enhanced Divider */}
        <motion.div
          className="relative my-8"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-sm"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />
        </motion.div>

        {/* Enhanced Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.p
            className="text-white/40 font-light text-sm flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <span>©</span>
            <span>{currentYear} Akash Bharati. All rights reserved.</span>
          </motion.p>

          <motion.nav
            aria-label="Legal links"
            className="flex items-center gap-6"
          >
            {[
              { name: "Privacy", href: "/privacy" },
              { name: "Terms", href: "/terms" },
              { name: "Cookies", href: "/cookies" },
            ].map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-white/50 hover:text-cyan-300 transition-colors duration-300 text-xs font-medium relative group"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {link.name}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 rounded-full"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </motion.nav>
        </motion.div>

        {/* Enhanced Additional Info */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <motion.p
            className="text-white/30 text-xs font-light flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ❤️
            </motion.span>
            Crafted with passion using React & Tailwind CSS
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              ⚡
            </motion.span>
          </motion.p>
        </motion.div>
      </div>

      {/* Enhanced Bottom Gradient */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />

      {/* Floating CTA */}
      <motion.div
        className="absolute top-2 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.div
          className="px-6 py-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl text-white text-sm font-semibold shadow-2xl shadow-purple-500/30 backdrop-blur-sm border border-white/10"
          whileHover={{ scale: 1.05, y: -2 }}
          transition={{ duration: 0.3 }}
        >
          🚀 Available for new opportunities
        </motion.div>
      </motion.div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
