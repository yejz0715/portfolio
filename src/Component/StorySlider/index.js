import React from "react";
import * as S from "./style.js";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
const StorySlider = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: false,
    speed: 500,
    sliderToShow: 1,
    sliderToScroll: 1,
  };

  return (
    <S.container>
      <Slider {...settings}></Slider>
    </S.container>
  );
};
export default StorySlider;
