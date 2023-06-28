import React , {useState} from 'react'
import {BiSolidDashboard} from 'react-icons/bi'
import {BsChevronDown} from 'react-icons/bs'
import './index.css'


const DashboardList = () => {
  const [toggleDropdown, setDropdown] = useState(false)

  const renderDropdownMenu = () => (

      <div className='dropdown-menu-container'>
       
        <div className='dropdown-menu-items'>
          <BiSolidDashboard className='dropdown-icons'/>
          <p>Dashboard</p>
        </div>
        <div className='dropdown-menu-items'>
          <img src='https://res.cloudinary.com/dqmqelm8f/image/upload/v1687846556/sword_1_Traced_nfkbqv.png' alt='sword' className='dropdown-icons' />
          <p>Attack surface Manage...</p>
        </div>
        <div className='dropdown-menu-items'>
          <img src='https://res.cloudinary.com/dqmqelm8f/image/upload/v1687846556/sword_1_Traced_nfkbqv.png' alt='web' className='dropdown-icons' />
          <p>Dark web</p>
        </div>
        <div className='dropdown-menu-items'>
          <img src='https://res.cloudinary.com/dqmqelm8f/image/upload/v1687846548/smartphone_1_1_Traced_tiyhbi.png' alt='semanticweb' className='dropdown-icons' />
          <p>Surface web</p>
        </div>
        <div className='dropdown-menu-items'>
          <img src='https://res.cloudinary.com/dqmqelm8f/image/upload/v1687846548/smartphone_1_1_Traced_tiyhbi.png' alt='monitor' className='dropdown-icons' />
          <p>Branding Monitoring</p>
        </div>
        <div className='dropdown-menu-items'>
          <img src='https://res.cloudinary.com/dqmqelm8f/image/upload/v1687846548/smartphone_1_1_Traced_tiyhbi.png' alt='monitor' className='dropdown-icons' />
          <p>Thread News</p>
        </div>
      </div>

  )

  return (
    <div className='dasboard-list-container'>
      <div className='dasboard-items-container'>
        <BiSolidDashboard className='dashboard-icons'/>
        <p>Dashboard</p>
      </div>
      <div className='dasboard-items-container'>
        <img src='https://res.cloudinary.com/dqmqelm8f/image/upload/v1687846446/icon-park-solid_report_ajalke.png' alt='park' className='dashboard-icons' />
        <p>Vulnerabilities</p>
      </div>
      <div className='dasboard-items-container'>
        <img src='https://res.cloudinary.com/dqmqelm8f/image/upload/v1687846556/sword_1_Traced_nfkbqv.png' alt='sword' className='dashboard-icons' />
        <p>Attack surface</p>
      </div>
      <div className='dasboard-items-container'>
        <img src='https://res.cloudinary.com/dqmqelm8f/image/upload/v1687846571/web_1_1_Traced_bdx49m.png' alt='web' className='dashboard-icons' />
        <p>Darkweb</p>
      </div>
      <div className='dasboard-items-container'>
        <img src='https://res.cloudinary.com/dqmqelm8f/image/upload/v1687846528/simple-icons_semanticweb_v9o6c5.png' alt='semanticweb' className='dashboard-icons' />
        <p>Surfaceweb</p>
      </div>
      <div className='dasboard-items-container'>
        <img src='https://res.cloudinary.com/dqmqelm8f/image/upload/v1687846458/material-symbols_monitoring_ig24g2.png' alt='monitor' className='dashboard-icons' />
        <p>Brand Monitoring</p>
      </div>
      <div className='dasboard-items-container'>
        <img src='https://res.cloudinary.com/dqmqelm8f/image/upload/v1687846458/material-symbols_monitoring_ig24g2.png' alt='monitor' className='dashboard-icons' />
        <p>Thread Feed</p>
      </div>
      <div className='dasboard-items-container'>
        <img src='https://res.cloudinary.com/dqmqelm8f/image/upload/v1687846548/smartphone_1_1_Traced_tiyhbi.png' alt='smartphone' className='dashboard-icons' />
        <p>Mobile</p>
      </div>
      <div className='dasboard-items-container'>
        <img src='https://res.cloudinary.com/dqmqelm8f/image/upload/v1687846434/email_1_Traced_hez5xk.png' alt='email' className='dashboard-icons' />
        <p>Email Security</p>
      </div>
      <div className='dasboard-items-container'>
        <img src='https://res.cloudinary.com/dqmqelm8f/image/upload/v1687846563/Vector_ctdxsl.png' alt='vector' className='dashboard-icons' />
        <p>Incident/Report</p>
      </div>
      <div className='dasboard-items-container'>
        <img src='https://res.cloudinary.com/dqmqelm8f/image/upload/v1687846458/material-symbols_monitoring_ig24g2.png' alt='monitor' className='dashboard-icons' />
        <p>CSPM</p>
      </div>
      <div className='dasboard-items-container'>
        <img src='https://res.cloudinary.com/dqmqelm8f/image/upload/v1687846458/material-symbols_monitoring_ig24g2.png' alt='monitor' className='dashboard-icons' />
        <p>Vender Risk Posture</p>
        <button type='button' className='dropdown-button'>
          <BsChevronDown className='dashboard-icons' onClick={() => setDropdown(prevState => !prevState)}/>
        </button>
      </div>
      {toggleDropdown && renderDropdownMenu()}
      <div className='dasboard-items-container'>
        <img src='https://res.cloudinary.com/dqmqelm8f/image/upload/v1687846511/report_1_Traced_xfjly0.png' alt='report' className='dashboard-icons' />
        <p>Integration</p>
      </div>
      <div className='dasboard-items-container'>
        <img src='https://res.cloudinary.com/dqmqelm8f/image/upload/v1687846520/setting_1_Traced_mkv5o3.png' alt='settings' className='dashboard-icons' />
        <p>
          Settings
        </p>
      </div>
    </div>
  )
}

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <div className='cycatz-logo-container'>
          <img src='https://res.cloudinary.com/dqmqelm8f/image/upload/v1687841046/image_4_cs4dn3.png' alt='logo'/>
      </div>
      <DashboardList />
    </div>
  )
}

export default Dashboard