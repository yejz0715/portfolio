import styled from "styled-components";
import Slider from "react-slick";

export const Container = styled.div`
  width: 800px;
  height: 800px;
  background-color: transparent;
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

  .slick-prev.slick-disabled:before {
    opacity: 0.6;
  }
`;

export const img = styled.div`
  width: 100%;
  height: 800px;
  background-image: ${(props) =>
    props.imgPath ? `url(${props.imgPath})` : "none"};

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;
