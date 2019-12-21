import React, { Component } from "react";
import { Fade } from "react-slideshow-image";
import food from "../assets/food.jpg";
import food2 from "../assets/food2.jpg";
import gadgets from "../assets/gadgets.jpg";
import delivery from "../assets/delivery.jpg";

const fadeImages = [delivery, gadgets, food2];

const fadeProperties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
};

class Slider extends React.Component {
  render() {
    return (
      <div className="slide-container">
        <Fade {...fadeProperties}>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[0]} />
            </div>
            <h2>Fast and reliable delivery</h2>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[1]} />
            </div>
            <h2>Deliver any gadgets you want</h2>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[2]} />
            </div>
            <h2>Order you favourite food</h2>
          </div>
        </Fade>
      </div>
    );
  }
}

export default Slider;
