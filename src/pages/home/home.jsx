import React, {useRef} from "react";

import Banner from "../../components/banner/banner";
// import Carouselll from "../../components/Test2/carousel/carousell";
import Intro from "../../components/intro/intro";
// import Services from "../../components/services/services";
// import About from "../../components/about/about";
// import Quiz from "../../components/quiz/quiz";
// import CallToAction from "../../components/call-to-action/callToAction";
// import ContactLinks from "../../components/contact-links/contact-links";
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
      {/* <Services />
      <About /> */}
      {/* <Carouselll /> */}
      {/* <Quiz />
      <CallToAction />
      <ContactLinks /> */}
    </div>
  );
}

export default Home;
