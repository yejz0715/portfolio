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
export const background = styled.div`
  /* z-index: 1000;
  position: relative;
  display: flex;
  justify-content: center; */
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props.type === "pop" ? "rgba(0, 0, 0, 0.6)" : "#f5f5f5"};

  /* background-color: ${(props) =>
    props.type === "story" ? "#575757" : "rgba(0, 0, 0, 0.8)"}; */
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
