import React from 'react';

import { Routes, Route, NavLink } from 'react-router-dom';

import ProductForm from './components/ProductForm/ProductForm';
import ProductList from './components/ProductList/ProductList';
import { ProductContextProvider } from './contexts/product/ProductContext';

import './styles.scss';

import {ReactComponent as TnLogo} from './img/tn.svg';

function App() {
  return (
    <div className="app layout">
      <aside>
        <header> <TnLogo className="svg"/> </header>
        <nav>
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} end>Product List</NavLink>
            </li>
            <li>
              <NavLink to="/products" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Product Form</NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <main>
        <header className="page-title">
          <h1>Products</h1>
        </header>
        <ProductContextProvider>
          <Routes>
            <Route exact path="/" element={<ProductList />} />
            <Route exact path="/products?/:id" element={<ProductForm />} />
          </Routes>
        </ProductContextProvider>
      </main>
    </div>
  );
}

export default React.memo(App);
