import React, { startTransition, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMasksTheater,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useAppSelector } from "@redux/hooks";
import "./styles.css";
import { isAccessTokenExpired } from "@/services/AuthService";

const Header: React.FC = () => {
  const [navbarToggled, setNavbarToggled] = useState(false);
  const { cartItems } = useAppSelector((state) => state.cart);
  const auth = isAccessTokenExpired();
  const navigate = useNavigate();

  const handleAdmin = () => {
    try {
      startTransition(() => navigate("/admin/dashboard"));
    } catch (error) {
      console.error("Logout failed:", error);
      // Handle logout error if needed
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-4 fixed-top">
      <div className="container">
        <a
          className="navbar-brand d-flex justify-content-between align-items-center order-lg-0"
          href="/"
        >
          <FontAwesomeIcon icon={faMasksTheater} />
          <span className="text-uppercase fw-lighter ms-2">Craftopia</span>
        </a>
        <div className="order-lg-2 nav-btns">
          <button type="button" className="btn position-relative">
            <span className="icon">
              <Link to="cart">
                <FontAwesomeIcon icon={faShoppingCart} />
              </Link>
            </span>
            <span className="position-absolute top-0 start-100 translate-middle badge">
              {cartItems.length > 0 && cartItems.length}
            </span>
          </button>
          {!auth && (
            <button
              type="button"
              className="btn position-relative"
              onClick={handleAdmin}
            >
              <span className="icon">
                <FontAwesomeIcon icon={faUser} />
              </span>
            </button>
          )}
        </div>
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setNavbarToggled(!navbarToggled)}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={` navbar-collapse order-lg-1 ${
            navbarToggled ? "" : "collapse"
          }`}
          id="navMenu"
        >
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item px-2 py-2">
              <span className="nav-link text-uppercase ">
                <Link to="/">Home</Link>
              </span>
            </li>
            {/* <li className="nav-item px-2 py-2">
              <span className="nav-link text-uppercase ">
                <Link to="shop">Shop</Link>
              </span>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
