import styled from "styled-components";
import { FiMail, FiSend } from "react-icons/fi";

export const Container = styled.div`
  width: 623px;
  height: 176px;
  display: flex;
  margin: 60px 0;
  padding-right: 130px;
  background-color: transparent;
`;

export const ProfileImg = styled.img`
  width: 180px;
  height: 180px;
  background-color: #ffffff;
  border-radius: 50%;
`;

export const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  height: 200px;
  margin-left: 60px;
  padding-top: 10px;
`;
export const Wrapper = styled.div`
  display: flex;
`;

export const Id = styled.span`
  font-size: 28px;
  font-weight: 600;
  line-height: 33px;
  margin-bottom: 12px;
`;
export const MailButton = styled.button`
  width: 120px;
  height: 32px;
  background-color: #f9f9f9;
  border: 1px solid #efefef;
  border-radius: 3px;
  margin-left: 32px;
  line-height: 16px;
  font-size: 14px;
  text-align: center;
`;
export const sendIcon = styled(FiSend)`
  size: 20px;
  padding: 5px 0 0 6px;
`;

export const mailIcon = styled(FiMail)`
  size: 22px;
  margin-right: 6px;
  color: #720000;
`;
export const Mail = styled.div`
  display: flex;
  font-size: 20px;
  margin-bottom: 19px;
`;
export const Name = styled.label`
  font-size: 20px;
  font-weight: 500;
  line-height: 23.44px;
  margin-bottom: 4px;
`;
export const Contents = styled.label`
  color: #646464;
  font-size: 20px;
  font-weight: 400;
  line-height: 23.44px;
`;
