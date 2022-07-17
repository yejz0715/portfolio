import React from "react";
import * as S from "./style.js";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
const StorySlider = ({ myStoryImgList, setShowStory }) => {
  const settings = {
    dots: false,
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
      <S.logoIcon src={process.env.PUBLIC_URL + "/images/log_imgrm.png"} />
      <S.deleteButton onClick={() => setShowStory(false)} />
    </S.container>
  );
};
export default StorySlider;
