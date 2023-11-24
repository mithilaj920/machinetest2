import React from "react";
import { Parallax } from "react-parallax";
import Car from "./Image/0UCDHkX.jpg";
import Car2 from "./Image/7N3cRoI.jpg";
import Car3 from "./Image/TLH1oQz.jpg";
import "./ImageSlider.css";

const ImageSlider = () => {
  return (
    <div className="App">
      <Parallax strength={200} bgImage={Car}>
        <div className="content">
          <div className="text-content">Bugatti</div>
        </div>
      </Parallax>
      <Parallax strength={200} bgImage={Car2}>
        <div className="content">
          <div className="text-content">Ferrari</div>
        </div>
      </Parallax>
      <Parallax strength={200} bgImage={Car3}>
        <div className="content">
          <div className="text-content">Mustang</div>
        </div>
      </Parallax>
    </div>
  );
};

export default ImageSlider;
