import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addItemToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
