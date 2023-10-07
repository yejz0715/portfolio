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
    top: -25px;
    display: none;
    height: 20px;
    line-height: 24px;
    background-color: #f5c125;
    border-radius: 2px;
    font-weight: bold;
    color: #fff;
    padding: 3px 3px 2px 3px;
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
    width: 167px;
    height: 167px;
    background-color: transparent;
    border-radius: 50%;
`;

export const ProfileText = styled.div`
    display: flex;
    flex-direction: column;
    width: 397px;
    margin-left: 70px;
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
    height: 27px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fafafa;
    border: 1px solid #d3d3d3;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin-left: 32px;
    font-size: 14px;
    padding-top: 5px;
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
    line-height: 23.44px;
    margin-bottom: 4px;
`;
export const Contents = styled.label`
    width: 100%;
    color: #646464;
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 8px;
`;
export const Tag = styled.label`
    color: rgba(5, 59, 110, 1);
    font-size: 15px;
`;
