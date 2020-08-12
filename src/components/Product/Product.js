import React from "react";

import "./Product.scss";

const Product = ({ name, count, price, promotionalPrice }) => {
  return (
    <div className="product">
      <span>{name}</span>
      <span>{count}</span>
      <span>{price}</span>
      <span>{promotionalPrice}</span>
    </div>
  );
};

export default Product;
