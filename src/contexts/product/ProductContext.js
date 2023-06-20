import React, { createContext } from 'react';

export const ProductContext = createContext();

export const ProductContextProvider = ({children}) => {
    const hasProduct = (key) => localStorage.getItem(key);

    const upsert = (product) => {
        if (hasProduct(product.key)) {
            localStorage[product.key] = JSON.stringify(product);
        } else {
            localStorage.setItem(new Date().getTime(), JSON.stringify(product));
        }
    };

    const list = () => {
        return Object.keys(localStorage).map((key) => 
            ({...JSON.parse(localStorage[key]), key})) || [];
    }

    const remove = (key) => {
        localStorage.removeItem(key);
    }

    const find = (key) => {
        return {...JSON.parse(localStorage.getItem(key)), key};
    }

    return (
        <ProductContext.Provider value={ { 
            getProducts: list, 
            upsertProduct: upsert,
            removeProduct: remove,
            findProduct: find,
        } }>
            {children}
        </ProductContext.Provider>
    );
};