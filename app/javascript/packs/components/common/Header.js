import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <NavLink
        to="/"
        exact
        activeClassName="active">
        Home
      </NavLink>
      {" | "}
      <NavLink to="/movies" activeClassName="active">Movies</NavLink>
    </nav>
  );
}

export default Header;
