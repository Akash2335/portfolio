import HeroContent from "../component/HeroContent";
import HeroImage from "../component/HeroImage";
import { motion } from "framer-motion";

const Hero = ({ menuOpen }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const contentVariant = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <motion.section
      id="hero"
      className="overflow-hidden pt-24 pb-12 px-4 sm:px-8 md:px-16 lg:px-24"
      initial="hidden"
      whileInView="visible"
      viewport={{once:true, amount: 0.4 }} // 👈 triggers only when 40% is in view
      variants={containerVariants}
    >
      <div
        className={`transition-all duration-300 max-w-7xl mx-auto ${
          menuOpen ? "blur-sm" : ""
        }`}
      >
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-6 md:gap-12 lg:gap-20">
          {/* Hero Content */}
          <HeroContent
            variants={contentVariant}
            className="w-full md:w-1/2" // full width on small, half on medium+
          />

          {/* Hero Image */}
          <HeroImage
            variants={imageVariants}
            className="w-full md:w-1/2 max-w-[600px]" // responsive sizing
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
