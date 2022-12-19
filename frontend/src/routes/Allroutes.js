import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../comopnents/cart/Cart'
import Home from '../comopnents/home/Home'

import Payment from '../comopnents/payment/Payment'

import Login from '../comopnents/Login'

import Productdetail from '../comopnents/Productdetail'
import Mensprod from '../pages/Mensprod'
import Mobileproduct from '../pages/Mobileproduct'
import Womensproduct from '../pages/Womensproduct'


const Allroutes = () => {
  return (
<>
<Routes>
  <Route path='/' element= {<Home/>} ></Route>
  <Route path='/product/men' element= {<Mensprod/>} ></Route>
  <Route path='/product/women' element= {<Womensproduct/>} ></Route>
  <Route path='/product/mobile' element= {<Mobileproduct/>} ></Route>
  <Route path='/product/:id' element= {<Productdetail/>} ></Route>

  <Route path='/cart' element= {<Cart/>} ></Route>
  <Route path='/payment' element= {<Payment/>} ></Route>


  <Route path='/login' element= {<Login/>} ></Route>
  <Route path='/cart' element= {<Cart />} ></Route>


</Routes>

</>
  )
}

export default Allroutes