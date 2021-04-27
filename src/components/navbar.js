import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="navbar-wrapper">
      <div className="aux-navbar">
        <div className="d-flex justify-content-between align-items-center">
          <div className="logo-wrapper">
            <Link to="/">
              <img src="/assets/images/logo.png"></img>
            </Link>
          </div>
          <div className="links-wrapper">
            <div className="d-flex justify-content-left align-items-center">
              <div className="link">about</div>
              <div className="link">github</div>
              <div className="link">support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
