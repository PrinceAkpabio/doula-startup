import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import Banner from '../../components/banner/banner';
import CallToAction from '../../components/callToAction/callToAction'
import Card from '../../components/cards/cards';
import ContactLinks from '../../components/contactLinks/contactLinks'
import ExImg from '../../components/expandedImg/img';
import Quiz from '../../components/quiz/quiz'
import Carousel from '../../components/testimonies/carousel/carousell'

import Img from '../../Assets/person-holding-a-mirror-on-an-open-field-4412934.jpg';

function ServicesPage() {
 const match = useRouteMatch().path;
 return (
  <div>
   <Banner match={match} />
   <Card />
   <ExImg src={Img} />
   <Carousel />
   <Quiz />
   <CallToAction />
   <ContactLinks/>
  </div>
 )
}

export default ServicesPage;
