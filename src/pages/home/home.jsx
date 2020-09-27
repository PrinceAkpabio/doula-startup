import React from 'react';
import Banner from '../../components/banner/banner';
import Footer from '../../components/footer/footer';
import NavBar from '../../components/nav-bar/nav-bar';
import Intro from '../../components/intro/intro';

const HomePage = () => {

 return (
  <>
    <NavBar /> 
     <Banner />
     <Intro />
    <Footer />
   </>
 )
};

export default HomePage;