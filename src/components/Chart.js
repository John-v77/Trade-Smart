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
// import { chartData } from "./data";
function Chart(props) {
  // console.log(props, 'pros')
  const data = props.data;

  const CustomToolTip = ({ active, payload, label }, data) => {
    //This toolTip is crashing the aplication when the data is null ******
    // console.log(payload)

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
          {/* <defs>
              <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2451B7" opacity={0.4}/>
                <stop offset="75%" stopColor="#2451B7" opacity={0.05}/>
              </linearGradient>
            </defs> */}
          <YAxis
            type="number"
            domain={["auto", "auto"]}
            axisLine={false}
            tickLine={false}
            tickCount={4}
            tickFormatter={(number) => `$${number.toFixed(2)}`}
            // tick={{ fill: 'gainsboro' }}
            tick={{ fontSize: 12 }}
            tickMargin={10}
          />

          <XAxis
            dataKey="label"
            axisLine={false}
            tickLine={false}
            // tick={{ fill: 'gainsboro' }}
            tick={{ fontSize: 12 }}
            tickMargin={10}
            // tickFormatter={number => `$${number.toFixed(2)}`}
          />

          <Tooltip
            async
            content={<CustomToolTip />}
            position={{ x: 550, y: 0 }}
            // viewBox={{ x: 0, y: 0 ,width: 400, height: 400}}
            // content={<CustomToolTip/>}
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
          {/* <Area 
              connectNulls={true}
              dataKey='low'
              stroke='#29ca8e'
              strokeWidth={2.5}
              fill='lightgreen'
              fillOpacity={0.2}
              /> */}
        </AreaChart>
      </ResponsiveContainer>

      {/* /Line Chart */}
      {/* <ResponsiveContainer width="100%" height={500}>
        <LineChart
            
            width={900}
            height={500}
            data={props.data}
            margin={{
              top: 50,
              right: 50,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid vertical horizontal={false} verticalFill={["#373153",'#373153']} fillOpacity={0.99} />
            <XAxis dataKey="minute" />
            <YAxis type="number" domain={['auto', 'auto']} />
            <Tooltip />
            <Legend  />
            <Line connectNulls={true}  isAnimationActive={true} type="monotone" dataKey="high" tick='Price' stroke="lawngreen" dot={false} />
            <Line connectNulls={true} isAnimationActive={true} type="monotone" dataKey={"low"} stroke="red" dot={false} />
          </LineChart>
           </ResponsiveContainer> */}

      {/* <ResponsiveContainer width='100%' height="100%"> */}
      {/* <LineChart data={props.data} width={800} height={480}>
                <Tooltip  />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2.5} dot={false} />
                </LineChart> */}
      {/* </ResponsiveContainer> */}
    </div>
  );
}

export default Chart;
