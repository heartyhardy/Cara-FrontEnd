import React from 'react';
import './title.css';

const Title = ({isTitleVisible}) => {
    return(
        <div className="titlecontainer" hidden={!isTitleVisible}>
            <p className="title">CARA</p>
        </div>
    );
}

export default Title;