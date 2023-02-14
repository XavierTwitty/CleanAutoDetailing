import React from "react";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <h4> Contact us :</h4>
      <p>cleanautodetailing704@gmail.com</p>
      <h5>Follow us on IG!</h5>
      <Link to="https://instagram.com/cleanautodetaling?igshid=YmMyMTA2M2Y=">
        <BsInstagram color="white" />
      </Link>
    </div>
  );
};

export default Footer;
