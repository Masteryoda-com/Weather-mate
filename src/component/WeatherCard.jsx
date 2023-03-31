import React from 'react'
import './WeatherCard.css'
import WeatherCloudy from '../assets/weather-cloudy.png'

function WeatherCard() {
  return (
    <div className='weather-section'>
        <div className='weather-card'>
            <div className='weather-temp-c'>
                38<sup>o</sup>
            </div>
            <div className="sunnyday">
                SunnyDay
            </div>
            <div className='weather-info'>
                <span>
                    🌈 57
                </span>
                <span>
                    🌥️ 38
                </span>
            </div>
            <div className="weather-place">
                Tirupati, Andhra Pradesh, India
            </div>
            <p>Tip : wear cotton cloths and apply Sunscreen lotion</p>
            <div className="weather-avatar">
                <img src={WeatherCloudy} alt="" />
            </div>
        </div>
    </div>
  )
}

export default WeatherCard