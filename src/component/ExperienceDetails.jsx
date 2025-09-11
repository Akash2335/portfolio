import { useState, useRef } from "react";
import { Skill, SkillDetails } from "../contens";

const ExperienceDetails = () => {
  const [viewTab, setViewTab] = useState(0);
  const [tooltipStyle, setTooltipStyle] = useState({ top: 0, left: 0 });
  const containerRef = useRef(null);

  const handleDetails = (e, id) => {
    const itemRect = e.target.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    const itemCenter = itemRect.left + itemRect.width / 5;
    const tooltipWidth = 280; // w-72 = 18rem = 288px width of tooltip

    // Position tooltip below the item, horizontally centered
    setTooltipStyle({
      top: itemRect.bottom - 200 - containerRect.top, // 8px margin below
      left: itemCenter - containerRect.left - tooltipWidth / 2,
    });

    setViewTab(id);
  };

  const detail = SkillDetails.find((f) => f.id === viewTab);

  return (
    <div
      id="experience"
      className="flex flex-col items-center w-full min-h-screen  shadow-gray-300 bg-gradient-to-br animate-pulse from-slate-900 via-gray-900 to-black py-16 px-4 text-white"
      ref={containerRef}
    >
      <h1 className="text-5xl font-light text-white/70 tracking-wide mb-10">
        Experience
      </h1>

      <div className="w-full max-w-md relative space-y-2">
        {Skill.map((d) => (
          <div
            key={d.id}
            onMouseEnter={(e) => handleDetails(e, d.id)}
            onMouseLeave={() => setViewTab(0)}
            className="group cursor-pointer transition-all duration-200 px-4 py-3 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20"
          >
            <h2 className="text-lg text-white/80 group-hover:text-white transition-colors">
              {d.name}
            </h2>
          </div>
        ))}

        {/* Tooltip */}
        {viewTab !== 0 && detail && (
          <div
            className="absolute z-10 w-80 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg shadow-lg p-4 text-white/80 font-light text-sm transition-all duration-300 animate-bounce "
            style={{
              top: `${tooltipStyle.top}px`,
              left: `${tooltipStyle.left}px`,
            }}
          >
            <p className="text-base font-medium text-white/90 mb-1">
              Expertise: {detail.message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceDetails;
