import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Label,
} from "recharts";
import "../Style/Components/Radar.scss";

const data = [
  {
    subject: "cardio",
    A: 80,
  },
  {
    subject: "energy",
    A: 120,
  },
  {
    subject: "endurance",
    A: 140,
  },
  {
    subject: "strength",
    A: 50,
  },
  {
    subject: "speed",
    A: 200,
  },
  {
    subject: "intensity",
    A: 90,
  },
];

const UnRadar = () => {
  return (
    <ResponsiveContainer className="radar" width="100%" height="99%">
      <RadarChart data={data}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="subject"
          tick={{ fill: "white", fontSize: 12 }}
        />
        <PolarRadiusAxis axisLine={false} tick={false} />
        <Radar dataKey="A" fill="#FF0101" fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default UnRadar;
