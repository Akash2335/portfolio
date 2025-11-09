import { Fragment, useRef, useMemo } from "react";
import { words } from "../contens";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

const ParallaxText = ({ children, baseVelocity = 50 }) => {
  // Reduced base velocity
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 3], {
    // Reduced factor
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden">
      <motion.div className="flex gap-3" style={{ x }}>
        {" "}
        {/* Reduced gap */}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
};

const Tape = () => {
  // Memoized words array to prevent unnecessary re-renders
  const memoizedWords = useMemo(() => words, []);

  // Memoized duplicated words for the tape
  const tapeContent = useMemo(
    () =>
      [...Array(2)].map((_, index) => (
        <Fragment key={index}>
          {memoizedWords.map((word, wi) => (
            <div
              className={`inline-flex items-center gap-3 p-2 ${word.ClassName}`} // Reduced padding and gap
              key={`${index}-${wi}`}
            >
              <span className="text-lg text-gray-600 uppercase font-medium">
                {" "}
                {/* Smaller text */}
                {word.label}
              </span>
              {word.icon && <word.icon className="text-gray-700" />}{" "}
              {/* Safe icon render */}
            </div>
          ))}
        </Fragment>
      )),
    [memoizedWords]
  );

  return (
    <section className="overflow-x-clip py-12 h-16 lg:py-1" id="tape">
      {" "}
      {/* Reduced padding */}
      <div className="-mx-1 -rotate-3 bg-gradient-to-r from-fuchsia-100 to-cyan-300 shadow-lg">
        <div className="mask-gradient-right">
          <ParallaxText baseVelocity={8}>
            {" "}
            {/* Further reduced velocity */}
            {tapeContent}
          </ParallaxText>
        </div>
      </div>
    </section>
  );
};

export default Tape;
