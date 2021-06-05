import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {HomePage, CatalogPage, ItemPage} from '../pages'
import ShopHeader from "../shop-header";
import Footer from "../footer";

import './app.css';

import pedals_back from '../../img/background/pedals_back.jpg'
import amps_back from '../../img/background/amps_back.jpg'
import guitars_back from '../../img/background/guitars_back.jpg'
import bass_back from '../../img/background/bass_back.jpg'
import BlankPage from "../blank-page/blank-page";
import CartPage from "../pages/cart-page";


const App = () => {

  return (
    <>
      <Router>
        <ShopHeader/>
          <Switch>
            <Route path = '/' render = {() => <HomePage/>} exact />

            <Route path = '/guitars/' exact render = {() => <CatalogPage background = {guitars_back}/>}/>
            <Route path = '/guitars/:id'
                   render = {({match}) => {
                     return <ItemPage selectedItemId = {match.params.id}/>
                   }}
            />
            <Route path = '/amps/' exact render = {() => <CatalogPage background = {amps_back} />} />
            <Route path = '/amps/:id'
                   render = {({match}) => {
                     return <ItemPage selectedItemId = {match.params.id}/>
                   }}
            />
            <Route path = '/pedals/' exact render = {() => <CatalogPage background = {pedals_back} />} />
            <Route path = '/pedals/:id'
                   render = {({match}) => {
                     return <ItemPage selectedItemId = {match.params.id}/>
                   }}
            />
            <Route path = '/bass/' exact render = {() => <CatalogPage background = {bass_back} />}/>
            <Route path = '/bass/:id'
                   render = {({match}) => {
                     return <ItemPage selectedItemId = {match.params.id}/>
                   }}
            />
            <Route path = '/accessories/' exact render = {() => <CatalogPage background = {bass_back} />}/>
            <Route path = '/accessories/:id'
                   render = {({match}) => {
                     return <ItemPage selectedItemId = {match.params.id}/>
                   }}
            />
            <Route path = '/cart/' exact render = {() => <CartPage/>}/>
            <Route render = {() => <BlankPage/>}/>
          </Switch>
        <Footer/>
      </Router>
    </>
  );
}
export default App;