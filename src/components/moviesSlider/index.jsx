import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";

import tmdb from "../../services/tmdb";
import { tmdbAccess } from "../../services/api";
import { CustomCard, settings } from "./styles";
import { imagePathPrefix } from "../../assets/js/utils";

import LeftArrow from "../../assets/img/left-arrow.svg";
import RightArrow from "../../assets/img/right-arrow.svg";

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

    (async () => {
      const fullList = await tmdb.getMedia();
      console.log(fullList);
    })();

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

  return (
    <div>
      <div>
        <h2> Populares </h2>
        <br />
        {populars && (
          <Slider {...settings}>
            {populars.map((movie) => (
              <CustomCard key={movie.id}>
                <img
                  src={imagePathPrefix + movie.poster_path}
                  alt="a"
                  width="100%"
                />
              </CustomCard>
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
              <CustomCard key={movie.id}>
                <img
                  src={imagePathPrefix + movie.poster_path}
                  alt="a"
                  width="100%"
                />
              </CustomCard>
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
              <CustomCard key={movie.id}>
                <img
                  src={imagePathPrefix + movie.poster_path}
                  alt="a"
                  width="100%"
                />
              </CustomCard>
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
              <CustomCard key={movie.id}>
                <img
                  src={imagePathPrefix + movie.poster_path}
                  alt="a"
                  width="100%"
                />
              </CustomCard>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default Card;
