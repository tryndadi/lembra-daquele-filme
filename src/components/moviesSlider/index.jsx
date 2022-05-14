import React from "react";

import { CustomCard, CustomSlider, settings, customSettings } from "./styles";
import { useTMDBMedias } from "../../Providers/MediasProvider";
import { imagePathPrefix } from "../../assets/js/utils";

const MoviesSections = () => {
  const { mediasList } = useTMDBMedias();

  return (
    <div>
      {mediasList &&
        mediasList.map(
          (medias, i) =>
            medias && (
              <div key={i}>
                <h1 style={{ color: "#FFF" }}>{medias.title}</h1>
                <CustomSlider {...(i === 0 ? customSettings : settings)}>
                  {medias.items.map((media) => (
                    <CustomCard key={media.id} custom={i === 0 ? true : false}>
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
              </div>
            )
        )}
    </div>
  );
};

export default MoviesSections;
