import React from 'react';
import './SignIn.css'
//import { ReactComponent } from '*.svg';

class SignIn extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }
    onEmailChange = (event) =>{
        this.setState({signInEmail: event.target.value})
    }
    onPasswordChange = (event) =>{
        this.setState({signInPassword: event.target.value})
    }
    onSubmitSignIn = () => {
        fetch('http://localhost:3000/signin', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            email: this.state.signInEmail,
            password: this.state.signInPassword
          })
        })
          .then(response => response.json())
          .then(user => {
            if (user.id) {
              this.props.loadUser(user)
              this.props.onRouteChange('home');
            }
          })
      }
        
    render(){
        const { onRouteChange } = this.props;
        return (
            <article className="form">
            <h1>Sign in</h1>
            <form className="signInCont">
                <label htmlFor="email">Email</label>
                <input 
                    onChange={this.onEmailChange}
                    type="text">
                </input>
                <label htmlFor="password">Password</label>
                <input 
                    onChange={this.onPasswordChange}
                    type="text">
                </input>
                <input 
                className="signInBtn"
                type="submit"
                value="Sign in"
                onClick={this.onSubmitSignIn}
                />
            </form>
            <p 
            className="registerLink" 
            onClick={() => onRouteChange('register')}
            >Register</p>
            </article>
    );
}
}
export default SignIn;