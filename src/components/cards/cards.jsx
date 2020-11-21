import React from 'react';
import './cards.scss';


const Card = () => {
 
 const CardItems = [
  {
   cardtitle: '10 HOURS',
   titleSupport: 'OF SUPPORT PER MONTH',
   cardContent: 'Fruitcake toffee caramels sweet roll tart topping I love cake tart. Topping pastry pie biscuit. Chocolate bar oat cake sweet roll.',
   cardBtn: 'GET IN TOUCH'
  },
  {
   cardtitle: '20 HOURS',
   titleSupport: 'OF SUPPORT PER MONTH',
   cardContent: 'Fruitcake toffee caramels sweet roll tart topping I love cake tart. Topping pastry pie biscuit. Chocolate bar oat cake sweet roll.',
   cardBtn: 'GET IN TOUCH'
  },
  {
   cardtitle: '30 HOURS',
   titleSupport: 'OF SUPPORT PER MONTH',
   cardContent: 'Fruitcake toffee caramels sweet roll tart topping I love cake tart. Topping pastry pie biscuit. Chocolate bar oat cake sweet roll.',
   cardBtn: 'GET IN TOUCH'
  }
 ]
 return(
 <section className="cards-wrapper">
  <div className="cards-title">
   <p>HERE ARE THREE WAYS IN WHICH WE CAN</p>
   <h2>Work together to make your life easier</h2>
  </div>

  <article className="card-wrapper" id="card-wrapper">
    {
     CardItems.map((card, idx) => (
   <div className="card" key={idx}>
    <h3 className="card-title">
     <span>{card.cardtitle}</span> <p>{card.titleSupport}</p>
    </h3>
    <p>{card.cardContent}</p>
    <p>{card.cardContent}</p>
        <button className="card-btn">{card.cardBtn}</button>
   </div>

))
    }
 </article> 
</section>
);
}
export default Card;