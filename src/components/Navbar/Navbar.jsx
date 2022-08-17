import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import "./Navbar.scss";
import CrwnLogo from "../assets/crown.svg";
import { UserContext } from "../../Context/UserContext";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../CartIcon/CartIcon";
import CartDropDown from "../CartDropDown/CartDropDown";
import { CartContext } from "../../Context/CartContext";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const { isClicked, setIsClicked } = useContext(CartContext);

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
            <span className="nav-link" onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
          <div onClick={() => setIsClicked((prev) => !prev)}>
            <CartIcon />
          </div>
        </div>
        {!isClicked && <CartDropDown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
