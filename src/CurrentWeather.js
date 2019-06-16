import React from 'react';
//import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import clear from "./img/weather-icons/clear.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import Forecast from './Forecast';
//import storm from "./img/weather-icons/storm.svg";
//import drizzle from "./img/weather-icons/drizzle.svg";
//import rain from "./img/weather-icons/rain.svg";
//import snow from "./img/weather-icons/snow.svg";

function CurrentWeather() {
    return (
        <div>
            <img src={mostlycloudy} height="200" width="200" alt="overcast clouds" />
            <h3 className="weatherTitle">overcast clouds</h3>
            <section className="flex-container1">
                <p className="temperature">
                    <b>Temperature</b>&nbsp;&nbsp;&nbsp;10° to 11&#8451;
                </p>
                <p className="temperatureInfo">
                    <b>Humidity</b>&nbsp;78%&nbsp;
                    <b>Pressure</b>&nbsp;100848
                </p>
            </section>
        </div>
    )
}
export default CurrentWeather;
