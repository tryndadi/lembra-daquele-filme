import React from "react";
import styled from "styled-components";

import LeftArrow from "../../assets/img/left-arrow.svg";
import RightArrow from "../../assets/img/right-arrow.svg";

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <img src={LeftArrow} alt="prevArrow" {...props} />
);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <img src={RightArrow} alt="nextArrow" {...props} width="200px" />
);

export const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 8,
  slidesToScroll: 8,
  initialSlide: 0,
  arrows: true,
  centerPadding: "60px",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToScroll: 6,
        slidesToShow: 6,
        infinite: true,
        dots: false,
      },
    },

    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 2,
      },
    },
  ],
};

export const CustomCard = styled.div`
  height: 100%;
  cursor: pointer;

  position: relative;
  -webkit-transition: all 200ms ease-in;
  -webkit-transform: scale(0.8);
  -ms-transition: all 200ms ease-in;
  -ms-transform: scale(0.8);
  -moz-transition: all 200ms ease-in;
  -moz-transform: scale(0.8);
  transition: all 200ms ease-in;
  transform: scale(0.8);

  &:hover {
    z-index: 2;
    -webkit-transition: all 200ms ease-in;
    -webkit-transform: scale(1);
    -ms-transition: all 200ms ease-in;
    -ms-transform: scale(1);
    -moz-transition: all 200ms ease-in;
    -moz-transform: scale(1);
    transition: all 200ms ease-in;
    transform: scale(1);
  }
`;
