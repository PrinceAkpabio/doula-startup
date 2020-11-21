import React from 'react';
import './banner.scss';
import BannerContent from './banner_content';

const Banner = ({openModal, match}) => (
 <section className={`banner-wrapper ${match === '/about' ? 'aboutP' : match ==='/services' ? 'servicesP' : ''}`}>
  <BannerContent match={match} openModal={openModal} />
 </section>
);

export default Banner;
