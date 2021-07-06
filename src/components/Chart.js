import React from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

function Chart(props) {
  const data = props.data;
  const windowWidth = (window.innerHeight * 62) / 100;

  const CustomToolTip = ({ active, payload, label }, data) => {
    if (data == null) return null;
    if (payload[0] === undefined) {
      return null;
    } else if (active) {
      return (
        <div className="toolTip">
          <div>
            <h5>day chart: {props.symbol}</h5>
          </div>
          <div>
            <h5>${payload[0].value.toFixed(2)}</h5>
          </div>
          <div>
            <h5>{label}</h5>
          </div>
        </div>
      );
    }
  };

  // render page
  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={data}
          margin={{
            top: 30,
            right: 10,
            left: 10,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#129a74" stopOpacity={0.1} />
              <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.1} />
            </linearGradient>
          </defs>

          <YAxis
            type="number"
            domain={["auto", "auto"]}
            axisLine={false}
            tickLine={false}
            tickCount={4}
            tickFormatter={(number) => `$${number.toFixed(2)}`}
            tick={{ fontSize: 12 }}
            tickMargin={10}
          />

          <XAxis
            dataKey="label"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12 }}
            tickMargin={10}
          />

          <Tooltip
            content={<CustomToolTip />}
            position={{ x: windowWidth, y: 0 }}
          />
          <Legend
            verticalAlign="top"
            align="left"
            iconType="circle"
            height={40}
          />

          <Area
            connectNulls={true}
            dataKey="high"
            stroke="#29ca8e"
            strokeWidth={2.5}
            fill="lightgreen"
            fillOpacity={0.2}
            name={props.name}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
