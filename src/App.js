import React, { Component } from 'react';
import Navbar from './components/navbar/navbar';
import Logo from './components/logo/logo';
import ImageLink from './components/imagelink/imagelink';
import Rank from './components/rank/rank';
import './App.css';

const tiltoptions = {
  reverse:        false,  // reverse the tilt direction
  max:            60,     // max tilt rotation (degrees)
  perspective:    60,   // Transform perspective, the lower the more extreme the tilt gets.
  scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
  speed:          2000,    // Speed of the enter/exit transition
  transition:     true,   // Set a transition on enter/exit.
  axis:           null,   // What axis should be disabled. Can be X or Y.
  reset:          true,    // If the tilt effect has to be reset on exit.
  easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Logo tiltOptions={tiltoptions}/>
        <Rank tiltOptions={tiltoptions}/>
        <ImageLink />
        {/* <Logo />
        <ImageLink />
        <ImageClip /> */}
      </div>
    );
  }
}

export default App;
