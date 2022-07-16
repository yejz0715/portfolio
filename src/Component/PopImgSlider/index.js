import React from "react";
import * as S from "./style.js";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

const PopImgSlider = ({ images, id }) => {
  const settings = {
    dots: true,
    fade: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <S.Container>
      <S.customSlider {...settings}>
        {images.map((item) => (
          <S.img key={id} imgPath={item} />
        ))}
      </S.customSlider>
    </S.Container>
  );
};

export default PopImgSlider;
