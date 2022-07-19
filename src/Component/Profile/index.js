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
        <S.Contents>
          안녕하세요! 오랫동안 개발을 하고싶어서 <br />
          열심히 react 공부중인 예비 개발자 입니다. <br />
        </S.Contents>
        <S.Tag>#성실 #노력형 #될때까지 #항상 # 최선을 다하는 중</S.Tag>
      </S.ProfileText>
    </S.Container>
  );
};
export default Profile;
