import React from "react";
import Commonsection from "./CommonSection/Commonsection";

import "../styles/cart-page.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Helmet from "./Helmet/Helmet";
import { Table } from "react-bootstrap";
import { cartActions } from "./Store/ShopingCart/cartSlice";
import { useSelector, useDispatch } from "react-redux";

function Cart() {
  // const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  // const incrementItem = () => {
  //   dispatch(cartActions.incrementItem());
  // };

  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  // const decreaseItem = (id) => {
  //   dispatch(cartActions.removeItem(id));
  // };

  const deleteItem = (id) => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <>
      <Helmet title="Cart">
        <Commonsection title="Your Cart" />
        <section>
          <Container>
            <Row>
              <Col lg="12">
              {cartProducts.length === 0 ? (
                <h5 className="text-center">Your cart is empty</h5>
              ) : (<>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartProducts.map((item) => (
                      <tr>
                      <td className="text-center cart__img-box">
                        <img src={item.image01} alt="" />
                      </td>
                      <td className="text-center">{item.title}</td>
                      <td className="text-center">$ {item.price}</td>
                      <td className="text-center">{item.quantity}</td>
                      <td className="text-center cart__item-del">
                        <i class="ri-delete-bin-line" onClick={()=>deleteItem(item.id)}></i>
                      </td>
                    </tr>
                    ))}
                  </tbody>
                </table>
                  <div className="mt-4">
                  <h6>
                    Subtotal: $<span className="cart__subtotal">{totalAmount}</span>
                  </h6>
                  <p>Taxes and shipping will calculate at checkout</p>
                  <div className="cart__page-btn">
                    <button className="addTOCart__btn me-4">
                      <Link to="/foods">Continue Shopping</Link>
                    </button>
                    <button className="addTOCart__btn">
                      <Link to="/checkout">Proceed to checkout</Link>
                    </button>
                  </div>
                </div>
                </>
              )}
                
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
}

export default Cart;
