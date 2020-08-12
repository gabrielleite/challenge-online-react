import React, { createContext, useState, useEffect } from 'react';

export const Context = createContext();

const ContextProvider = ({children}) => {
  const [store, setStore] = useState(() => getStorage());

  function getStorage() {
    const cachedProducts = localStorage.getItem("products");
    return  JSON.parse(cachedProducts) || [];
  }

  useEffect(()=> {
    localStorage.setItem("products", JSON.stringify(store));
  }, [store])

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