import React from 'react';
import './FooterNav.css';
import homeIcon from './home-icon.svg';
import historyIcon from './historyIconG.png';
import profileIcon from './profile-icon.svg';

const FooterNav = () => {
    return (
        <div>
            <footer className="footerNav">
                 <img className="icons" src={homeIcon} alt="nav icon"/>
                 <img className="icons" src={historyIcon} alt="nav icon"/>
                 <img className="profile-icon" src={profileIcon} alt="nav icon"/>

            </footer>
        </div>
    );
}

export default FooterNav;
