import React, { Component } from 'react';
import Header from './data/header.js'
import Shot from './data/shot.js'
import { listOfObjects } from './data/shots.js'
import './App.css'


class App extends Component {
  render() {
    return (
      <div id="">
        <Header />
        <div className='container'>
          { listOfObjects.map(function(frame) {
            return <Shot data={ frame } />
          }) }
      </div>
      </div>
    );
  }
}

export default App;
