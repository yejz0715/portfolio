import styled from "styled-components";
export const headerContainer = styled.div`
  height: 60px;
  display: flex;
  border: 1px solid #efefef;
  width: 100%;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;
export const headerLogo = styled.img`
  width: 115px;
  cursor: pointer;
`;

export const searchInput = styled.input`
  width: 252px;
  height: 36px;
  background-color: #efefef;
  border-radius: 8px;
  border: none;
  padding-left: 20px;
  margin: 10px 150px;
`;

// searchInput.focus
//   border: none;
//   outline: none;
// ;

export const headerIcon = styled.ul`
  display: flex;
  list-style: none;
  width: 120px;
  justify-content: space-between;
`;
