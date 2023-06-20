import React from 'react';
import { IconButton } from '@tiendanube/components';
import { CloseIcon } from '@tiendanube/icons';

import './ProductItem.scss';

const ProductItem = ({ name, count, price, promotionalPrice, onRemove }) => {
  const handleRemove = () => {
    const shouldRemove = window.confirm('Deseja remover o produto?');
    if (shouldRemove) onRemove();
  };

  return (
    <div className="product">
      <span>{name}</span>
      <span>{count}</span>
      <span>{price}</span>
      <span>{promotionalPrice}</span>
      <span>
        <IconButton icon={CloseIcon} onClick={handleRemove} />
      </span>
    </div>
  );
};

export default ProductItem;
