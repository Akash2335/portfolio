// components/ScrollProgressBar.js
import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const percent = scrollTop / scrollHeight;
      setScrollPercent(percent * 100);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent shadow-lg shadow-white">
      <div
        className="h-full bg-yellow-400 transition-all duration-200 ease-linear rounded-md"
        style={{ width: `${scrollPercent}%` }}
      />
    </div>
  );
}
