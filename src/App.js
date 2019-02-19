import React, { Component } from 'react';
import Navbar from './components/navbar/navbar';
import Logo from './components/logo/logo';
import ImageLink from './components/imagelink/imagelink';
import Rank from './components/rank/rank';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Logo />
        <Rank />
        <ImageLink />
        {/* <Logo />
        <ImageLink />
        <ImageClip /> */}
      </div>
    );
  }
}

export default App;
