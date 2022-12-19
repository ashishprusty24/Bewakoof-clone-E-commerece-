
import './App.css';
import Navbar from './comopnents/home/Navbar';
import Home from './comopnents/home/Home';
import Footer from './comopnents/home/Footer';
import { useEffect } from 'react';

import MensProduct from './comopnents/home/MensProducts';
import Navfilter from './comopnents/Navfilter';
import Product from './comopnents/Product';
import Mensprod from './pages/Mensprod';
import Allroutes from './routes/Allroutes';
import Productdetail from './comopnents/Productdetail';
import Bag from './comopnents/cart/Bag';
import Cart from './comopnents/cart/Cart';
// import { Payment } from './comopnents/payment/Payment';



import { gapi } from 'gapi-script';



function App() {
  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId: "138552057700-esoue5q74o0ijrd22c5uvo3h1p435vm3.apps.googleusercontent.com",
        scope :""
      })
    }
    gapi.load('client:auth2',start);
  })
  return (
    <div className="App">

   

     <Navbar/> 
    {/* <Home/> */}
    <Allroutes/>
{/* <Product/> */}
{/* <Mensprod/> */}
{/* <Productdetail/> */}
 <Footer/> 
     {/* <Cart/> */}
     {/* <Payment/> */}

    </div>
  );
}

export default App;
