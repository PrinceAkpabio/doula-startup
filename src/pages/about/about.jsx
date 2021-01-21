import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import About from '../../components/about/about';
import Carousel from "../../components/testimonies/carousel/carousell";
import Quiz from "../../components/quiz/quiz";
import CallToAction from "../../components/callToAction/callToAction";
import ContactLinks from "../../components/contactLinks/contactLinks";
import Banner from '../../components/banner/banner';
import AbtFiller from '../../components/aboutFiller/abtFiller';

const AboutPage = ({data}) => {
 const match = useRouteMatch().path;
  const bannerContent = data.bannerComponents;
  const quizContent = data.quizComponents;
  const aboutContent = data.biographyComponents;
  const carouselContent = data.testimonialComponents;
  const ctaContent = data.callToActionComponents;
  const contactContent = data.footerComponents;
  const abtfillerContent = data.ctaAboutPages;
 return (
 <div className="AboutPage">
     <Banner
       content={bannerContent} match={match}
     /> 
     <Quiz
       content={quizContent}
       match={match}
     />
     <CallToAction
       content={ctaContent}
       match={match}
     />
     <About
       content={aboutContent}
     />
     <Carousel
       content={carouselContent}
     />
     <AbtFiller
       content={abtfillerContent}
     />
     <ContactLinks
       content={contactContent}
     />
  </div>
 )}


export default AboutPage;
