import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import Card from './components/Card/Card';
import Cart from './components/Cart/Cart';


function App() {

  const addToCart=(pd)=>{
    console.log(pd)
}
  const [watches,setWatches]=useState([])
  useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setWatches(data))
  },[])
 

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
              <Cart></Cart>
            }
          </div>
     </div>
    </div>
  );
}

export default App;
