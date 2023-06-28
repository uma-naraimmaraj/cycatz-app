import React from 'react'

import './index.css'

const Section1 = () => {
  return (
    <>
    <div className='navbar-container'>
       <div className='navbar-content-container'>
        <div className='flipkart-logo'>
          <img src='https://res.cloudinary.com/dqmqelm8f/image/upload/v1687851697/flipkart_xni3sg.png' alt='flipKart' />
          <p>FlipKart</p>
        </div>
        <div className='navbar-menu-container'>
          
          <button className='premium-button'>
            <img src='https://res.cloudinary.com/dqmqelm8f/image/upload/v1687852631/diamond_1_1_Traced_nyofvd.png' alt='diamond'/>
            Premium
          </button>
          
          
          <div className='help-desk'>
            <img src='https://res.cloudinary.com/dqmqelm8f/image/upload/v1687853083/help-desk_1_rfojen.png' alt='helpdesk' /> 
            <p>Help Desk</p>
          </div>
          <div class='profile'>
            <img src='https://res.cloudinary.com/dqmqelm8f/image/upload/v1687853179/Ellipse_9_tzpni9.png' alt='avatar' />
          </div>
        </div>
       </div> 
    </div>
    <hr color="#D9D9D9" width='100%' />
    </>
  )
}

export default Section1