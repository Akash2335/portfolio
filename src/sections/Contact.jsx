import SectionTitle from "../component/SectionTitle";
import ContactImage from "../../src/assets/contact.svg";
import { contactDetails } from "../contens";
import ContactDetailedCard from "../component/ContactDetailedCard";
import { motion } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const containerRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen px-4 py-20 lg:py-28 relative overflow-hidden"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      ref={containerRef}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-blue-900">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.1)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]" />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div variants={itemVariants}>
          <SectionTitle title="Let's Connect" />
        </motion.div>

        <motion.div
          className="mt-16 grid lg:grid-cols-2 gap-12 items-center"
          variants={itemVariants}
        >
          {/* Left Side - Visual Element */}
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Glass Morphism Container */}
            <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 p-8 shadow-2xl">
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col items-center text-center">
                <motion.img
                  src={ContactImage}
                  alt="Contact illustration"
                  className="h-48 lg:h-64 mb-6"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Collaborate
                </h3>
                <p className="text-white/70 text-lg">
                  Let's build something amazing together
                </p>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                ✨
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Contact Information */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* Header */}
            <div className="text-center lg:text-left">
              <motion.h2
                className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                Get in Touch
              </motion.h2>
              <motion.p
                className="text-lg text-white/70 leading-relaxed"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                Thank you for checking out my profile! If you're looking for a
                reliable, skilled .NET Core developer for your team or project,
                let's connect. I'm open to exciting opportunities and would be
                happy to chat further.
              </motion.p>
            </div>

            {/* Contact Details */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {contactDetails.map((contact, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.02,
                    x: 10,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <ContactDetailedCard contact={contact} />
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="pt-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.a
                href="mailto:your.email@example.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl text-white font-semibold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Conversation</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Orbs */}
      <div className="absolute -left-20 top-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -right-20 bottom-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
    </motion.div>
  );
};

export default Contact;
