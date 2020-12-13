import React from "react";
import { Link } from 'react-router-dom';
import "./banner_content.scss";


const BannerContent = ({ openModal, match, content }) => {
  return (
    <>
      {
        match === '/' ?
          <section className="banner">
            <div className="banner-image"
            style={{backgroundImage: `url(${content.brImg.url})`}}
            ></div>

    <article className="banner-text">
      <h1>
        {content.brTitle}
      </h1>
      <h3>
        {content.brSubtitle}
      </h3>
        <div className="banner-btn-wrapper">
          <Link to={{pathname:content.brBtnLink[1]}} target="_blank"><button id="banner-btn">{content.brBtnLink[0]}</button></Link>
        </div>
    </article>
          </section>
          : match === '/about' ?
          <div id="aboutP">
            <h2>
            {content.brTitleAbt}
            </h2>
            <p>
            {content.brDescAbt}
            </p>
               
            </div>
            : match === '/services' ?
              <div id="servicesP">
                <h3 id="servicesP-b0">{content.brIntroSvr}</h3>

                <span id="servicesP-b1">{content.brDesc1Svr}</span>
                
                <span id="servicesP-b2">{content.brDesc2Svr} </span>
              </div>
            : 
            <div>FILLER CONTENT</div>
      }
      
  </>
  )
}

export default BannerContent;
