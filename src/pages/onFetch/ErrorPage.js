import React from 'react'
import { withRouter } from 'react-router-dom'
function ErrorPage(props) {
 const history = props.history;
 console.log(history.goForward);
 return (
  <div className='error-page'>
   <aside id='error-img-container'>
    <img id='error-img' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/Mirror.png" alt="404 Page" />
  </aside>
  <main id='error-content'>
    <h1 id='error-title'>Sorry!</h1>
    <p id='error-desc'>
      Either you aren't cool enough to visit this page or it doesn't exist <em>. . . like your social life.</em>
    </p>
    <button onClick={ () => history.goForward} id='error-btn'>You can go now!</button>
  </main>
</div>
 )
}

export const Error = withRouter(ErrorPage)