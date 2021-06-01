import React from 'react';
import { NavLink } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/candy">
        Candy
      </NavLink>
      <NavLink exact to="/drink">
        Drink
      </NavLink>
      <NavLink exact to="/chips">
        Chips
      </NavLink>
    </nav>
  );
};

export default NavBar;
