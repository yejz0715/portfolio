import styled from "styled-components";
import Slider from "react-slick";
import { FiXSquare } from "react-icons/fi";

export const container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #575757;
`;

export const CustomSlider = styled(Slider)`
  .slick-list {
    width: 523px;
    border-radius: 16px;
    margin: 25px 0px;
  }
  .slick-slide div {
    width: 523px !important;
  }
  .slick-prev {
    left: -54px !important;
  }
  .slick-next:before {
    font-size: 50px !important;
  }
  .slick-prev:before {
    font-size: 50px !important;
  }
`;

export const Img = styled.div`
  width: 100%;
  height: 880px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: ${(props) =>
    props.imgPath ? `url(${props.imgPath})` : "none"};
`;

export const deleteButton = styled(FiXSquare)`
  position: absolute;
  top: 30px;
  right: 50px;
  width: 36px;
  height: 36px;
  color: #d5d5d5;
`;