import React from 'react'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts'

const Rbchart = () => {
    const newData = [
        
        { date: '15.10', follow: (123 + Math.random()*100).toFixed(0), following: (123 + Math.random()*100).toFixed(0), fill: "#ffc658" },
        { date: '16.10', follow: (123 + Math.random()*100).toFixed(0), following: (123 + Math.random()*100).toFixed(0) },
        { date: '17.10', follow: (123 + Math.random()*100).toFixed(0), following: (123 + Math.random()*100).toFixed(0) },
        { date: '18.10', follow: (123 + Math.random()*100).toFixed(0), following: (123 + Math.random()*100).toFixed(0) },
        { date: '19.10', follow: (123 + Math.random()*100).toFixed(0), following: (123 + Math.random()*100).toFixed(0) },
        { date: '20.10', follow: (123 + Math.random()*100).toFixed(0), following: (123 + Math.random()*100).toFixed(0) }
      ]

      

  return (
    <div style={{width:"400px", height:"100%"}}>
    <ResponsiveContainer>
    <RadialBarChart
      cx={150}
      cy={150}
      innerRadius={20}
      outerRadius={140}
      barSize={10}
      data={newData}
    >
      <RadialBar
        minAngle={15}
        label={{ position: "insideStart", fill: "#fff" }}
        background
        clockWise
        dataKey="follow"
      />
      <Legend
        iconSize={10}
        width={120}
        height={140}
        layout="vertical"
        verticalAlign="middle"
      />
    </RadialBarChart>
    </ResponsiveContainer>
    </div>
  )
}

export default Rbchart