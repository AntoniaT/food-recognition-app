import React from 'react';
import Clarifai from 'clarifai';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Navigation/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FoodRecognition from './components/FoodRecognition/FoodRecognotion';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import FooterNav from './components/FooterNav/FooterNav';

const app = new Clarifai.App({
  apiKey: 'c0f271bd3ec340bc84e08b587ce502f9'
 });
const initialState = {
    input: '',
    imageUrl: '',
    foodTags: [],
    route: 'signin',
    isSignedIn: false,
    user: {
      id: '',
      name: '',
      email: '',
      entries: 0,
      joined: ''
}
}
class App extends React.Component {
  constructor(){
   super();
    this.state = initialState;
    
  }
  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

    calculateFoodTags = (data) =>{
     console.log(data);
     const foodTag1 = data.outputs[0].data.concepts[0].name;
     const foodTag2 = data.outputs[0].data.concepts[1].name;
     const foodTag3 = data.outputs[0].data.concepts[2].name;
     const foodTag4 = data.outputs[0].data.concepts[3].name;
     const foodTag5 = data.outputs[0].data.concepts[4].name;
     const foodTag6 = data.outputs[0].data.concepts[5].name;

     this.setState({foodTags: [foodTag1, foodTag2, foodTag3, foodTag4, foodTag5, foodTag6] })
    };
    onInputChange = (event) =>{
      this.setState({input: event.target.value});
    }
    onButtonSubmit = () =>{
      this.setState({imageUrl: this.state.input})

      app.models.predict(
        Clarifai.FOOD_MODEL, 
        this.state.input)
        .then(response => {
          if(response){
             fetch('http://localhost:3000/image', {
              method: 'put',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                id: this.state.user.id
              })
          })
          .then(response => response.json())
          .then(count =>{
            this.setState(Object.assign(this.state.user, { entries: count}))
          })
          .catch(console.log)
        }
          this.calculateFoodTags(response)
        })
        .catch(err => console.log(err));      
    }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }
      render(){
      const {isSignedIn, imageUrl, route} = this.state;

      return (
        <div className="App">
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />

        { route === 'home'
        ? <div className="backGrd">
                <Rank 
                 name={this.state.user.name}
                 entries={this.state.user.entries}/>

                <ImageLinkForm 
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}/>

                <FoodRecognition 
                imageUrl={imageUrl}
                foodTags={this.state.foodTags}/>
                <FooterNav />
          </div>
        
        : ( 
          route === 'signin'
          ? <div>
            <SignIn
            loadUser={this.loadUser} 
            onRouteChange={this.onRouteChange}/>
            <Logo/>
            </div>

        : <div>
          <Register 
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}/>
            <Logo/>
          </div>
          )
        }
        </div>
      );
    }
}
export default App;
