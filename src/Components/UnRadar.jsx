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

const UnRadar = ({ performanceData }) => {
  const data = [
    {
      subject: performanceData.data.kind[1],
      A: performanceData.data.data[0].value,
    },
    {
      subject: performanceData.data.kind[2],
      A: performanceData.data.data[1].value,
    },
    {
      subject: performanceData.data.kind[3],
      A: performanceData.data.data[2].value,
    },
    {
      subject: performanceData.data.kind[4],
      A: performanceData.data.data[3].value,
    },
    {
      subject: performanceData.data.kind[5],
      A: performanceData.data.data[4].value,
    },
    {
      subject: performanceData.data.kind[6],
      A: performanceData.data.data[5].value,
    },
  ];

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
