import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navbar from './components/navbar/navbar';
import Logo from './components/logo/logo';
import ImageLink from './components/imagelink/imagelink';
import Rank from './components/rank/rank';
import Title from './components/title/title';
import SrcImage from './components/srcimage/srcimage';
import ImgOpsBar from './components/imgopsbar/imgopsbar';
import * as tilt_config from './config/tiltjs-config.json';
import * as particlejs_config from './config/particlesjs-config.json';

import './App.css';

const app = new Clarifai.App({
  apiKey: 'e443ade726174d0bad66bee03360ff12'
 });

class App extends Component {
  constructor()
  {
    super();
    this.state = {
      imgurl:'',
      isImageLinkVisible: true,
      isSrcImageVisible:false,
      isTitleVisible: true,
      imgRect: {
      }
    }
  }

  calculateImgRect = (data) => {
    const clipped = data.outputs[0].data.regions[0].region_info.bounding_box;
    const srcimg = document.getElementById('clippingpane');

    const width = srcimg.width;
    const height = srcimg.height;

    return {
      topRow : height * clipped.top_row,
      leftCol : width * clipped.left_col,
      rightCol : width - (width * clipped.right_col),
      botRow : height - (height * clipped.bottom_row)
    }
  }

  setImgRect = (imgRect) => {
    this.setState({imgRect});
  }

  onUrlChange = (event) => {
    this.setState({imgurl:event.target.value});
  }

  onUrlSubmit = async (event) => {
    await this.setState({isImageLinkVisible:false, isTitleVisible:false, isSrcImageVisible:true});
    const response = await app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.imgurl);
    await this.setImgRect(this.calculateImgRect(response));
    document.getElementById('clipperrect').style.opacity=1;
  }

  onImgOpsBarClose = (event) => {
    
    document.getElementById('imglinktext').value='';
    document.getElementById('clipperrect').style.opacity=0;

    this.setState({
      imgurl:'',
      isImageLinkVisible: true,
      isSrcImageVisible:false,
      isTitleVisible: true,
      imgRect:{}
    })
  }

  render() {

    const tiltoptions = tilt_config.tiltoptions;
    const particlejsoptions= particlejs_config.config;

    return (
      <div className="App">
        <Particles className="particles" params={particlejsoptions}/>
        <Navbar />
        <Title isVisible = {this.isTitleVisible}/>
        <Logo tiltOptions={tiltoptions}/>
        <Rank tiltOptions={tiltoptions}/>
        <ImageLink isVisible={this.state.isImageLinkVisible} onChange = {this.onUrlChange} onSubmit = {this.onUrlSubmit}/>
        <SrcImage isVisible={this.state.isSrcImageVisible} imgsrc={this.state.imgurl} clipRect = {this.state.imgRect}/>
        <ImgOpsBar isVisible={this.state.isSrcImageVisible} onClose={this.onImgOpsBarClose}/>
      </div>
    );
  }
}

export default App;
