import styled from "styled-components";
import { FiMail, FiSend } from "react-icons/fi";

export const Container = styled.div`
  height: 176px;
  display: flex;
  margin: 60px 0;
  padding-right: 130px;
  background-color: transparent;
  align-items: center;
  justify-content: center;
`;

export const ProfileImg = styled.img`
  width: 180px;
  height: 180px;
  background-color: transparent;
  border-radius: 50%;
  cursor: pointer;
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
  font-size: 28px;
  line-height: 33px;
  margin-bottom: 24px;
`;
export const MailButton = styled.a`
  width: 120px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  border: 1px solid #efefef;
  border-radius: 3px;
  margin-left: 32px;
  font-size: 14px;
  cursor: pointer;
`;
export const sendIcon = styled(FiSend)`
  size: 20px;
`;

export const Mail = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  line-height: 20px;
  margin-bottom: 19px;
`;
export const Name = styled.label`
  font-size: 20px;
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
