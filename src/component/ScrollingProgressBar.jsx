import { useEffect, useState, useCallback, memo } from "react";

const ScrollProgressBar = memo(() => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Throttled scroll handler
  const updateScrollProgress = useCallback(() => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    if (scrollHeight > 0) {
      const percent = (scrollTop / scrollHeight) * 100;
      setScrollPercent(percent);
      setIsVisible(scrollTop > 50);
    }
  }, []);

  useEffect(() => {
    let ticking = false;

    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateScrollProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    window.addEventListener("resize", updateScrollProgress);
    updateScrollProgress();

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, [updateScrollProgress]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-1.5 z-[9999] transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        // Force styles to ensure visibility
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "6px",
        zIndex: 9999,
        backgroundColor: "rgba(0,0,0,0.1)",
        pointerEvents: "none",
      }}
    >
      {/* Progress Bar with inline styles */}
      <div
        style={{
          width: `${scrollPercent}%`,
          height: "100%",
          background: "linear-gradient(90deg, #06b6d4, #8b5cf6, #d946ef)",
          transition: "width 0.1s ease-out",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Shine effect */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
            animation: "shine 2s infinite",
            transform: "skewX(-15deg)",
          }}
        />
      </div>

      {/* CSS Animation */}
      <style>
        {`
          @keyframes shine {
            0% {
              transform: translateX(-100%) skewX(-15deg);
            }
            100% {
              transform: translateX(200%) skewX(-15deg);
            }
          }
        `}
      </style>
    </div>
  );
});

ScrollProgressBar.displayName = "ScrollProgressBar";

export default ScrollProgressBar;
