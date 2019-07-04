import React from 'react';
import './Slogan.css';
import star from './star.png'

function Slogan() {
    return(
        <div className="slogan">
            <img src={star} alt="star" className="star"/>
            <h1 className="slogan-text">Making the healthcare experience more human</h1>
        </div>
    )
}

export default Slogan;