import { motion } from "framer-motion";
import {
  BiLogoAws,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { SiDotnet, SiRedux } from "react-icons/si";
import AnimatedIcon from "./AnimatedIcon";
import {
  TbBrandCSharp,
  TbBrandGithub,
  TbBrandMysql,
  TbSql,
} from "react-icons/tb";
import { DiMsqlServer, DiMysql } from "react-icons/di";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "from-purple-500 to-pink-500",
      skills: [
        { Icon: BiLogoReact, name: "React", color: "text-cyan-400" },
        {
          Icon: BiLogoJavascript,
          name: "JavaScript",
          color: "text-yellow-400",
        },
        { Icon: BiLogoCss3, name: "CSS3", color: "text-blue-400" },
        { Icon: BiLogoTailwindCss, name: "Tailwind", color: "text-sky-400" },
        { Icon: SiRedux, name: "Redux", color: "text-purple-400" },
      ],
    },
    {
      title: "Backend",
      color: "from-green-500 to-cyan-500",
      skills: [
        { Icon: TbBrandCSharp, name: "C#", color: "text-purple-400" },
        { Icon: SiDotnet, name: ".NET Core", color: "text-indigo-400" },
        { Icon: DiMsqlServer, name: "SQL Server", color: "text-red-400" },
        { Icon: TbSql, name: "SQL", color: "text-blue-300" },
      ],
    },
    {
      title: "Tools & Cloud",
      color: "from-orange-500 to-red-500",
      skills: [
        { Icon: BiLogoAws, name: "AWS", color: "text-yellow-400" },
        { Icon: TbBrandGithub, name: "GitHub", color: "text-white" },
        { Icon: DiMysql, name: "MySQL", color: "text-blue-400" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="relative w-full h-full min-h-[500px] flex items-center justify-center p-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-cyan-500 rounded-full blur-3xl" />
      </div>

      {/* Main Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl z-10">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            className="relative group"
            variants={categoryVariants}
          >
            {/* Category Card */}
            <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 p-6 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 h-full">
              {/* Category Header */}
              <div className="text-center mb-6">
                <motion.h3
                  className={`text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-2`}
                  whileHover={{ scale: 1.05 }}
                >
                  {category.title}
                </motion.h3>
                <div
                  className={`h-1 w-12 mx-auto bg-gradient-to-r ${category.color} rounded-full`}
                />
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group/skill"
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    viewport={{ once: true }}
                  >
                    {/* Skill Icon */}
                    <div className="relative">
                      <AnimatedIcon
                        Icon={skill.Icon}
                        className={`text-3xl ${skill.color} transition-all duration-300`}
                        size={32}
                        tooltip={skill.name}
                        hoverEffect={true}
                        pulse={true}
                      />

                      {/* Hover Glow */}
                      <div className="absolute inset-0 bg-current rounded-full blur-md opacity-0 group-hover/skill:opacity-30 transition-opacity duration-300" />
                    </div>

                    {/* Skill Name */}
                    <motion.span
                      className="text-white/80 text-sm font-medium text-center"
                      whileHover={{ color: "rgba(255,255,255,1)" }}
                    >
                      {skill.name}
                    </motion.span>
                  </motion.div>
                ))}
              </div>

              {/* Category Background Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
              />
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: categoryIndex * 0.5,
              }}
            >
              {categoryIndex + 1}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Central Orbital System (Optional) */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <motion.div
          className="w-32 h-32 border-2 border-purple-500/20 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute w-16 h-16 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full"
          animate={{
            rotate: -360,
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </motion.div>
  );
};

export default Skills;
