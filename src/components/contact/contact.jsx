import React from "react";
import "./contact.scss";

const Contact = () => (
  <>
    <section className="contact" id="contact">
      <div className="contact-image"></div>

      <div className="contact-text">

        <span className="contact-text-title">
          <h2>Get in touch</h2>
          <p>If you're interested in working with me, the best way to get in touch is via the contact form below. For all other enquiries, please email hello@juniper.com.</p>
        </span>

          <form action="#" className="contact-text-form" >
            <input type="text" className="form-name" placeholder="Name" />
            <input type="text" className="form-email" placeholder="Email" />
            <input type="text" className="form-website" placeholder="Website" />
            <input type="text" className="form-phone" placeholder="Phone" />
            <input type="text" className="form-intrested" placeholder="Intrested in" />
            <textarea className="form-textarea" cols="30" rows="10"  placeholder="Message" ></textarea>
            <input type="button" value="SUBMIT" className="contactBtn"/>
          </form>
        
      </div>
    </section>
  </>
);

export default Contact;
