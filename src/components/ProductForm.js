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

  const [ errors, setErrors ] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    return setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state)
    const InputErrors = ['product', 'count', 'price', 'promotionalPrice']
      .filter(key => state[key] === '');
    
      if(InputErrors.length) {
        setErrors(InputErrors);
        return;
      }
      
      setErrors([]);
      console.log(state);
  };

  return (
    <div className="centered">
      <h2>Add new product</h2>
      <form onSubmit={handleSubmit}>
        <Input
          label="Product name"
          value={state.product}
          name="product"
          type="text"
          onChange={handleInputChange}
          error={errors.includes("product")}
        />
        <Input
          label="Items count"
          value={state.count}
          name="count"
          type="text"
          onChange={handleInputChange}
          error={errors.includes("count")}
        />
        <Input
          label="Price"
          value={state.price}
          name="price"
          type="tel"
          onChange={handleInputChange}
          error={errors.includes("price")}
        />
        <Input
          label="Promotional Price"
          value={state.promotionalPrice}
          name="promotionalPrice"
          type="tel"
          onChange={handleInputChange}
          error={errors.includes("promotionalPrice")}
        />

        <input className="button" type="submit" value="Aceptar" />
      </form>
    </div>
  );
};

export default ProductForm;
