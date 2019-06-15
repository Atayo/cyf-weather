import React, { Component } from 'react';
import './App.css';
//import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import clear from "./img/weather-icons/clear.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
//import storm from "./img/weather-icons/storm.svg";
//import drizzle from "./img/weather-icons/drizzle.svg";
//import rain from "./img/weather-icons/rain.svg";
//import snow from "./img/weather-icons/snow.svg";
import './grid.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render () {
    return (
      <div className="app">
      <header className="app__header">
      <div className="search_box">
        <form action>      
          <input className="text" placeholder="Type in a city name" name="search"/>
          <button className="submit_button">
          FIND WEATHER
          </button>
        </form>
      </div>
      </header >
      <main className="app__main">
      <img src={mostlycloudy} height="200" width="200" alt="overcast clouds"/>
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
          <br />
          <br />
          <section className="flex-container">
            <div class="flex-box1">
              <p>03:00</p>
              <br />
              <img src={mostlycloudy} alt="mostly cloudy" />
              <br />
              <p>8&#8451;</p>
            </div>
            <div class="flex-box2">
              <p>06:00</p>
              <br />
              <img src={mostlycloudy} alt="mostlyCloudy" />
              <br />
              <p>9&#8451;</p>
            </div>
            <div class="flex-box3">
              <p>09:00</p>
              <br />
              <img src={clear} alt="Sunny" />
              <br />
              <p>14&#8451;</p>
            </div>
            <div class="flex-box4">
              <p>12:00</p>
              <br />
              <img src={clear} alt="Sunny" />
              <br />
              <p>17&#8451;</p>
            </div>
            <div class="flex-box5">
              <p>15:00</p>
              <br />
              <img src={clear} alt="Sunny" />
              <br />
              <p>18&#8451;</p>
            </div>
            <div class="flex-box6">
              <p>18:00</p>
              <br />
              <img src={clear} alt="Sunny" />
              <br />
              <p>16&#8451;</p>
            </div>
            <div class="flex-box7">
              <p>21:00</p>
              <br />
              <img src={mostlycloudy} alt="mostlycloudy" />
              <br />
              <p>13&#8451;</p>
            </div>
            </section>
      </main>
      </div>
      );
    }
  }
  
  export default App;
  