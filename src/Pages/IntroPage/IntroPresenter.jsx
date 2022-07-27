import React from "react";
import * as S from "./style.js";
const IntroPresenter = ({ handleOnClickPage, isClicked }) => (
  <S.Container onClick={handleOnClickPage} isClicked={isClicked}>
    <S.ImgWrapper>
      <img
        src={process.env.PUBLIC_URL + "/images/intro_img.png"}
        alt="userImage"
        width="230px"
      />
    </S.ImgWrapper>
    <img
      src={process.env.PUBLIC_URL + "/images/intro_logo.png"}
      alt="logo"
      width="352px"
    />
    <S.Message>포트폴리오 사이트로 이동하려면 클릭해주세요!</S.Message>
  </S.Container>
);

export default IntroPresenter;
