import React from "react";
import { Link } from "react-router-dom";
import { Element } from 'react-scroll';
import "./about.scss";

const About = ({content}) => (
  <>
    <Element id='about-component' name='about-component' />
    {content.map((item) => (
    <section key={item.id} className="about" id="about">
      <div className="about-image"
        style={{
          backgroundImage:
            `url(${item.bioImg[0].url})`
      }}
      ></div>
      <div className="about-text">
        <h1>{item.bioTitle}</h1>
        <h3>{item.bioSubtitle}</h3>
        <p>{item.bioDesc[0]}</p>
        <br></br>
        <p>{item.bioDesc[1]}</p>
        <br></br>
        <p>{item.bioDesc[2]}</p>
        <br></br>
        <p>{item.bioDesc[3]}</p>
        <br></br>
        <p>{item.bioDesc[4]}</p>
        <br></br>
        <p>{item.bioDesc[5]}</p>
        <br></br>
        <p>{item.bioDesc[6]}</p>
        <br></br>
        <p>{item.bioDesc[7]}</p> 
        <br></br>
        <p>{item.bioDesc[8]}</p>
        <br></br>
        <p>{item.bioDesc[9]}</p>
        <br></br>
        <p>{item.bioDesc[10]}</p>
        <br></br>          
        <p>{item.bioDesc[11]}</p>

          <Link to={{ pathname: item.bioBtnLink[1] }} target="_blank"><button id="aboutBtn">{item.bioBtnLink[0]}</button></Link>
        </div>

        {/* Tab */}
        <div className="tab">
<img src={item.bioImg[0].url} alt="tab-img"/>
          <div><h1>{item.bioTitle}</h1>
        <h3>{item.bioSubtitle}</h3>
        <p>{item.bioDesc[0]}</p>
        <br></br>
        <p>{item.bioDesc[1]}</p>
        <br></br>
        <p>{item.bioDesc[2]}</p>
        <br></br>
        <p>{item.bioDesc[3]}</p>
        <br></br>
        <p>{item.bioDesc[4]}</p>
        <br></br>
        <p>{item.bioDesc[5]}</p>
        <br></br>
        <p>{item.bioDesc[6]}</p>
        <br></br>
        <p>{item.bioDesc[7]}</p> 
        <br></br>
        <p>{item.bioDesc[8]}</p>
        <br></br>
        <p>{item.bioDesc[9]}</p>
        <br></br>
        <p>{item.bioDesc[10]}</p>
        <br></br>          
        <p>{item.bioDesc[11]}</p>
        
        <Link to={{ pathname: item.bioBtnLink[1] }} target="_blank"><button id="aboutBtn">{item.bioBtnLink[0]}</button></Link>
</div>
        </div>
    </section>
  ))}</>
);

export default About;
