import styled from "styled-components";
import { FiHome, FiGithub } from "react-icons/fi";
import { BiPencil } from "react-icons/bi";

export const HeaderContainer = styled.div`
  height: 60px;
  display: flex;
  border: 1px solid #efefef;
  width: 100vw;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;
export const HeaderLogo = styled.img`
  width: 115px;
  cursor: default;
`;

export const SearchInput = styled.input`
  width: 252px;
  height: 36px;
  background-color: #efefef;
  border-radius: 8px;
  border: none;
  padding-left: 20px;
  margin: 10px 150px;

  &:focus {
    outline: none;
  }
`;

export const HeaderIconWrapper = styled.ul`
  position: relative;
  display: flex;
  list-style: none;
  width: 120px;
  justify-content: space-between;
`;

export const HeaderIconLabel = styled.label`
  position: absolute;
  height: 18px;
  top: 40px;
  display: none;
  background-color: black;
  border-radius: 2px;
  color: #fff;
  font-weight: bold;
  line-height: 18px;
  padding: 3px 4px 0px 4px;
`;

export const HeaderIcon = styled.li`
  display: flex;
  flex-direction: column;

  &:hover {
    ${HeaderIconLabel} {
      display: inline;
    }
  }
`;
export const FiHomeIcon = styled(FiHome)`
  &:hover {
    color: #7c39ae;
  }
`;
export const BiPencilIcon = styled(BiPencil)`
  &:hover {
    color: #20c997;
  }
`;
export const FiGithubIcon = styled(FiGithub)`
  &:hover {
    color: #063a79;
  }
`;
