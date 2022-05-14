import React from "react";
import {
  CustomCard,
  CustomSlider,
  settings,
  customSettings,
  VerticalFade,
  TitleSection,
  InfosSection,
} from "./styles";

import { useTMDBMedias } from "../../Providers/MediasProvider";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { imagePathPrefix } from "../../assets/js/utils";
import { Rating } from "@mui/material";

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
                      <VerticalFade>
                        <InfosSection>
                          <TitleSection>
                            {media.title || media.name}
                          </TitleSection>
                          <Rating
                            name="read-only"
                            precision={0.5}
                            value={media.vote_average / 2}
                            emptyIcon={
                              <StarBorderIcon
                                style={{
                                  color: "rgba(255, 255, 255, 0.5)",
                                  fontSize: "inherit",
                                }}
                              />
                            }
                          />
                        </InfosSection>
                      </VerticalFade>
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
