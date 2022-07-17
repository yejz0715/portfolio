import styled from "styled-components";
import Slider from "react-slick";

export const Container = styled.div`
  width: 800px;
  height: 90%;
  min-height: 720px;
  background-color: black;
`;
export const customSlider = styled(Slider)`
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

export const img = styled.div`
  width: 100%;
  height: 720px;
  background-image: ${(props) =>
    props.imgPath ? `url(${props.imgPath})` : "none"};

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;
