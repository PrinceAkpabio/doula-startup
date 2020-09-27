import React from 'react';
import Banner from '../../components/banner/banner';
import Footer from '../../components/footer/footer';
import NavBar from '../../components/nav-bar/nav-bar';
import Intro from '../../components/intro/intro';
import Services from '../../components/services/services';
import About from '../../components/about/about';

const HomePage = () => {

 return (
  <>
    <NavBar /> 
     <Banner />
     <Intro />
     <Services />
     <About />
    <Footer />
   </>
 )
};

export default HomePage;