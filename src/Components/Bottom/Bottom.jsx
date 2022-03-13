import React from 'react'
import './Bottom.css'

const Bottom = ({ data }) => {
    return (
        <div className="bottom">
            <div className="feels">
                {data.main ? <p className='bold'>{(data.main.feels_like - 273.15).toFixed()}°C</p> : null}
                <p>Feels Like</p>
            </div>
            <div className="humidity">
                {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
                <p>Humidity</p>
            </div>
            <div className="wind">
                {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
                <p>Wind Speed</p>
            </div>
        </div>
    )
}

export default Bottom