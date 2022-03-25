import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import Card from './components/Card/Card';


function App() {
  const [watches,setWatches]=useState([])
  useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setWatches(data))
  },[])

  return (
    <div className="App">
      <Navbar></Navbar>
     <div className="card-container">
     {
        watches.map(watch=><Card key={watch.id} 
          watch={watch} ></Card>)
      }
     </div>
    </div>
  );
}

export default App;
