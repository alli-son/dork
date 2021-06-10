import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav>
        <div>
          <Link to="/">DORK</Link>
        </div>
        <div>
          <Link to="/about">ABOUT</Link>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
