import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #fff;
  animation: ${(props) => (props.isClicked ? "fadeOut 1s" : "none")};
  cursor: pointer;

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 252px;
  height: 252px;
  margin-bottom: 36px;
  margin-left: 45px;
  border-radius: 50%;
  background-color: #fff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
export const Message = styled.p`
  margin-top: 30px;
  font-size: 20px;
`;
