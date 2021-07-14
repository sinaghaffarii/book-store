import React from "react";
import Navbars from "./Components/Header/Navbar/Navbars";
import Footer from "./Components/Footer/Footer";
import Home from "../src/Pages/Home/Home";
import Product from './Pages/Product/Product'
import Cart from './Pages/Cart/Cart'
import Store from './Pages/Store/Store'
import Account from './Pages/Account/Account'
// --------- React Router 

import { BrowserRouter as Router , Route , Switch } from 'react-router-dom'


import "./App.css";

const App = () => {
  return (
   <Router>
      <div>
      <Navbars />
      <main>
       <Switch>
       <Route path="/book-store" exact component={Home}/>
       <Route path="/product/:id"  component={Product}/>
        <Route path="/cart/:id?" component={Cart}/>
        <Route path="/store" component={Store} />
        <Route path="/account" component={Account} />
      </Switch>
      </main>
      <Footer />
    </div>
   </Router>
  );
};

export default App;
