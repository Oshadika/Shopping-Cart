import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar d-flex justify-content-end">
      <div className="links">
        <NavLink to="/">Shop</NavLink>
        <NavLink to="/cart" className="cart">
          Cart
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
