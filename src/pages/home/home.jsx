import React from 'react';
import Banner from '../../components/banner/banner';
import Intro from '../../components/intro/intro';
import Services from '../../components/services/services';
import About from '../../components/about/about';
import Testimony from '../../components/testimonies/testimonies';
import Quiz from '../../components/quiz/quiz';
import CallToAction from '../../components/call-to-action/call-to-action';
import ContactLinks from '../../components/contact-links/contact-links';

const HomePage = () => {

 return (
  <>
     <Banner />
     <Intro />
     <Services />
     <About />
     <Testimony />
     <Quiz />
     <CallToAction />
     <ContactLinks />
   </>
 )
};

export default HomePage;