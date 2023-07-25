import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkedAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark py-5">
      <div className="container">
        <div className="row text-white g-4">
          <div className="col-md-6 col-lg-3">
            <a
              className="text-uppercase text-decoration-none brand text-white"
              href="index.html"
            >
              Craftopia
            </a>
            <p className="text-white mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              mollitia quisquam veniam odit cupiditate, ullam aut voluptas velit
              dolor ipsam?
            </p>
          </div>
          <div className="col-md-6 col-lg-3">
            <h5 className="fw-light">Links</h5>
            <ul className="list-unstyled">
              <li className="my-3">
                <a href="#" className="text-white text-decoration-none ">
                  <i className="fas fa-chevron-right me-1" /> Home
                </a>
              </li>
              <li className="my-3">
                <a href="#" className="text-white text-decoration-none ">
                  <i className="fas fa-chevron-right me-1" /> Collection
                </a>
              </li>
              <li className="my-3">
                <a href="#" className="text-white text-decoration-none ">
                  <i className="fas fa-chevron-right me-1" /> Blogs
                </a>
              </li>
              <li className="my-3">
                <a href="#" className="text-white text-decoration-none ">
                  <i className="fas fa-chevron-right me-1" /> About Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3">
            <h5 className="fw-light mb-3">Contact Us</h5>
            <div className="d-flex justify-content-start align-items-start my-2 ">
              <span className="me-3">
                <FontAwesomeIcon icon={faMapMarkedAlt} />
              </span>
              <span className="fw-light">
                Albert Street, New York, AS 756, United States of America
              </span>
            </div>
            <div className="d-flex justify-content-start align-items-start my-2 ">
              <span className="me-3">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span className="fw-light">attire.support@gmail.com</span>
            </div>
            <div className="d-flex justify-content-start align-items-start my-2 ">
              <span className="me-3">
                <FontAwesomeIcon icon={faPhoneAlt} />
              </span>
              <span className="fw-light">+9786 6776 236</span>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <h5 className="fw-light mb-3">Follow Us</h5>
            <div>
              <ul className="list-unstyled d-flex">
                <li>
                  <a
                    href="#"
                    className="text-white text-decoration-none  fs-4 me-4"
                  >
                    <i className="fab fa-facebook" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-decoration-none  fs-4 me-4"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-decoration-none  fs-4 me-4"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-decoration-none  fs-4 me-4"
                  >
                    <i className="fab fa-pinterest" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
