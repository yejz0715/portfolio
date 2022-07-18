import React from "react";
import * as S from "./style.js";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
const StorySlider = ({ myStoryImgList, setShowStory }) => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1000,
    sliderToShow: 1,
    sliderToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <S.Container>
      <S.CustomSlider {...settings}>
        {myStoryImgList.map((item) => (
          <S.Img key={item.id} imgPath={item.src} />
        ))}
      </S.CustomSlider>
      <S.LogoIcon src={process.env.PUBLIC_URL + "/images/log_imgrm.png"} />
      <S.DeleteButton onClick={() => setShowStory(false)} />
    </S.Container>
  );
};
export default StorySlider;
