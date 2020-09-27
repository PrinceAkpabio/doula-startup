import React from 'react';
import './banner.scss';

const Banner = () => {
 return (
   <section className="header-home">
     <div className="header-home_content">
       <div className="header-home_image" id="img1"></div>
       <div className="header-home_text">
         <h1>
           I'm here to help your<br></br> business run like<br></br> clockwork
         </h1>
         <h3>
           VIRTUAL ASSISTANT FOR ONLINE <br></br> BUSINESS OWNERS
         </h3>
       </div>
       <div className="header-home_btn">
         <button id="home-btn">Book a call</button>
       </div>
     </div>
   </section>
 );};

export default Banner;