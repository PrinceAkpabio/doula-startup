import React from 'react';
import { Link } from 'react-router-dom';
import './services.scss';

const Services = () => (
  <>
    <section className="services-intro" id="services">
      <div className="services-intro_text1">
        <h2>HOW I CAN HELP</h2>
      </div>

      <div className="services-intro-cnt">
        <div className="services-intro_content">
          <Link to="#" className="link1">
            <h1>My I : I Services</h1>
          </Link>
        </div>

        <div className="services-intro_content">
          <Link to="#" className="link2">
            <h1>Read The Blog</h1>
          </Link>
        </div>

        <div className="services-intro_content">
          <Link to="#" className="link3">
            <h1>The Podcast</h1>
          </Link>
    </div>
    
      </div>

      <div className="services-intro_text2">
        <h2>HOW I CAN HELP</h2>
      </div>
    </section>
  </>
);

export default Services;