import React, { useEffect, useState } from "react";

import tmdb from "../../services/tmdb";
import { CustomCard, CustomSlider, settings, customSettings } from "./styles";
import { imagePathPrefix } from "../../assets/js/utils";

const MoviesSections = () => {
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
                  <h1 style={{ color: "#FFF" }}>{medias.title}</h1>
                  <CustomSlider {...(i === 0 ? customSettings : settings)}>
                    {medias.items.map((media) => (
                      <CustomCard key={i} custom={i === 0 ? true : false}>
                        <img
                          src={
                            imagePathPrefix +
                            (i !== 0 ? media.poster_path : media.backdrop_path)
                          }
                          alt="a"
                          width="100%"
                        />
                      </CustomCard>
                    ))}
                  </CustomSlider>
                </div>
              )
          )}
      </div>
    </>
  );
};

export default MoviesSections;
