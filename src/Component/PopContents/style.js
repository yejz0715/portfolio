import styled from "styled-components";
export const Container = styled.div`
  position: relative;
  background-color: #ffffff;
  width: 421px;
  box-sizing: border-box;
  height: 100%;
  min-height: 720px;
`;

export const UserImg = styled.div`
  border-radius: 50%;
  width: 36px;
  height: 36px;
  background-repeat: no-repeat;
  background-size: cover;
  border: 2px solid #d9d9d9;
  margin-right: 8px;
  background-image: ${(props) => (props.path ? `url(${props.path})` : "none")};
`;
export const UserBox = styled.div`
  display: flex;
  align-items: center;
  height: 54px;
  border-bottom: 1px solid #d9d9d9;
  font-size: 23px;
  font-family: "GangwonEdu_OTFBoldA";
  line-height: 54px;
  padding-left: 20px;
  cursor: default;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 20px;
`;

export const TagBox = styled.div`
  position: static;
  bottom: 100px;
  left: 20px;
`;
export const Tag = styled.p`
  font-size: 18px;
  font-weight: bold;
  line-height: 23px;
  color: rgba(5, 59, 110, 1);
`;

export const SubTitle = styled.label`
  font-size: 19px;
  margin-top: 16px;
  margin-bottom: 8px;
`;
export const Description = styled.label`
  color: ${(props) =>
    props.type === "link" ? "rgba(5, 59, 110, 1);" : "#646464"};
  cursor: ${(props) => (props.type === "link" ? "pointer" : "default")};
  font-size: 18px;
  line-height: 23px;
  margin-bottom: 5px;
  display: block;

  margin-top: ${(props) => (props.type === "link" ? "15px" : "none")};
`;

export const DevTime = styled.label`
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 16px;
  color: gray;
`;
