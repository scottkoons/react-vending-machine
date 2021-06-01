import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Candy from './Candy';
import Chips from './Chips';
import Drink from './Drink';
import Home from './Home';
import NavBar from './NavBar';


const VendingMachine = () => {
  return (
    <div>

      <BrowserRouter>

        <NavBar />

        <Route exact path="/drink">
          <Drink />
        </Route>
        <Route exact path="/candy">
          <Candy />
        </Route>
        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </BrowserRouter>

    </div>
  );
};

export default VendingMachine;
