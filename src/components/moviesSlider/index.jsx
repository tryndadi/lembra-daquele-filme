import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import tmdb from "../../services/tmdb";
import { CustomCard, settings } from "./styles";
import { imagePathPrefix } from "../../assets/js/utils";

const Card = () => {
  const [mediasList, setMediasList] = useState(null);

  useEffect(() => {
    tmdb.getMedia().then((res) =>
      setMediasList(
        res.map(({ keyWord, title, items }) => ({
          keyWord,
          title,
          items: items.data.results,
        }))
      )
    );
  }, []);

  return (
    <>
      <div>
        {mediasList &&
          mediasList.map(
            (medias, i) =>
              medias && (
                <div key={i}>
                  <h1>{medias.title}</h1>
                  <Slider {...settings}>
                    {medias.items.map((media) => (
                      <CustomCard key={Date.now() + Math.random()}>
                        <img
                          src={imagePathPrefix + media.poster_path}
                          alt="a"
                          width="100%"
                        />
                      </CustomCard>
                    ))}
                  </Slider>
                </div>
              )
          )}
      </div>
    </>
  );
};

export default Card;
