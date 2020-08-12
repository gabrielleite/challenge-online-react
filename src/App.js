import React from 'react';

import { Switch, Route, NavLink } from "react-router-dom";

import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList/ProductList';

import './styles.scss';

import {ReactComponent as TnLogo} from './img/tn.svg';
import ContextProvider from './store/context/context';

function App() {
  return (
    <div className="app layout">
      <ContextProvider>
        <aside>
          <header> <TnLogo className="svg"/> </header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" activeClassName="active" exact>Product List</NavLink>
              </li>
              <li>
                <NavLink to="/products" activeClassName="active">Products</NavLink>
              </li>
            </ul>
          </nav>
        </aside>
        <main>
          <header className="page-title">
            <h1>Products</h1>
          </header>
          <Switch>
            <Route exact path="/" component={ProductList}/>
            <Route exact path="/products" component={ProductForm} />
          </Switch>
        </main>
      </ContextProvider>
    </div>
  );
}

export default React.memo(App);
