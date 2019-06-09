import React, { Component } from 'react';
import './App.css';

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
          FIND WEATHER
        </header>
        <main className="app__main">
          <img src="
        https://placekitten.com/100/150"></img>
          <p><b>Temperature</b></p>
          Humidity Pressure
          <ul>
            <li>03.00</li>
            <li>06.00</li>
            <li>09.00</li>
            <li>12.00</li>
            <li>15.00</li>
            <li>18.00</li>
            <li>21.00</li>
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
