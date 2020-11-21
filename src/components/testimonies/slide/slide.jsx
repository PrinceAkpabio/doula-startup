import React from 'react';
import useTilt from "../Tilt/tilt";

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className={`slide ${active ? "" : "slideInactive"} `}
    >
      <div
        className="slideContent"
      >
        <h3 id="slideTitle">What they're saying</h3>

        <div className="slideContentInner">
          <h2 className="slideTitle">
            {slide.h1} <span className="cb1">{slide.cb1}</span> {slide.h2}{" "}
            <span className="cb2">{slide.cb2}</span> {slide.h3}{" "}
            <span className="cb3"> {slide.cb3} </span>
             {slide.h4}
          </h2>

          <p className="slideDescription">{slide.client}</p>
        </div>
      </div>
    </div>
  );
}

export default Slide;