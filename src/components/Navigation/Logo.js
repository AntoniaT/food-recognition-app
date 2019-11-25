import React from 'react';
import './Navigation.css';
import WelcomeDesign from './app-bgrd.png';

const Logo = () => {
    return (
        <div className="logoCont">
            <img className="logo" src={WelcomeDesign} alt="logo"/>
        </div>
    );
}

export default Logo;
