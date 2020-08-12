import React, { Component } from "react";

import "./components.scss";
import Input from "./Input/Input";

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: "",
      count: "",
      price: "",
      promotionalPrice: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    return this.setState(prevState => ({ ...prevState, [name]: value }))
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="centered">
        <h2>Add new product</h2>
        <div>
          <Input label="Product name" value={ this.state.product } name="product" type="text" onChange={ this.handleInputChange } />
          <Input label="Items count" value={ this.state.count } name="count" type="text" onChange={ this.handleInputChange } />
          <Input label="Price" value={ this.state.price } name="price" type="tel" onChange={ this.handleInputChange } />
          <Input label="Promotional Price" value={ this.state.promotionalPrice } name="promotionalPrice" type="tel" onChange={ this.handleInputChange } />
          
          <input className="button" type="submit" value="Aceptar" />
        </div>
      </div>
    );
  }
}

export default ProductForm;
