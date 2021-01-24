import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/Homepage.component'
import ShopPage from './pages/shop/Shop.component'
import Header from './components/header/header.component'
import SignUpAndSignOut from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path="/shop"  component={ShopPage} />
        <Route path="/signin"  component={SignUpAndSignOut} />
      </Switch>
    </div>
  );
}

export default App;
