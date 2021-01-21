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
            {slide.slNormTxt[0]} <span className="cb1">{slide.slColTxt[0]}</span> {slide.slNormTxt[1]}{" "}
            <span className="cb2">{slide.slColTxt[1]}</span> {slide.slNormTxt[2]}{" "}
            <span className="cb3"> {slide.slColTxt[2]} </span>
             {slide.slNormTxt[3]}
          </h2>

          <p className="slideDescription">{slide.slClient}</p>
        </div>
      </div>
    </div>
  );
}

export default Slide;