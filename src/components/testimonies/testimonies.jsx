import React from 'react';
import './testimonies.scss';

const Testimony = () => (
  <>
    <section className="testimonial">
      <div className="arrows">
        <i className="fa fa-caret-left" id="prev" />
        <i className="fa fa-caret-right" id="next" />
      </div>

      <div className="testimonial-content">
        <h2>WHAT THEY'RE SAYING</h2>

        <div className="testimonials">
          <div className="slide current">
            <div className="testi1">
              <h1>
                This <span className="color-border1"> would be </span> a really{" "}
                <span className="color-border2"> good place </span> to put a
                <span className="color-border3">testimonial from</span> a client
              </h1>

              <h3>CLIENT NAME GOES HERE</h3>
            </div>
          </div>

          <div className="slide">
            <div className="testi2">
              <h1>
                Put a <span className="color-border1"> testimonial </span> from
                a <span className="color-border2"> client here </span> to
                <span className="color-border3"> promote </span> your expertise.
              </h1>

              <h3>CLIENT NAME GOES HERE</h3>
            </div>
          </div>

          <div className="slide">
            <div className="testi3">
              <h1>
                Insert <span className="color-border1"> your client </span>{" "}
                testimonial <span className="color-border2"> here </span> to
                <span className="color-border3"> showcase </span> your
                expertise.
              </h1>

              <h3>CLIENT NAME GOES HERE</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Testimony;