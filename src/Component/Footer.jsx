import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import "../styles/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer__logo text-start">
              <img src='/images/food-logo-footer.png' alt="logo" />
             
              <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto consequuntur culpa animi corrupti dolorum quod.
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              {/* <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>Location: ZindaBazar, Sylhet-3100, Bangladesh</p>
              </ListGroupItem> */}
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Phone: +918081475780</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Email: example@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i class="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="8" md="8">
            <p className="copyright__text">
            Copyright 2023-2024, All Right Reserved, Website Design & Develop by Raghavendra Chaubey.   
            
            </p>
          </Col>
          <Col lg="4" md="4">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow: </p>
              <div className="social-icons">
              <Link to="#"><i class="ri-facebook-fill"></i></Link>
              <Link to="#"><i class="ri-instagram-line"></i></Link>
              <Link to="#"><i class="ri-twitter-line"></i></Link>
              <Link to="#"><i class="ri-linkedin-fill"></i></Link>
            </div>
             
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
