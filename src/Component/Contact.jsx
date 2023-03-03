import React from "react"
import '../styles/contact.css'

function Contact (){
    return(
    <>
    <div className="container contact_hero">
      {/* <div className="big-circle"></div> */}
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
            consequuntur culpa animi corrupti dolorum quod.
          </p>

          <div className="info">
            {/* <div className="information">
            <i class="ri-map-pin-line"></i>
              <span>Bangalore, India 560054</span>
            </div> */}
            <div className="information">
            <i class="ri-mail-line"></i>
              <span className="px-2">Email: example@gmail.com</span>
            </div>
            <div className="information">
            <i class="ri-phone-line"></i>
              <span className="px-2">Phone: +918081475780</span>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with Us</p>
            <div className="social-icons">
              <a href="#"><i class="ri-facebook-fill"></i></a>
              <a href="#"><i class="ri-instagram-line"></i></a>
              <a href="#"><i class="ri-twitter-line"></i></a>
              <a href="#"><i class="ri-linkedin-fill"></i></a>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <div className="circle one"></div>
          <div className="circle two"></div>

          <form action="#" autocomplete="off">
            <h3 className="title">Contact Us</h3>
            <div className="input-container">
              <input type="text" name="name" placeholder="Name" className="input" />
            </div>
            <div className="input-container">
              <input type="email" placeholder="Email" name="email" className="input" />
              {/* <label for="">Email</label>
              <span>Email</span> */}
            </div>
            <div className="input-container">
              <input type="tel" placeholder="Mobile No" name="phone" className="input" />
              {/* <label for="">Phone</label>
              <span>Phone</span> */}
            </div>
            <div className="input-container">
              <input type="text" placeholder="Subject" name="subject" className="input" />
              {/* <label for="">Phone</label>
              <span>Phone</span> */}
            </div>
            <div className="input-container textarea">
              <textarea name="message" placeholder="Message" className="input"></textarea>
              {/* <label for="">Message</label>
              <span>Message</span> */}
            </div>
            {/* <button  className="addTOCart__btn">
                  Add to Cart
                </button> */}
            <input type="submit" value="Send" className="addTOCart__btn" />
          </form>
        </div>
      </div>
    </div>
    
    </>
    );
}

export default Contact