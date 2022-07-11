import React from "react";
import * as S from "./style.js";
import headerLogo from "../../assets/header_logo.png";
import { FiHome, FiGithub, FiSearch } from "react-icons/fi";
import { BiPencil } from "react-icons/bi";
const Header = () => {
  return (
    <S.headerContainer>
      <S.headerLogo src={headerLogo} alt="logo" />
      <S.searchInput type="text" placeholder="ex) javascript" />

      <S.headerIcon>
        <FiHome size="24px" cursor="pointer" />

        <FiGithub size="24px" cursor="pointer" />

        <BiPencil size="24px" cursor="pointer" />
      </S.headerIcon>
    </S.headerContainer>
  );
};
export default Header;
