import React from 'react';
import './Card.css'
import {FaShoppingCart} from 'react-icons/fa';

const Card = ({addToCart,watch}) => {
    const {name,price,img}=watch
   
    
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
               <button onClick={()=>addToCart(watch)} className='btn-card' >
                   Add To Cart
                    <FaShoppingCart className='icon' ></FaShoppingCart>
               </button>
           </div>
        </div>
    );
};

export default Card;