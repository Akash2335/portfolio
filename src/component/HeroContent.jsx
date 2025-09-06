import { Typewriter } from "react-simple-typewriter";
import Button from "./Button";
import { motion } from "framer-motion";
import { CommonContext, downloadLink } from "../contens";
import { useContext } from "react";
import HIREME from "./HireMe";

const HeroContent = ({ variants }) => {
  const { isHireMe, setIsHireMe, setToster } = useContext(CommonContext);



  return (
    <motion.div
      variants={variants}
      className="text-left w-full px-4 sm:px-6 md:max-w-md lg:max-w-lg"
    >
      <p className="text-xl font-medium text-blue-400">
        <Typewriter
          words={["Akash Bharati..!"]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={500}
          deleteSpeed={500}
          delaySpeed={1000}
          cursorClassName="text-blue-900"
          cursorBlinking
        />
      </p>

      <h2 className="mt-4 font-serif text-3xl font-bold tracking-widest text-white md:text-4xl lg:mt-8 lg:text-5xl">
        <Typewriter
          words={["Software Engineer Based In India...!"]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={200}
          deleteSpeed={100}
          delaySpeed={500}
          cursorClassName="text-blue-900"
          cursorBlinking
        />
      </h2>

      <p className="mt-4 text-white/70 md:text-lg">
        💻 Passionate .NET Core Developer with a strong track record in building
        high-performance apps across domains like 🛒 Order Management and 🎫
        Ticketing systems. Skilled in crafting scalable APIs, integrating ERP
        systems (Fusion, Oracle 🔗), and optimizing performance with SQL Server
        ⚙️. Focused on secure, efficient, and reliable solutions using JWT 🔐
        and RBAC 🔑 — always aiming to deliver real business value 🚀.
      </p>

      <div className="mt-6 flex items-center gap-5">
        <div onClick={() => setIsHireMe(!isHireMe)}>
          <Button>Hire Me</Button>
        </div>

        {/* ✅ This button will both download and show toaster */}
        <Button
          variant="outline"
          isDownload={true}
          href={ downloadLink[ 0 ].Resume }
          target="self"
        >
          My Resume
        </Button>
      </div>

      {isHireMe && (
        <div className="fixed inset-0 z-50">
          <div className="w-full h-full bg-slate-900 opacity-60 absolute" />
          <div onClick={() => setIsHireMe(false)} className="cursor-pointer">
            <HIREME />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default HeroContent;
