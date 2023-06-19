import '@testing-library/jest-dom/extend-expect';

import React from "react";
import { render, screen } from '@testing-library/react';
import ProductForm from "./ProductForm";

describe('ProductForm', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = render(<ProductForm />);
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
});