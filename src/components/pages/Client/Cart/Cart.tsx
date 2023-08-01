import React, { useState } from "react";
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
import { z } from "zod";
import "./styles.css";
import { shippingDetailsSchema } from "@/types/zodSchema";
import { usePlaceOrder } from "@/hooks/order/usePlaceOrder";

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const { cartItems, totalAmount } = useAppSelector((state) => state.cart);
  const { mutate: placeOrderMutation } = usePlaceOrder();
  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    number: "",
    address: "",
  });

  const [validationErrors, setValidationErrors] = useState<{
    [key: string]: string;
  }>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setShippingDetails((prevValues) => ({ ...prevValues, [name]: value }));
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // Validate form data using Zod
      shippingDetailsSchema.parse(shippingDetails);

      const order = {
        products: cartItems.map((item) => ({
          product: item.productId,
          price: String(item.price),
          quantity: String(item.quantity),
        })),
        totalAmount: String(totalAmount),
        customerName: shippingDetails.name,
        contactNumber: String(shippingDetails.number),
        shippingAddress: shippingDetails.address,
      };

      placeOrderMutation(order);
    } catch (error) {
      // If validation fails, handle the validation errors
      if (error instanceof z.ZodError) {
        const fieldErrors: { [key: string]: string } = {};
        for (const [field, message] of Object.entries(
          error.formErrors.fieldErrors
        )) {
          fieldErrors[field] = message?.[0] ?? "";
        }
        // Update the validationErrors state variable with the new errors
        setValidationErrors(fieldErrors);
      }
    }
  };

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
                    {cartItems.length > 0 ? (
                      <>
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
                                  <div
                                    className="row mb-4 d-flex justify-content-between align-items-center cart-items"
                                    key={item.productId}
                                  >
                                    <div className="col-md-2 col-lg-2 col-xl-2">
                                      <img
                                        src={item.image}
                                        className="img-fluid rounded-3"
                                        alt={item.name}
                                      />
                                    </div>
                                    <div className="col-md-3 col-lg-3 col-xl-3">
                                      <h6 className="text-muted">
                                        {item.name}
                                      </h6>
                                    </div>
                                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                      {item.quantity > 1}
                                      <button
                                        className="btn pr-2"
                                        disabled={
                                          item.quantity > 1 ? false : true
                                        }
                                        onClick={(e) => {
                                          e.preventDefault();
                                          dispatch(decrease(item.productId));
                                        }}
                                      >
                                        <FontAwesomeIcon icon={faMinus} />
                                      </button>
                                      <div className="p-2">{item.quantity}</div>
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
                            <form onSubmit={handleSubmit}>
                              <div className="form-group mb-3">
                                <label htmlFor="name">Full Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="name"
                                  name="name"
                                  value={shippingDetails.name}
                                  onChange={handleInputChange}
                                  placeholder="Chamikara Nayanajith"
                                />
                                {validationErrors.name && (
                                  <div className="text-danger float-right">
                                    {validationErrors.name}
                                  </div>
                                )}
                              </div>
                              <div className="form-group mb-3">
                                <label htmlFor="number">Contact Number</label>
                                <input
                                  type="number"
                                  className="form-control"
                                  id="number"
                                  name="number"
                                  value={shippingDetails.number}
                                  onChange={handleInputChange}
                                  placeholder="+94715122890"
                                />
                                {validationErrors.number && (
                                  <div className="text-danger float-right">
                                    {validationErrors.number}
                                  </div>
                                )}
                              </div>
                              <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="address"
                                  name="address"
                                  value={shippingDetails.address}
                                  onChange={handleInputChange}
                                  placeholder="22/1, First Lane, Colombo - 06"
                                />
                                {validationErrors.address && (
                                  <div className="text-danger float-right">
                                    {validationErrors.address}
                                  </div>
                                )}
                              </div>

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
                                <button
                                  type="submit"
                                  className="btn btn-dark btn-block btn-sm "
                                >
                                  Place Order
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="col-lg-8">
                          <div className="p-5">
                            <div className="d-flex justify-content-between align-items-center mb-5">
                              <h2 className="mb-0 text-black">
                                Your Cart is Empty
                              </h2>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
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
