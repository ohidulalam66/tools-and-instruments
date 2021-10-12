import React from 'react';
import './Header.css'
import logo from '../../logo.png';

const Header = () => {
    return (
        <div className= "header p-3">
            <img src= {logo} alt="" />
            <h4 className= "">Specialized Hand Tools and Instruments</h4>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link" href="/home">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/service">Service</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/help">Help</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/signup">Sign Up</a>
                </li>
            </ul>
        </div>
    );
};

export default Header;