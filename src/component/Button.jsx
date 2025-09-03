import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({
  children,
  variant = "primary",
  className,
  isDownload = false,
  href = "#", // default link
  target = "_blanck",
  event
}) => {
  const variants = {
    primary: "bg-blue-400 text-white/90 border-none hover:bg-blue-700",
    outline:
      "bg-transparent text-blue-300 border-2 border-blue-300 hover:bg-blue-500 hover:text-white",
  };

  const mergedClasses = twMerge(
    `rounded-full px-6 py-2 font-semibold transition-all duration-300 ${variants[variant]}`,
    className
  );

  if (isDownload) {
    return (
      <a
        href={href}
        download
        target="_self"
        rel="noopener noreferrer"
        className={mergedClasses}
      >
        {children}
      </a>
    );
  }

  return <button className={mergedClasses} onClick={event}>{children}</button>;
};

export default Button;
