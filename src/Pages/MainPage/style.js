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
export const StoryList = styled.div`
  width: 931px;
  border-bottom: 1px solid #dbdcdd;
  display: flex;
  align-items: center;
  padding-bottom: 40px;
`;
export const ProjectText = styled.div`
  height: 44px;
  width: 100px;
  margin-top: 12px;
  text-align: center;
  padding: 15px 0;
  line-height: 19px;
  font-size: 19px;
  color: #646464;
`;
export const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  width: 934px;
  height: 613px;
  margin-top: 10px;
  background-color: transparent;
`;
export const Background = styled.div`
  position: relative;
  display: ${(props) => (props.isShowProject ? "flex" : "grid")};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${(props) =>
    props.isShowProject ? "#575757" : "transparent"};
`;
export const DeleteButton = styled(FiXSquare)`
  position: absolute;
  top: 30px;
  right: 50px;
  width: 36px;
  height: 36px;
  color: #d5d5d5;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Message = styled.div`
  width: 931px;
  margin-left: 330px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const MessageText = styled.p`
  font-size: ${(props) => (props.type === "explanation" ? "17px" : "20px")};
  color: ${(props) => (props.type === "explanation" ? "gray" : "#333")};
  margin-top: ${(props) => (props.type === "explanation" ? "18px" : "0")};
  font-family: "GangwonEdu_OTFBoldA";
`;
