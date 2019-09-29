import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div className="ImageLinkCont">
            <p className="detectText">{'Detect food ingredients in your image and get tag suggestions for your blog. Give it a try!'}</p>
            <input className="detectInpt" onChange={onInputChange} placeholder="   image url"></input>
            <button className="detectBtn" onClick={onButtonSubmit}>Detect</button>
        </div>
    );
}

export default ImageLinkForm;
