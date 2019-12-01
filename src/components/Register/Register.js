import React from 'react';
import './Register.css'

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }
    onNameChange = (event) =>{
        this.setState({name: event.target.value})
    }
    onEmailChange = (event) =>{
        this.setState({email: event.target.value})
    }
    onPasswordChange = (event) =>{
        this.setState({password: event.target.value})
    }
    onSubmitSignIn = () => {
        fetch('http://localhost:3000/register', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            email: this.state.email,
            password: this.state.password,
            name: this.state.name
          })
        })
          .then(response => response.json())
          .then(user => {
            if (user) {
              this.props.loadUser(user)
              this.props.onRouteChange('home');
            }
          })
      }
    render() {
    return (
        <article className="form">
           <h1>Register</h1>
           <div className="signInCont">

             <label htmlFor="name">Name</label>
             <input 
             className="signInInput"
             type="text"
             name="name"
             onChange={this.onNameChange}>
             </input>

             <label htmlFor="email">Email</label>
             <input 
             className="signInInput"
             type="text"
             name="email"
             onChange={this.onEmailChange}>
             </input>

             <label htmlFor="password">Password</label>
             <input 
             className="signInInput"
             type="text"
             name="password"
             onChange={this.onPasswordChange}>
             </input>
             
             <input 
             className="signInBtn"
             type="submit"
             value="Register"
             onClick={this.onSubmitSignIn}
             />
           </div>
        </article>
    );
  }
}

export default Register;