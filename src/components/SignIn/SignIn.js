import React from 'react';
import './SignIn.css'

const SignIn = ({ onRouteChange }) => {
    return (
        <article className="form">
           <h1>Sign in</h1>
           <form className="signInCont">
             <label htmlFor="email">Email</label>
             <input type="text"></input>
             <label htmlFor="password">Password</label>
             <input type="text"></input>
             <input 
             className="signInBtn"
             type="submit"
             value="Sign in"
             onClick={() => onRouteChange('home')}
             />
           </form>
           <p 
           className="registerLink" 
           onClick={() => onRouteChange('register')}
           >Register</p>
        </article>
    );
}

export default SignIn;