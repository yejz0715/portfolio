import React from "react";
import * as S from "./style.js";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
const StorySlider = ({ myStoryImgList, setShowStory }) => {
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
      <S.CustomSlider {...settings}>
        {myStoryImgList.map((item) => (
          <S.Img key={item.id} imgPath={item.src} />
        ))}
      </S.CustomSlider>
      <S.logoIcon src="./assets/log_imgrm.png" />
      <S.deleteButton onClick={() => setShowStory(false)} />
    </S.container>
  );
};
export default StorySlider;
