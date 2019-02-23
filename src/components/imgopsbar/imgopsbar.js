import React from 'react';
import './imgopsbar.css';

const ImgOpsBar = ({isVisible, onClose}) => {
    return(
        <div className="imgopsbarcontainer" hidden={!isVisible}>
            <nav className="imgopsbar" hidden={!isVisible}>
                <ul className="navlist">
                    <li className="navlistelement"><i class="fas fa-save"></i></li>
                    <li className="navlistelement"><i class="fas fa-images"></i></li>
                    <li className="navlistelement corner"><i class="fas fa-times-circle" onClick={onClose}></i></li>
                </ul>
            </nav>
        </div>
    );
}

export default ImgOpsBar;