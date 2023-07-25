import React from "react";
import { faShoppingCart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Product } from "@/types";

interface ItemCardProps {
  product: Product;
  key: string;
}

const ItemCard: React.FC<ItemCardProps> = ({ product, key }) => {
  return (
    <div key={key} className="col-md-6 col-lg-4 col-xl-3 p-2 best">
      <div className="collection-img position-relative">
        <img
          src={product.images?.length ? product.images[0] : ""}
          className="w-100"
          alt={`Product ${key}`}
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
        <p className="text-capitalize my-1">{product.name}</p>
        <span className="fw-bold">$ {product.price}</span>
      </div>
    </div>
  );
};

export default ItemCard;
