import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Helmet from "./Helmet/Helmet";
import "../styles/home.css";
import Category from "./Category";
import ProductCard from "./ProductCard";
import products from "./fakedata/products";
import TestimonialSlider from "./TestimonialSlider";

function Home1() {
  const [allProducts, setAllProducts] = useState(products);
  const [acc, setacc] = useState(true);
  const [acc1, setacc1] = useState();
  const [acc2, setacc2] = useState();
  const [acc3, setacc3] = useState();

  // filter Products
  const filterResult = (fastitem) => {
    const result = products.filter((itemdata) => {
      return itemdata.category === fastitem;
    });
    setAllProducts(result);
  };
  // Hot Pizza filter
  const [hotpizza, setHotPizza] = useState([]);
  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  const featureData = [
    {
      title: "Quick Delivery",
      imgUrl: "/assets/images/service-01.png",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
    },

    {
      title: "Super Dine In",
      imgUrl: "/assets/images/service-02.png",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
    },
    {
      title: "Easy Pick Up",
      imgUrl: "/assets/images/service-03.png",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
    },
  ];

  return (
    <>
      <Helmet title="Home">
        <section>
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className="hero__content  ">
                  <h5 className="mb-3">Easy way to make an order</h5>
                  <h1 className="mb-4 hero__title">
                    The <span>Fastest?</span> Delivery <br /> in
                    <span> your door</span>
                  </h1>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Qui magni delectus tenetur autem, sint veritatis!
                  </p>

                  <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                    <button className="order__btn d-flex align-items-center justify-content-between">
                      Order now <i class="ri-arrow-right-s-line"></i>
                    </button>

                    <button className="all__foods-btn">
                      <Link to="/foods">See all foods</Link>
                    </button>
                  </div>

                  <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                    <p className=" d-flex align-items-center gap-2 ">
                      <span className="shipping__icon">
                        <i class="ri-car-line"></i>
                      </span>{" "}
                      No shipping charge
                    </p>

                    <p className=" d-flex align-items-center gap-2 ">
                      <span className="shipping__icon">
                        <i class="ri-shield-check-line"></i>
                      </span>{" "}
                      100% secure checkout
                    </p>
                  </div>
                </div>
              </Col>

              <Col lg="6" md="6">
                <div className="hero__img">
                  <img
                    src="/assets/images/hero.png"
                    alt="hero-img"
                    className="w-100"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Category />
          </Container>
        </section>

        <section>
          <Container className="py-4">
            <Row>
              <Col lg="12" className="text-center ">
                <h5 className="feature__subtitle mb-3">What we serve</h5>
                <h2 className="feature__title">Just sit back at home</h2>
                <h2 className="feature__title">
                  we will <span>take care</span>
                </h2>
                <p className="mb-1 mt-3 feature__text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolor, officiis?
                </p>
                <p className="feature__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, eius.{" "}
                </p>
              </Col>

              {featureData.map((item, index) => (
                <Col lg="4" md="6" sm="6" key={index} className="mt-4">
                  <div className="feature__item text-center px-5 py-3">
                    <img
                      src={item.imgUrl}
                      alt="feature-img"
                      className="w-25 mb-3"
                    />
                    <h5 className=" fw-bold mb-3">{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h2>Popular Foods</h2>
              </Col>

              <Col lg="12">
                <div className="food__category d-flex align-items-center justify-content-center gap-4">
                  <button
                    className={`d-flex align-items-center gap-2 jk ${
                      acc ? "tab_active_0" : ""
                    }`}
                    onClick={() => {
                      setAllProducts(products);
                      setacc(true);
                      setacc1(false);
                      setacc2(false);
                      setacc3(false);
                    }}
                  >
                    All
                  </button>
                  <button
                    className={`d-flex align-items-center gap-2 jk ${
                      acc1 ? "tab_active_0" : ""
                    }`}
                    onClick={() => {
                      filterResult("Burger");
                      setacc(false);
                      setacc1(true);
                      setacc2(false);
                      setacc3(false);
                    }}
                  >
                    Burger
                  </button>

                  <button
                    className={`d-flex align-items-center gap-2 jk ${
                      acc2 ? "tab_active_0" : ""
                    }`}
                    onClick={() => {
                      filterResult("Pizza");
                      setacc(false);
                      setacc1(false);
                      setacc2(true);
                      setacc3(false);
                    }}
                  >
                    Pizza
                  </button>

                  <button
                    className={`d-flex align-items-center gap-2 jk ${
                      acc3 ? "tab_active_0" : ""
                    }`}
                    onClick={() => {
                      filterResult("Bread");
                      setacc(false);
                      setacc1(false);
                      setacc2(false);
                      setacc3(true);
                    }}
                  >
                    Bread
                  </button>
                </div>
              </Col>

              {allProducts.map((item) => (
                <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                  <ProductCard item={item} />
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className="testimonial ">
                  <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                  <h2 className="testimonial__title mb-4">
                    What our <span>customers</span> are saying
                  </h2>
                  <p className="testimonial__desc">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Distinctio quasi qui minus quos sit perspiciatis inventore
                    quis provident placeat fugiat!
                  </p>

                  <TestimonialSlider />
                </div>
              </Col>

              <Col lg="6" md="6">
                <img
                  src="/assets/images/network.png"
                  alt="testimonial-img"
                  className="w-100 electric"
                />
              </Col>
            </Row>
          </Container>
        </section>

        <section className="pt-0">
          <Container>
            <Row>
              <Col lg="12" className="text-center mb-5 ">
                <h2>Hot Pizza</h2>
              </Col>

              {hotpizza.map((item) => (
                <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                  <ProductCard item={item} />
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
}

export default Home1;
