import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CrwnLogo from "../assets/crown.svg";
import "./Navbar.scss";
import { UserContext } from "../../Context/userContext";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navbar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const handleSignOut = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

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
          {currentUser ? (
            <span className="nav-link" onClick={handleSignOut}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
