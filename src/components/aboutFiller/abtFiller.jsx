import React from 'react';
import { Link } from 'react-router-dom';
import './abtFiller.scss';

const AbtFiller = ({content}) => {
  return (
    <>
  {content.map(item => (
    <div
      key={item.id}
      className="abtfiller-text">
        <p>
          {item.cxtSubtitleabt}
        </p>
          <h3>
            {item.cxtTitleabt}
          </h3>
          <Link
            to={item.cxtBtnLink[1]}>
            <button id="aboutBtn">
              {item.cxtBtnLink[0]}
            </button>
          </Link>
      </div>
    ))}
    </>
 )
}

export default AbtFiller
