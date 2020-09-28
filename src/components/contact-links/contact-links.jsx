import React from 'react';
import './contact-links.scss';


const ContactLinks = () => (
 <>
  <section className="links">
   <div className="links-container">

    <div className="links-content">

     <div className="links2">
      <h1>DoUlA StArTuP</h1>
      <h3>VIRTUAL ASSISTANT FOR ONLINE BUSINESSES</h3>
      <div className="social-icons">
       <i className="fab fa-facebook-f"></i>
       <a href="https://www.instagram.com/doulastartup/"><i className="fab fa-instagram-square"></i></a>
       <i className="fab fa-pinterest"></i>
       <a href="https://www.youtube.com/channel/UC8FS5YJe6nQo6lksVY_C5KQ"><i className="fab fa-youtube"></i></a>
      </div>
     </div>

     <span className="border-line1"></span>

     <div className="links1">
      <h1>Like FREE stuff?</h1>
      <p>Download my free 'are you ready to hire' guide.</p>

      <a href="#"><h3><span className="color-border3">DOWNLOAD NOW</span></h3></a>

     </div>

     <span className="border-line2"></span>

     <div className="links3">
      <h3 id="title">QUICK LINKS</h3>
      <a href="#">
       <h3>ABOUT</h3>
      </a>
      <a href="#">
       <h3>SERVICES</h3>
      </a>
      <a href="#">
       <h3>CLIENT RESULTS</h3>
      </a>
      <a href="#">
       <h3>CONTACT</h3>
      </a>
     </div>
    </div>

   </div>
  </section>
 </>
);

export default ContactLinks;