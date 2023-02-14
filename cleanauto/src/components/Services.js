import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="services-container">
      <h2> Our Services:</h2>

      <div className="services">
        <div className="service">
          <h3>Interior X Exterior Detail</h3>
          <ul>
            <li>Vaccum</li>
            <li>Deep clean and Wipe Down</li>
            <li>Leather Conditioner </li>
            <li>Windows</li>
            <li>Car Wash</li>
            <li>Tire Gloss</li>
            <li>Door Jams</li>
            <li>Starting at 100$</li>
          </ul>
          <Link to="https://calendly.com/cleanautodetailing704/interior-exterior-detail">
            Book Now
          </Link>
        </div>
        <div className="service">
          <h3>Interior Detail</h3>
          <ul>
            <li>Vaccum</li>
            <li>Deep clean and Wipe Down</li>
            <li>Leather Conditioner </li>
            <li>Windows</li>
            <li>Door Jams</li>
            <li>Starting at 70$</li>
          </ul>
          <Link to="https://calendly.com/cleanautodetailing704/interior-detail">
            Book Now
          </Link>
        </div>
        <div className="service">
          <h3>Exterior Detail</h3>
          <ul>
            <li>Car Wash</li>
            <li>Tire Gloss</li>
            <li>Door Jams</li>
            <li>Windows</li>
            <li>Starting at 30$</li>
          </ul>
          <Link to="https://calendly.com/cleanautodetailing704/exterior-detail">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
