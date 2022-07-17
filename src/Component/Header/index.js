import React from "react";
import * as S from "./style.js";
import { FiHome, FiGithub } from "react-icons/fi";
import { BiPencil } from "react-icons/bi";
const Header = ({ handleOnChange, handleOnKeyEnter }) => {
  return (
    <S.HeaderContainer>
      <S.HeaderLogo
        src={process.env.PUBLIC_URL + "/images/header_logo.png"}
        alt="logo"
      />
      <S.SearchInput
        type="text"
        onChange={handleOnChange}
        placeholder="개발 스택을 입력하고 enter !"
        onKeyPress={handleOnKeyEnter}
      />
      <S.HeaderIconWrapper>
        <S.HeaderIcon>
          <FiHome size="24px" cursor="pointer" />
          <S.HeaderIconLabel style={{ backgroundColor: "#7C39AE" }}>
            home
          </S.HeaderIconLabel>
        </S.HeaderIcon>
        <S.HeaderIcon>
          <a
            href="https://github.com/yejz0715"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub size="24px" cursor="pointer" />
          </a>

          <S.HeaderIconLabel>github</S.HeaderIconLabel>
        </S.HeaderIcon>
        <S.HeaderIcon>
          <a href="https://velog.io/@yejz0715" target="_blank" rel="noreferrer">
            <BiPencil size="24px" cursor="pointer" />
          </a>
          <S.HeaderIconLabel style={{ backgroundColor: "#20C997" }}>
            velog
          </S.HeaderIconLabel>
        </S.HeaderIcon>
      </S.HeaderIconWrapper>
    </S.HeaderContainer>
  );
};
export default Header;
