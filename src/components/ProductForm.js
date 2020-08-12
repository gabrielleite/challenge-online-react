import React, { useState } from "react";

import "./components.scss";
import Input from "./Input/Input";

const ProductForm = () => {
  const [state, setState] = useState({
    product: "",
    count: "",
    price: "",
    promotionalPrice: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    return setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="centered">
      <h2>Add new product</h2>
      <div>
        <Input
          label="Product name"
          value={state.product}
          name="product"
          type="text"
          onChange={handleInputChange}
        />
        <Input
          label="Items count"
          value={state.count}
          name="count"
          type="text"
          onChange={handleInputChange}
        />
        <Input
          label="Price"
          value={state.price}
          name="price"
          type="tel"
          onChange={handleInputChange}
        />
        <Input
          label="Promotional Price"
          value={state.promotionalPrice}
          name="promotionalPrice"
          type="tel"
          onChange={handleInputChange}
        />

        <input className="button" type="submit" value="Aceptar" />
      </div>
    </div>
  );
};

export default ProductForm;
