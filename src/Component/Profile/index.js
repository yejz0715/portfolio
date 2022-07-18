import React from "react";
import * as S from "./style.js";
const Profile = ({ handleShowStory }) => {
  return (
    <S.Container>
      <S.ProfileImgWrapper>
        <S.ProfileImgLabel>클릭 클릭</S.ProfileImgLabel>
        <S.ProfileImg
          src={process.env.PUBLIC_URL + "/images/user_yeji.jpg"}
          alt="image"
          onClick={handleShowStory}
        />
      </S.ProfileImgWrapper>
      <S.ProfileText>
        <S.Wrapper>
          <S.Id>yejz0715</S.Id>
          <S.MailButton href="mailto:yejz0715@gmail.com">
            메일 보내기
            <S.SendIcon />
          </S.MailButton>
        </S.Wrapper>
        <S.Mail>
          <S.MailImg
            src={process.env.PUBLIC_URL + "/images/gmail_icon.png"}
            alt="gmail"
          />
          yejz0715@gmail.com
        </S.Mail>
        <S.Name>이예지</S.Name>
        <S.Contents>안녕하세요! 프론트엔드 개발자 이예지입니다!</S.Contents>
      </S.ProfileText>
    </S.Container>
  );
};
export default Profile;
