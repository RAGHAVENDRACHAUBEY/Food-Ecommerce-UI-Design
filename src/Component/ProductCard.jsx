import React from "react"
import "../styles/product-card.css";
import { Link } from "react-router-dom";
import { cartActions } from "./Store/ShopingCart/cartSlice";
import { useDispatch } from "react-redux";


const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
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

  return (
    <div className="product__item">
      <div className="product__img">
        <Link to={`/fooddetails/${id}`}>
        <img src={image01} key={id} alt="product-img" className="w-50" />
        </Link>
      </div>

      <div className="product__content">
        <h5>
          <Link to={`/fooddetails/${id}`}>{title}</Link>
        </h5>
        <div className="dop_hero d-flex align-items-center justify-content-between ">
          <span className="product__price">${price}</span>
          <button className="addTOCart__btn" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
