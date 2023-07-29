import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faRefresh } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { clearCart } from "@redux/Cart/cartSlice";
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
                          <h6 className="mb-0 text-muted">3 items</h6>
                        </div>
                        <hr className="my-4" />
                        <div className="row mb-4 d-flex justify-content-between align-items-center">
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp"
                              className="img-fluid rounded-3"
                              alt="Cotton T-shirt"
                            />
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <h6 className="text-muted">Shirt</h6>
                            <h6 className="text-black mb-0">Cotton T-shirt</h6>
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <div className="">
                              <FontAwesomeIcon icon={faMinus} />
                            </div>
                            <div className="">1</div>
                            <div className="">
                              <FontAwesomeIcon icon={faPlus} />
                            </div>
                          </div>
                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h6 className="mb-0">€ 44.00</h6>
                          </div>
                          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a href="#!" className="text-muted">
                              <i className="fas fa-times" />
                            </a>
                          </div>
                        </div>
                        <hr className="my-4" />
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
                        <h3 className="mb-5 pt-1">Summary</h3>
                        <hr className="my-4" />
                        <div className="d-flex justify-content-between mb-4">
                          <h5 className="text-uppercase">items 3</h5>
                          <h5>€ 132.00</h5>
                        </div>
                        <h5 className="text-uppercase mb-3">Shipping</h5>
                        <div className="mb-4 pb-2">
                          <select className="select">
                            <option value={1}>Standard-Delivery- €5.00</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                            <option value={4}>Four</option>
                          </select>
                        </div>
                        <h5 className="text-uppercase mb-3">Give code</h5>
                        <div className="mb-5">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="form3Examplea2"
                              className="form-control form-control-lg"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Examplea2"
                            >
                              Enter your code
                            </label>
                          </div>
                        </div>
                        <hr className="my-4" />
                        <div className="d-flex justify-content-between mb-5">
                          <h5 className="text-uppercase">Total price</h5>
                          <h5>{totalAmount}</h5>
                        </div>
                        <button
                          type="button"
                          className="btn btn-dark btn-block btn-lg"
                          data-mdb-ripple-color="dark"
                        >
                          Register
                        </button>
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
