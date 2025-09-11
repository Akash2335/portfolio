import { useEffect, useState } from "react";

export default function useScrollDirection() {
  const [direction, setDirection] = useState("down");

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const currentScrollY = window.pageYOffset;
      if (Math.abs(currentScrollY - lastScrollY) < 5) return; // Ignore tiny changes

      setDirection(currentScrollY > lastScrollY ? "down" : "up");
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", updateScrollDirection);

    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, []);

  return direction;
}
