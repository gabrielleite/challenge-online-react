import React, { useState } from 'react';

import './components.scss';

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: '',
    count: '',
    price: '',
    promotionalPrice: '',
  });

  const handleInputChange = (event) => {
    return setProduct(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <form className="centered" onSubmit={handleSubmit}>
      <h2>Add new product</h2>
      <div>
        <label className="label" htmlFor="name">Product name</label>
        <input id="name" name="name" type="text" value={ product.name } onChange={handleInputChange}/>
        <label className="label" htmlFor="count">Items count</label>
        <input id="count" name="count" type="text" value={ product.count } onChange={handleInputChange}/>
        <label className="label" htmlFor="price">Price</label>
        <input id="price" name="price" type="text" value={ product.price } onChange={handleInputChange}/>
        <label className="label" htmlFor="promotionalPrice">Promotional Price</label>
        <input id="promotionalPrice" name="promotionalPrice" type="text" value={ product.promotionalPrice } onChange={handleInputChange}/>
        <input className="button" type="submit" value="Aceptar" />
      </div>
    </form>
  );
}

export default ProductForm;
