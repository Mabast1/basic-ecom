import React, { useState, createContext } from "react";

export const CartContext = createContext({
  isClicked: false,
});

export const CartProvider = ({ children }) => {
  const [isClicked, setIsClicked] = useState(CartContext);
  const value = { isClicked, setIsClicked };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
