import React, { useContext } from "react";

import "./Checkout.scss";
import { CartContext } from "../../Context/CartContext";

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  return (
    <div>
      {cartItems.map((item) => (
        <div key={item.name}>
          <div>{item.name}</div>
          <span onClick={() => removeItemFromCart(item)}>Decrement</span>
          <div>{item.quantity}</div>
          <span onClick={() => addItemToCart(item)}>Increment</span>
          {/* <div>${item.price}</div> */}
        </div>
      ))}
    </div>
  );
};

export default Checkout;
