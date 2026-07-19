import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import skills from "../data/skills";

export default function SkillRadarChart() {
  const radarData = skills.map((skill) => ({
    skill: skill.name,
    value: skill.level,
  }));
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-xl bg-slate-900 border border-blue-500/30 px-4 py-3 shadow-xl">
          <p className="font-semibold text-white">{payload[0].payload.skill}</p>

          <p className="text-blue-400 mt-1">{payload[0].value}% Proficiency</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
      <ResponsiveContainer width="100%" height={500}>
        <RadarChart data={radarData}>
          <Tooltip cursor={false} content={<CustomTooltip />} />
          <PolarGrid stroke="#334155" />

          <PolarAngleAxis
            dataKey="skill"
            tick={{ fill: "#cbd5e1", fontSize: 14 }}
          />

          {/* <PolarRadiusAxis
            angle={90}
            domain={[0, 100]}
            // tick={{ fill: "#64748b" }}
          /> */}

          <Radar
            dataKey="value"
            stroke="#3b82f6"
            fill="#3b82f6"
            fillOpacity={0.35}
            strokeWidth={3}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
