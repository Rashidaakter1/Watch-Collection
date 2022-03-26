import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import Card from './components/Card/Card';
import Cart from './components/Cart/Cart';





function App() {
  
  const [watches,setWatches]=useState([])
  const [cart,setCart]=useState([])
  const [random,setRandom]=useState([])
  useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setWatches(data))
  },[])
  const addToCart=(pd)=>{
    const newCart =[...cart,pd]
    if(newCart.length<=4){
      setCart(newCart)
    }
    else{
      alert('OOPPS ,YOU ALREADY CHOOSE FOUR WATCHES !!!!!')
    }
    
    
  
}
const chooseAgainClick=(pd)=>{
    setCart([])
}

const randomlyChooseOneHandle=(pd)=>{
  const newRandom=[...random,pd]
  setRandom(newRandom)
  Math.floor( Math.random() * 4 )
}
console.log(random[0])
 
  return (
    <div className="App">
      <Navbar></Navbar>
     <div className="container">
            <div className="card-container">
            {
              watches.map(watch=><Card key={watch.id} 
                watch={watch}
                addToCart={addToCart} ></Card>)
            }
          </div>
          <div className='cart-container'>
            {
              <Cart cart={cart}
              chooseAgainClick={chooseAgainClick}
              randomlyChooseOneHandle={randomlyChooseOneHandle}
              ></Cart>
            }
          </div>
          <div>
         
          </div>
         
     </div>
    </div>
  );
}

export default App;
