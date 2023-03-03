import React, { useState } from "react";
import './register.css';
import {Link} from 'react-router-dom'


function Register() {


  return (
    <>
       <>
    <div className="container contact_hero">
      <div className="form-0">
        <div className="contact-form">
          <div className="circle one"></div>
          <div className="circle two"></div>

          <form action="#" autocomplete="off">
            <h3 className="title">Create Account</h3>
            <b style={{color:"white"}}>Please register below account details</b>
            <div className="input-container">
              <input type="text" name="name" placeholder="Name" className="input" required />
            </div>
            <div className="input-container">
              <input type="email" placeholder="Email" name="email" className="input" required />
            </div>
            <div className="input-container">
              <input type="tel" placeholder="Mobile No" name="phone" className="input" required />
            
            </div>
            <div className="input-container">
              <input type="password" placeholder="Password" name="password" className="input" required />
        
            </div>
            <input type="submit" value="Register" className="addTOCart__btn mb-2"  style={{width:"100%"}}/><br/>
            <b  style={{color:"white"}}>Already an account holder {" "}<span><Link to="/login" style={{color:"#f8931c"}}>Login</Link></span></b>
          </form>
        </div>
      </div>
    </div>
    
    </>
    </>
  );
}

export default Register;

//  <Card style={{width:"30rem",border:"none",boxShadow: "0 5px 30px rgb(0 0 0 / 7%)" }}>

//       <Card.Body>

//         <Card.Text>
//         <form>
//       {/* <!-- class named "container" is assigned to div --> */}
//       <div className='d-flex'>
//         <div className=''>
//           <img src="./images/signup-page.png" alt=""  style={{width:"100%"}}/>
//         </div>
//       <div class="ght">
//         <h1>Register</h1>
//         <p>Kindly fill in this form to register.</p>
//         <label  className='mb-3'><b>Username</b></label>
//         <input
//           type="text"
//           placeholder="Enter username"
//           name="username"
//           id="username"
//           required
//         />

//         <label className='mb-3'><b>Email</b></label>
//         <input
//           type="text"
//           placeholder="Enter Email"
//           name="email"
//           id="email"
//           required
//         />
//         <label className='mb-3'><b>Mobile No</b></label>
//         <input
//           type="text"
//           placeholder="Mobile No"
//           name="mobile"
//           id="mobile"
//           required
//         />

//         <label className='mb-3'><b>Password</b></label>
//         <input
//           type="password"
//           placeholder="Enter Password"
//           name="pwd"
//           id="pwd"
//           required
//         />

//         <button type="submit" className='mb-3 mt-3'>Register</button>
//       </div>
//       </div>
//       <div>
//         <p>Already have an account? <a href="/login">Login</a>.</p>
//       </div>
//     </form>
//         </Card.Text>

//       </Card.Body>
//     </Card>
