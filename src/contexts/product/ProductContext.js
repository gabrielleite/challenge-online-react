import React, { createContext } from 'react';

export const ProductContext = createContext();

export const ProductContextProvider = ({children}) => {

    const add = (product) => {
        localStorage.setItem(new Date().getTime(), JSON.stringify(product));
    };

    const list = () => {
        return Object.keys(localStorage).map((key) => 
            JSON.parse(localStorage[key]));
    }

    return (
        <ProductContext.Provider value={ { 
            getProducts: list, 
            addProduct: add 
        } }>
            {children}
        </ProductContext.Provider>
    );
};