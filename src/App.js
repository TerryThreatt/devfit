import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/Homepage.component'
import ShopPage from './pages/shop/Shop.component'

function App() {
  return (
    <div>
      <Route exact path='/' component={Homepage} />
      <Route path="/shop"  component={ShopPage} />
    </div>
  );
}

export default App;
