import React from 'react'
import './index.css'

const Section2 = () => {
  return (
    <>
    <div className='section2-container'>
      <div className='section2-card green'>
        <p className='section2-card-title'>Services</p>
        <p className='section2-number'>6</p> 
        <hr color= "#EFEFEF"/>
      </div>
      <div className='section2-card green'>
        <p className='section2-card-title'>
          compliance issue
        </p>
        <p className='section2-number'>50</p> 
        <div className='section2-card-numbers-frame'>
          <div>
           <p className='card-numbers'>24</p>
          </div>
          <img src='https://res.cloudinary.com/dqmqelm8f/image/upload/v1687881815/vertical-line_sldsry.png' alt='vertical' />
          <div>
           <p className='card-numbers'>25</p>
          </div>
          <img src='https://res.cloudinary.com/dqmqelm8f/image/upload/v1687881815/vertical-line_sldsry.png' alt='vertical' />
          <div>
           <p className='card-numbers'>67</p>
          </div>
        </div>
      </div>
      <div className='section2-card ligh-blue'>
        <p className='section2-card-title'>Vulnerable Resources</p>
        <p className='section2-number'>500</p>  
        <div className='section2-card-numbers-frame'>
          <div>
           <p className='card-numbers'>250</p>
          </div>
          <img src='https://res.cloudinary.com/dqmqelm8f/image/upload/v1687881815/vertical-line_sldsry.png' alt='vertical' />
          <div>
           <p className='card-numbers'>100</p>
          </div>
          <img src='https://res.cloudinary.com/dqmqelm8f/image/upload/v1687881815/vertical-line_sldsry.png' alt='vertical' />
          <div>
           <p className='card-numbers'>10</p>
          </div>
        </div>
      </div>
      <div className='section2-card yellow'>
        <p className='section2-card-title'>Resolved Issues</p>
        <p className='section2-number'>230</p> 
        <div className='section2-card-numbers-frame'>
          <div>
           <p className='card-numbers'>10</p>
          </div>
          <img src='https://res.cloudinary.com/dqmqelm8f/image/upload/v1687881815/vertical-line_sldsry.png' alt='vertical' />
          <div>
           <p className='card-numbers'>12</p>
          </div>
          <img src='https://res.cloudinary.com/dqmqelm8f/image/upload/v1687881815/vertical-line_sldsry.png' alt='vertical' />
          <div>
           <p className='card-numbers'>20</p>
          </div>
        </div> 
      </div>    
      <div className='section2-card dark-blue'>
        <p className='section2-card-title'>Resolved Issues</p>
        <p className='section2-number'>230</p>  
        <div className='section2-card-numbers-frame'>
          <div>
           <p className='card-numbers'>10</p>
          </div>
          <img src='https://res.cloudinary.com/dqmqelm8f/image/upload/v1687881815/vertical-line_sldsry.png' alt='vertical' />
          <div>
           <p className='card-numbers'>12</p>
          </div>
          <img src='https://res.cloudinary.com/dqmqelm8f/image/upload/v1687881815/vertical-line_sldsry.png' alt='vertical' />
          <div>
           <p className='card-numbers'>20</p>
          </div>
        </div>
      </div>
    </div>
    <hr color="#D9D9D9" width='100%'/>
    </>
  )
}

export default Section2