import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import Card from './components/Card/Card';
import Cart from './components/Cart/Cart';


function App() {
  
  const [watches,setWatches]=useState([])
  const [cart,setCart]=useState([])
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
      alert('not more than four')
    }
    
    console.log(cart)
  
}
const chooseAgainClick=(pd)=>{
    setCart([])
}

const randomlyChooseOneHandle=(pd)=>{
  pd.map(item=>console.log(item))

}
 
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
     </div>
    </div>
  );
}

export default App;
