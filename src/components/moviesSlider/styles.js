import React from "react";
import slider from "react-slick/lib/slider";
import styled from "styled-components";

import { VerticalFade } from "../CardFade/styles";
import { makeStyles } from "@material-ui/styles";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default makeStyles(() => ({
  modal: {
    "@media screen and (max-width: 486px)": {
      maxWidth: "320px",
      maxWeight: "180px",
    },
  },
}));

export const arrowsStyles = {
  top: 0,
  right: -35,
  zIndex: -2,
  width: "75px",
  minHeight: "50px",
  height: "100%",
  display: "flex",
  cursor: "pointer",
  alignSelf: "center",
  position: "absolute",
  alignItems: "center",
  justifyContent: "flex-end",
  transform: "scale(0.8)",
  background: "rgba(0,0,0,0.5)",
};

export const ArrowLeft = ({ currentSlide, slideCount, ...props }) => {
  const { style, onClick } = props;

  return (
    <div
      style={{
        ...style,
        ...arrowsStyles,
        left: -35,
        justifyContent: "flex-start",
      }}
      onClick={onClick}
    >
      <IoIosArrowBack
        style={{ fontSize: "35px", color: "rgba(255,255,255, .5)" }}
      />
    </div>
  );
};

export const ArrowRight = ({ currentSlide, slideCount, ...props }) => {
  const { style, onClick } = props;

  return (
    <div
      style={{
        ...style,
        ...arrowsStyles,
      }}
      onClick={onClick}
    >
      <IoIosArrowForward
        style={{ fontSize: "35px", color: "rgba(255,255,255, .5)" }}
      />
    </div>
  );
};

export const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
  initialSlide: 0,
  arrows: true,
  nextArrow: <ArrowRight />,
  prevArrow: <ArrowLeft />,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToScroll: 5,
        slidesToShow: 5,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToScroll: 4,
        slidesToShow: 4,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 2,
      },
    },
  ],
};

export const customSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  arrows: true,
  nextArrow: <ArrowRight />,
  prevArrow: <ArrowLeft />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToScroll: 2,
        slidesToShow: 2,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
  ],
};

export const CustomCard = styled.div`
  position: relative;
  transition: all 200ms ease-in;
  transform: scale(0.95);
  width: 100%;
  min-height: 150px;

  background: rgba(0, 0, 0, 0.3);

  &:hover {
    z-index: 2;
    transition: all 200ms ease-in;
    transform: scale(1);
    ${VerticalFade} {
      opacity: 1;
    }
  }
`;

export const SliderContainer = styled.div`
  color: rgba(255, 255, 255, 0.5);
  width: 97%;
`;

export const CustomSlider = styled(slider)`
  transform: scale(0.9);
  position: relative;
`;
