import { Fragment, useRef } from "react";
import { words } from "../contens";
import { BiLogoMeta } from "react-icons/bi";
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

const ParallaxText = ({ children, baseVelocity = 100 }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
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
      <motion.div className="flex gap-4" style={{ x }}>
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
};

const Tape = () => {
  return (
    <section className="overflow-x-clip py-20 h-20  lg:py-2 " id="tape">
      <div className="-mx-1 -rotate-3 bg-gradient-to-r from-fuchsia-100 to-cyan-300 shadow-lg shadow-teal-200">
        <div className="mask-gradient-right">
          <ParallaxText baseVelocity={10}>
            {[...Array(2)].map((_, index) => (
              <Fragment key={index}>
                {words.map((word, wi) => (
                  <div
                    className={`inline-flex items-center gap-4 p-3 shadow-2xl shadow-fuchsia-800 ${word.ClassName}`}
                    key={`${index}-${wi}`}
                  >
                    <span className="text-2xl  text-gray-600 uppercase ">
                      {word.label}
                    </span>
                    {/* <BiLogoMeta className="size-8 -rotate-12 text-gray-800" /> */}
                    {<word.icon />}
                  </div>
                ))}
              </Fragment>
            ))}
          </ParallaxText>
        </div>
      </div>
    </section>
  );
};

export default Tape;
