import styled from "styled-components";
import Slider from "react-slick";

export const Container = styled.div`
  position: relative;
  width: 800px;
  height: 90%;
  min-height: 720px;
  background-color: black;
  display: flex;
  align-items: flex-start;
`;
export const CustomSlider = styled(Slider)`
  width: 100%;
  height: 100%;
  .slick-prev:before {
    font-size: 30px !important;
  }
  .slick-next:before {
    font-size: 30px !important;
  }
  .slick-prev {
    left: -50px;
  }
  .slick-next {
    right: -460px;
  }

  .slick-prev.slick-disabled:before {
    opacity: 0.6;
  }
`;

export const Img = styled.div`
  width: 100%;
  height: 720px;
  margin-top: 40px;
  background-image: ${(props) =>
    props.imgPath ? `url(${props.imgPath})` : "none"};

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;
