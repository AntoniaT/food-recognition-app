import React from 'react';
import './FoodRecognition.css'
const FoodRecognition = ({ imageUrl, foodTags }) => {
    return (
        <div className="foodRecognCont">
         <img id="imputImage" className="foodImg" src={imageUrl} alt="food"></img>
         <div id="testP" className="tagCont hide">
            <p className="foodTags">#{foodTags[0]}</p>
            <p className="foodTags">#{foodTags[1]}</p>
            <p className="foodTags">#{foodTags[2]}</p>
            <p className="foodTags">#{foodTags[3]}</p>
            <p className="foodTags">#{foodTags[4]}</p>
            <p className="foodTags">#{foodTags[5]}</p>
         </div>
        </div>
    );
}

export default FoodRecognition;