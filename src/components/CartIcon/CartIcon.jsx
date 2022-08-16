import React from "react";
import { AiOutlineShopping } from "react-icons/ai";

import "./CartIcon.scss";

const CartIcon = () => {
  return (
    <div className="cart-icon-container">
      <AiOutlineShopping size={40} className="shopping-icon" />
      <span className="item-count">10</span>
    </div>
  );
};

export default CartIcon;
