import React from "react";
import { Link } from "react-router-dom";
import "./about.scss";

const About = () => (
  <>
    <section className="about" id="about">
      <div className="about-image"></div>

      <div className="about-text">
        <h1>Hi, I'm Jarriel Campbell</h1>
        <h3>FROM SCARED ASPIRING BIRTHWORKER TO PASSIONATE + PROFESSIONAL DOULA</h3>
        <p>
          This page is where I share my journey as a newbie in the doula industry. 
          You can expect to hear all the tea including-</p>
        <br></br>
          <p>
          What in-person was training was like
          What mentorship programs I have invested in
          Where I am receiving business knowledge 
          Services I am now offering.
          How I am becoming a better Doula
          Lists of resources I have found in research to cut your time with your wise Grandma Google in half</p>
          <br></br>
          <p>Let me let you in on a little secret-</p>
          <br></br>
          <p>This is no manual.
          There is no ‘right way’ to enter birth work.
          There is no right or wrong answer to any of the above questions.</p>
          <br></br>
          <p>My goal is to support you in realizing you are already a doula, and you have what it takes to make your dreams a reality and build a community you can pull from when you need the extra confidence. </p>
          <br></br>
          <p>You may be wondering who exactly am I and what qualifies me to be your big Doula cousin.</p>
          <br></br>
          <p>I have been hanging  around in the doula industry since 2014. I trained with two organizations at that time, but doubt and fear overwhelmed me, and after being ghosted by my first potential client, I quickly switched to wounded lurker fo five 5 years. At the top of last year I hired a business coach and started to receive the support and encouragement I needed to slowly move forward. At the beginning of this year I trained, and certified as a labor doula.</p>
          <br></br>
          <p>
            Launching an in-person support business during a year when in-person support is canceled has not been easy. I have said the words ‘pivot’ and ‘unprecedented’ more in the last 6 months than I have in my entire life. Running a doula business while ‘The Rona’ (what we call the Corona Virus for short) runs the streets has proved challenging. Still, I also know without this challenge, I wouldn’t be able to discover the use of the incredible tools and resources I've found that have forced me to grow and develop so much.</p> 
          <br></br>
          <p>I can’t wait to share all this and more with you!</p>
          <br></br>
          <p>Let’s Doula the damn thing!</p>
          <br></br>
          <p>Humbly,</p>
          <br></br>          
          <p>J</p>

        <Link to='https://yourbirthnetwork.ck.page/733b83fd77'><button id="aboutBtn">JOIN THE MOVEMENT NOW!</button></Link>
      </div>
      {/* <div class="image-line"></div>  */}
    </section>
  </>
);

export default About;
