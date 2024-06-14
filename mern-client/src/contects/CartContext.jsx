import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decreaseCount = () => {
    setCount(prevCount => prevCount - 1);
  };
  


  return (
    <CartContext.Provider value={{ count, updateCount,decreaseCount }}>
      {children}
    </CartContext.Provider>
  );
};
