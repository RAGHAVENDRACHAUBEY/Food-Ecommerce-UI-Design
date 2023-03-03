import React from "react";
import { Container } from "react-bootstrap";
import "./maicro.css";

function Maicrophone() {
  return (
    <>
      <div className="google">
        <Container>
          <div className="google-maicro">
            <div className="google-wrap">
              <div className="hero">
                <ul>
                  <li>ENGLISH</li>
                  <li>HINDI</li>
                </ul>
              </div>
              <div className="hero-0">
              <i class="fa fa-exchange" aria-hidden="true"></i>
              </div>
              <div className="hero">
                
                <ul>
                  <li>HINDI</li>
                  <li>ENGLISH</li>
                </ul>
              </div>
            </div>
            <div className="text-translate">
            
             <div class="parent">
                <textarea id="w3review" name="w3review" rows="4" cols="50">
                 Type text here...................
                </textarea>
                
              
              <div className="mac_0">
                <div className="phone_0">
                    <span style={{fontSize:"22px"}}><i class="fa fa-microphone" aria-hidden="true"></i></span>
                </div>
              </div>
             </div>
              
              <div className="parent">
                <h6>Translate here...............</h6>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Maicrophone;
