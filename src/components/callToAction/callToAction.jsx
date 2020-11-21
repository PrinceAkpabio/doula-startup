import React from "react";
import "./callToAction.scss";

const CallToAction = ({match}) => (
  <>{
        match === '/about' ?
        <div className="contactCA aboutP" id="contact">
          <h2 id="C-aboutP">My Mission and Values</h2>
          <p id="C-aboutPp">Cupcake ipsum dolor. Sit amet chocolate cake cheesecake cotton candy cheesecake. Topping gummies macaroon bonbon powder bonbon. Macaroon jelly-o chocolate bar chocolate cake.</p>

        <div id="contact-text">
          <div className="contact1">
            <h1>01.</h1>
            <h3>VALUE ONE</h3>
            <p>
              Topping liquorice sesame snaps cookie sesame snaps. Sweet jujubes
              tootsie roll chocolate marshmallow jelly.
            </p>
          </div>

          <div className="contact2">
            <h1>02.</h1>
            <h3>VALUE TWO</h3>
            <p>
              Topping liquorice sesame snaps cookie sesame snaps. Sweet jujubes
              tootsie roll chocolate marshmallow jelly.
            </p>
          </div>

          <div className="contact3">
            <h1>03.</h1>
            <h3>VALUE THREE</h3>
            <p>
              Topping liquorice sesame snaps cookie sesame snaps. Sweet jujubes
              tootsie roll chocolate marshmallow jelly.
            </p>
          </div>
        </div>

        <div className="contactBtn-wrapper">
          <button id="contactBtn">Get in touch</button>
        </div>
    </div>
    : 
    <div className="contactCA" id="contact">
        <h2>GO FROM FRANTIC TO CALM IN 3 SMOOTH STEPS</h2>

        <div id="contact-text">
          <div className="contact1">
            <h1>01.</h1>
            <h3>BOOK A CALL</h3>
            <p>
              Topping liquorice sesame snaps cookie sesame snaps. Sweet jujubes
              tootsie roll chocolate marshmallow jelly.
            </p>
          </div>

          <div className="contact2">
            <h1>02.</h1>
            <h3>HAND IT OVER</h3>
            <p>
              Topping liquorice sesame snaps cookie sesame snaps. Sweet jujubes
              tootsie roll chocolate marshmallow jelly.
            </p>
          </div>

          <div className="contact3">
            <h1>03.</h1>
            <h3>GET BACK TO SERVING</h3>
            <p>
              Topping liquorice sesame snaps cookie sesame snaps. Sweet jujubes
              tootsie roll chocolate marshmallow jelly.
            </p>
          </div>
        </div>

        <div className="contactBtn-wrapper">
          <button id="contactBtn">Get in touch</button>
        </div>
        </div>
  }
  </>
);

export default CallToAction;
