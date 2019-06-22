import React from 'react';
//import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import clear from "./img/weather-icons/clear.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import Forecast from './Forecast';
//import storm from "./img/weather-icons/storm.svg";
//import drizzle from "./img/weather-icons/drizzle.svg";
//import rain from "./img/weather-icons/rain.svg";
//import snow from "./img/weather-icons/snow.svg";

import { apiWeatherNameToSvgImport } from "./App"

function CurrentWeather(props) {
    return (
        <div>
            <img src={apiWeatherNameToSvgImport(props.weather.weather[0].main)} height="200" width="200" alt={props.weather.weather[0].description} />
            <h3 className="weatherTitle">{props.weather.weather[0].description}</h3>
            <section className="flex-container1">
                <p className="temperature">
                    <b>Temperature</b>&nbsp;&nbsp;&nbsp;{props.weather.main.temp_min}° to {props.weather.main.temp_max}°
                </p>
                <p className="temperatureInfo">
                    <b>Humidity</b>&nbsp;{props.weather.main.humidity}%&nbsp;
                    <b>Pressure</b>&nbsp;{props.weather.main.pressure}
                </p>
            </section>
        </div>
    )
}
export default CurrentWeather;
