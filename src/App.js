import React from 'react';

import { Switch, Route, NavLink } from 'react-router-dom';

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
              <NavLink to="/" activeClassName="active" exact>Product List</NavLink>
            </li>
            <li>
              <NavLink to="/products" activeClassName="active">Product Form</NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <main>
        <header className="page-title">
          <h1>Products</h1>
        </header>
        <ProductContextProvider>
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route exact path="/products" component={ProductForm} />
          </Switch>
        </ProductContextProvider>
      </main>
    </div>
  );
}

export default React.memo(App);
