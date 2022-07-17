import React from "react";
import * as S from "./style.js";
const Profile = ({ handleShowStory }) => {
  return (
    <S.Container>
      <S.ProfileImg
        src={"/assets/user_yeji.jpg"}
        alt="image"
        onClick={handleShowStory}
      />
      <S.ProfileText>
        <S.Wrapper>
          <S.Id>yejz0715</S.Id>
          <S.MailButton href="mailto:yejz0715@gmail.com">
            메일 보내기
            <S.sendIcon />
          </S.MailButton>
        </S.Wrapper>
        <S.Mail>
          <img
            src="assets/gmail_icon.svg"
            alt="gmail"
            width="22px"
            style={{ marginRight: "4px" }}
          />
          yejz0715@gmail.com
        </S.Mail>
        <S.Contents>안녕하세요! 프론트엔드 개발자 이예지입니다!</S.Contents>
      </S.ProfileText>
    </S.Container>
  );
};
export default Profile;
