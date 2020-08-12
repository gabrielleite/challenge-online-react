import React, { useContext } from "react";
import Product from "../Product/Product";

import "./_product-list.scss";

import { Context } from "../../store/context/context";

const ProductList = () => {
  const { store, handleStore } = useContext(Context)
  
  return (
    <section>
      <h2>Product list</h2>
      <div className="header-table">
        <ul>
          <li>Product</li>
          <li>Count</li>
          <li>Price</li>
          <li>Promotional Price</li>
        </ul>
      </div>
      <ul className="product-list">
        {store.map((product, i) => (
          <li key={i}>
            <Product
              name={product.name}
              count={product.count}
              price={product.price}
              promotionalPrice={product.promotionalPrice}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductList;
