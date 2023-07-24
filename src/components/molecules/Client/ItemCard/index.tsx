import { faShoppingCart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function ItemCard({ i }) {
  return (
    <div key={i} className="col-md-6 col-lg-4 col-xl-3 p-2 best">
      <div className="collection-img position-relative">
        <img
          src="./images/c_formal_gray_shirt.png"
          className="w-100"
          alt={`Product ${i}`}
        />
        <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
          <FontAwesomeIcon icon={faShoppingCart} />
        </span>
      </div>
      <div className="text-center">
        <div className="rating mt-3">
          <span className="text-primary">
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span className="text-primary">
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span className="text-primary">
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span className="text-primary">
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span className="text-primary">
            <FontAwesomeIcon icon={faStar} />
          </span>
        </div>
        <p className="text-capitalize my-1">Gray Shirt</p>
        <span className="fw-bold">$ 45.50</span>
      </div>
    </div>
  );
}

export default ItemCard;
