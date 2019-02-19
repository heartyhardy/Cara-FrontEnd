import React from 'react';
import Tilt from 'react-tilt';
import './rank.css';

const Rank = ({tiltOptions}) => {
    return(
        <div className="rankcontainer">
            <div className="rankelements">
                <Tilt className="Tilt" options={tiltOptions} >
                    <div className="Tilt-inner rankicon"> 🥇 </div>
                </Tilt>
            </div>
        </div>
    );
}

export default Rank;