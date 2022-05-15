import React, { useState } from "react";
import {
  CustomCard,
  CustomSlider,
  settings,
  customSettings,
  SliderContainer,
} from "./styles";

import { useTMDBMedias } from "../../Providers/MediasProvider";
import { useTrailer } from "../../Providers/TrailersProvider";

import { imagePathPrefix } from "../../assets/js/utils";
import { Typography, CircularProgress } from "@mui/material";

import TrailerModal from "../TrailerModal";
import CardFade from "../CardFade";

const MoviesSections = () => {
  const { mediasList } = useTMDBMedias();
  const { traillerId, isOpen, setIsOpen } = useTrailer();

  return (
    <div>
      {mediasList &&
        mediasList.map((medias, i) => (
          <SliderContainer key={i}>
            <Typography variant="h6">{medias.title}</Typography>
            <CustomSlider
              {...(medias.keyWord === "populars" ? customSettings : settings)}
            >
              {medias.items.map((media) => (
                <CustomCard key={media.id}>
                  <CardFade media={media} />
                  <img
                    src={
                      imagePathPrefix +
                      (i !== 0 ? media.poster_path : media.backdrop_path)
                    }
                    alt={media.title}
                    width="100%"
                  />
                </CustomCard>
              ))}
            </CustomSlider>
          </SliderContainer>
        ))}
      <TrailerModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        traillerId={traillerId}
      />
    </div>
  );
};

export default MoviesSections;
