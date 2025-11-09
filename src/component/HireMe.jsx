import { useContext, useState } from "react";
import { MdAlternateEmail, MdErrorOutline } from "react-icons/md";
import { FaPhoneAlt, FaUserTie, FaExclamationTriangle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { CommonContext, emailConfig } from "../contens";
import { EmailServices, EmailDetails } from "../util/EmailServices";
import CLOSE from "./Close";
import Button from "./Button";
import INPUT from "./Input";
import Toaster from "./Toaster";

const HIREME = () => {
  const { hrDetail, setHrDetails, isHireMe, setIsHireMe, setToster } =
    useContext(CommonContext);

  const [inputError, setInputError] = useState({ email: false, mobile: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      rotate: -180,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
        duration: 0.8,
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
      rotate: 180,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setHrDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (inputError[name]) {
      setInputError((prev) => ({ ...prev, [name]: false }));
    }
  };

  const validate = () => {
    const errors = {
      email:
        !hrDetail.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(hrDetail.email),
      mobile: !hrDetail.mobile || !/^\d{10}$/.test(hrDetail.mobile),
    };
    setInputError(errors);

    if (errors.email || errors.mobile) {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 600);
    }
    return !errors.email && !errors.mobile;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // ... rest of your submit logic
  };

  return (
    <AnimatePresence>
      {isHireMe && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => !isSubmitting && setIsHireMe(false)}
        >
          {/* Chaotic Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-yellow-500/20 to-purple-500/20"
            animate={{
              background: [
                "linear-gradient(45deg, #ff000020, #ffff0020, #0000ff20)",
                "linear-gradient(135deg, #00ff0020, #ff00ff20, #00ffff20)",
                "linear-gradient(225deg, #ffff0020, #00ff0020, #ff000020)",
              ],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          {/* Floating Error Icons */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-red-400/30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  rotate: [0, 360, 0],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              >
                <MdErrorOutline size={24} />
              </motion.div>
            ))}
          </div>

          {/* Main Modal - Intentionally "Wrong" */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md mx-auto"
          >
            {/* Glitch Effect Border */}
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-3xl"
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.02, 1],
              }}
              transition={{ duration: 0.5, repeat: Infinity }}
            />

            {/* Chaotic Container */}
            <motion.div
              className="relative bg-black/90 backdrop-blur-md rounded-2xl border-4 border-dashed border-red-400 shadow-2xl overflow-hidden"
              animate={isShaking ? { x: [0, -10, 10, -10, 10, 0] } : {}}
              transition={{ duration: 0.6 }}
            >
              {/* Warning Header */}
              <div className="relative p-6 border-b-2 border-yellow-400 bg-yellow-500/10">
                <motion.button
                  className="absolute top-4 right-4 text-red-400 hover:text-red-300 transition-colors duration-200 bg-red-500/20 p-2 rounded-full"
                  onClick={() => !isSubmitting && setIsHireMe(false)}
                  whileHover={{ scale: 1.2, rotate: 180 }}
                  whileTap={{ scale: 0.8 }}
                  disabled={isSubmitting}
                >
                  <CLOSE size={20} />
                </motion.button>

                <div className="flex items-center gap-3">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center text-white shadow-lg"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <FaExclamationTriangle size={20} />
                  </motion.div>
                  <div>
                    <motion.h2
                      className="text-2xl font-bold text-red-400"
                      animate={{
                        textShadow: [
                          "0 0 10px #ff0000",
                          "0 0 20px #ff0000",
                          "0 0 10px #ff0000",
                        ],
                      }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      ⚠️ WARNING: HIRING MODE ⚠️
                    </motion.h2>
                    <p className="text-yellow-300 text-sm font-mono">
                      SYSTEM_OVERLOAD: ENTER_DETAILS_CAREFULLY
                    </p>
                  </div>
                </div>
              </div>

              {/* Form with "Broken" Layout */}
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Email Field - Tilted */}
                <motion.div
                  initial={{ opacity: 0, rotate: -5 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.1 }}
                  className="transform -skew-x-3"
                >
                  <label className="block text-green-400 text-sm font-mono mb-2 uppercase tracking-widest">
                    📧 EMAIL_COORDINATES
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <MdAlternateEmail className="text-green-400" />
                      </motion.div>
                    </div>
                    <INPUT
                      type="email"
                      name="email"
                      value={hrDetail.email}
                      onChange={handleInput}
                      placeholder="user@domain.xyz"
                      className={`w-full pl-10 pr-4 py-3 bg-black border-2 rounded-lg text-green-400 font-mono placeholder-green-400/40 focus:outline-none transition-all duration-200 ${
                        inputError.email
                          ? "border-red-500 bg-red-500/10 animate-pulse"
                          : "border-green-500 focus:border-yellow-500 focus:bg-yellow-500/10"
                      }`}
                      disabled={isSubmitting}
                    />
                  </div>
                  <AnimatePresence>
                    {inputError.email && (
                      <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="text-red-400 text-sm mt-2 font-mono flex items-center gap-2"
                      >
                        ❌ INVALID_EMAIL_PATTERN
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Mobile Field - Different Tilt */}
                <motion.div
                  initial={{ opacity: 0, rotate: 5 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.2 }}
                  className="transform skew-x-3"
                >
                  <label className="block text-blue-400 text-sm font-mono mb-2 uppercase tracking-widest">
                    📱 PHONE_SIGNAL
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <FaPhoneAlt className="text-blue-400" />
                      </motion.div>
                    </div>
                    <INPUT
                      type="tel"
                      name="mobile"
                      value={hrDetail.mobile}
                      onChange={handleInput}
                      placeholder="10_DIGIT_CODE"
                      className={`w-full pl-10 pr-4 py-3 bg-black border-2 rounded-lg text-blue-400 font-mono placeholder-blue-400/40 focus:outline-none transition-all duration-200 ${
                        inputError.mobile
                          ? "border-red-500 bg-red-500/10 animate-pulse"
                          : "border-blue-500 focus:border-purple-500 focus:bg-purple-500/10"
                      }`}
                      disabled={isSubmitting}
                    />
                  </div>
                  <AnimatePresence>
                    {inputError.mobile && (
                      <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="text-red-400 text-sm mt-2 font-mono flex items-center gap-2"
                      >
                        ❌ SIGNAL_WEAK: 10_DIGITS_REQUIRED
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Submit Button - Glitch Effect */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-4"
                >
                  <Button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-mono font-bold rounded-lg border-2 border-white/20 shadow-lg hover:shadow-purple-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                    disabled={isSubmitting}
                  >
                    {/* Glitch Effect Layers */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-0 hover:opacity-100 transition-opacity duration-200"
                      animate={{
                        x: [-10, 10, -10],
                        opacity: [0, 0.3, 0],
                      }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                    />

                    <motion.span
                      animate={isSubmitting ? { opacity: [1, 0.5, 1] } : {}}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="flex items-center justify-center gap-3 relative z-10"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          />
                          [ENCRYPTING_TRANSMISSION...]
                        </>
                      ) : (
                        <>
                          🚀 INITIATE_HIRING_SEQUENCE
                          <motion.span
                            animate={{ x: [0, 5, 0], scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                          >
                            ⚡
                          </motion.span>
                        </>
                      )}
                    </motion.span>
                  </Button>
                </motion.div>

                {/* System Status Footer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center gap-2 text-yellow-400 text-sm font-mono">
                    <motion.div
                      className="w-2 h-2 bg-green-500 rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                    SYSTEM_STATUS: ONLINE
                    <span className="text-green-400 ml-2">
                      RESPONSE_ETA: 24H
                    </span>
                  </div>
                </motion.div>
              </form>

              {/* Random Floating Elements */}
              <motion.div
                className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full text-white flex items-center justify-center text-xs font-bold"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 360],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                !
              </motion.div>
              <motion.div
                className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-500 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HIREME;
