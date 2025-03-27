import React, { useEffect, useRef } from 'react'
import '../components/Weather.css'
import wind_icon from '../assets/wind.png'
import humidity_icon from '../assets/humidity.png'
import { useState } from 'react'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'


const Weather = () => {
    const [data, setData] = useState({})
    const inputRef = useRef()
    

    const response = async(city)=>{  
        if(city===''){
            alert("Enter City Name")
            return
        }     
            const weatherIcons = {
                "01d": clear_icon,
                "01n": clear_icon,
                "02d": cloud_icon,
                "02n": cloud_icon,
                "03d": cloud_icon,
                "03n": cloud_icon,
                "04d": rain_icon,
                "04n": rain_icon,
                "09d": rain_icon,
                "09n": rain_icon,
                "10d": rain_icon,
                "10n": rain_icon, 
                "13d": snow_icon,
                "13n": snow_icon,
            }
        try {
            const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${"92dbf78f41a237093d3bfcf290e1007c"}`
            const res = await fetch(api)
            const myData = await res.json();
            console.log(myData)
            setData({
                id:myData.id,
                humidity:myData.main.humidity,
                speed:myData.wind.speed,
                temperature:Math.floor(myData.main.temp),
                city:myData.name,
                icon:weatherIcons[myData.weather[0].icon]||cloud_icon
               
            })

        } catch (error) {
            setData({})
            alert("Data Not Found")
        }
    }
    useEffect(()=>{
        response("Bhubaneswar")
    },[])

    

  return (
    <div id="main">
        <h1 id="ab">WEATHER APP</h1>
        <div id="lay">
            <div id="header">
                <div id="input1">
                <input  ref={inputRef}type="text" placeholder=' Enter Your Location'/>
                </div>
                
                <div id="search">
                    <h3 onClick={()=>response(inputRef.current.value)}><i class="ri-search-line"></i></h3>
                </div>
            </div>
            {data?<> <div id="middle">
                <div id="logo">
                <div id="image">
                        <img src={data.icon}/>
                    </div>
            </div>
            <div id="details">
                <h1>{data.temperature}<i class="ri-celsius-line"></i></h1>
                <h5>{data.city}</h5>
            </div>
                
             </div>
                <div id="foot1">
                    <div id="up">
                    <img id="img1"src={humidity_icon}/>
                    <div id="humidity">
                    <h5>{data.humidity}%</h5>
                    <p>Humidity</p>
                    </div>
                       
                    </div>
                    <div id="sp">
                        <img id="img1" src={wind_icon}/>
                        <div id="speed">
                            <h5>{data.speed}Km/h</h5>
                            <p>Wind Speed</p>
                        </div>
                    </div>
                </div></>:<></>}
           
             </div>
        </div>
  )
}

export default Weather