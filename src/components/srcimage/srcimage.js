import React from 'react';
import './srcimage.css';

const SrcImage = ({isVisible, imgsrc, clipRect}) => {
    return(
        <div className = "srcimagecontainer" hidden={!isVisible}>
            <div className="imagecontrols">
                <img id="clippingpane" src={imgsrc} className="image" height="auto" />
                <div id="clipperrect" className="clipper" style={{top:clipRect.topRow, left:clipRect.leftCol, right:clipRect.rightCol, bottom:clipRect.botRow}}></div>
            </div>
        </div>
    );
}

export default SrcImage;