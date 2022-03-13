import React, { useState } from 'react'
import './Top.css'


const Top = ({ data }) => {

    const [isCelsius, setIsCelsius] = useState(true)
    const celsius = (data.main.temp - 273.15).toFixed()
    const fahrenheit = (((data.main.temp - 273.15) * 9 / 5) + 32).toFixed()

    const changeUnit = () => {
        setIsCelsius(!isCelsius)
    }


    return (
        <div className="top">
            <div className="location">
                <p>{data.name}</p>
            </div>
            <div className="temp" onClick={changeUnit} >
                {data.main ? <h1>{isCelsius ? `${celsius}°C` : `${fahrenheit}°F`}</h1> : null}
            </div>
            <div className="description">
                {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
        </div>
    )
}

export default Top