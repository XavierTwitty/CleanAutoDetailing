import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink className="links" to="/">
        {" "}
        home{" "}
      </NavLink>
      <NavLink className="links" to="services">
        {" "}
        Services{" "}
      </NavLink>
      <NavLink className="links" to="gallery">
        {" "}
        Gallery{" "}
      </NavLink>
    </div>
  );
};

export default Navigation;
