import React from "react";
import { Link } from 'react-router-dom';
import {Element} from 'react-scroll'
import "./callToAction.scss";

const CallToAction = ({match, content}) => (
  <>
    <Element id='contact-component' name='contact-component' />
    {content.map(item => (
      <div key={item.id} className={`contactCA ${match === '/about' && 'aboutP'} `} id="contact">
        {
          match === '/about' ?
        <>
          <h2 id="C-aboutP">{item.ctaTitleabt}</h2>
              <p id="C-aboutPp">{item.ctaSubtxtabt}
              </p>
        <div id="contact-text">
          <div className="contact1">
            <h1>01.</h1>
            <h3>{item.ctaSubtitleabt[0]}</h3>
            <p>
              {item.ctaDescabt[0]}
            </p>
          </div>

          <div className="contact2">
            <h1>02.</h1>
            <h3>{item.ctaSubtitleabt[1]}</h3>
            <p>
              {item.ctaDescabt[1]}
            </p>
          </div>

          <div className="contact3">
            <h1>03.</h1>
            <h3>{item.ctaSubtitleabt[2]}</h3>
            <p>
              {item.ctaDescabt[2]}
            </p>
          </div>
        </div>

        <div className="contactBtn-wrapper">
          <Link to={item.ctaBtnLinkabt[1]}>
          <button id="contactBtn">{item.ctaBtnLinkabt[0]}</button>
          </Link>
        </div>
    </>
 
            : 
    <>
        <h2>{item.ctaTitle}</h2>

        <div id="contact-text">
          <div className="contact1">
            <h1>01.</h1>
            <h3>{item.ctaSubtitle[0]}</h3>
            <p>
              {item.ctaDesc[0]}
            </p>
          </div>

          <div className="contact2">
            <h1>02.</h1>
            <h3>{item.ctaSubtitle[1]}</h3>
            <p>
              {item.ctaDesc[1]}
            </p>
          </div>

          <div className="contact3">
            <h1>03.</h1>
            <h3>{item.ctaSubtitle[2]}</h3>
            <p>
              {item.ctaDesc[2]}
            </p>
          </div>
        </div>

        <div className="contactBtn-wrapper">
          <Link to={item.ctaBtnLink[1]}>
          <button id="contactBtn">{item.ctaBtnLink[0]}</button>
          </Link>
              </div>
      </>
        }
        </div>
  ))}
  </>
);

export default CallToAction;
