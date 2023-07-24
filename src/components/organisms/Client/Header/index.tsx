import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faMasksTheater,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Header() {
  const [navbarToggled, setNavbarToggled] = useState(false);
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
              5
            </span>
          </button>
          <button type="button" className="btn position-relative">
            <span className="icon">
              <FontAwesomeIcon icon={faHeart} />
            </span>
            <span className="position-absolute top-0 start-100 translate-middle badge">
              2
            </span>
          </button>
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
            <li className="nav-item px-2 py-2">
              <span className="nav-link text-uppercase ">
                <Link to="shop">Shop</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
