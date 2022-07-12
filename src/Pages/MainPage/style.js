import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
export const storyList = styled.div`
  width: 931px;
  border-bottom: 1px solid #dbdcdd;
  display: flex;
  align-items: center;
  padding-bottom: 40px;
`;
export const projectText = styled.div`
  height: 44px;
  width: 100px;
  border-top: 1px solid #262626;
  margin-top: 40px;
  text-align: center;
  padding: 15px 0;
  font-weight: 500;
  line-height: 19px;
  font-size: 16px;
`;
export const projectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  width: 934px;
  height: 613px;
  margin-top: 10px;
  background-color: transparent;
`;
