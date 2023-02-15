import React from "react";
import Navigation from "./Navigation";
import logo from "../photos/Clean Auto-logos_transparent.png";

const Header = () => {
  return (
    <div className="header-container">
      <img className="logo" src={logo} alt="logo" />
      <Navigation />
    </div>
  );
};

export default Header;
