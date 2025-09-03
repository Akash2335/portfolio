import { twMerge } from "tailwind-merge";

// Floating tech icon component
// eslint-disable-next-line no-unused-vars
const AnimatedIcon = ({ Icon, className ,size}) => {
  return (
    <div className={twMerge("absolute", className)}>
      <Icon className="text-4xl animate-pulse transition-transform duration-300 ease-in-out" size={size} />
    </div>
  );
};

export default AnimatedIcon;
