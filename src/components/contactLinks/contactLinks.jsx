import React from "react";
import { Link } from "react-router-dom";
import Scroll from 'react-scroll'
import "./contactLinks.scss";

const ScrollLink = Scroll.Link;

const ContactLinks = ({match, content}) => (
  <>
    {
      content.map(item => (
    <section key={item.id} className={`links ${match === '/contact' ? 'contactP' : ''}`}>
      <div className="links-container">
        <div className="links-content">
          <div className="links2">
            <h1>{item.ftWebname}</h1>
            <h3>{item.ftWebTag}</h3>
            <div className="social-icons">
              <Link
                to={{ pathname: "https://www.facebook.com/DoulaStartup/" }}
                target="_blank"
              >
                <i id="icons" className="fa fa-facebook-f" />
              </Link>
              
              <Link
                target="_blank"
                to={{pathname:"https://www.instagram.com/doulastartup/"}}
              >
                <i id="icons" className="fa fa-instagram" />
              </Link>
              <Link
                to={{ pathname: "https://open.spotify.com/show/30EFMY4eBFxBqvYShnLQAq?si=6jLPRZuzS4mH9keHfvc0iA" }}
                target="_blank"
              >
                <i id="icons" className="fa fa-spotify" />
              </Link>
              
              <Link
                target="_blank"
                to={{pathname:"https://www.youtube.com/channel/UC8FS5YJe6nQo6lksVY_C5KQ"}}
              >
                <i id="icons" className="fa fa-youtube" />
              </Link>
            </div>
          </div>

          <span className="border-line1"></span>

          <div className="links1">
            <h1>Like FREE stuff?</h1>
            <p>{item.ftSubtitle}</p>

            <Link to={item.ftDownloadLink}>
              <h3>
                <span className="color-border3">DOWNLOAD NOW</span>
              </h3>
            </Link>
          </div>

          <span className="border-line2"></span>

          <div className="links3">
            <h3 id="title">QUICK LINKS</h3>
            <ScrollLink
              to="about-component"
              spy={true}
              smooth={true}
              duration={500}
            >
              <h3>ABOUT</h3>
            </ScrollLink>
            {/* <Link to="#about">
              <h3>ABOUT</h3>
            </Link> */}
            <ScrollLink
              to="services-component"
              spy={true}
              smooth={true}
              duration={500}
            >
              <h3>SERVICES</h3>
            </ScrollLink>
            {/* <Link to="#services">
              <h3>SERVICES</h3>
            </Link> */}
            <ScrollLink
              to="carousel-component"
              spy={true}
              smooth={true}
              duration={500}
            >
              <h3>CLIENT RESULTS</h3>
            </ScrollLink>
            {/* <Link to="#carousel">
              <h3>CLIENT RESULTS</h3>
            </Link> */}
            <ScrollLink
              to="contact-component"
              spy={true}
              smooth={true}
              duration={500}
            >
              <h3>CONTACT</h3>
            </ScrollLink>
            {/* <Link to="#contact">
              <h3>CONTACT</h3>
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  ))}
  </>
);

export default ContactLinks;
