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
    font-size: 35px !important;
  }
  .slick-next:before {
    font-size: 35px !important;
  }
  .slick-prev {
    position: fixed;
    top: 50%;
    left: 4%;
    transform: translateY(-50%);
  }
  .slick-next {
    position: fixed;
    top: 50%;
    right: 5%;
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
