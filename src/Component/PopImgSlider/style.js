import styled from "styled-components";
import Slider from "react-slick";

export const Container = styled.div`
  //position: relative;
  width: 800px;
  //height: 90%;
  min-height: 720px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CustomSlider = styled(Slider)`
  width: 100%;
  height: 100%;
  position: static;
  .slick-prev:before {
    font-size: 30px !important;
s  }
  .slick-next:before {
    font-size: 30px !important;
  }
  .slick-prev {
    top: 50%;
    left: 100px;
    transform: translateY(-50%);
  }
  .slick-next {
    top: 50%;
    right: 100px;
    transform: translateY(-50%);
  }

  .slick-prev.slick-disabled:before {
    opacity: 0.6;
  }
`;

export const Img = styled.div`
  width: 100%;
  height: 720px;
  //margin-top: 40px;
  background-image: ${(props) =>
    props.imgPath ? `url(${props.imgPath})` : "none"};

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;
