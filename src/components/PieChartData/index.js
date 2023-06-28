import React from 'react'
import {ResponsiveContainer, Pie, PieChart, Cell, Legend, Tooltip} from 'recharts'
import './index.css'

const PieChartData = (props) => {
  const {data} = props

  const renderColorfulLegendText = (value, entry) => {
    const { color } = entry;
    return <span style={{ color }}>{value}</span>;
  }

  return (
    <div className="piechart-container">
        <ResponsiveContainer width="100%" height={300}>
            <PieChart width={400} height={300}>
                <Pie cx="50%" cy="50%" data={data} startAngle={0} endAngle={360}  innerRadius={100}  dataKey="assets" stroke='none' labelLine={true}>
                    {data.map((entry, index) => (
                      <Cell name={`Project ${index+1}-${entry.assets}`} fill={entry.color} />
                    ))}
                    <text x={400} y={200} textAnchor="middle" dominantBaseline="middle" fill='#000000'>
                        Assets
                    </text>
                </Pie>
                <Tooltip />
                <Legend iconType="circle" layout="vertical" verticalAlign="middle" align="right" iconSize={20} formatter={renderColorfulLegendText}/>
            </PieChart>
        </ResponsiveContainer>
    </div>
  )
}

export default PieChartData