import React from 'react';
import './title.css';

const Title = ({isVisible}) => {
    return(
        <div className="titlecontainer" hidden={!isVisible}>
            <p className="title">CARA</p>
        </div>
    );
}

export default Title;