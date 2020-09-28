import React from 'react';
import Banner from '../../components/banner/banner';
import Footer from '../../components/footer/footer';
import NavBar from '../../components/nav-bar/nav-bar';
import Intro from '../../components/intro/intro';
import Services from '../../components/services/services';
import About from '../../components/about/about';
import Testimony from '../../components/testimonies/testimonies';
import Quiz from '../../components/quiz/quiz';

const HomePage = () => {

 return (
  <>
    <NavBar /> 
     <Banner />
     <Intro />
     <Services />
     <About />
     <Testimony />
     <Quiz />
    <Footer />
   </>
 )
};

export default HomePage;