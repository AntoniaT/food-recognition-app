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

class App extends React.Component {
  constructor(){
   super();
    this.state = {
      input: '',
      imageUrl: '',
      foodTags: [],
      route: 'signIn',
      isSignedIn: false
    }
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

  //   const image = document.getElementById('imputImage');
   //  const width = Number(image.width);
   //  const height = Number(image.height);
    };
    onInputChange = (event) =>{
      this.setState({input: event.target.value});
    }
    onButtonSubmit = () =>{
      this.setState({imageUrl: this.state.input})
      const tester = document.getElementById('testP');
      tester.classList.remove('hide');

      app.models.predict(
        Clarifai.FOOD_MODEL, 
        this.state.input
        )
        .then(response => this.calculateFoodTags(response))
        .catch(err => console.log(err)); 
      
    }
    onRouteChange = (route) =>{
      if(route === 'signOut'){
        this.setState({isSignedIn: false})
      }else if (route === 'home'){
        this.setState({isSignedIn: true})
      }
      this.setState({route: route});
    }
      render(){
    //  const {isSignedIn, imageUrl, route} = this.state;
      return (
        <div className="App">
        <Navigation 
        onRouteChange={this.onRouteChange}
        isSignedIn={this.state.isSignedIn}/>

        { this.state.route === 'home' 
        ? <div className="backGrd"><Logo />
                <Rank />
                <ImageLinkForm 
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}/>
                <FoodRecognition 
                imageUrl={this.state.imageUrl}
                foodTags={this.state.foodTags}/>
                <FooterNav />
          </div>
        
        :( this.state.route === 'signIn' 
        ? <SignIn onRouteChange={this.onRouteChange}/>
        : <Register onRouteChange={this.onRouteChange}/>)

        }
        </div>
      );
    }
}
export default App;
