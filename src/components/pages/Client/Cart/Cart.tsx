import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlus,
  faRefresh,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import {
  clearCart,
  decrease,
  increase,
  removeItem,
} from "@redux/Cart/cartSlice";
import "./styles.css";

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const { cartItems, totalAmount } = useAppSelector((state) => state.cart);
  return (
    <section className="cart">
      <section className="h-100 h-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div
                className="card card-registration card-registration-2"
                style={{ borderRadius: 15 }}
              >
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <h2 className="mb-0 text-black">
                            Your Order Summary
                          </h2>
                          <h6 className="mb-0 text-muted">
                            {cartItems.length > 0 && cartItems.length} items
                          </h6>
                        </div>
                        <hr className="my-4" />
                        {cartItems.map((item) => {
                          return (
                            <>
                              <div className="row mb-4 d-flex justify-content-between align-items-center cart-items">
                                <div className="col-md-2 col-lg-2 col-xl-2">
                                  <img
                                    src={item.image}
                                    className="img-fluid rounded-3"
                                    alt={item.name}
                                  />
                                </div>
                                <div className="col-md-3 col-lg-3 col-xl-3">
                                  <h6 className="text-muted">{item.name}</h6>
                                </div>
                                <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                  {item.amount > 1}
                                  <button
                                    className="btn pr-2"
                                    disabled={item.amount > 1 ? false : true}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      dispatch(decrease(item.productId));
                                    }}
                                  >
                                    <FontAwesomeIcon icon={faMinus} />
                                  </button>
                                  <div className="p-2">{item.amount}</div>
                                  <button
                                    className="btn pl-2"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      dispatch(increase(item.productId));
                                    }}
                                  >
                                    <FontAwesomeIcon icon={faPlus} />
                                  </button>
                                </div>
                                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                  <h6 className="mb-0">$ {item.price}</h6>
                                </div>
                                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                  <div
                                    className="text-muted"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      dispatch(removeItem(item.productId));
                                    }}
                                  >
                                    <FontAwesomeIcon icon={faTrash} />
                                  </div>
                                </div>
                              </div>
                              <hr className="my-4" />
                            </>
                          );
                        })}
                        <div className="row">
                          <div className="col">
                            <div className="pt-5">
                              <h6 className="mb-0">
                                <div className="text-body">
                                  <i className="fas fa-long-arrow-alt-left me-2" />
                                  Back to shop
                                </div>
                              </h6>
                            </div>
                          </div>
                          <div className="col">
                            <div className="pt-5 ">
                              <h6 className="mb-0">
                                <p
                                  className="text-body text-right"
                                  onClick={() => {
                                    dispatch(clearCart());
                                  }}
                                >
                                  <FontAwesomeIcon
                                    icon={faRefresh}
                                    className="mx-2"
                                  />
                                  Clear Cart
                                </p>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 bg-grey">
                      <div className="p-5">
                        <h3 className="mb-5 pt-1">Contact Details</h3>
                        <hr className="my-4" />
                        <form>
                          <div className="form-group mb-3">
                            <label htmlFor="name">Full Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              placeholder="Chamikara Nayanajith"
                            />
                          </div>
                          <div className="form-group mb-3">
                            <label htmlFor="name">Contact Number</label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              placeholder="+94715122890"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="name">Address</label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              placeholder="22/1, First Lane, Colombo - 06"
                            />
                          </div>
                        </form>
                        <hr className="my-4" />
                        <div className="d-flex justify-content-between mb-2">
                          <h5 className="text-uppercase">delivery fee</h5>
                          <h5>free</h5>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                          <h5 className="text-uppercase">Total price</h5>
                          <h5>{totalAmount}</h5>
                        </div>
                        <div className="d-flex justify-content-end">
                          <button className="btn btn-dark btn-block btn-sm ">
                            Place Order
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Cart;
