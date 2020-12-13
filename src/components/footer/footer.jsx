import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';


const Footer = () => (
  <>
    <footer id="footer">
      <h4> DOULA STARTUP | DEVELOPED BY 
       <Link to={{pathname:'https://akpabioprince.netlify.app'}} target='_blank'>
          BOOST YOUR BUSINESS 
       </Link>
        &copy; 2020</h4>
    </footer>
  </>
);

export default Footer;