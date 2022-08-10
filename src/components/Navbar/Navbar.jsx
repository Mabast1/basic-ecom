import React from "react";
import { Outlet, Link } from "react-router-dom";

import CrwnLogo from "../assets/crown.svg";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/" className="logo-container">
          <img src={CrwnLogo} alt="logo" className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/auth">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
