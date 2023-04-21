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
  /*const data = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 600, pv: 6400, amt: 6400 },
    { name: "Page C", uv: 300, pv: 1400, amt: 1400 },
    { name: "Page D", uv: 300, pv: 4400, amt: 4400 },
  ];*/

  const data = lesDonnéesAVGSession;

  const renderCustomAxisTick = ({ x, y, payload }) => {
    let tick = "";

    switch (payload.value) {
      case 1:
        tick = "L";
        break;
      case 2:
        tick = "M";
        break;
      case 3:
        tick = "M";
        break;
      case 4:
        tick = "J";
        break;
      case 5:
        tick = "V";
        break;
      case 6:
        tick = "S";
        break;
      case 7:
        tick = "D";
        break;
      default:
        tick = "";
    }

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

  return (
    <ResponsiveContainer className="objectifs" width="99%" height="99%">
      <LineChart
        width={258}
        height={263}
        data={data}
        text="Durée moyenne des sessions"
      >
        <Tooltip
          content={<CustomTooltip />}
          wrapperStyle={{ outline: "none" }}
          position={{ y: 0 }}
        />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="#fff"
          dot={false}
          activeDot={{ r: 8 }}
          strokeWidth={3}
        />
        <XAxis
          dataKey="day"
          tick={renderCustomAxisTick}
          axisLine={false}
          tickLine={false}
          mirror={false}
          tickMargin={10}
          minTickGap={10}
        />
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
  );
};

export default Objectifs;
