import React, { createContext, useState } from 'react';
export const dataContext = createContext();

function UserContext({ children }) {
  let [input, setInput] = useState('');
  const data = {
    input,
    setInput,
  };

  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
}

export default UserContext;
