import React, { useContext } from "react";
import { CommonContext } from "../contens";

const ConfettiBlast = () => {
    
const { closeToster, setToster } = useContext(CommonContext);
const { Message, variant, close } = closeToster;
if (!close) return null;
const confettiCount = 400;
const colors = [
  "bg-red-500",
  "bg-yellow-300",
  "bg-green-400",
  "bg-blue-500",
  "bg-pink-400",
  "bg-gray-500",
  "bg-cyan-500",
  "bg-slate-700",
  ];
  
  const getRandomStyle = () => {
    const x = Math.random() * 100;
    const delay = Math.random() * 2;
    const duration = 2 + Math.random() * 2;
    const rotate = Math.random() * 360;

    return {
      left: `${x}%`,
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
      transform: `rotate(${rotate}deg)`,
    };
  };

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-50">
      {Array.from({ length: confettiCount }).map((_, i) => {
        const color = colors[Math.floor(Math.random() * colors.length)];
        return (
          <div
            key={i}
            className={`w-2 h-3 ${color} absolute rounded-md animate-confetti`}
            style={getRandomStyle()}
          />
        );
      })}
    </div>
  );
};

export default ConfettiBlast;
