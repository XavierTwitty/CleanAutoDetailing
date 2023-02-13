import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="services-container">
      <h2> Our Services:</h2>

      <div className="service">
        <h3>Interior X Exterior Detail</h3>
        <ul>
          <li>Vaccum</li>
          <li>Cleaning and Wipe Down</li>
          <li>Leather Conditioner </li>
          <li>Windows</li>
          <li>Car Wash</li>
          <li>Tire Gloss</li>
          <li>Door Jams</li>
          <li>Price: 60$</li>
        </ul>
        <Link to="https://calendly.com/cleanautodetailing704/interior-exterior-detail">
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default Services;
