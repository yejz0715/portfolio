import React from "react";
import * as S from "./style.js";
const Profile = ({ handleShowStory }) => {
  return (
    <S.Container>
      <S.ProfileImgWrapper>
        <S.ProfileImgLabel>클릭 클릭</S.ProfileImgLabel>
        <S.ProfileImg
          src={process.env.PUBLIC_URL + "/images/user_img.png"}
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
          안녕하세요! 트렌디한 프론트엔드 개발자가 되기 위해 <br />
          javascript와 react 중점으로 프로젝트를 준비하고 있습니다. <br />
        </S.Contents>
        <S.Tag>#열정 #다양한 #아이디어 #노력형 #항상 #최선을 다하는 중</S.Tag>
      </S.ProfileText>
    </S.Container>
  );
};
export default Profile;
