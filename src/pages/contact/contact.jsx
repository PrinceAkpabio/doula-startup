import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import Contact from '../../components/contact/contact';
import ContactLinks from "../../components/contactLinks/contactLinks";

const ContactPage = ({data}) => {
 const match = useRouteMatch().path;
 const contactContent = data.footerComponents;
 return (
  <>
  <Contact />
   <ContactLinks
    content={contactContent}
    match={match}
   />
  </>
 )
};

export default ContactPage