import React from 'react';
import './Rank.css';

const Rank = ({name, entries}) => {
    return (
        <div>
        <div className="">
            <p className="rank">{`Hi ${name}, nice to have you back!`}</p>
        </div>
        <div className="rankNbr">
            <p className="rank">{`Your current rank is ${entries}`}</p>
        </div>
        </div>
    );
}

export default Rank;