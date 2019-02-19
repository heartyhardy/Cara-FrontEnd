import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navbar from './components/navbar/navbar';
import Logo from './components/logo/logo';
import ImageLink from './components/imagelink/imagelink';
import Rank from './components/rank/rank';
import Title from './components/title/title';
import * as tilt_config from './config/tiltjs-config.json';
import * as particlejs_config from './config/particlesjs-config.json';

import './App.css';

class App extends Component {  
  render() {

    const tiltoptions = tilt_config.tiltoptions;
    const particlejsoptions= particlejs_config.config;

    return (
      <div className="App">
        <Particles className="particles" params={particlejsoptions}/>
        <Navbar />
        <Title />
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
