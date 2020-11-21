import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import Contact from '../../components/contact/contact';
import ContactLinks from "../../components/contactLinks/contactLinks";

const ContactPage = () => {
 const match = useRouteMatch().path;
 return (
  <>
  <Contact />
  <ContactLinks match={match} />
  </>
 )
};

export default ContactPage