import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import About from '../../components/about/about';
import Carousel from "../../components/testimonies/carousel/carousell";
import Quiz from "../../components/quiz/quiz";
import CallToAction from "../../components/callToAction/callToAction";
import ContactLinks from "../../components/contactLinks/contactLinks";
import Banner from '../../components/banner/banner';
import AbtFiller from '../../components/aboutFiller/abtFiller';

const AboutPage = () => {
 const match = useRouteMatch().path;
 
 return (
 <div className="AboutPage">
   <Banner match={match}/> 
   <Quiz match={match} />
   <CallToAction match={match} />
   <About/>
   <Carousel />
   <AbtFiller />
   <ContactLinks/>
  </div>
 )}


export default AboutPage;
