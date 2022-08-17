import React, { useContext } from "react";
import { AiOutlineShopping } from "react-icons/ai";

import "./CartIcon.scss";
import { CartContext } from "../../Context/CartContext";

const CartIcon = () => {
  const { cartCount } = useContext(CartContext);
  return (
    <div className="cart-icon-container">
      <AiOutlineShopping size={40} className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
