import styled from "styled-components";
export const container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 30px;
`;
export const imgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 78px;
  height: 78px;
  background: #fff;
  border: 1px solid #f5f5f5;
  border-radius: 50%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  margin-bottom: 8px;
`;
export const icon = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background-color: #fff;
  //margin-bottom: 8px;
`;

export const text = styled.label`
  font-weight: bold;
  font-size: 16px;
`;
