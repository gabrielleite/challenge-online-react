import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../../contexts/product/ProductContext';
import ProductItem from './ProductItem/ProductItem';

import './ProductList.scss';

const ProductList = () => {
  const { getProducts, removeProduct } = useContext(ProductContext);
  const [products, setProducts] = useState(getProducts());
  const navigate = useNavigate();


  const handleRemove = (key) => {
    removeProduct(key);
    setProducts((prevProducts) => 
      prevProducts.filter((product) => product.key !== key));
  };

  const handleEdit = (key) => {
    navigate(`/products/${key}`);
  };

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
                        onRemove={() => handleRemove(key)}
                        onEdit={() => handleEdit(key)}
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
