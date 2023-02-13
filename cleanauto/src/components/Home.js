import React from "react";

const Home = () => {
  return (
    <div className="body-container">
      <span> Professional mobile detaling </span>
      <div className="interior-exterior-pic">
        <img
          src={require("../photos/arteum-ro-xNlXqktxclQ-unsplash.jpg")}
          alt="interior"
          className="interior-exterior-img"
        />
        <p className="pos-absolute"> Interior & Exterior</p>
      </div>
      <div className="exterior-pic">
        <img
          src={require("../photos/grahame-jenkins-p7tai9P7H-s-unsplash.jpg")}
          alt="exterior"
          className="exterior-img"
        />
        <p className="pos-abs"> Exterior </p>
      </div>
      <button>Book Now</button>
    </div>
  );
};

export default Home;
