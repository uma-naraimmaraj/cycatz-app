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


const Section6 = () => {
  return (
    <div className='horizontal-bar-chart'>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={730} height={250} data={data}>
          <XAxis dataKey="name" type='category'/>
          <YAxis type='number' hide/>
          <Bar dataKey="number" fill="#8884d8" barSize={69} radius={[5, 5, 0, 0]} barCategoryGAp={0} strokeWidth={3}>
          {
            data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))
          }
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Section6