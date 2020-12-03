import React from "react";
import "./quiz.scss";

const Quiz = ({match}) => (
  <>
    <section className={`quiz ${match === '/about' ? 'aboutP' : ''}`} id="blog">
      { 
        match === '/about' ?
            
        <div id="quiz-content">
          <div className="quiz-image"></div>
          <div className="quiz-text">
          <h3>ARE YOU READY TO HAND OVER THE BEHIND THE SCENES PARTS OF YOUR BUSINESS SO YOU CAN CONCENTRATE ON WHAT YOU DO BEST?</h3>
          <p>Topping liquorice sesame snaps cookie sesame snaps. Sweet jujubes tootsie roll chocolate marshmallow jelly-o jelly beans. Sesame snaps oat cake tiramisu sweet roll. Halvah icing cotton candy. Pie croissant biscuit. Muffin donut muffin topping danish wafer cake.</p>
          <button id="quizBtn">GET IN TOUCH</button>
          </div>
          </div>
          :
        <div id="quiz-content">
          <div className="quiz-image"></div>
            <div className="quiz-text">
          <h3>Are You Ready To Hire?</h3>
          <h2>Quiz or optin title here</h2>
          <button id="quizBtn">TAKE THE QUIZ</button>
          </div> 
        </div>
        }
      </section>
  </>
);

export default Quiz;
