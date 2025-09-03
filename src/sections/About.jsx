import SectionTitle from "../component/SectionTitle";
import userImage1 from "../../src/assets/Akash.png";
import Button from "../component/Button";
import { motion } from "framer-motion";

const About = () => {
  const aboutImageVariant = {
    hidden: { x: -200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const aboutContentVariant = {
    hidden: { x: 200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <motion.section className="py-12 sm:py-16 lg:py-24 w-full" id="about">
      <div className="flex items-center justify-center relative">
        {/* Section Title */}
        <div className="absolute top-0 md:top-5 sm:-top-10">
          <SectionTitle title="About Me" />
        </div>

        {/* Main Content */}
        <motion.div
          className="mt-16 flex flex-col items-center justify-center gap-10 md:flex-row md:gap-12 lg:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{once:true,amount: 0.4 }} // 👈 triggers only when 40% is in view
        >
          {/* About Image */}
          <motion.img
            src={userImage1}
            alt="About Image"
            className="object-contain rounded-full w-40 sm:w-52 md:w-64 lg:w-72"
            variants={aboutImageVariant}
          />

          {/* About Text Content */}
          <motion.div
            className="container flex-1 px-4 sm:px-6 md:px-0"
            variants={aboutContentVariant}
          >
            <div className="max-w-lg">
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white/80">
                Hi, I'm
                <span className="text-blue-500"> Akash Bharati</span>
              </h1>
              <p className="mt-4 text-xs sm:text-sm md:text-base text-white/60 leading-relaxed">
                🚀 Passionate .NET Core developer committed to building
                impactful, secure, and scalable solutions...
              </p>
            </div>

            <div>
              <Button className="mt-6 px-6 py-2 text-sm sm:text-base sm:px-8 sm:py-3">
                Hire Me
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
