import React from "react";
import "./banner_content.scss";


const BannerContent = ({openModal, match}) =>{
  return (
    <>
      {
        match === '/' ?
         <section className="banner">
    <div className="banner-image"></div>

    <article className="banner-text">
      <h1>
        I'm here to help your business run like clockwork
      </h1>
      <h3>
        VIRTUAL ASSISTANT FOR ONLINE <br></br> BUSINESS OWNERS
      </h3>
      <div className="banner-btn-wrapper">
        <button onClick={openModal} id="banner-btn">Book a call</button>
      </div>
    </article>
          </section>
          : match === '/about' ?
          <div id="aboutP">
            <h2>
            Your time is precious.
            </h2>
            <p>
            AS AN EXPERIENCED VIRTUAL ASSISTANT, I'M HERE TO HELP YOU, THE ONLINE BUSINESS OWNER, TO OUTSOURCE THE THINGS YOU DON'T LOVE SO YOU CAN GET BACK TO DOING THE THINGS YOU DO.
            </p>
               
            </div>
            : match === '/services' ?
              <div id="servicesP">
                <h3 id="servicesP-b0">It's time to get back to doing more of what you love and less of what you don't!</h3>

                <span id="servicesP-b1">Cupcake ipsum dolor sit. Amet danish ice cream bonbon candy canes gingerbread gingerbread. Liquorice bear claw pie dragée jelly beans pastry fruitcake. Liquorice macaroon pudding. Cake sugar plum tiramisu chupa chups gummies soufflé ice cream oat cake soufflé. Brownie apple pie pastry lemon drops lemon drops. Wafer ice cream sweet roll candy lemon drops. Sugar plum cookie sesame snaps jujubes cotton candy. Jelly beans candy lemon drops lemon drops chocolate cake.</span>
                
                <span id="servicesP-b2">Pudding pudding brownie sugar plum. Fruitcake candy canes sweet chupa chups lollipop icing carrot cake. Dessert tart marshmallow jujubes cookie fruitcake gingerbread gummies. Candy canes tart tiramisu. Chocolate cake oat cake chocolate cake sweet roll pudding pastry lollipop sesame snaps. Chocolate sesame snaps topping sweet roll powder dessert bear claw. Soufflé fruitcake marshmallow icing powder sesame snaps soufflé cupcake lollipop. </span>
              </div>
            : 
            <div>FILLER CONTENT</div>
      }
      
  </>
  )
}

export default BannerContent;
