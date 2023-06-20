import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, screen } from "@testing-library/react";
import { ProductContext, ProductContextProvider } from './ProductContext';

describe('ProductContextProvider', () => {
    beforeEach(() => {
        localStorage.clear();
        localStorage.setItem(new Date().getTime(), JSON.stringify({ name: 'product'}));
    });

    it('should list products from local storage', () => {
        render(
            <ProductContextProvider>
                <ProductContext.Consumer>
                    {
                        ({ getProducts }) => {
                            return getProducts().map(({name}) => (<span key={name}>{name}</span>));
                        }
                    }
                </ProductContext.Consumer>
            </ProductContextProvider>
        );

        const spans = screen.getAllByText('product');
        expect(spans).toHaveLength(1);
    });
});