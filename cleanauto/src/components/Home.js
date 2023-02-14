import React from "react";

const Home = () => {
  return (
    <div className="body-container">
      <h2> Professional mobile detaling </h2>
      <div className="interior-exterior-pic">
        <a href="/services">
          <img
            src={require("../photos/arteum-ro-xNlXqktxclQ-unsplash.jpg")}
            alt="interior"
            className="interior-exterior-img"
          />
          <p className="pos-absolute"> Interior & Exterior</p>
        </a>
      </div>
      <div className="exterior-pic">
        <a href="/services">
          <img
            src={require("../photos/grahame-jenkins-p7tai9P7H-s-unsplash.jpg")}
            alt="exterior"
            className="exterior-img"
          />
          <p className="pos-abs"> Exterior </p>
        </a>
      </div>
    </div>
  );
};

export default Home;
