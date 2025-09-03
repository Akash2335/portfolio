import SectionTitle from "../component/SectionTitle";
import ServiceCard from "../component/ServiceCard";
import { services } from "../contens";
import { motion } from "framer-motion";

const Services = () => {
  const getCardVariant = (index) => {
    const directions = [
      { x: -300, y: -300 },
      { x: 300, y: -300 },
      { x: -300, y: 300 },
      { x: 300, y: 300 },
    ];
    const dir = directions[index % directions.length];
    return {
      hidden: { x: dir.x, y: dir.y, opacity: 0 },
      visible: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          duration: 2,
          ease: "easeOut",
        },
      },
    };
  };

  return (
    <motion.section className="py-16" id="services">
      <SectionTitle title="My Services" />
      <div className="container mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="hover:shadow-lg hover:shadow-teal-300"
            initial="hidden"
            whileInView="visible"
            variants={getCardVariant(index)}
            viewport={{ once:true,amount: 0.10 }}
          >
            <ServiceCard services={service} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Services;
