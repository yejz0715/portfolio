import React from "react";
import * as S from "./style.js";
const Profile = ({ handleShowStory }) => {
  return (
    <S.Container onClick={handleShowStory}>
      <S.ProfileImg src={"/assets/intro_img.png"} alt="image" />
      <S.ProfileText>
        <S.Wrapper>
          <S.Id>yejz0715</S.Id>
          <S.MailButton>
            메일 보내기
            <S.sendIcon />
          </S.MailButton>
        </S.Wrapper>
        <S.Mail>
          <S.mailIcon />
          yejz0715@gmail.com
        </S.Mail>
        <S.Name>이예지</S.Name>
        <S.Contents>안녕안녕안녕</S.Contents>
      </S.ProfileText>
    </S.Container>
  );
};
export default Profile;
