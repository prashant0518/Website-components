//import {} from "react-router";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Tour from "./Tours/tour";
import  Home  from "./home";
import Navbar from "./navbar";
import React from "react";

import Menu from './menu/menu';
import Tab from "./menu/tab/tab";
import Grocery from "./grocery bud/grocery";
import Navbarr from "./navbar/navvy";
import Sidebar from "./sidebar/sidebar";
import Stripe from "./stripe/stripe";
import Cart from "./cart/cart";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/tata">
          <Tour />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/tab">
          <Tab />
        </Route>
         <Route path="/grocery">
          <Grocery />
        </Route>
        <Route path="/nav">
          <Navbarr />
        </Route>
        <Route path="/sidebar">
          <Sidebar />
        </Route>
        <Route path="/stripe">
          <Stripe />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>

      </BrowserRouter>
   // <Tour />
  ) 
}

export default App;
