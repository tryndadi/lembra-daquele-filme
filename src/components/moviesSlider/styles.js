import React from "react";
import slider from "react-slick/lib/slider";
import styled from "styled-components";
import { css } from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const arrowsStyles = {
  top: 0,
  right: -35,
  zIndex: -2,
  width: "75px",
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

export const VerticalFade = styled.div`
  display: none;
  z-index: 3;
  width: 100%;
  height: 100%;
  position: absolute;
  transform: scale(1.008);
  background-color: black;
  transition: all 200ms ease-in;
  background: linear-gradient(to top, #111 20%, transparent 90%);
`;

export const CustomCard = styled.div`
  position: relative;
  ${(props) => {
    if (props.custom) {
      return css`
        position: relative;
        transition: all 200ms ease-in;
        transform: scale(0.95);
      `;
    } else {
      return css`
        position: relative;
        transition: all 200ms ease-in;
        transform: scale(0.9);
      `;
    }
  }}

  &:hover {
    z-index: 2;
    transition: all 200ms ease-in;
    transform: scale(1);
    ${VerticalFade} {
      display: block;
    }
  }
`;

export const iconStyle = {
  fontSize: "30px",
  color: "rgba(255,255,255,0.5)",
};

export const SliderContainer = styled.div`
  color: rgba(255, 255, 255, 0.5);
`;

export const CustomSlider = styled(slider)`
  transform: scale(0.9);
  position: relative;
`;

export const InfosSection = styled.div`
  flex-direction: column;
  position: absolute;
  display: flex;
  padding: 10px;
  gap: 10px;
  bottom: 0;
`;

export const ButtonsSection = styled.div`
  gap: 15px;
  padding: 10px;
  display: flex;
  transition: all 200ms ease-in;
  justify-content: space-between;
  background: linear-gradient(to bottom, #111 10%, transparent 90%);
`;
