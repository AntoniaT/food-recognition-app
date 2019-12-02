import React from 'react';
import './Navigation.css';
import logoIcon from './SVG/logo-icon.svg';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    
     if(isSignedIn){
        return(
            <nav className="navCont">
                <img className="logoIcon" src={logoIcon} alt="logoIcon"/>
                <p onClick={() => onRouteChange('signOut')} className="navSignOut">Sign out</p>
            </nav>
         )
        }else{
        return(
            <nav className="navCont">
              <p onClick={() => onRouteChange('signin')} className="navSignOut">Sign in</p>
              <p onClick={() => onRouteChange('register')} className="navSignOut">Register</p>
            </nav>
        )
        }

}

export default Navigation;
