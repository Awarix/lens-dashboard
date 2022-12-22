import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const Achart = (props) => {

    
    const newData = [
        { date: '14.10', follow: props.follow || props.totalProfiles, following: (props.following + Math.random()*100).toFixed(0) },
        { date: '15.10', follow: (123 + Math.random()*100).toFixed(0), following: (123 + Math.random()*100).toFixed(0) },
        { date: '16.10', follow: (123 + Math.random()*100).toFixed(0), following: (123 + Math.random()*100).toFixed(0) },
        { date: '17.10', follow: (123 + Math.random()*100).toFixed(0), following: (123 + Math.random()*100).toFixed(0) },
        { date: '18.10', follow: (123 + Math.random()*100).toFixed(0), following: (123 + Math.random()*100).toFixed(0) },
        { date: '19.10', follow: (123 + Math.random()*100).toFixed(0), following: (123 + Math.random()*100).toFixed(0) },
        { date: '20.10', follow: (123 + Math.random()*100).toFixed(0), following: (123 + Math.random()*100).toFixed(0) }
      ]
  return (
    <div style={{width:"100%", height:"600px"}} className='shadow rounded mt-4'>
    <ResponsiveContainer>
        <AreaChart
          data={newData}
          margin={{
            top: 50,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <defs>
            <linearGradient id='color1' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='0%' stopColor='#d24ffa' stopOpacity={0.4} />
              <stop offset='33%' stopColor='#6caefd' stopOpacity={0.2} />
              <stop offset='100%' stopColor='#d24ffa' stopOpacity={0.05} />
            </linearGradient>
            <linearGradient id='color2' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='0%' stopColor='#6caefd' stopOpacity={0.4} />
              <stop offset='33%' stopColor='#d24ffa' stopOpacity={0.2} />
              <stop offset='100%' stopColor='#6caefd' stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend className='xt-4'/>
          <Area type="monotone" dataKey="follow" stroke="#d24ffa" fill='url(#color1)' strokeWidth={2}  activeDot={{ r: 8 }} />
          <Area type="monotone" dataKey="following" stroke="#6caefd" fill='url(#color2)' strokeWidth={2}/>
        </AreaChart>
      </ResponsiveContainer>
      </div>
  )
}

export default Achart