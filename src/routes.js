import React from 'react';
import { Route } from 'react-router';
import App from './App';
import Products from './Products';
import Product from './Product';
import GetProducts from './GetProducts';

export default (
  <Route>
    <Route path="/" component={App} />
    <Route component={GetProducts}>
      <Route path="/products" component={Products} />
      <Route path="/products/:id" component={Product} />
    </Route>
  </Route>
);
