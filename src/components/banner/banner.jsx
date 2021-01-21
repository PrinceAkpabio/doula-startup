import React from 'react';
import './banner.scss';
import BannerContent from './banner_content';

const Banner = ({ openModal, match, content }) => {
 
 return (
 <section className={`banner-wrapper ${match === '/about' ? 'aboutP': match ==='/services' ? 'servicesP' : ''}`}
  >
   {
    content.map((items) => (
     <BannerContent
      key={items.id}
      content={items}
      match={match}
      openModal={openModal}
     />
    ))}
 </section>
);
}
export default Banner;
