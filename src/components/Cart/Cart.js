import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import Random from '../Random/Random';
import './Cart.css'
const Cart = ({cart,chooseAgainClick,randomlyChooseOneHandle}) => {
   
   
    
    return (
        <div className='cart'> 
            <h2>Selected Watches</h2>
           {
               cart.map(item=>
               <div className='selected-items'>
               <img src={item.img} alt="" />
               <p>Name : {item.name}</p>
               <button><AiOutlineDelete></AiOutlineDelete></button>
               </div>)
           }
            <button onClick={()=>randomlyChooseOneHandle(cart)} className='random-choose-btn'>CHOOSE 1 FOR ME</button>
            <br />
            <button onClick={()=>chooseAgainClick(cart)} className='choose-btn'>CHOOSE AGAIN</button>
        <div>
            <Random randomlyChooseOneHandle={randomlyChooseOneHandle} ></Random>
        </div>
        </div>
    );
};

export default Cart;