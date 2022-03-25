import React from 'react';
import './Cart.css'
const Cart = () => {
    return (
        <div className='cart'>
            <h2>Selected Watches</h2>
        
            <button className='random-choose-btn'>Choose 1 For ME</button>
            <br />
            <button className='choose-btn'>CHOOSE AGAIN</button>
        
        </div>
    );
};

export default Cart;