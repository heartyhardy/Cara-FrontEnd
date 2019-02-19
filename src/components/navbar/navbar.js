import React from 'react';
import './navbar.css';

const Navbar = () => {
    return(
        <nav className="navbar">
            <ul className="navlist">
                <li className="navlistelement"><a href="#">CARA</a></li>
                <li className="navlistelement"><a href="#">REGISTER</a></li>
                <li className="navlistelement corner"><a href="#">SIGN OUT</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;