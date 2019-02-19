import React from 'react';
import Tilt from 'react-tilt';
import './logo.css';

const options = {
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

const Logo = () => {
    return(
        <div className="logocontainer">     
            <Tilt className="Tilt" options={options} >
            <div className="Tilt-inner icon"> 👹 </div>
            </Tilt>
        </div>
    );
}

export default Logo;