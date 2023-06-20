import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import ProductForm from "./ProductForm";
import { ProductContext } from '../../contexts/product/ProductContext';

describe('ProductForm', () => {
    let wrapper;
    const productContextActions = {
        getProducts: jest.fn(),
        addProduct: jest.fn()
    };
    beforeEach(() => {
        wrapper = render(
            <ProductContext.Provider value={productContextActions}>
                <ProductForm />
            </ProductContext.Provider>
        );
    });

    it('renders correctly', () => {
        const { container } = wrapper;
        expect(container).toMatchSnapshot();
    });

    describe('accessibility interactions', () => {
        it('should find product name input by its label', () => {
            const inputElement = screen.getByLabelText('Product name');
            expect(inputElement).not.toBeUndefined();
        });

        it('should find product count input by its label', () => {
            const inputElement = screen.getByLabelText('Items count');
            expect(inputElement).not.toBeUndefined();
        });

        it('should find product price input by its label', () => {
            const inputElement = screen.getByLabelText('Price');
            expect(inputElement).not.toBeUndefined();
        });

        it('should find product promotionalPrice input by its label', () => {
            const inputElement = screen.getByLabelText('Promotional Price');
            expect(inputElement).not.toBeUndefined();
        });
    });

    describe('onSubmit', () => {
        describe('when invalid', () => {
            beforeEach(() => {
                const countField = screen.getByRole('spinbutton', { name: 'Items count' });
                const submitButton = screen.getByRole('button');
                userEvent.type(countField, ' ');

                userEvent.click(submitButton);
            });

            it('should show product name error message', () => {
                expect(screen.queryByText('Product name is required')).toBeInTheDocument();
                expect(productContextActions.addProduct).not.toHaveBeenCalled();
            });
    
            it('should show count error message', () => {
                expect(screen.queryByText('Items count is required')).toBeInTheDocument();
                expect(productContextActions.addProduct).not.toHaveBeenCalled();
            });

            it('should show product price error message', () => {
                expect(screen.queryByText('Price is required')).toBeInTheDocument();
                expect(productContextActions.addProduct).not.toHaveBeenCalled();
            });

            it('should show promotionalPrice error message', () => {
                expect(screen.queryByText('Promotional price is required')).toBeInTheDocument();
                expect(productContextActions.addProduct).not.toHaveBeenCalled();
            });
        });

        describe('when valid', () => {
            let productNameField;
            let countField;
            let priceField;
            let promotionalPriceField;

            beforeEach(() => {
                productNameField = screen.getByRole('textbox', { name: 'Product name' });
                countField = screen.getByRole('spinbutton', { name: 'Items count' });
                priceField = screen.getByRole('spinbutton', { name: 'Price' });
                promotionalPriceField = screen.getByRole('spinbutton', { name: 'Promotional Price' });
                const submitButton = screen.getByRole('button');

                userEvent.type(productNameField, 'Product1');
                userEvent.type(countField, '10');
                userEvent.type(priceField, '2,00');
                userEvent.type(promotionalPriceField, '1,50');

                userEvent.click(submitButton);
            });

            it('should add product', () => {
                expect(productContextActions.addProduct).toHaveBeenCalled();
            });

            it('should reset the form', () => {
                expect(productNameField.getAttribute('value')).toBeNull();
                expect(countField.getAttribute('value')).toBe('0');
                expect(priceField.getAttribute('value')).toBeNull();
                expect(promotionalPriceField.getAttribute('value')).toBeNull();
            });
        });
    });
});