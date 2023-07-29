import React from "react";
import { faShoppingCart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartItem, Product } from "@/types";
import { useAppDispatch } from "@/redux/hooks";
import { addItem } from "@redux/Cart/cartSlice";
interface ItemCardProps {
  product: Product;
  key: string;
}

const ItemCard: React.FC<ItemCardProps> = ({ product, key }) => {
  const dispatch = useAppDispatch();
  const imageUrl = typeof product.image === "string" ? product.image : "";
  const handleAddToCart = () => {
    const cartItem: CartItem = {
      productId: product._id ?? "",
      name: product.name,
      price: product.price,
      amount: 1,
      image: typeof product.image === "string" ? product.image : "",
    };
    dispatch(addItem(cartItem));
  };
  return (
    <div key={key} className="col-md-6 col-lg-4 col-xl-3 p-2 best">
      <div className="collection-img position-relative">
        <img src={imageUrl} className="w-100" alt={`Product ${key}`} />
        <span
          className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center"
          onClick={() => handleAddToCart()}
        >
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
