import React, { useContext } from "react";
import { twMerge } from "tailwind-merge";
import { CommonContext } from "../contens";

const Button = ({
  children,
  variant = "primary",
  className,
  isDownload = false,
  href = "#",
  target = "_blank",
  event,
}) => {
  const { setToster } = useContext(CommonContext);

  const variants = {
    primary: "bg-blue-400 text-white/90 border-none hover:bg-blue-700",
    outline:
      "bg-transparent text-blue-300 border-2 border-blue-300 hover:bg-blue-500 hover:text-white",
  };

  const mergedClasses = twMerge(
    `rounded-full px-6 py-2 font-semibold transition-all duration-300 ${variants[variant]}`,
    className
  );

  const handleDownloadClick = (e) => {
    e.preventDefault(); // ✅ Fix is here
    setToster({
      Message:
        "📄 Resume downloaded successfully! Please check your downloads.",
      close: true, // Should be false to trigger toaster
      variant: "success",
    });

    // Optional: Start the download manually
    const link = document.createElement("a");
    link.href = href;
    link.download = true;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (isDownload) {
    return (
      <a
        href={href}
        target={target}
        rel="noopener noreferrer"
        className={mergedClasses}
        onClick={handleDownloadClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={mergedClasses} onClick={event}>
      {children}
    </button>
  );
};

export default Button;
