import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Bchart = () => {
    const data = [
        { name: 'Lenster', value: 10 + Math.random()*10 }, 
        { name: 'Lenstube', value: 1 + Math.random()*10 }, 
        { name: 'Lensfrens', value: 1 + Math.random()*10 }, 
        { name: 'Orb', value: 1 + Math.random()*10 }, 
        { name: 'Phaver', value: 1 + Math.random()*10 }
      ]

    const COLORS = ['#d24ffa', '#6caefd','#8884d8', '#82ca9d', '#82fd1a' ];

  return (
    <div style={{width: '37rem', height: '26rem'}} className='shadow rounded'>
        <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          
              <Bar dataKey="value">
              {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
              </Bar>
            
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Bchart