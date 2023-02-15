import React from "react";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <h4> Contact us :</h4>
      <p>cleanautodetailing704@gmail.com</p>
      <div className="social-media">
        <h5>Follow us on IG!</h5>
        <Link to="https://instagram.com/cleanautodetaling?igshid=YmMyMTA2M2Y=">
          <BsInstagram color="white" size="3.8rem" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
