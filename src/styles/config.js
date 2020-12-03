export function ClampBuilder( minWidthPx, maxWidthPx, minFontSize, maxFontSize ) {
  const root = document.querySelector( "html" );
  const pixelsPerRem = Number( getComputedStyle( root ).fontSize.slice( 0,-2 ) );

  const minWidth = minWidthPx / pixelsPerRem;
  const maxWidth = maxWidthPx / pixelsPerRem;

  const slope = ( maxFontSize - minFontSize ) / ( maxWidth - minWidth );
 const yAxisIntersection = -minWidth * slope + minFontSize
 
 console.log(pixelsPerRem);

  return `clamp( ${ minFontSize }rem, ${ yAxisIntersection }rem + ${ slope * 100 }vw, ${ maxFontSize }rem )`
}



// export function CalculateCh(element, fontSize) {
//   const zero = document.createElement("span");
//   zero.innerText = "0";
//   zero.style.position = "absolute";
//   zero.style.fontSize = fontSize;

//   element.appendChild(zero);
//   const chPixels = zero.getBoundingClientRect().width;
//   element.removeChild(zero);

//   return chPixels;
// }

