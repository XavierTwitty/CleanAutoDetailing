import React from "react";

//ideas:
// redux , dropdown , animations

const Home = () => {
  return (
    <div className="body-container">
      <h2> Professional mobile detaling </h2>
      <div className="interior-exterior-pic">
        <a href="/services">
          <img src={require("../photos/IMG_2387.jpg")} alt="interior" />
          <p className="pos-absolute"> Interior & Exterior</p>
        </a>
      </div>
      <div className="exterior-pic">
        <a href="/services">
          <img src={require("../photos/IMG_2246.jpg")} alt="exterior" />
          <p className="pos-abs"> Exterior </p>
        </a>
      </div>
    </div>
  );
};

export default Home;
