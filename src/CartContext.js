import React from 'react';
import { createContext, useState } from 'react';

export const cartcontextss = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  return (
    <cartcontextss.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </cartcontextss.Provider>
  );
};
