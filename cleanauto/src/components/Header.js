import React from "react";
import Navigation from "./Navigation";
import logo from "../photos/Clean-Auto-logos.jpeg";

const Header = () => {
  return (
    <div className="header-container">
      {/* <div className="logos"></div> */}
      <img src={logo} alt="logo" />
      <Navigation />
    </div>
  );
};

export default Header;
