import styled from "styled-components";
import { FiXSquare } from "react-icons/fi";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
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
  margin-top: 12px;
  text-align: center;
  padding: 15px 0;
  font-weight: 500;
  line-height: 19px;
  font-size: 14px;
  color: #646464;
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
export const background = styled.div`
  display: ${(props) => (props.isShowProject ? "flex" : "grid")};
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${(props) =>
    props.isShowProject ? "#575757" : "transparent"};
`;
export const deleteButton = styled(FiXSquare)`
  position: absolute;
  top: 30px;
  right: 50px;
  width: 36px;
  height: 36px;
  color: #d5d5d5;
`;
export const wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
