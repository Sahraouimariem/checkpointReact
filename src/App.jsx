import './App.css'
import Cards from './components/Cards';
import Slider from './components/Carosels';
import Footerr from './components/Footerr';
import Header from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import movies from './components/data';
import { useState } from 'react';
import Addfilm from './components/Addfilm';
function App() {
  const [listfilms,setlistfilms]=useState(movies)
  console.log(listfilms);
 const dark=false



  return (
 <div>
  <Header dark={dark}/>
  <Addfilm listfilms={listfilms} setlistfilms={setlistfilms}/>
  <Slider/>
  <Cards movies={listfilms} dark={dark}  setlistfilms={setlistfilms}/>
  <Footerr dark={dark}/>
  </div>
  )
}

export default App
