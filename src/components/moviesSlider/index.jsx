import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { imagePathPrefix } from "../../assets/js/utils";

import { tmdbAccess } from "../../services/api";
import { CustomCard } from "./styles";

import LeftArrow from "../../assets/img/left-arrow.svg";
import RightArrow from "../../assets/img/right-arrow.svg";
import axios from "axios";

const Card = ({ title, data }) => {
  const [populars, setPopulars] = useState(null);
  const [topRated, setTopRated] = useState(null);
  const [popularTvShow, setPopularTvShow] = useState(null);
  const [topRatedTvShow, setTopRatedTvShow] = useState(null);

  useEffect(() => {
    const getPopulars = tmdbAccess.get("/movie/popular");
    const getTopRated = tmdbAccess.get("/movie/top_rated");
    const getPopularTvShow = tmdbAccess.get("/tv/popular");
    const getTopRatedTvShow = tmdbAccess.get("/tv/top_rated");

    axios
      .all([getPopulars, getTopRated, getPopularTvShow, getTopRatedTvShow])
      .then(
        axios.spread((...responses) => {
          const {
            data: { results: popularMovies },
          } = responses[0];

          const {
            data: { results: topRatedMovies },
          } = responses[1];

          const {
            data: { results: popularTv },
          } = responses[2];

          const {
            data: { results: topRatedTv },
          } = responses[3];

          setPopulars(popularMovies);
          setTopRated(topRatedMovies);
          setPopularTvShow(popularTv);
          setTopRatedTvShow(topRatedTv);
        })
      );
  }, []);

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
    slidesToShow: 8,
    slidesToScroll: 10,
    initialSlide: 0,
    arrows: true,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 10,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
    ],
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      <div>
        <h2> Populares </h2>
        <br />
        {populars && (
          <Slider {...settings}>
            {populars.map((movie) => (
              <CustomCard
                key={movie.id}
                image={imagePathPrefix + movie.poster_path}
              ></CustomCard>
            ))}
          </Slider>
        )}
      </div>
      <br />
      <div>
        <h2> Top Rated </h2>
        <br />
        {topRated && (
          <Slider {...settings}>
            {topRated.map((movie) => (
              <CustomCard
                key={movie.id}
                image={imagePathPrefix + movie.poster_path}
              ></CustomCard>
            ))}
          </Slider>
        )}
      </div>
      <br />
      <div>
        <h2> Popular Tv Shows </h2>
        <br />
        {popularTvShow && (
          <Slider {...settings}>
            {popularTvShow.map((movie) => (
              <CustomCard
                key={movie.id}
                image={imagePathPrefix + movie.poster_path}
              ></CustomCard>
            ))}
          </Slider>
        )}
      </div>
      <br />
      <div>
        <h2> Top Rated Tv Shows </h2>
        <br />
        {topRatedTvShow && (
          <Slider {...settings}>
            {topRatedTvShow.map((movie) => (
              <CustomCard
                key={movie.id}
                image={imagePathPrefix + movie.poster_path}
              ></CustomCard>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default Card;
