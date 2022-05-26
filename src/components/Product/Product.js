import React from "react";

import "./Product.scss";

const Product = ({ name, count, price, key }) => {
  return (
    <div className="product" key={key}>
      <span>{name}</span>
      <span>{count}</span>
      <span>{price}</span>
    </div>
  );
};

export default Product;
