import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
// import { chartData } from "./data";
function Chart(props) {
  // console.log(props, 'pros')
    const data = props.data

    const CustomToolTip =({active, payload, label}) =>{
      // console.log(payload)
      if(payload[0] === undefined){ return null
      }else if(active){
          return(
          <div className="toolTip">
            <h4>H</h4>
            <p>${payload[0].value.toFixed(2)}</p>
            <p>{payload[0].payload.label}</p>
          </div>
          )}
    }



// render page
    return (
        <div>
        <ResponsiveContainer width='100%' height={400}>
          <AreaChart  data={data}
                      margin={{
                          top: 30,
                          right: 10,
                          left: 10,
                          bottom: 0,
                        }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#129a74" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.1}/>
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
            domain={['auto', 'auto']}
            axisLine={false}
            tickLine={false}
            tickCount={4}
            tickFormatter={number => `$${number.toFixed(2)}`}
            // tick={{ fill: 'gainsboro' }}
            tick={{fontSize:12}}
            tickMargin={10}
             />
            
          <XAxis 
            dataKey="label"
            axisLine={false}
            tickLine={false}
            // tick={{ fill: 'gainsboro' }}
            tick={{fontSize:12}}
            tickMargin={10}
            // tickFormatter={number => `$${number.toFixed(2)}`}
            

            />
          
          <Tooltip
            content={<CustomToolTip/>}
            position={{ x: 700, y: 0 }}
            // content={<CustomToolTip/>}

            />
            <Legend 
              verticalAlign="top"
              align="left"
              iconType='circle'
              height={40}/>
              
            <Area 
              connectNulls={true}
              dataKey='high'
              stroke='#29ca8e'
              strokeWidth={2.5}
              fill='lightgreen'
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