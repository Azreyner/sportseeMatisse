import React, { useState, useEffect } from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  Tooltip,
  Pie,
  PieChart,
  Cell,
} from "recharts";
import "../Style/Components/Kpi.scss";

const Kpi = ({ leScore }) => {
  const data = [
    { name: "Score", value: leScore, fill: "#ff0000" },
    { name: "Score", value: 1 - leScore, fill: "#ff0000" },
  ];

  console.log("LA DATA :", data);

  const COLORS = ["#FF0000", "transparent"];

  const CustomizedLegend = ({ leScore }) => {
    return (
      <div className="kpi__legende">
        <p>
          <span className="pourcentage">{`${leScore * 100}%`}</span>
          <br />
          de votre
          <br />
          objectif
        </p>
      </div>
    );
  };

  return (
    <div className="kpi">
      <h1>Score</h1>
      <ResponsiveContainer width="99%" height="99%">
        <PieChart>
          <circle cx="50%" cy="50%" r={"25%"} fill="#FFFFFF" />
          <Pie
            data={data}
            dataKey="value"
            fill="#FF0000"
            cx="50%"
            cy="50%"
            startAngle={90}
            endAngle={450}
            innerRadius={"50%"}
            outerRadius={"55%"}
            cornerRadius="100%"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                stroke="none"
              />
            ))}
          </Pie>
          <Legend
            verticalAlign="middle"
            content={<CustomizedLegend leScore={leScore} />}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Kpi;
