import React from 'react';

import './ProductItem.scss';

const ProductItem = ({ name, count, price, promotionalPrice }) => {
  return (
    <div className="product">
      <span>{name}</span>
      <span>{count}</span>
      <span>{price}</span>
      <span>{promotionalPrice}</span>
    </div>
  );
};

export default ProductItem;
