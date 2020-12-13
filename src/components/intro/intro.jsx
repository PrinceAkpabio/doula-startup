import React from "react";
import "./intro.scss";

const Intro = ({content}) => (
  <>{
    content.map((item) => (
    <section key={item.id} className="intro">
      <div className="intro_text">
        <p>{item.introTitle}</p>
        <p>{item.introDesc1}</p>
        <br></br>
        <p>{item.introDesc2}</p> <br></br>
        <p>{item.introDesc3}</p>
      </div>
    </section>
  ))}</>
);

export default Intro;
