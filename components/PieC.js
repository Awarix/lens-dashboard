import React from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer,Legend } from 'recharts';



const PieC = (props) => {
  const data = [
  { name: 'Follow', value: 325 }, 
  { name: 'Following', value: 132 }
]
const COLORS = ['#d24ffa', '#6caefd'];

  return (
    <div className='pieChart shadow rounded' style={{ width: "100%", height:"300px" }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie 
          data={data} 
          dataKey="value" 
          cx="50%" 
          cy="50%" 
          innerRadius={35} 
          outerRadius={90} 
          paddingAngle={3}
          fill="#82ca9d" 
          label={({
            cx,
            cy,
            midAngle,
            innerRadius,
            outerRadius,
            value,
            index
          }) => {
            console.log("handling label?");
            const RADIAN = Math.PI / 180;
            // eslint-disable-next-line
            const radius = 25 + innerRadius + (outerRadius - innerRadius);
            // eslint-disable-next-line
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            // eslint-disable-next-line
            const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
            return (
              <text
                x={x}
                y={y}
                fill={COLORS[index % COLORS.length]}
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
              >
                {data[index].name} ({value})
              </text>
            );
          }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PieC