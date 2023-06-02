import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homebody from '../components/navbar/homebody'
import ShoppingCart from '../components/shoppingcart/cart'
import { Allbooks } from '../components/books'
import PaymentPage from '../components/shoppingcart/checkout'
import Login from '../components/login/login'

export const Allroute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Homebody/>}/>
            <Route path='/cart' element={<ShoppingCart/>}/>
            <Route path='/books' element={<Allbooks/>}/>
            <Route path='/payment' element={<PaymentPage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route/>
        </Routes>
    </div>
  )
}
