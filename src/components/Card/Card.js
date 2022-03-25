import React from 'react';
import './Card.css'

const Card = ({watch}) => {
    const {name,price,img}=watch
    console.log(watch)
    return (
        <div className='card'>
            <div className='img-container'>
                <img src={img}alt="" />
            </div>
           <div className='card-info'>
               <h3>Name : {name}</h3>
               <h2>Price : {price}</h2>
           </div>
           <div>
               <button className='btn-card' >
                   Buy Now
               </button>
           </div>
        </div>
    );
};

export default Card;