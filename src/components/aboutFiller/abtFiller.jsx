import React from 'react';
import { Link } from 'react-router-dom';
import './abtFiller.scss';

const AbtFiller = () => {
 return (
  <div className="abtfiller-text">
        <p>
          IT'S TIME FOR YOU TO FREE UP TIME SO YOU CAN GET BACK TO DREAMING, BUILDING AND SERVING YOUR TRIBE.
        </p>
        <h3>Explore the ways in which I can help</h3>
        <Link>
        <button id="aboutBtn">GET IN TOUCH</button>
        </Link>
  </div>
 )
}

export default AbtFiller
