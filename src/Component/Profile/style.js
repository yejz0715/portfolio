import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 60px 360px;
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
`;
export const Wrapper = styled.div`
  display: flex;
`;

export const Id = styled.span`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 15px;
`;
export const MailButton = styled.button`
  //width: 109px;
  height: 30px;
  background-color: #f9f9f9;
  border: 1px solid #efefef;
  border-radius: 3px;
  margin-left: 32px;
`;
export const MailIcon = styled.img`
  width: 20px;
  height: 20px;
`;
export const Name = styled.label`
  font-size: 20px;
  font-weight: 600;
  line-height: 23.44px;
  margin-bottom: 4px;
`;
export const Mail = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-bottom: 15px;
`;
export const Contents = styled.label`
  color: #646464;
  font-size: 20px;
  font-weight: 400;
  line-height: 23.44px;
`;
