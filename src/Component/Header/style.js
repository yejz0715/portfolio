import styled from "styled-components";
export const HeaderContainer = styled.div`
  height: 60px;
  display: flex;
  border: 1px solid #efefef;
  width: 100%;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;
export const HeaderLogo = styled.img`
  width: 115px;
  cursor: pointer;
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
  top: 50px;
  display: none;
  background-color: black;
  color: #fff;
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
