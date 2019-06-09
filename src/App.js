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
        <img src="
        https://placekitten.com/100/150"></img>
        <header className="app__header">
          Temperature<br></br>
          Humidity Pressure
        </header>
        <main className="app__main">
        </main>
      </div>
    );
  }
}

export default App;
