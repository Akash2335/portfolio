import { useState, useRef } from "react";
import { Skill, SkillDetails } from "../contens";
import { motion, AnimatePresence } from "framer-motion";

const ExperienceDetails = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const containerRef = useRef(null);

  const handleSkillHover = (e, skill) => {
    setHoveredSkill(skill);
  };

  const handleSkillClick = (skill) => {
    setActiveSkill(activeSkill?.id === skill.id ? null : skill);
  };

  const skillDetail = SkillDetails.find((f) => f.id === hoveredSkill?.id);

  return (
    <motion.div
      id="experience"
      className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-blue-900 py-20 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      ref={containerRef}
    >
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Enhanced Floating Grid */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.2)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        {/* Multiple Orbiting Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-80 h-80 border border-cyan-500/30 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 border border-purple-500/20 rounded-full"
          animate={{
            rotate: -360,
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Enhanced Floating Particles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              i % 3 === 0
                ? "bg-cyan-400/40"
                : i % 3 === 1
                ? "bg-purple-400/40"
                : "bg-pink-400/40"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -60, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 8,
            }}
          />
        ))}

        {/* Pulsing Glow Spots */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 relative"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Expertise
            {/* Title Glow Effect */}
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.h1>

          <motion.p
            className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover my technical expertise through interactive exploration.
            <span className="block text-cyan-300 font-semibold mt-2">
              Hover or click on skills to dive deeper into my experience and
              capabilities
            </span>
          </motion.p>

          {/* Achievement Badge */}
          <motion.div
            className="inline-flex items-center gap-3 mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl border border-cyan-500/30 backdrop-blur-sm"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <span className="text-cyan-400">🏆</span>
            <span className="text-cyan-300 font-semibold">
              {Skill.length}+ Technologies Mastered
            </span>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Skills Panel */}
          <motion.div
            className="space-y-6"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-white/5 via-purple-500/5 to-cyan-500/5 backdrop-blur-2xl rounded-3xl border-2 border-white/10 p-8 shadow-2xl relative overflow-hidden">
              {/* Panel Background Glow */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
                  <motion.span
                    className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      boxShadow: [
                        "0 0 10px rgba(34, 211, 238, 0.5)",
                        "0 0 20px rgba(34, 211, 238, 0.8)",
                        "0 0 10px rgba(34, 211, 238, 0.5)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                  <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                    Technical Arsenal
                  </span>
                </h2>

                <div className="space-y-4">
                  {Skill.map((skill, index) => (
                    <motion.div
                      key={skill.id}
                      className={`group relative cursor-pointer transition-all duration-500 p-6 rounded-2xl border-2 backdrop-blur-sm ${
                        activeSkill?.id === skill.id
                          ? "bg-gradient-to-r from-purple-500/30 to-cyan-500/30 border-cyan-400/50 shadow-2xl shadow-cyan-500/30"
                          : "bg-white/5 border-white/10 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-cyan-500/20 hover:border-cyan-400/30 hover:shadow-xl hover:shadow-purple-500/20"
                      }`}
                      whileHover={{
                        scale: 1.02,
                        y: -2,
                      }}
                      whileTap={{ scale: 0.98 }}
                      onHoverStart={(e) => handleSkillHover(e, skill)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      onClick={() => handleSkillClick(skill)}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {/* Enhanced Skill Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <motion.div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${
                              activeSkill?.id === skill.id
                                ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
                                : "bg-white/10 text-cyan-400 group-hover:bg-cyan-500/20"
                            }`}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            {skill.icon || "💼"}
                          </motion.div>

                          <div>
                            <h3 className="text-xl font-semibold text-white group-hover:text-cyan-200 transition-colors">
                              {skill.name}
                            </h3>
                            <p className="text-white/60 text-sm">
                              {skill.category || "Full Stack Development"}
                            </p>
                          </div>
                        </div>

                        {/* Enhanced Interactive Indicator */}
                        <motion.div
                          className="relative"
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <motion.div
                            className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                              activeSkill?.id === skill.id
                                ? "border-cyan-400 bg-cyan-400/20"
                                : "border-white/30 group-hover:border-cyan-400"
                            }`}
                            animate={{
                              rotate: activeSkill?.id === skill.id ? 180 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <motion.div
                              className={`w-3 h-3 rounded-full ${
                                activeSkill?.id === skill.id
                                  ? "bg-cyan-400"
                                  : "bg-white/50 group-hover:bg-cyan-400"
                              }`}
                              animate={{
                                scale:
                                  activeSkill?.id === skill.id
                                    ? [1, 1.3, 1]
                                    : 1,
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                              }}
                            />
                          </motion.div>
                        </motion.div>
                      </div>

                      {/* Enhanced Expanded Details */}
                      <AnimatePresence>
                        {activeSkill?.id === skill.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-6 pt-6 border-t border-white/20">
                              <p className="text-white/80 text-base leading-relaxed mb-4">
                                {SkillDetails.find((s) => s.id === skill.id)
                                  ?.message || "Expertise details available"}
                              </p>

                              {/* Enhanced Skill Level Indicator */}
                              <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                  <span className="text-cyan-300 text-sm font-semibold">
                                    Proficiency Level
                                  </span>
                                  <span className="text-white/70 text-sm">
                                    85% Mastery
                                  </span>
                                </div>
                                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                                  <motion.div
                                    className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full relative"
                                    initial={{ width: 0 }}
                                    animate={{ width: "85%" }}
                                    transition={{ delay: 0.5, duration: 1.5 }}
                                  >
                                    {/* Progress Bar Shine */}
                                    <motion.div
                                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                      animate={{
                                        x: ["-100%", "200%"],
                                      }}
                                      transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: 1,
                                      }}
                                    />
                                  </motion.div>
                                </div>
                              </div>

                              {/* Quick Stats */}
                              <div className="grid grid-cols-2 gap-4 mt-4">
                                <div className="text-center p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                                  <div className="text-cyan-400 font-bold">
                                    4+
                                  </div>
                                  <div className="text-white/70 text-xs">
                                    Years Exp
                                  </div>
                                </div>
                                <div className="text-center p-3 bg-purple-500/10 rounded-xl border border-purple-500/20">
                                  <div className="text-purple-400 font-bold">
                                    50+
                                  </div>
                                  <div className="text-white/70 text-xs">
                                    Projects
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Details Panel */}
          <motion.div
            className="relative"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="sticky top-8">
              <div className="bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 backdrop-blur-2xl rounded-3xl border-2 border-white/10 p-8 shadow-2xl h-[500px] relative overflow-hidden">
                {/* Panel Background Animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                  }}
                />

                <AnimatePresence mode="wait">
                  {skillDetail || activeSkill ? (
                    <motion.div
                      key={skillDetail?.id || activeSkill?.id}
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -30, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="h-full flex flex-col relative z-10"
                    >
                      <div className="flex items-center gap-4 mb-8">
                        <motion.div
                          className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                          animate={{
                            scale: [1, 1.5, 1],
                            boxShadow: [
                              "0 0 10px rgba(34, 211, 238, 0.5)",
                              "0 0 20px rgba(34, 211, 238, 0.8)",
                              "0 0 10px rgba(34, 211, 238, 0.5)",
                            ],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                        />
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                          {skillDetail?.name || activeSkill?.name}
                        </h2>
                      </div>

                      <div className="flex-1 overflow-y-auto space-y-6">
                        <motion.p
                          className="text-white/80 leading-relaxed text-lg"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          {skillDetail?.message ||
                            SkillDetails.find((s) => s.id === activeSkill?.id)
                              ?.message ||
                            "Hover over a skill to see detailed information about my expertise and experience."}
                        </motion.p>

                        {/* Enhanced Additional Info */}
                        <motion.div
                          className="grid gap-4 p-6 bg-white/5 rounded-2xl border border-white/10"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          <div className="flex items-center gap-3 text-cyan-300">
                            <motion.span
                              animate={{ rotate: [0, 360] }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            >
                              ⚡
                            </motion.span>
                            <span className="font-semibold">
                              Expert Proficiency
                            </span>
                          </div>
                          <div className="flex items-center gap-3 text-purple-300">
                            <motion.span
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                              }}
                            >
                              🕒
                            </motion.span>
                            <span className="font-semibold">
                              4+ Years Mastery
                            </span>
                          </div>
                          <div className="flex items-center gap-3 text-pink-300">
                            <motion.span
                              animate={{ y: [0, -5, 0] }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                              }}
                            >
                              🚀
                            </motion.span>
                            <span className="font-semibold">
                              Production Ready
                            </span>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="h-full flex flex-col items-center justify-center text-center space-y-6"
                    >
                      <motion.div
                        className="w-24 h-24 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl flex items-center justify-center relative"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 12,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <motion.span
                          className="text-4xl"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                        >
                          💫
                        </motion.span>
                        {/* Orbiting dots */}
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-3 h-3 bg-cyan-400 rounded-full"
                            style={{
                              left: "50%",
                              top: "50%",
                            }}
                            animate={{
                              x: [
                                0,
                                Math.cos((i * 120 * Math.PI) / 180) * 40,
                                0,
                              ],
                              y: [
                                0,
                                Math.sin((i * 120 * Math.PI) / 180) * 40,
                                0,
                              ],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: i * 0.5,
                            }}
                          />
                        ))}
                      </motion.div>
                      <div className="space-y-2">
                        <p className="text-white font-semibold text-xl">
                          Explore My Skills
                        </p>
                        <p className="text-white/60 text-lg">
                          Select a skill to view detailed expertise
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.div
            className="inline-flex flex-col items-center gap-6 p-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-2xl rounded-3xl border-2 border-white/10 shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-white/80 text-xl font-semibold">
              Ready to leverage these skills for your next project?
            </p>
            <motion.button
              className="px-12 py-4 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-2xl text-white font-bold text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Button Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1,
                }}
              />
              <span className="relative z-10 flex items-center gap-3">
                Start Collaboration
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                >
                  🚀
                </motion.span>
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ExperienceDetails;
