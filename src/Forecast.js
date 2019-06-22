import React from 'react';
//import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import clear from "./img/weather-icons/clear.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
//import storm from "./img/weather-icons/storm.svg";
//import drizzle from "./img/weather-icons/drizzle.svg";
//import rain from "./img/weather-icons/rain.svg";
//import snow from "./img/weather-icons/snow.svg";
import { apiWeatherNameToSvgImport } from "./App"


function Forecast(props) {
	return (
		<section className="flex-container">
			{props.list.slice(0,7).map((weather, index) => (
				<div class="flex-box1" key={index}>
					<p>{weather.dt_txt.substr(11, 5)}</p>
					<br />
					<img src={apiWeatherNameToSvgImport(weather.weather[0].main)} alt={weather.weather[0].main} />
					<br />
					<p>8&#8451;</p>
				</div>
			))}
			
		</section>
	);
}
export default Forecast;
