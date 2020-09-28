import React from 'react';
import { Link } from 'react-router-dom';
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
       <Link to="https://www.instagram.com/doulastartup/"><i className="fab fa-instagram-square"></i></Link>
       <i className="fab fa-pinterest"></i>
       <Link to="https://www.youtube.com/channel/UC8FS5YJe6nQo6lksVY_C5KQ"><i className="fab fa-youtube"></i></Link>
      </div>
     </div>

     <span className="border-line1"></span>

     <div className="links1">
      <h1>Like FREE stuff?</h1>
      <p>Download my free 'are you ready to hire' guide.</p>

      <Link to="#"><h3><span className="color-border3">DOWNLOAD NOW</span></h3></Link>

     </div>

     <span className="border-line2"></span>

     <div className="links3">
      <h3 id="title">QUICK LINKS</h3>
      <Link to="#">
       <h3>ABOUT</h3>
      </Link>
      <Link to="#">
       <h3>SERVICES</h3>
      </Link>
      <Link to="#">
       <h3>CLIENT RESULTS</h3>
      </Link>
      <Link to="#">
       <h3>CONTACT</h3>
      </Link>
     </div>
    </div>

   </div>
  </section>
 </>
);

export default ContactLinks;