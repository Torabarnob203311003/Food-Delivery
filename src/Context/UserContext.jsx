import React, { createContext, useState } from 'react';

export const dataContext = createContext();

function UserContext({ children }) {
  const [input, setInput] = useState('');
  const [showCart, setShowCart] = useState(false); // State to show/hide the cart

  const data = {
    input,
    setInput,
    showCart,
    setShowCart, // Make sure this is passed to the context
  };

  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
}

export default UserContext;
