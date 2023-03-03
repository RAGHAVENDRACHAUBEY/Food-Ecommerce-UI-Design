import React from 'react'
import Header from './Component/Header'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Home1 from './Component/Home1';
import Login from './Component/Login'
import Register from './Component/Register'
import Footer from './Component/Footer';
import Contact from './Component/Contact';
import AllFood from './Component/AllFood';
import FoodDetails from './Component/FoodDetails';
import Cart from './Component/Cart';
import Checkout from './Component/Checkout';
import FournotFour from './Component/FournotFour';








function App() {
  return (
    <div>
    
      <Router>
        <Routes>
          <Route exact path="/" element={<><Header /><Home1/><Footer/></>} />
           <Route exact path="/login" element={<><Header /><Login /><Footer/></>} /> 
          <Route exact path="/register" element={<><Header /><Register /><Footer/></>} /> 
          <Route exact path="/foods" element={<><Header /><AllFood /><Footer/></>} />
          <Route exact path="/fooddetails/:id" element={<><Header /><FoodDetails/><Footer/></>} />
          <Route exact path="/cart" element={<><Header /><Cart/><Footer/></>}/>
          <Route exact path="/checkout" element={<><Header /><Checkout/><Footer/></>} />
          <Route exact path="/contact" element={<><Header /><Contact/><Footer/></>} />
          <Route exact path="/*" element={<><Header /><FournotFour/><Footer/></>} />
        </Routes>
      </Router>
    
    </div>
  )
}

export default App