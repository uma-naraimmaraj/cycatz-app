import React from 'react'
import  Dashboard from './components/Dashboard'
import StatisticsPage from './components/StatisticsPage'
import './App.css'

const App = () => {
  return (
    <div className='container'>
      <div className='cycatz-app-container'>
       <Dashboard /> 
       <StatisticsPage/>
    </div>
    </div>
    
  )
}

export default App
