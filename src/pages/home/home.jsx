import React, {useRef} from "react";

import Banner from "../../components/banner/banner";
import Carousel from "../../components/testimonies/carousel/carousell";
import Intro from "../../components/intro/intro";
import Services from "../../components/services/services";
import About from "../../components/about/about";
import Quiz from "../../components/quiz/quiz";
import CallToAction from "../../components/callToAction/callToAction";
import ContactLinks from "../../components/contactLinks/contactLinks";
import Modal from "../../components/modal/modal";
import { useRouteMatch } from 'react-router-dom';
import { Element } from 'react-scroll';

function Home({data}) {
  const modalRef = useRef();

  const openModal = () => {
    modalRef.current.openModall()
  }

  const bannerContent = data.bannerComponents;
  const introContent = data.introductionComponents;
  const servicesContent = data.serviceComponents;
  const aboutContent = data.biographyComponents;
  const carouselContent = data.testimonialComponents;
  const quizContent = data.quizComponents;
  const ctaContent = data.callToActionComponents;
  const contactContent = data.footerComponents;
  const match = useRouteMatch().path;
  
  return (
    <div className="home">
      <Modal
        ref={modalRef}
      />
      <Banner
        content={bannerContent} match={match}
        openModal={openModal}
      />
      <Intro
        content={introContent}
      />
      <Services
        content={servicesContent}
      />
      <About
        content={aboutContent}
      />
      <Element id='carousel-component' name='carousel-component' />
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
  );
}

export default Home;
