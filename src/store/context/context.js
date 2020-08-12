import React, { createContext, useState } from 'react';

export const Context = createContext();

const ContextProvider = ({children}) => {
  const [store, setStore] = useState([
    { name: "T-shirt", count: 3, price: 20, promotionalPrice: 15 },
    { name: "Trousers", count: 5, price: 15, promotionalPrice: 13 },
    { name: "sweater", count: 10, price: 25, promotionalPrice: 15 },
    { name: "Jacket", count: 3, price: 40, promotionalPrice: 31 },
  ]);

  const addProduct = (value) => {
    return setStore(prevState => ([ ...prevState, value ]));
  }

  return(
    <Context.Provider value={{ store, addProduct }}>
      { children }
    </Context.Provider>
  )
}

export default ContextProvider