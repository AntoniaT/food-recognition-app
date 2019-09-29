import React from 'react';
import './Register.css'

const Register = ({ onRouteChange }) => {
    return (
        <article className="form">
           <h1>Register</h1>
           <form className="signInCont">
             <label htmlFor="email">Name</label>
             <input type="text"></input>
             <label htmlFor="email">Email</label>
             <input type="text"></input>
             <label htmlFor="password">Password</label>
             <input type="text"></input>
             <input 
             className="signInBtn"
             type="submit"
             value="Register"
             onClick={() => onRouteChange('home')}
             />
           </form>
        </article>
    );
}

export default Register;