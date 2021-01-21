import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import Banner from '../../components/banner/banner';
import CallToAction from '../../components/callToAction/callToAction'
import Card from '../../components/cards/cards';
import ContactLinks from '../../components/contactLinks/contactLinks'
import ExImg from '../../components/expandedImg/img';
import Quiz from '../../components/quiz/quiz'
import Carousel from '../../components/testimonies/carousel/carousell'

import Img from '../../Assets/20201114_1133433.jpg';

function ServicesPage({data}) {
 const match = useRouteMatch().path;
 const bannerContent = data.bannerComponents;
 const carouselContent = data.testimonialComponents;
 const quizContent = data.quizComponents;
 const ctaContent = data.callToActionComponents;
 const contactContent = data.footerComponents;
 return (
  <div>
   <Banner
    content={bannerContent} match={match}
   />
   <Card />
   <ExImg
    src={Img}
   />
   <Carousel
    content={carouselContent}
   />
   <Quiz
    content={quizContent}
   />
   <CallToAction
    content={ctaContent}
   />
   <ContactLinks
    content={contactContent}
   />
  </div>
 )
}

export default ServicesPage;
