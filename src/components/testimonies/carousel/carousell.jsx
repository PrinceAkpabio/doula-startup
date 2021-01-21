import React, { useReducer } from 'react';
import './carousell.scss';
import slidesReducer from '../slidesReducer/slidesReducer';
import Slide from '../slide/slide';

console.clear();

const initialState = {
  slideIndex: 0,
};

const Carousel = ({content}) => {
  const [state, dispatch] = useReducer(slidesReducer, initialState);

  return (
    
    <div className="slides" id="carousel">
      
      <button onClick={() => dispatch({ type: "PREV" })}>‹</button>

      {content.map((slide, i) => {
        let offset =  state.slideIndex - i ;
        return <Slide slide={slide} offset={offset} key={slide.id} />;
      })}
      <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
    </div>
  );
}

export default Carousel;

