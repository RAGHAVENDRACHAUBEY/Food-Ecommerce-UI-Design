
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/fooddetail.css";
import products from './fakedata/products';
import Helmet from "./Helmet/Helmet";
import Commonsection from "./CommonSection/Commonsection";
import ProductCard from "./ProductCard";
import Slider from "react-slick";
import { cartActions } from "./Store/ShopingCart/cartSlice";
import { useDispatch } from "react-redux";

function FoodDetails() {


const {id} = useParams()


const product = products.find((product) => product.id === id);
  const [previewImg, setPreviewImg] = useState(product.image01);

  const { title, price, category, desc, image01 } = product;

  useEffect(() => {
    setPreviewImg(product.image01);
  }, [product]);


// Related Products
const relatedProduct = products.filter((item) => category === item.category);

const dispatch=useDispatch()
  const addToCart=()=>{
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };

var settings = {
    dots: false,
    arrows:true,
    infinite: true,
    autoplay:true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
          
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
   <>
   <Helmet title="Product-details">
      <Commonsection title={title} />

      <section>
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="product__images ">
                <div
                  className="img__item mb-3"
                  onClick={() => setPreviewImg(product.image01)}
                >
                  <img src={product.image01} alt="" className="w-50" />
                </div>
                <div
                  className="img__item mb-3"
                  onClick={() => setPreviewImg(product.image02)}
                >
                  <img src={product.image02} alt="" className="w-50" />
                </div>

                <div
                  className="img__item"
                  onClick={() => setPreviewImg(product.image03)}
                >
                  <img src={product.image03} alt="" className="w-50" />
                </div>
              </div>
            </Col>

            <Col lg="4" md="4">
              <div className="product__main-img">
                <img src={previewImg} alt="" className="w-100" />
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="single__product-content">
                <h2 className="product__title mb-3">{title}</h2>
                <p className="product__price">
                  {" "}
                  Price: <span>${price}</span>
                </p>
                <p className="category mb-5">
                  Category: <span>{category}</span>
                </p>
                <p className="category mb-5">
                 {desc}
                </p>

                <button  className="addTOCart__btn" onClick={addToCart}>
                  Add to Cart
                </button>
              </div>
            </Col>


            <Col lg="12" className="mb-5 mt-4">
              <h2 className="related__Product-title">You might also like</h2>
            </Col>
            <Slider {...settings}>
        
          {relatedProduct.map((item) => (
            <Row>
              <Col lg="12" className="mb-4" key={item.id}>
                <ProductCard item={item} />
              </Col>
              </Row>
            ))}
          
        </Slider>
            
            </Row>
            </Container>

            </section>
            </Helmet>
           
   </>
  )
}

export default FoodDetails