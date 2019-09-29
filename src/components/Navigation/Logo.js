import React from 'react';
import './Navigation.css';
import logo from './logo.png';

const Logo = () => {
    return (
        <div className="logoCont">
            <img className="logo" src={logo} alt="logo"/>
        </div>
    );
}

export default Logo;
