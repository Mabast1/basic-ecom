import React, { useState, createContext, useEffect } from "react";

export const CartContext = createContext({
  isClicked: false,
  setIsClicked: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartProvider = ({ children }) => {
  const [isClicked, setIsClicked] = useState(CartContext);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const value = {
    isClicked,
    setIsClicked,
    addItemToCart,
    cartItems,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
