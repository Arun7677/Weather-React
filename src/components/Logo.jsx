import React from 'react'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import drizzle_icon from '../assets/drizzle.png'
import '../components/Logo.css'
const Logo = (props) => {
  return (
    <div id="image">
        <img src={cloud_icon}></img>
    </div>
  )
}

export default Logo