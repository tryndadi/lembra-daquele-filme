import React from "react";
import Slider from "react-slick";

import LeftArrow from "../../assets/img/left-arrow.svg";
import RightArrow from "../../assets/img/right-arrow.svg";

const Card = ({ title, data }) => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} width="200px" />
  );

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: true,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h2> Responsive </h2>
      <Slider {...settings}>
        <div>
          <h3 style={{ backgroundColor: "red", height: "200px" }}>1</h3>
        </div>
        <div>
          <h3 style={{ backgroundColor: "blue", height: "200px" }}>2</h3>
        </div>
        <div>
          <h3 style={{ backgroundColor: "black", height: "200px" }}>3</h3>
        </div>
        <div>
          <h3 style={{ backgroundColor: "pink", height: "200px" }}>4</h3>
        </div>
        <div>
          <h3 style={{ backgroundColor: "grey", height: "200px" }}>5</h3>
        </div>
        <div>
          <h3 style={{ backgroundColor: "blue", height: "200px" }}>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Card;
