import React from "react";
import * as S from "./style.js";
import { FiGithub } from "react-icons/fi";
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
        placeholder="ex) react + Enter!"
        onKeyPress={handleOnKeyEnter}
      />
      <S.HeaderIconWrapper>
        <S.HeaderIcon>
          <S.FiHomeIcon
            size="24px"
            cursor="pointer"
            onClick={() => {
              window.location.reload();
            }}
          />
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
            <S.BiPencilIcon size="24px" cursor="pointer" />
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
