import React from "react";
import { Parallax } from "react-parallax";
import Car from "./Image/bugatti-divo-2018-photoshoot-ty.jpg";
import Car2 from "./Image/Ferrari-Wallpaper-24.jpg";
import Car3 from "./Image/1967_ford_mustang_fastback_villain_cr_supercars-HD.jpg";
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
