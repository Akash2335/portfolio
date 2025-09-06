import userImage1 from "../assets/Akash.png";
import { motion } from "framer-motion";
import Skills from "./Skills";

const HeroImage = () => {
  const profileImageVariant = {
    hidden: {
      y: -200,
      x: -200,
      opacity: 0,
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div className="relative w-full max-w-[600px] h-[500px] sm:h-[600px] md:h-[650px] mx-auto  a overflow-hidden bg-gray-700 rounded-br-full rounded-bl-full border-r-[10px] border-blue-500">
      <Skills />

      <motion.img
        src={userImage1}
        alt="User"
        variants={profileImageVariant}
        initial="hidden"
        whileInView="visible" // ← use whileInView instead of animate
        viewport={{once:true, amount: 0.5 }} // ← trigger when 50% visible, only once
        className="absolute bottom-10 left-[100px] lg:left-32 transform -translate-x-1/3 object-cover rounded-full shadow-xl
          w-[120px] h-[120px]
          sm:w-[160px] sm:h-[160px]
          md:w-[200px] md:h-[200px]
          lg:w-[250px] lg:h-[250px]
          xl:w-[300px] xl:h-[300px]"
      />
    </motion.div>
  );
};

export default HeroImage;
