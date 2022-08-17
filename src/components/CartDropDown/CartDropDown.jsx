import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./CartDropDown.scss";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import { CartContext } from "../../Context/CartContext";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.name} cartItem={item} />
        ))}
      </div>

      <Button onClick={() => navigate("/checkout")}>Checkout</Button>
    </div>
  );
};

export default CartDropDown;
