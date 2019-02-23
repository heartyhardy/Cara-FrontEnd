import React from 'react';
import './imagelink.css'

const ImageLink = ({isVisible, onChange, onSubmit}) => {
    return(
        <div className="imagelinkcontainer" hidden={!isVisible}>
            <div className="imagelinkform">
                <p className="formlinkcaption">Paste yo Face Here!</p>
                <div className="forminputs">
                    <input id="imglinktext" className="formlinkurl" type="text" onChange={onChange} placeholder="Doesn't matter pretty or ugly, we will try to detect it!" />
                    <button className="formlinkdetect" onClick={onSubmit}>😈</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLink;