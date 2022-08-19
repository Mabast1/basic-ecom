import React, { useContext } from "react";
import { BiTrashAlt, BiChevronRight, BiChevronLeft } from "react-icons/bi";

import "./CheckoutItem.scss";
import { CartContext } from "../../Context/CartContext";

const CheckoutItem = ({ cartItem }) => {
  const { addItemToCart, removeItemFromCart, deleteItemFromCart } =
    useContext(CartContext);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={cartItem.imageUrl} alt={cartItem.name} />
      </div>
      <span className="name">{cartItem.name}</span>
      <span className="quantity">
        <BiChevronLeft
          onClick={() => removeItemFromCart(cartItem)}
          className="arrow"
        />
        {cartItem.quantity}
        <BiChevronRight
          onClick={() => addItemToCart(cartItem)}
          className="arrow"
        />
      </span>
      <span className="price">${cartItem.price}</span>
      <div
        className="remove-button"
        onClick={() => deleteItemFromCart(cartItem)}
      >
        <BiTrashAlt />
      </div>
    </div>
  );
};

export default CheckoutItem;
