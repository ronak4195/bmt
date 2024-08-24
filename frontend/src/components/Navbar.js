import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/" className="navbar-link">Movies</Link></li>
        <li className="navbar-item"><Link to="/cart" className="navbar-link">Cart ({cartCount})</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
