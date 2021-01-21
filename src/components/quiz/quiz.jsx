import React from "react";
import { Link } from "react-router-dom";
import "./quiz.scss";

const Quiz = ({match, content}) => (
  <>{
    content && content.map(item => (
    <section key={item.id} className={`quiz ${match === '/about' ? 'aboutP' : ''}`} id="blog">
       {
        match === '/about' ?
            
        <div id="quiz-content">
          <div className="quiz-image"
            style={{
              backgroundImage: `url(${item.qizImg.url})`
            }}
            ></div>
          <div className="quiz-text">
          <h3>{item.qizTitleabt}</h3>
          <p>{item.qizSubtitleabt}</p>
          
          <Link to={item.qizBtnLinkabt[1]}>
          <button id="quizBtn">{item.qizBtnLinkabt[0]}</button>
          </Link>
          </div>
          </div>
          :
        <div id="quiz-content">
            <div className="quiz-image"
              style={{
              backgroundImage: `url(${item.qizImg.url})`
            }}
            ></div>
            <div className="quiz-text">
          <h3>{item.qizTitle}</h3>
          <h2>{item.qizSubtitle}</h2>
          <Link to={item.qizBtnLink[1]}>     
          <button id="quizBtn">{item.qizBtnLink[0]}</button>
          </Link>
          </div> 
        </div>
        }
      </section>
  ))}</>
);

export default Quiz;
