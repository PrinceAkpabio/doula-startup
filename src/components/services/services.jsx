import React from 'react';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import './services.scss';

const Services = ({content}) => (
  <>
    <Element id='services-component' name='services-component' />
    {content.map((item) => (
      <section key={item.id}className="services-intro" id="services">
      <div className="services-intro_text1">
        <h2>HOW I CAN HELP</h2>
      </div>

      <div className="services-intro-cnt">
        <div className="services-intro_content">
          <Link to={item.svrLink1[1]} className="link1">
            <h1>{item.svrLink1[0]}</h1>
          </Link>
        </div>

        <div className="services-intro_content">
          <Link to={item.svrLink2[1]} className="link2">
            <h1>{item.svrLink2[0]}</h1>
          </Link>
        </div>

        <div className="services-intro_content">
          <Link to={item.svrLink3[1]} className="link3">
            <h1>{item.svrLink3[0]}</h1>
          </Link>
    </div>
    
      </div>

      <div className="services-intro_text2">
        <h2>HOW I CAN HELP</h2>
      </div>
    </section>
  ))}</>
);

export default Services;