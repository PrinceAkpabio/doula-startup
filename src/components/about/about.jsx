import React from "react";
import "./about.scss";

const About = () => (
  <>
    <section className="about" id="about">
      <div className="about-image"></div>

      <div className="about-text">
        <h1>Hi, I'm Louise Rowland</h1>
        <h3>VIRTUAL ASSISTANT TO PASSIONATE ONLINE BUSINESS OWNERS</h3>
        <p>
          Topping liquorice sesame snaps cookie sesame snaps. Sweet jujubes
          tootsie roll chocolate marshmallow jelly-o jelly beans. Sesame snaps
          oat cake tiramisu sweet roll. Halvah icing cotton candy. Pie croissant
          biscuit. Muffin donut muffin topping danish wafer cake. Topping
          liquorice sesame snaps cookie sesame snaps. Sweet jujubes tootsie roll
          chocolate marshmallow jelly-o jelly beans.
        </p>

        <button id="aboutBtn">Get to know me</button>
      </div>
      {/* <div class="image-line"></div>  */}
    </section>
  </>
);

export default About;
