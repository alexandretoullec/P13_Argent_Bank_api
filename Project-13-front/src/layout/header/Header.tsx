import React from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

/* redux */
import { useSelector, useDispatch } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";

const Header = () => {
  // useSelector() is used to access the user object from the redux store
  // JSON.parse() is used to convert the stringified user object back to an object so that we can access the user's first name
  const user = JSON.parse(useSelector(selectUser)); // useDispatch() is used to dispatch an action to the redux store

  const dispatch = useDispatch();

  /**
   * userLogout() is a function that dispatches the logout action to the redux store when the user clicks the Sign Out link
   */
  const userLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {/* If the user is logged in, display the user's first name and a Sign Out link. If the user is not logged in, display a Sign In link */}
        {user ? (
          <div>
            <NavLink className="main-nav-item" to="/user">
              Hello
              {user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1)}
            </NavLink>
            <NavLink to="/" onClick={userLogout}>
              <FontAwesomeIcon icon={faRightFromBracket} /> Sign Out
            </NavLink>
          </div>
        ) : (
          <NavLink className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Header;
