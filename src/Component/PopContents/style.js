import styled from "styled-components";
export const Container = styled.div`
  position: relative;
  background-color: #ffffff;
  width: 421px;
  box-sizing: border-box;
  height: 90%;
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
  font-size: 16px;
  padding-left: 20px;
  cursor: default;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 20px;
`;
export const Text = styled.p`
  padding: 5px 20px;
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
`;
export const TagBox = styled.div`
  position: absolute;
  bottom: 100px;
  left: 20px;
`;
export const Tag = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  color: rgba(5, 59, 110, 1);
`;

export const SubTitle = styled.label`
  font-size: 18px;
  margin-top: 16px;
  margin-bottom: 8px;
`;
export const Description = styled.label`
  color: ${(props) =>
    props.type === "link" ? "rgba(5, 59, 110, 1);" : "#646464"};
  cursor: ${(props) => (props.type === "link" ? "pointer" : "default")};
  font-size: 16px;
  margin-bottom: 4px;
  margin-top: ${(props) => (props.type === "link" ? "8px" : "none")};
`;

export const DevTime = styled.label`
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 14px;
  color: #c4c4c4;
`;
