import React, { Component } from 'react';
import './App.css';
import partlycloudy from './img/weather-icons/partlycloudy.svg';
import clear from './img/weather-icons/clear.svg';
import mostlycloudy from './img/weather-icons/mostlycloudy.svg';
import cloudy from './img/weather-icons/cloudy.svg';
import storm from './img/weather-icons/storm.svg';
import drizzle from './img/weather-icons/drizzle.svg';
import rain from './img/weather-icons/rain.svg';
import snow from './img/weather-icons/snow.svg';
import './grid.css';
import Forecast from './Forecast.js';
import CurrentWeather from './CurrentWeather';
import Search from './Search';
import fakeWeather from './weather.json';

export const apiWeatherNameToSvgImport = name => {
	switch (name) {
		case 'Clear':
			return clear;
		case 'Clouds':
			return cloudy;
		case 'Rain':
			return rain;
	}
};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="app">
				<header className="app__header">
					<Search />
				</header>
				<main className="app__main">
					<CurrentWeather weather={fakeWeather.list[0]} />
					<Forecast list={fakeWeather.list.slice(1)} />
				</main>
			</div>
		);
	}
}

export default App;
