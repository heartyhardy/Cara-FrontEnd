import React from 'react';
import './imagelink.css'

const ImageLink = () => {
    return(
        <div className="imagelinkcontainer">
            <div className="imagelinkform">
                <p className="formlinkcaption">Paste yo Face Here!</p>
                <div className="forminputs">
                    <input className="formlinkurl" type="text" placeholder="Doesn't matter pretty or ugly, we will try to detect it!" />
                    <button className="formlinkdetect">😈</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLink;