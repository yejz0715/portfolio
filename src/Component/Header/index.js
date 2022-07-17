import React from "react";
import * as S from "./style.js";
//import headerLogo from "../../assets/header_logo.png";
import { FiHome, FiGithub, FiSearch } from "react-icons/fi";
import { BiPencil } from "react-icons/bi";
const Header = ({ handleOnChange, handleOnKeyEnter }) => {
  return (
    <S.headerContainer>
      <S.headerLogo src={"/assets/header_logo.png"} alt="logo" />
      <S.searchInput
        type="text"
        onChange={handleOnChange}
        placeholder="ex) javascript"
        onKeyPress={handleOnKeyEnter}
      />
      <S.headerIcon>
        <FiHome size="24px" cursor="pointer" />
        <a href="https://github.com/yejz0715" target="_blank" rel="noreferrer">
          <FiGithub size="24px" cursor="pointer" />
        </a>

        <a href="https://velog.io/@yejz0715" target="_blank" rel="noreferrer">
          <BiPencil size="24px" cursor="pointer" />
        </a>
      </S.headerIcon>
    </S.headerContainer>
  );
};
export default Header;
