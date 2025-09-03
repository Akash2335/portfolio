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
  return (
    <div>
      {/* LEFT-SIDE Icons */}
      <AnimatedIcon
        Icon={BiLogoReact}
        className="absolute left-8 top-20 text-sky-400 text-4xl"
      />
      <AnimatedIcon
        Icon={BiLogoAws}
        className="absolute left-8 top-36 text-yellow-400 text-4xl"
      />
      <AnimatedIcon
        Icon={BiLogoTailwindCss}
        className="absolute left-8 top-52 text-sky-500 text-4xl"
      />
      <AnimatedIcon
        Icon={TbBrandCSharp}
        className="absolute left-8 top-[250px] text-fuchsia-400 text-4xl"
      />
      <AnimatedIcon
        Icon={SiDotnet}
        className="absolute left-8 top-[310px] text-indigo-400 text-4xl"
      />
      <AnimatedIcon
        Icon={TbBrandGithub}
        className="absolute left-8 top-[370px] text-white text-4xl"
      />

      {/* RIGHT-SIDE Icons */}
      <AnimatedIcon
        Icon={BiLogoCss3}
        className="absolute right-8 top-20 text-blue-400 text-4xl"
      />
      <AnimatedIcon
        Icon={BiLogoJavascript}
        className="absolute right-8 top-36 text-yellow-300 text-4xl"
      />
      <AnimatedIcon
        Icon={TbSql}
        className="absolute right-8 top-52 text-cyan-300 text-4xl"
      />
      <AnimatedIcon
        Icon={SiRedux}
        className="absolute right-8 top-[250px] text-purple-400 text-4xl"
      />
      <AnimatedIcon
        Icon={DiMsqlServer}
        className="absolute right-8 top-[320px] text-yellow-400 text-4xl font-semibold"
      />
    </div>
  );
};
export default Skills;
