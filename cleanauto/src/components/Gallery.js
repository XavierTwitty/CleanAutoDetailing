import React from "react";

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h2>Gallery</h2>
      <div className="gallery">
        <img src={require("../photos/IMG_2151.jpg")}></img>
        <img src={require("../photos/IMG_2152 2.jpg")}></img>
        <img src={require("../photos/IMG_2170.jpg")}></img>
        <img src={require("../photos/IMG_2242.jpg")}></img>
        <img src={require("../photos/IMG_2246.jpg")}></img>
        <img src={require("../photos/IMG_2243.jpg")}></img>
        <img src={require("../photos/IMG_2389.jpg")}></img>
        <img src={require("../photos/IMG_2391.jpg")}></img>
        <img src={require("../photos/IMG_2394 5.jpg")}></img>
      </div>
    </div>
  );
};

export default Gallery;
