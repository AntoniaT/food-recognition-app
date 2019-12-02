import React from 'react';
import './Rank.css';

const Rank = ({name, entries}) => {
    return (
        
        <div className="">
            <p className="rankName">{`Hi ${name},`}</p>
            <p className="rankNbr">{`your current rank is #${entries}`}</p>
        </div>
    );
}

export default Rank;