import React, { useState, useContext } from "react";

import "./components.scss";
import Input from "./Input/Input";
import { Context } from "../store/context/context";

const ProductForm = () => {
  const [state, setState] = useState({
    name: "",
    count: "",
    price: "",
    promotionalPrice: "",
  });

  const { addProduct } = useContext(Context);

  const [ errors, setErrors ] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    return setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state)
    const InputErrors = ['name', 'count', 'price', 'promotionalPrice']
      .filter(key => state[key] === '');
    
      if(InputErrors.length) {
        setErrors(InputErrors);
        return;
      }

      setErrors([]);
      setState({
        name: "",
        count: "",
        price: "",
        promotionalPrice: "",
      });
      addProduct(state);
      
  };

  return (
    <div className="centered">
      <h2>Add new product</h2>
      <form onSubmit={handleSubmit}>
        <Input
          label="Product name"
          value={state.name}
          name="name"
          type="text"
          onChange={handleInputChange}
          error={errors.includes("name")}
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
