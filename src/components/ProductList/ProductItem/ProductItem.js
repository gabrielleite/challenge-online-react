import React from 'react';
import { IconButton } from '@tiendanube/components';
import { CloseIcon } from '@tiendanube/icons';

import './ProductItem.scss';

const ProductItem = ({ name, count, price, promotionalPrice, onRemove }) => {
  return (
    <div className="product">
      <span>{name}</span>
      <span>{count}</span>
      <span>{price}</span>
      <span>{promotionalPrice}</span>
      <span>
        <IconButton icon={CloseIcon} onClick={onRemove} />
      </span>
    </div>
  );
};

export default ProductItem;
