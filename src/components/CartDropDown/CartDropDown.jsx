import React, { useContext } from "react";

import "./CartDropDown.scss";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import { CartContext } from "../../Context/CartContext";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item._id} cartItem={item} />
        ))}
      </div>

      <Button>Checkout</Button>
    </div>
  );
};

export default CartDropDown;
