import styled from "styled-components";
import { FiSend } from "react-icons/fi";

export const Container = styled.div`
  height: 176px;
  display: flex;
  margin: 60px 0;
  padding-right: 130px;
  background-color: transparent;
  align-items: center;
  justify-content: center;
`;
export const ProfileImgLabel = styled.label`
  position: absolute;
  top: -20px;
  display: none;
  height: 20px;
  line-height: 23px;
  background-color: #f5c125;
  border-radius: 2px;
  font-weight: bold;
  color: #fff;
  padding: 2px;
`;
export const ProfileImgWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  &:hover {
    ${ProfileImgLabel} {
      display: inline;
    }
  }
`;

export const ProfileImg = styled.img`
  width: 180px;
  height: 180px;
  background-color: transparent;
  border-radius: 50%;

  border: 2px solid #d9d9d9;
  padding: 6px;
`;

export const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  margin-left: 60px;
  padding-top: 10px;
  cursor: default;
`;
export const Wrapper = styled.div`
  display: flex;
`;

export const Id = styled.span`
  font-family: "GangwonEdu_OTFBoldA";
  font-size: 30px;
  line-height: 33px;
  margin-bottom: 24px;
`;
export const MailButton = styled.a`
  width: 120px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  border: 1px solid #d3d3d3;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  margin-left: 32px;
  font-size: 14px;
  cursor: pointer;
`;
export const SendIcon = styled(FiSend)`
  size: 20px;
`;

export const Mail = styled.div`
  display: flex;
  align-items: center;
  font-size: 21px;
  line-height: 20px;
  margin-bottom: 19px;
`;

export const MailImg = styled.img`
  width: 22px;
  margin-right: 5px;
`;
export const Name = styled.label`
  font-size: 21px;
  font-weight: 500;
  line-height: 23.44px;
  margin-bottom: 4px;
`;
export const Contents = styled.label`
  width: 100%;
  color: #646464;
  font-size: 20px;
  font-weight: 400;
  line-height: 23.44px;
`;
