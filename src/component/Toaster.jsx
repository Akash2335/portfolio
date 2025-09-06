import { useContext, useEffect, useState } from "react";
import Close from "./Close";
import { CommonContext } from "../contens";

const Toaster = () => {
  const { closeToster, setToster } = useContext(CommonContext);
  const { Message, variant, close } = closeToster;

  if ( !close ) return null;
  return (
    <div
      className={`
    fixed top-10 right-0 z-50 
    w-72
    transform transition-transform duration-700 ease-in-out delay-1000
    ${close ? "translate-x-0" : "translate-x-full"}
  `}
    > 
      <div className="relative max-w-82 mr-5">
        <div
          className={`
            w-64 min-h-16 rounded-md shadow-lg px-4 py-2
            bg-gradient-to-br from-cyan-900 to-yellow-200
            ${
              variant === "success"
                ? "outline-green-300 outline outline-offset-1"
                : "outline-red-500 outline outline-offset-1"
            }
          `}
        >
          <div className="flex justify-between items-start">
            <div className="text-sm break-words whitespace-pre-line text-white">
              {Message}
            </div>
            <div
              onClick={() => {
                setTimeout(() => {
                  setToster({ Message: "", close: false, variant: "success" });
                }, 300);
              }}
              className="cursor-pointer ml-2"
            >
              <Close
                size={24}
                className="hover:outline hover:rounded-sm hover:outline-cyan-600 text-cyan-700 transition duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toaster;
