import React from 'react';
import Tilt from 'react-tilt';
import './logo.css';

const Logo = ({tiltOptions}) => {
    return(
        <div className="logocontainer">     
            <Tilt className="Tilt" options={tiltOptions} >
            <div className="Tilt-inner icon"> 👹 </div>
            </Tilt>
        </div>
    );
}

export default Logo;