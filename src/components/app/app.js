import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {HomePage, CatalogPage, ItemPage} from '../pages'
import ShopHeader from "../shop-header";
import Footer from "../footer";
import BlankPage from "../blank-page/blank-page";
import CartPage from "../pages/cart-page";

import './app.css';

const App = () => {

  return (
    <>
      <Router>
        <ShopHeader/>
          <Switch>
            <Route path = '/' render = {() => <HomePage/>} exact />
            <Route path = '/guitars/' exact render = {() => <CatalogPage/>}/>
            <Route path = '/guitars/:id' render = {() => <ItemPage/>}/>
            <Route path = '/amps/' exact render = {() => <CatalogPage />} />
            <Route path = '/amps/:id' render = {() => <ItemPage />}/>
            <Route path = '/pedals/' exact render = {() => <CatalogPage />} />
            <Route path = '/pedals/:id' render = {() => <ItemPage />}/>
            <Route path = '/bass/' exact render = {() => <CatalogPage/>}/>
            <Route path = '/bass/:id' render = {() => <ItemPage />}/>
            <Route path = '/accessories/' exact render = {() => <CatalogPage />}/>
            <Route path = '/accessories/:id' render = {() => <ItemPage />}/>
            <Route path = '/cart' exact render = {() => <CartPage/>}/>
            <Route render = {() => <BlankPage/>}/>
          </Switch>
        <Footer/>
      </Router>
    </>
  );
}
export default App;