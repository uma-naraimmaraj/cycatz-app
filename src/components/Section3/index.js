
import React from 'react'
import PieChartData from '../PieChartData'
import './index.css'

const assetsData = [
  {
    companyName: 'AZURE',
    assets: 1000,
    color:"#43DD93" 
    
  },
  {
    companyName: 'GCP',
    assets: 500,
    color: '#E59D5B'
  },
  {
    companyName: 'AWS',
    assets: 1000,
    color:"#2894FF" 
  },
  {
    companyName: 'GCP',
    assets: 1000,
    color:"#E59D5B" 
  },
  {
    companyName: 'AZURE',
    assets: 500,
    color:"#43DD93" 
  }
]

const Section3 = () => {

  
 
  return (
    <>
    <div class='section3-container'>
      <div className='section3-static-container'>
        <div className='section3-green-card'>
          <p className='section3-card-number green-card-text'>2</p>
          <p className='section3-card-content green-card-text'>GCP</p>
        </div>
        <div >
          <div className='section3-card section3-violet-card-bg'>
            <p className='section3-card-number violet-card-text'>6</p>
            <p className='section3-card-content violet-card-text'>AWS</p>
          </div>
          <div className='section3-card section3-orange-card-bg'>
            <p className='section3-card-number orange-card-text'>6</p>
            <p className='section3-card-content orange-card-text'>AZURE</p>
          </div>
        </div>
      </div>
      <PieChartData data={assetsData}/>
    </div>
    <hr color="#D9D9D9" width='100%'/>
    </>
  )
}

export default Section3