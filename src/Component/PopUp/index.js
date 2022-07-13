import React from "react";
import PopContents from "../PopContents/index.js";
import PopImgSlider from "../PopImgSlider/index.js";
import * as S from "./style.js";
const PopUp = () => {
  return (
    <S.container>
      <PopImgSlider />
      <PopContents />
    </S.container>
  );
};
export default PopUp;
