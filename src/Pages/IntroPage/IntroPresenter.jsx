import React from "react";
import * as S from "./style.js";
import UserImg from "../../assets/intro_img.png";
import Logo from "../../assets/intro_logo.png";
const IntroPresenter = ({ handleOnClickPage, isClicked }) => (
  <S.Container onClick={handleOnClickPage} isClicked={isClicked}>
    <S.ImgWrapper>
      <img src={UserImg} alt="userImage" width="230px" />
    </S.ImgWrapper>
    <img src={Logo} alt="logo" width="352px" />
  </S.Container>
);

export default IntroPresenter;
