import React, { useState } from "react";
import './register.css';
import {Link} from 'react-router-dom'

function Login() {
 
  return(
    <>
     <div className="container contact_hero">
      <div className="form-0">
        <div className="contact-form">
          <div className="circle one"></div>
          <div className="circle two"></div>

          <form action="#" autocomplete="off">
            <h3 className="title">Login</h3>
            <b style={{color:"white"}}>Please login below account details</b>
            <div className="input-container">
              <input type="email" placeholder="Email" name="email" className="input" required />
            </div>
            
            <div className="input-container">
              <input type="password" placeholder="Password" name="password" className="input" required />
        
            </div>
            <input type="submit" value="Login" className="addTOCart__btn mb-2"  style={{width:"100%"}}/><br/>
            <b  style={{color:"white"}}>Don't have an account?<span>{" "}<Link to="/register" style={{color:"#f8931c"}}>Register</Link></span></b>
          </form>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Login;
