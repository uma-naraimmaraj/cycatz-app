import React from 'react'
import './index.css'
import PieChartData from '../PieChartData'

const alertsData = [
  {
    companyName: 'AZURE',
    assets: 100,
    color:"#DDCE43" 
    
  },
  {
    companyName: 'GCP',
    assets: 200,
    color: '#FFA928'
  },
  {
    companyName: 'AWS',
    assets: 100,
    color:"#E56C5B" 
  },
  {
    companyName: 'GCP',
    assets: 200,
    color:"#FFA928" 
  },
  {
    companyName: 'AZURE',
    assets: 500,
    color:"#DDCE43" 
  }
]

const Section5 = () => {
  return (
    <>
    <div className='section5-container'>
      <PieChartData data={alertsData} />
      <div className='world-map-container'>
        <img src='https://res.cloudinary.com/dqmqelm8f/image/upload/v1687935189/map_tbwjuc.png' alt='wordmap' />
      </div>
    </div>
    <hr color="#D9D9D9" width='100%'/>
    </>
  )
}

export default Section5