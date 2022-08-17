import React, { useContext } from "react";

import "./ProductCard.scss";
import Button from "../Button/Button";
import { CartContext } from "../../Context/CartContext";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);

  const { name, price, imageUrl } = product;

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button buttonType="inverted" onClick={() => addItemToCart(product)}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
