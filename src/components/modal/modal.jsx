import React, { useState, forwardRef, useImperativeHandle, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom'
import './modal.scss';

const Modal = forwardRef((props, ref) => {
 const [display, setDisplay] = useState(false);

 const modalBkRef = useRef();

 const animation = useSpring({
  config: {
   duration: 250
  },
  opacity: display ? 1 : 0,
  transform: display ? `translateY(0%)` : `translateY(-100%)`
 })

 useImperativeHandle(ref, () => {
  return {
   openModall: () => openModal(),
   closeModall: () => closeModal()
  }
 });

 const openModal = () => {
  setDisplay(true)
 }
 
 const closeModal = () => {
  setDisplay(false)
 }

 const closeModalBk = e => {
  if (modalBkRef.current === e.target) { setDisplay(false) }
  
  
 }
// console.log(ref);
 
 return (
  <>
   {
    display ?
     ReactDOM.createPortal(
      <div ref={modalBkRef} className="modal" id="modal" onClick={closeModalBk}>
       <animated.div style={animation} className="animated">
       <div className="modal-content" id="modalContent">
        <div className="modal-content_header">
         <span className="end-modal" onClick={() => ref.current.closeModall()} >&times;</span>
        
         <img src={require("../../Assets/YOUR ULTIMATE RESOURCE GUIDE FOR A HEALTHY PREGNANCY TERM.png")}
          alt="Resource guid for pregnant women" className="modal-img" />
        </div>
    
        <div className="form">
         <form action="" className="form-field">
  
          <label htmlFor="Name">Name:</label> <br></br>
          <input type="text" className="input-text" placeholder="Your Name" id="name" autoFocus /> <br></br>
  
          <label htmlFor="Email">Email:</label> <br></br>
          <input type="text" className="input-text" placeholder="Your Email" id="email" autoFocus /><br></br>

          <button type="submit" id="formBtn">Send it my way</button>
  
         </form>
        </div>
        <div className="modal-footer">
         <small>We promise to play nice with your email address. See our <Link to="#">Privacy Policy</Link></small>
        </div>
        </div>
        </animated.div>
      </div>, document.getElementById("modal-root")
     )
     : null
   }
  </>
  
 )
}
)


export default Modal;
