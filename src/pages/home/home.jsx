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

function Home() {
  const modalRef = useRef();

  const openModal = () => {
    modalRef.current.openModall()
  }

  
  const match = useRouteMatch().path;
  console.log(match);
  return (
    <div className="home">
      <Modal ref={modalRef}/>
      <Banner match={match} openModal={openModal} />
      <Intro />
      <Services />
      <About />
      <Carousel />
      <Quiz />
      <CallToAction />
      <ContactLinks />
    </div>
  );
}

export default Home;
