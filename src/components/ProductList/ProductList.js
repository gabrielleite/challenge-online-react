import React, { useContext } from 'react';
import { ProductContext } from '../../contexts/product/ProductContext';
import ProductItem from './ProductItem/ProductItem';

import './ProductList.scss';

const ProductList = () => {
  const { getProducts } = useContext(ProductContext);

  let products = getProducts();

  return (
    <section>
      <h2>Product list</h2>

      {products && products.length
          ? 
          (
            <>
              <div className="header-table">
                <ul>
                  <li>Product</li>
                  <li>Count</li>
                  <li>Price</li>
                  <li>Promotional Price</li>
                  <li>Options</li>
                </ul>
              </div>
              <ul className="product-list">
                {products.map(({key, name, count, price, promotionalPrice}) => (
                    <li key={key}>
                      <ProductItem
                        name={name}
                        count={count}
                        price={price}
                        promotionalPrice={promotionalPrice}
                      />
                    </li>
                  ))}
              </ul>
            </>
          )
          : 
          (
            <div className="centered">
              Não há produtos cadastrados!
            </div>
          )
}
      
    </section>
  );
};

export default ProductList;
