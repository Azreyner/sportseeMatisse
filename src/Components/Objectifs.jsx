import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceArea,
} from "recharts";
import "../Style/Components/Objectifs.scss";

const Objectifs = ({ lesDonnéesAVGSession }) => {
  const data = lesDonnéesAVGSession;

  const days = {
    1: "L",
    2: "M",
    3: "M",
    4: "J",
    5: "V",
    6: "S",
    7: "D",
  };

  const renderCustomAxisTick = ({ x, y, payload }) => {
    let tick = "";
    tick = days[payload.value];

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#FFFFFF">
          {tick}
        </text>
      </g>
    );
  };

  function CustomTooltip({ payload, label, active }) {
    if (active) {
      return (
        <div className="custom-tooltip--objectif">
          <p className="label">{`${payload[0].value} min`}</p>
        </div>
      );
    }

    return null;
  }

  const [coord, setCoord] = useState("100%");
  const CHART_PADDING_IN_PX = 10;

  const OnMouseMove = (hoverData) => {
    console.log(hoverData);
    if (hoverData.activeCoordinate) {
      setCoord(hoverData.activeCoordinate.x + CHART_PADDING_IN_PX + "px");
    }
  };

  // GRADIENT DEFINIT
  const style = `
  #rect1 { fill: url(#Gradient1); }
  .stop1 { stop-color: red; }
  .stop2 { stop-color: white; }`;

  return (
    <div
      className="boxObjectif"
      style={{
        padding: CHART_PADDING_IN_PX + "px",
        background: `linear-gradient(90deg, #FF0000 0%, #FF0000 ${coord}, #E60000 ${coord})`,
      }}
    >
      <svg
        width="120"
        height="240"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="svgGradient"
      >
        <defs>
          <linearGradient id="Gradient1">
            <stop className="stop1" offset="0%" />
            <stop className="stop2" offset="40%" />
          </linearGradient>
          <style>{style}</style>
        </defs>
      </svg>
      <h2 className="boxObjectif__titre">Duréee moyenne des sessions</h2>
      <ResponsiveContainer
        className="boxObjectif__objectifs"
        width="99%"
        height="99%"
      >
        <LineChart
          width={258}
          height={263}
          data={data}
          text="Durée moyenne des sessions"
          onMouseMove={OnMouseMove}
        >
          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={{ outline: "none" }}
            position={{ y: 0 }}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            isAnimationActive={false}
            stroke="url(#Gradient1)"
            dot={false}
            activeDot={{ r: 8 }}
            strokeWidth={3}
          />
          <XAxis
            dataKey="day"
            tick={renderCustomAxisTick}
            axisLine={false}
            tickLine={false}
          />
          {/* <XAxis
          dataKey="day"
          tick={renderCustomAxisTick}
          axisLine={false}
          tickLine={false}
          mirror={false}
          tickMargin={10}
          minTickGap={10}
        /> */}
          <ReferenceArea
            x1={150}
            x2={180}
            y1={200}
            y2={300}
            stroke="black"
            strokeOpacity={0.3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Objectifs;
