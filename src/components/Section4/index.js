import React from 'react'
import { ResponsiveContainer, Bar, BarChart, XAxis,YAxis, Cell } from 'recharts'
import './index.css'

const data = [
  {
    name: 'Firewall INGRESS...',
    number: 2,
    color: "#008767"
  },
  {
    name: 'Instance without...',
    number: 5,
    color: "#43DD93"
  },
  {
    name: 'Not encrypted with..',
    number: 9,
    color: "#BB8E1B"
  },
  {
    name: 'Instance without...',
    number: 12,
    color: "#2894FF"
  },
  {
    name: 'Not encrypted with...',
    number: 3,
    color: "#FF9900"
  }
];


const Section4 = () => {
  

  return (
    <>
    <div className='horizontal-bar-chart'>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={500}
          height={300}
          data={data}
          layout="vertical" barCategoryGap={1}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
            <XAxis type="number" hide />
            <YAxis type="category" width={150} padding={{ left: 20 }} dataKey="name" fill='#000000'/>
          <Bar dataKey="number" fill="#8884d8" maxBarSize={69} label>
          {
          data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))
          }
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
    <hr color="#D9D9D9" width='100%'/>  
    </>
  )
}

export default Section4