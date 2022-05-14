import React from "react";
import {
  CustomCard,
  CustomSlider,
  settings,
  customSettings,
  VerticalFade,
  TitleSection,
  InfosSection,
  ButtonsSection,
} from "./styles";
import { useTMDBMedias } from "../../Providers/MediasProvider";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { imagePathPrefix } from "../../assets/js/utils";
import { Rating, Typography } from "@mui/material";

import { IoIosAddCircle } from "react-icons/io";
import { BiCameraMovie } from "react-icons/bi";

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
                        <ButtonsSection>
                          <BiCameraMovie
                            size={30}
                            color="rgba(255,255,255,0.5)"
                          />
                          <IoIosAddCircle
                            size={30}
                            color="rgba(255,255,255,0.5)"
                          />
                        </ButtonsSection>
                        <InfosSection>
                          <TitleSection>
                            {media.title || media.name}
                          </TitleSection>

                          <Typography
                            size={12}
                            sx={{ color: "rgba(255,255,255, 0.5)" }}
                          >
                            <Rating
                              sx={{ verticalAlign: "middle" }}
                              name="read-only"
                              size="small"
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
                            &nbsp;{media.vote_count} opiniões
                          </Typography>
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
