import '@testing-library/jest-dom/extend-expect';

import React from "react";
import { render } from '@testing-library/react';
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
});