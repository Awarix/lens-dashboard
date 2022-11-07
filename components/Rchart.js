import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

const Rchart = () => {
    const data = [
        { name: 'Lenster', value: 10 + Math.random()*10 }, 
        { name: 'Lenstube', value: 1 + Math.random()*10 }, 
        { name: 'Lensfrens', value: 1 + Math.random()*10 }, 
        { name: 'Orb', value: 1 + Math.random()*10 }, 
        { name: 'Phaver', value: 1 + Math.random()*10 }
      ]

  return (
    <div style={{width: '37rem', height: '26rem'}} className='shadow rounded'>
        <ResponsiveContainer>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <defs>
            <linearGradient id='color' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='0%' stopColor='#d24ffa' stopOpacity={0.9} />
              <stop offset='33%' stopColor='#6caefd' stopOpacity={0.5} />
              <stop offset='100%' stopColor='#d24ffa' stopOpacity={0.2} />
            </linearGradient>
        </defs>
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          <PolarRadiusAxis />
          <Tooltip />
          <Radar name='value' dataKey="value" stroke="#d24ffa" fill='url(#color)' strokeWidth={2} fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Rchart