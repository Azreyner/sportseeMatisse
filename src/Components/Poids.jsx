import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "../Style/Components/Poids.scss";

const Poids = ({ lePoids }) => {
  let poidsMax = 0;

  function trierPoidsMinMax(data) {
    poidsMax = data[0].kilogram;

    for (let index = 0; index < data.length; index++) {
      if (data[index].kilogram > poidsMax) {
        poidsMax = data[index].kilogram;
      }
    }
  }

  const renderCustomAxisTick = ({ x, y, payload }) => {
    let tick = "";
    const [year, month, date] = payload.value.split("-").map(Number);

    tick = date;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#666">
          {tick}
        </text>
      </g>
    );
  };

  const renderLegend = (props) => {
    const { payload } = props;

    return (
      <div className="lesLegendes">
        <div className="legende">
          <div className="legende__cercle legende__cercle--kilogramme"></div>
          <p>Poids (kg)</p>
        </div>
        <div className="legende">
          <div className="legende__cercle legende__cercle--calorie"></div>
          <p>Calories brûlées (kCal)</p>
        </div>
      </div>
    );
  };

  const customTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip--poids">
          <p className="kg">{payload[0].payload.kilogram} kg</p>
          <p className="kCal">{payload[0].payload.calories} kCal</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="laBarChart">
      <p id="titreBarchart">Activité quotidienne</p>
      <ResponsiveContainer
        className="laBarChart__chartContainer"
        width="99%"
        height="99%"
      >
        <BarChart
          data={lePoids}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barGap={10}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" tick={renderCustomAxisTick} tickLine={false} />
          <YAxis
            orientation="right"
            domain={[69, "auto"]}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            cursor={{ fill: "rgba(196, 196, 196, 0.5)" }}
            content={customTooltip}
            wrapperStyle={{ outline: "none" }}
          />
          <Bar
            dataKey="kilogram"
            fill="#282D30"
            maxBarSize={10}
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="calories"
            fill="#E60000"
            maxBarSize={10}
            radius={[10, 10, 0, 0]}
          />
          <Legend
            verticalAlign="top"
            align="right"
            width={350}
            height={100}
            content={renderLegend}
          />
          <p id="titreBarchart">Activité quotidienne</p>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Poids;
